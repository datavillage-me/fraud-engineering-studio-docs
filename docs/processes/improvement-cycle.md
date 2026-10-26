---
id: improvement-cycle
title: The improvement cycle
description: How cases, decisions and misses make detection better.
---

# The improvement cycle

Detection improves from what analysts decide. Three signals feed it.

## 1. False positives → calibrate

Alerts closed as false positives, with their reasons, show where a scenario is too loose. The fraud engineer
[calibrates](../guides/calibrate-a-scenario) it — a threshold, the AI answers that count, the population — tests the
new values on a sample and saves a new version.

## 2. Repeated decisions → triage rules

When analysts keep closing the same kind of alert the same way, the triage can propose that decision. The fraud
engineer adds a rule to the [triage](../guides/edit-a-triage).

## 3. Misses → new scenarios

A case opened by hand is a fraud the detection did not alert on: from a complaint, a report, or found while
investigating another case. For each one, the fraud engineer asks *what would have found it?*

- the data did not hold it → add the source that would have brought it;
- a condition was too strict → calibrate it;
- nothing looks at this pattern → [write a new scenario](../guides/write-a-scenario).

## Measure

Every run keeps its results and every decision its reason, so the effect of a change is measured on the next runs:
how many alerts, how many confirmed, how many closed as false positives.
