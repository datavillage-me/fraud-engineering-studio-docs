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
This is the contract the Studio implements today. **This version has no authentication**: run the Studio inside your
own network, behind your access controls. API keys come in a later version; the routes and payloads below stay the
same.
:::

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

## Conventions

- **Base URL** — where the Studio runs, for example `http://localhost:8770`.
- **Bodies** — JSON, `Content-Type: application/json`.
- **Errors** — `{"error": "<message>"}` with `400` (invalid request), `404` (not found) or `500` (server error).
- **Times** — UTC.
- **Ids** — strings. A case id looks like `C-20261025-4d5e6f`.
- **Long tasks** — a collection or a run returns a job or run id at once; poll it until `finished` is true.

## Examples

### Pull new alerts

```bash
curl -s "http://localhost:8770/api/alerts?status=new&typology=brand-impersonation-online"
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
curl -s -X POST "http://localhost:8770/api/alerts/A-3f9c2a71b04e" \
  -H "Content-Type: application/json" \
  -d '{"action": "escalate", "note": "Confirmed by the fraud desk."}'
```

The alert joins the open case of its subject, or a new one. Its `case_id` says which.

### Close a case

```bash
curl -s -X POST "http://localhost:8770/api/cases/C-20261025-4d5e6f" \
  -H "Content-Type: application/json" \
  -d '{"action": "close", "typology": "brand-impersonation-online", "disposition": "impersonation", "note": "Page taken down by the platform."}'
```

A case closed as confirmed fraud must be qualified first (`"action": "qualify"`).

### Export a typology

```bash
curl -s -o typology.zip "http://localhost:8770/api/ofef-export/brand-impersonation-online?calibration=1"
```

The zip holds the typology's scenarios in Gherkin, their indicators, features and AI questions, and — with
`calibration=1` — the values they run with here. Another engine can run them; a reviewer can read them.

### Export for a data platform

```bash
curl -s -o alerts.parquet "http://localhost:8770/api/export/alerts?format=parquet&status=closed,escalated"
```

## The contract itself

The Studio serves its contract in OpenAPI 3.1 at `/api/openapi.yaml` (and `/api/openapi.json`), to generate a client
or import into an API gateway.
