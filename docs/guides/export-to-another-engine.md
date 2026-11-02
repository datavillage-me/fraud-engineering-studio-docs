---
id: export-to-another-engine
title: Export to another engine
description: Export scenarios with the context they need, to run them in your own detection engine.
---

# Export to another engine

**Where:** Studio › Fraud library › a typology › **Export for another engine**

The export is built when you ask for it. It holds everything an engine needs to run the scenarios you choose — and
nothing else.

1. Choose the scenarios. With *in use only* set, only the calibrated ones are offered.
2. Read **What you export**:
   - **Required data** — the kinds of data the package reads, in the common data model. Map your tables to it.
   - **The context** — named after the case (*Payment context*, *Credit context*): every value computed for each case,
     that the scenarios look at. Click a value to see how it is computed and what it reads.
   - **Scenarios** — the scenarios, run on that context: rules, and the questions for the AI.

   **Details** shows the same as a diagram: data → values → scenario steps. Hover a box to follow its path.
3. Tick **Include this Studio's calibration** to put your values in the package. They are specific to your data, and
   sensitive: thresholds tell a fraudster where detection stops.
4. Click **Download package**.

## In the package

| File | What it is |
|---|---|
| `run/context/<unit>.sql` | The **context builder**: one table, one row per case, one column per value. |
| `run/scenarios/<scenario>.sql` | Each scenario, a few lines on that table: its population, its conditions. With your values, or with `{{ parameters }}` to fill. |
| `context.yaml` | Each value: what it is, how it is computed, what it reads, which scenarios use it; which scenarios can decide in real time. |
| `dependencies.yaml` | The graph: scenario → indicators → features → data. |
| The scenarios, indicators, features, AI questions, tests | The knowledge itself, in plain language and as files your team can review. |

The SQL runs as it is on DuckDB, over the common data model. Run the context builders first, then the scenarios. The
same steps give the same findings as the Studio.

:::note What is not SQL
A value computed in Python (a few, such as reading a brand name in a page) is marked where it is added. The AI
questions are a specification: your engine calls the model of your choice with them.
:::
