---
id: calibrate-a-scenario
title: Calibrate a scenario
description: Set the values a scenario runs with, test them, and save a new version.
---

# Calibrate a scenario

**Where:** Knowledge › Scenarios › a scenario › **Calibration**

A scenario says *what* to check; its calibration says *with which values* in your institution. The same scenario can
run with different values in two institutions.

1. Open the scenario and its **Calibration** tab.
2. Set the values:
   - **Rule parameters** — a threshold, a number of days, a list to check against.
   - **AI answers** — which answers to each AI question count as met.
   - **Population** — the discovery criteria the scenario looks at, picked from those present in the data.
3. Run an analysis with the scenario to see the effect, step by step: how many units each condition keeps.
4. Click **Save as v2** (the next version) and write why. The next runs use the new version.

:::tip Start strict
Start with values that keep few findings and loosen them as you review alerts. Each version keeps its note, so the
history of the calibration explains itself.
:::
