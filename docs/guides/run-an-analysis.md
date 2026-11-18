---
id: run-an-analysis
title: Run an analysis
description: Run a typology's scenarios on labelled test data or on production data, read the results, send findings to alerts.
---

# Run an analysis

**Where:** Detection Engineering › **Calibration** — on test data. Threat Monitoring runs its own analyses on
production data: see [Monitor online scams](monitor-online-scams).

An analysis is one typology with the scenarios you choose. It runs on any data:

| Data | What a run does |
|---|---|
| **Test dataset** | Measured against the labels: recall, precision, false alarms. Never raises an alert. |
| **Production** | Looks at the data it watches. Its findings can become alerts. |

1. Click **+ New analysis**, name it and choose a typology. Its calibrated scenarios are listed.
2. Choose the data under **Run on**, then click **Run analysis**. The run starts in the background and the page shows
   the **Detection steps**: how many cases each condition keeps, step by step.
3. When the run ends, read the tabs:
   - **Detection steps** — each scenario, its conditions and how many cases each one kept.
   - **Results** — on a test dataset, one table of true positives, false negatives, false positives, recall, precision
     and F1, for all scenarios and per scenario. See [Calibrate a scenario](calibrate-a-scenario).
   - **Detections** — the list: filter by priority, search, open one to see every condition with its value. A site
     is shown with the link it was found with.
4. On production data, select detections and click **Send to Alerts**. What was already sent is not sent twice.

**Showing** chooses the run to read: the latest by default, or any earlier one, each with its date and figures.

:::note What runs
Only calibrated scenarios run. A run keeps the versions and the values it used, so every finding can be traced to the
exact logic that produced it.
:::
