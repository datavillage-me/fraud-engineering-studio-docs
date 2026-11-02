---
id: run-an-analysis
title: Run an analysis
description: Run a typology's scenarios on synthetic or online data, read the results, and send findings to alerts.
---

# Run an analysis

**Where:** Studio › Analyses (or Live › Analyses, for the ones that run)

An analysis is one typology, for one goal of the fraud journey, with the scenarios you choose. It runs on any data:

| Data | What a run does |
|---|---|
| **Synthetic** | Measured against the labels: frauds caught, false alarms. Never raises an alert. |
| **Online** | Looks at the data it watches. Its findings can become alerts. |

1. Click **+ New analysis**, name it and choose a typology. Its calibrated scenarios are listed.
2. Choose the data under **Run on**, then click **Run analysis**. The run starts in the background and the page shows
   the **Detection steps**: how many cases each condition keeps, step by step.
3. When the run ends, read the three tabs:
   - **Detection steps** — each scenario, its conditions and how many cases each one kept.
   - **Results** — on synthetic data, the **frauds caught** by Rules and by AI, with their false alarms, overall and per
     scenario. On any data, the findings by priority and by scenario.
   - **Findings** — the list: filter by priority, search, open a finding to see every condition with its value.
4. On online data, select findings and click **Send to Alerts**. Findings already sent are not sent twice.

**Showing** chooses the run to read: the latest by default, or any earlier one, each with its date and figures.

:::tip Alerts by themselves
In **Edit**, an analysis can send some priorities to Alerts by itself after each run on online data. The others stay
under Findings until you send them.
:::

:::note What runs
Only calibrated scenarios run — see [Calibrate a scenario](calibrate-a-scenario). A run keeps the versions and the
values it used, so every finding can be traced to the exact logic that produced it.
:::
