---
id: manage-scenarios-with-the-api
title: Manage scenarios with the API
description: Create, update, calibrate and retire scenarios from your own tools.
---

# Manage scenarios with the API

Everything you do on scenarios in the Studio, your own tools can do through the API — keep scenarios in your
repository, review changes the way you review code, and apply them with a script. The same checks apply: a change
that does not pass is refused and nothing is written.

| Step | Call |
|---|---|
| Read a scenario | `GET /api/scenarios/{scenario_id}` |
| Create a draft | `POST /api/scenarios` |
| Update it (a new version) | `POST /api/scenarios/{scenario_id}` |
| Calibrate it | `POST /api/detections/{scenario_id}` |
| Retire it | `POST /api/scenarios/{scenario_id}/retire` |
| Export a typology | `GET /api/ofef-export/{typology}?calibration=1` |

## 1. Create a draft

Give the typology, the unit, the title and the steps. Each step names an existing indicator; a value the calibration
sets is written `<name>` in the step. A *Given* is a fact about the record itself, never how it was found.

```bash
curl -s -X POST https://studio.example-bank.com/api/scenarios \
  -H "Authorization: Bearer $STUDIO_API_KEY" -H "Content-Type: application/json" -d '{
  "typology": "credential-phishing",
  "unit": "UNIT-WEB-SITE",
  "title": "A look-alike website that asks for its visitors'\'' secrets",
  "steps": [
    {"role": "given", "text": "the domain is not one of the brand'\''s own domains", "indicator": "IND-DOMAIN-NOT-BRAND-OWNED"},
    {"role": "when",  "text": "the site answers with a page of its own", "indicator": "IND-SITE-IS-LIVE"},
    {"role": "when",  "text": "the domain name resembles the brand", "indicator": "IND-DOMAIN-RESEMBLES-BRAND"}
  ],
  "note": "Sites that collect credentials, reported by the fraud desk."
}'
```

The Studio gives the scenario its id — the next free one of the typology, for example `FSL-CRP-006` — and deduces the rest from the typology's scenarios on the same unit. The new
scenario is a **draft**.

:::note AI conditions
A condition the AI judges needs its question written with care — add it with **✦ Write with AI** in the Studio, or
update an existing question through the API.
:::

## 2. Update it

Send the whole scenario as it should be: its title, its steps and, if it has AI conditions, their questions. Every
update makes a new version and needs a note.

```bash
curl -s -X POST https://studio.example-bank.com/api/scenarios/FSL-CRP-006 \
  -H "Authorization: Bearer $STUDIO_API_KEY" -H "Content-Type: application/json" \
  -d '{"title": "...", "steps": [ ... ], "note": "Only live sites."}'
```

A triage is updated the same way, with its rules in order: `POST /api/scenarios/TRI-CRP-001`.

## 3. Calibrate it

A scenario runs only once calibrated. Set its parameters — `rules` for the values its rule steps compare with, `ai`
for the answers of each AI question that make it alert — and save a new calibration version. Here `FSL-CRP-001`,
whose question `collection` asks what the page wants from its visitor:

```bash
curl -s -X POST https://studio.example-bank.com/api/detections/FSL-CRP-001 \
  -H "Authorization: Bearer $STUDIO_API_KEY" -H "Content-Type: application/json" \
  -d '{"ai": {"collection": {"alert_on": [3, 4]}}, "note": "Alert from a call to act on the account up."}'
```

## 4. Retire it

A scenario is never deleted: its runs and alerts must stay explainable. Retiring it stops it from running and keeps
everything else.

```bash
curl -s -X POST https://studio.example-bank.com/api/scenarios/FSL-CRP-006/retire \
  -H "Authorization: Bearer $STUDIO_API_KEY" -H "Content-Type: application/json" \
  -d '{"note": "Replaced by FSL-CRP-007."}'
```
