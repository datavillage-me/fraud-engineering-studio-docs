---
id: contract
title: Integration contract
description: How your systems read and act on the Studio's alerts and cases.
---

# Integration contract

The Studio exposes a JSON API over HTTP for your own systems: a case-management tool, a SIEM, a data platform, a
scheduler. This page is the contract — what you can rely on. The [API reference](/api/fraud-engineering-studio-api)
lists every route with its parameters and responses.

:::caution Status
This is the contract the Studio implements today. Run the Studio inside your own network, behind your access controls.
:::

## Authentication

Send an **API key** on every call: `Authorization: Bearer <key>`.

- A key stands for one user of the Studio, with that user's rights, and may be held to one organisation.
- Keys are made on the Studio's machine: `python3 tools/api_keys.py create --name "Example SIEM" --user <user id>`.
  A key is shown once; the Studio keeps only a fingerprint of it. `list` and `revoke <id>` manage them.
- From the Studio's own machine, a call without a key acts as the browser does. From any other machine, every call
  needs a key. A wrong or revoked key gets `401`.

An AI assistant uses the same keys, through the Studio's MCP server: see
[Connect an AI assistant](../guides/connect-an-ai-assistant.md).

## What you can do

| You want to… | Call |
|---|---|
| Pull new alerts into your tool | `GET /api/alerts?status=new` |
| Record a decision taken in your tool | `POST /api/alerts/{alert_id}` |
| Follow cases | `GET /api/cases?status=open,in_review` |
| Add a note or close a case | `POST /api/cases/{case_id}` |
| Open a case from a report | `POST /api/cases` |
| Load results into your data platform | `GET /api/export/alerts?format=parquet` |
| Collect, then run, on a schedule | `POST /api/sources/{source_id}/refresh`, then `POST /api/analyses/{analysis_id}/runs` |
| Read the detection logic | `GET /api/scenarios/{scenario_id}`, `GET /api/detections/{scenario_id}` |
| Create, update, calibrate or retire a scenario | see [Manage scenarios with the API](../guides/manage-scenarios-with-the-api.md) |
| Keep your lists in sync | `POST /api/lists/{list_id}` |
| Export a typology for another engine or a review | `GET /api/ofef-export/{typology}?calibration=1` |
| See what scenarios need: data, context, real time | `GET /api/context?scenarios=…&lineage=1` |
| Read the Investigations overview: alerts by category, cases | `GET /api/investigations` |
| Act for one organisation | header `X-Studio-Org: <id>` on every call; `GET /api/organisations` lists them |
| Pull the findings of the Threat Monitoring use cases | `GET /api/scam/triage`, filtered with `group`, `status`, `priority`, `source`, `since=new`, `q` |
| Run a use case on a schedule | `POST /api/scam/triage` with `{"group": "online-scams"}` |
| Analyse only some records of a use case | `POST /api/scam/triage` with `{"group": …, "only": [...]}` |
| Send findings to Alerts, with their scenarios and priority | `POST /api/scam/triage/alerts` with `{"group": …, "ids": [...]}` |
| Share a confirmed fraud, a scenario or signals | `POST /api/exchange` |
| Read what other organisations shared | `GET /api/exchange/inbox`, then `POST /api/exchange/{id}` to watch, activate or dismiss |
| Answer the people who reported a site | `POST /api/records/{entity}/{id}/replies` |
| Read coverage and declare a scenario in service | `GET /api/coverage`, `POST /api/deployments` |
| Hunt the other sites of a phishing or fake-shop kit | `POST /api/kit/hunt` — see [Hunt a kit](../guides/hunt-a-kit.md) |

## Conventions

- **Base URL** — the address of your Studio, for example `https://studio.example-bank.com`.
- **Organisation** — the header `X-Studio-Org` says which organisation a call acts for. Without it, the platform's own.
- **Sites** — a website is returned with the link it was found with, its path kept: `entity.label` and `url`.
- **Bodies** — JSON, `Content-Type: application/json`.
- **Authentication** — `Authorization: Bearer <key>` (see above).
- **Errors** — `{"error": "<message>"}` with `400` (invalid request), `401` (no valid key), `403` (not allowed for this
  user), `404` (not found) or `500` (server error).
- **Times** — UTC.
- **Ids** — strings. A case id looks like `C-20261025-4d5e6f`.
- **Long tasks** — a collection or a run returns a job or run id at once; poll it until `finished` is true.

## Examples

### Pull new alerts

```bash
curl -s "https://studio.example-bank.com/api/alerts?status=new&typology=brand-impersonation-online" \
  -H "Authorization: Bearer $STUDIO_API_KEY"
```

```json
[
  {
    "alert_id": "A-3f9c2a71b04e",
    "typology": "brand-impersonation-online",
    "scenarios": ["FSL-BIP-001"],
    "entity": { "type": "ExternalPage", "id": "100000000000001", "label": "Example Bank Support" },
    "status": "new",
    "triage": { "priority": "critical", "disposition": null, "rule": "An ad is running" },
    "subject_case": null
  }
]
```

### Escalate an alert

```bash
curl -s -X POST "https://studio.example-bank.com/api/alerts/A-3f9c2a71b04e" \
  -H "Content-Type: application/json" \
  -d '{"action": "escalate", "note": "Confirmed by the fraud desk."}'
```

The alert joins the open case of its subject, or a new one. Its `case_id` says which.

### Close a case

```bash
curl -s -X POST "https://studio.example-bank.com/api/cases/C-20261025-4d5e6f" \
  -H "Content-Type: application/json" \
  -d '{"action": "close", "typology": "brand-impersonation-online", "disposition": "impersonation", "note": "Page taken down by the platform."}'
```

A case closed as confirmed fraud must be qualified first (`"action": "qualify"`).

### Export a typology

```bash
curl -s -o typology.zip "https://studio.example-bank.com/api/ofef-export/brand-impersonation-online?calibration=1"
```

The zip is an execution package: the scenarios in Gherkin, their indicators, features and AI questions — only those the
scenarios need — the **context builder** of each unit and each scenario as SQL (`run/`), `context.yaml` and
`dependencies.yaml`, and — with `calibration=1` — the values they run with here, written into the SQL. Add
`scenarios=…` to export some scenarios only. See [Export to another engine](../guides/export-to-another-engine.md).

### Export for a data platform

```bash
curl -s -o alerts.parquet "https://studio.example-bank.com/api/export/alerts?format=parquet&status=closed,escalated"
```

## The contract itself

The Studio serves its contract in OpenAPI 3.1 at `/api/openapi.yaml` (and `/api/openapi.json`), to generate a client
or import into an API gateway.
