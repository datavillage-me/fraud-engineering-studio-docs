---
id: calibrate-a-scenario
title: Calibrate a scenario
description: Set the values a scenario runs with, measure them on labelled data, and save a new version.
---

# Calibrate a scenario

**Where:** Detection Engineering › **Scenarios** › a typology › a scenario › **Calibration**

A scenario says *what* to check; its calibration says *with which values* in your organisation. The same scenario can
run with different values in two organisations.

:::note Library is read-only
**Library** shows a scenario's calibration but does not change it. Calibrate from **Detection Engineering**.
:::

## Set the values

1. Open the scenario and its **Calibration** tab.
2. Set the values:
   - **Rule parameters** — a threshold, a number of days, a list to check against.
   - **AI answers** — tick the answers to each AI question that make the condition true.
3. Click **Save as v2** (the next version) and write why. The next runs use the new version.

Only a calibrated scenario runs.

## Measure them

1. Go to **Detection Engineering › Calibration** and open an analysis of the typology, or **+ New analysis**.
2. Under **Run on**, choose a dataset under **Synthetic data**, then click **Run analysis**. The test datasets are
   listed under **Detection Engineering › Test data**.
3. Read **Results**. One table, one row for all scenarios and one per scenario (Rules and AI apart when both run):

![Results of a run on a labelled dataset: one row for all scenarios and one per scenario](/img/screens/results.png)

| Column | Meaning |
|---|---|
| **Labelled** | The frauds of this kind in the data. |
| **True positives** | Labelled frauds it found. |
| **False negatives** | Labelled frauds it missed. |
| **False positives** | What it flagged that is not labelled. |
| **Recall** | True positives ÷ labelled. |
| **Precision** | True positives ÷ everything it flagged. |
| **F1** | Recall and precision together. |

The labels are read only to measure the run — never by the detection, the triage or the AI.

:::tip Few cases, read the counts
On a handful of labelled frauds, *1 of 1* says more than *100 %*. A false positive can also be a payment of a
customer who is the victim of another fraud: open it before loosening a threshold.
:::

:::tip Start strict
Start with values that keep few findings and loosen them as you review alerts. Each version keeps its note, so the
history of the calibration explains itself.
:::
