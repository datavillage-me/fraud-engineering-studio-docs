---
title: What's new
description: The changes to the Fraud Engineering Studio, the most recent first.
---

# What's new

## November 2026

- **A new menu.** Overview, Detection Engineering, Threat Monitoring, Fraud Pentesting, Threat Intelligence, Library
  and Connections replace the Studio and Live spaces. See the [Overview](/).
- **Threat Monitoring by use case.** Online scams, fraudulent webshops, APP scam receiving accounts and payments to
  reported mules, each with its Dashboard, Findings, Alerts and Cases. **Analyze with AI** runs a use case end to end.
  See [Threat Monitoring](/concepts/threat-monitoring).
- **Organisations.** One Studio serves several organisations, each with its own data, calibrations, lists and cases.
  See [Organisations](/concepts/organisations).
- **Threat Intelligence.** Share a confirmed fraud, a scenario or signals with other organisations — never customer
  data. A watched account feeds **Payments to reported mules**. See [Threat Intelligence](/concepts/threat-intelligence).
- **Fraud Pentesting.** An AI agent plays a fraudster's behaviour on your own application in staging and records what
  your defences did. See [Fraud Pentesting](/concepts/fraud-pentesting).
- **Calibration results.** One table: true positives, false negatives, false positives, recall, precision and F1, for
  all scenarios and per scenario. Library shows calibrations read-only; they change in Detection Engineering. See
  [Calibrate a scenario](/guides/calibrate-a-scenario).
- **Sites named by their link.** A website is shown everywhere — lists, analyses, details — with the link it was found
  with, its path kept; **Site ↗** opens it there.
- **Back when found again.** An alert closed because its site was taken down returns to Findings when a later run finds
  the site online again.
- **Cases in four steps.** Investigate, Decide, Qualify, Confirm — then **Share case**.
- **Answers to reporters.** People who reported a site through a source that takes answers get one, drafted with AI and
  reviewed by the analyst.
- **Coverage, fact by fact.** Documented, calibrated, deployed here or elsewhere, tested, pentested, shared — by stage
  of the fraud journey and over 12 weeks.
- **API 1.1.** Organisations, Threat Intelligence, Threat Monitoring findings, replies, coverage, pentesting. See the
  [integration contract](/integration/contract).

- **Two spaces: Studio and Live.** The top bar switches between designing and testing detections (Studio) and
  following what runs — alerts, cases, decisions (Live).
- **Export with the context.** The export is built on demand: the data required, the **context builder** — every value
  the scenarios read, for each case — and the scenarios, as SQL that runs as it is. See
  [Export to another engine](/guides/export-to-another-engine).
- **Real time.** In the export, every value says how it is kept at the moment of the payment, and **Also as a
  stream** adds the values that can be computed payment by payment (Flink SQL) — the same definitions as the SQL. See
  [In real time](/guides/export-to-another-engine#in-real-time).
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
