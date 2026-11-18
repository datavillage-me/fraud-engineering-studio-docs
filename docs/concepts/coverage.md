---
id: coverage
title: Coverage
description: What you are protected against, scenario by scenario, and where the gaps are.
---

# Coverage

**Where:** Overview › **Coverage**

Coverage answers one question: *what are we protected against?* For each scenario it records facts, never judgements:

| Fact | The scenario… |
|---|---|
| **Documented** | is in the fraud library. |
| **Calibrated** | has every value it needs set for your organisation. |
| **Deployed here** | runs in your Threat Monitoring or Detection Engineering. |
| **Deployed elsewhere** | is declared in service on your own engine. |
| **Tested** | ran on labelled test data, and was measured. |
| **Pentested** | was played by [Fraud Pentesting](fraud-pentesting) on your application. |
| **Shared** | has confirmed frauds of its kind — cases that can be shared through [Threat Intelligence](threat-intelligence). |

Each fact stands on its own — they are not a ladder — and keeps the day it first held, so the report shows how
coverage moves.

## What the report shows

- **Where the defences sit** — each fact by stage of the fraud journey, as a heat map.
- **Whether they hold** — the latest pentest of each scenario, by stage: blocked, friction, allowed.
- **Whether it moves** — each fact over the last 12 weeks.
- **The table** — fraud types or scenarios, one column per fact. A cell opens its scenarios, read-only.

**Overview › Activity** shows what happened over a period: calibrations, library changes, deployments declared or
withdrawn, exports, runs — and on the monitoring side, alerts and cases.

## Declared elsewhere

A scenario that runs on your own engine is declared there, with the engine and the date it started, so Coverage — and
Fraud Pentesting with **Active scenarios** — count it. From the API: `POST /api/deployments`.
