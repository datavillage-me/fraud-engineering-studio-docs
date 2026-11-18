---
id: organisations
title: Organisations
description: One Studio, several organisations — each with its own data, calibrations, lists and cases.
---

# Organisations

**Where:** the selector next to the Studio's name, in the top bar

One Studio can serve several organisations — several banks, for example, and the platform's own threat-intelligence
service. Each organisation has its own:

- **data** — its sources and what they collected, its test datasets;
- **calibrations** — the values its scenarios run with;
- **Threat Monitoring** — its use cases, findings, alerts and cases;
- **lists** — its brands, trusted parties and watchlists.

The library is the same for all: the same typologies and scenarios, calibrated differently by each.

Switching organisation reloads the Studio on that organisation's data. Nothing of one organisation is visible from
another; what they choose to pass on goes through [Threat Intelligence](threat-intelligence).

## From the API

Every request acts for one organisation: send the header `X-Studio-Org: <organisation id>`.
`GET /api/organisations` lists them. See the [integration contract](../integration/contract).
