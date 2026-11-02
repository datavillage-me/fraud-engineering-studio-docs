---
title: What's new
description: The changes to the Fraud Engineering Studio, the most recent first.
---

# What's new

## November 2026

- **Two spaces: Studio and Live.** The top bar switches between designing and testing detections (Studio) and
  following what runs — alerts, cases, decisions (Live).
- **Export with the context.** The export is built on demand: the data required, the **context builder** — every value
  the scenarios read, for each case — and the scenarios, as SQL that runs as it is. See
  [Export to another engine](/guides/export-to-another-engine).
- **Context tab.** A scenario's **Context** tab shows the data it needs and the values it computes.
- **Coverage.** Four levels — documented, calibrated, tested, executed — by fraud type and by scenario, in the Studio
  for the whole library and in Live for what runs. See [Coverage](/concepts/coverage).
- **Investigations.** Opens on what is to decide, one tile per scenario, fraud type or priority.
- **Data: Synthetic and Online.** Labelled datasets to measure analyses, kept apart from the data the detections
  watch. A source's **Scenarios** tab shows what the data supports.
- **Analyses.** One analysis runs on any data. On synthetic data, **Results** shows the frauds caught and the false
  alarms, Rules and AI side by side; on online data, findings can go to Alerts by themselves. **Showing** reads any
  earlier run.
- **Search by what was found for.** Searching a brand finds what was found for it, look-alike spellings included.

## October 2026

- **Cases from an investigation.** On any record you reach while investigating — the site an ad leads to, for
  example — **+ New case** opens a case on it. The new case keeps the case it came from, and both show it under
  **Related cases**.
- **An open case on the same subject.** When a detection later raises an alert on a subject that already has an open
  case, escalating the alert adds it to that case.
- **Triage editor.** Edit a triage's rules — conditions, order and results — without writing files. Every change
  needs a note and makes a new version.
- **Ad inspection.** Inspecting a page shows each of its recent ads: running or stopped, removed by the platform, and
  the site it leads to.
- **Source catalogue.** Add a source from a catalogue grouped by kind of data, each with the technical connections it
  supports.
- **Chains.** An inspection records where a record leads — an ad to its site, a site to where it redirects — with
  when it was seen. Each record shows **Leads to** and **Reached from**, and every link of the chain can become a case.
- **API.** The [integration contract](/integration/contract) and its [reference](/api/fraud-engineering-studio-api), including the
  detection logic, the export of a typology, and creating, updating, calibrating and retiring scenarios.
