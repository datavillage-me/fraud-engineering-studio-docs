---
id: coverage
title: Coverage
description: What you are protected against, scenario by scenario, and where the gaps are.
---

# Coverage

**Where:** Report › Coverage, in both spaces

Coverage answers one question: *what are we protected against?* Each scenario is at one of four levels, each one a fact
the Studio records, never a judgement:

| Level | The scenario… |
|---|---|
| **Documented** | is in the fraud library. |
| **Calibrated** | has every value it needs set for your institution. |
| **Tested** | ran on synthetic or labelled data, and was measured. |
| **Executed** | ran on the data it watches. |

The levels add up: an executed scenario was also tested, calibrated and documented. A fraud type is at the furthest
level of its scenarios.

## What the report shows

- **Fraud types** and **Scenarios** — how many reached each level.
- **Maturity by fraud type** — one column per level, one card per fraud type in the column it reached. A card opens the
  fraud type.
- **Scenarios by fraud type** — one square per scenario, coloured by its level. Hover a square to see the scenario;
  click it to open it. Click a level in the legend to keep only the scenarios that reached it.

In **Studio**, the report covers the whole library. In **Live**, it covers only the fraud types that run.

**Detail (CSV)** exports every scenario with its level, its last runs and its last measures — the detail an auditor
reads.
