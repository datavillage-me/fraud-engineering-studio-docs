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
sets is written `<name>` in the step.

```bash
curl -s -X POST http://localhost:8770/api/scenarios -H "Content-Type: application/json" -d '{
  "typology": "brand-impersonation-online",
  "unit": "UNIT-FIP-SITE",
  "title": "A look-alike website that asks for its visitors'\'' secrets",
  "steps": [
    {"role": "given", "text": "the domain was discovered by one of <discovery_criteria>", "indicator": "IND-DOMAIN-FOUND-BY-CRITERIA"},
    {"role": "given", "text": "the domain is not one of the brand'\''s own domains", "indicator": "IND-DOMAIN-NOT-BRAND-OWNED"},
    {"role": "when",  "text": "the site answers with a page of its own", "indicator": "IND-SITE-IS-LIVE"},
    {"role": "when",  "text": "the domain name resembles the brand", "indicator": "IND-DOMAIN-RESEMBLES-BRAND"}
  ],
  "note": "Sites that collect credentials, reported by the fraud desk."
}'
```

The Studio gives the scenario its id and deduces the rest from the typology's scenarios on the same unit. The new
scenario is a **draft**.

:::note AI conditions
A condition the AI judges needs its question written with care — add it with **✦ Write with AI** in the Studio, or
update an existing question through the API.
:::

## 2. Update it

Send the whole scenario as it should be: its title, its steps and, if it has AI conditions, their questions. Every
update makes a new version and needs a note.

```bash
curl -s -X POST http://localhost:8770/api/scenarios/FSL-BID-004 -H "Content-Type: application/json" \
  -d '{"title": "...", "steps": [ ... ], "note": "Only live sites."}'
```

A triage is updated the same way, with its rules in order: `POST /api/scenarios/TRI-BIP-001`.

## 3. Calibrate it

A scenario runs only once calibrated. Set its parameters and save a new calibration version:

```bash
curl -s -X POST http://localhost:8770/api/detections/FSL-BID-004 -H "Content-Type: application/json" \
  -d '{"rules": {"discovery_criteria": ["ad link: example-bank"]}, "note": "Ads of the brand only."}'
```

## 4. Retire it

A scenario is never deleted: its runs and alerts must stay explainable. Retiring it stops it from running and keeps
everything else.

```bash
curl -s -X POST http://localhost:8770/api/scenarios/FSL-BID-004/retire -H "Content-Type: application/json" \
  -d '{"note": "Replaced by FSL-BID-005."}'
```
