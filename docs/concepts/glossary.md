---
id: glossary
title: Glossary
description: The words the Studio uses, one line each.
---

# Glossary

| Term | Meaning |
|---|---|
| **Typology** | A kind of fraud, described once: how it works, who it targets, the scenarios that detect it and what is done with what they find. *Example: brand impersonation online.* |
| **Scenario** | One way of recognising a typology, written in plain language as *Given* (the population looked at), *When* (the conditions) and *Then it becomes a finding*. |
| **Condition** | One fact in a scenario. A **rule** condition is computed from data; an **AI** condition is a question a language model answers on the record. |
| **Indicator** | A named, reusable rule condition, such as *the domain is not one of the brand's own*. |
| **Feature** | A value computed for each case, at its moment, that indicators read: *whether a call was in progress*, *the domain's age in days*. |
| **Unit** | What one case is: a payment, a credit received, a page, a domain. Each scenario declares its unit; features are computed for each case at its moment. |
| **Context** | For one unit, every value the chosen scenarios read: one row per case, one column per feature. What an engine computes to run them. |
| **Source** | A system the Studio collects data from: an ad library, page scans, your transaction data. |
| **Enrichment** | A source that reads more about records already found, only when an analysis needs it: a website's content, a domain's registration. |
| **List** | Names and identifiers the Studio checks against: your own brands and domains, trusted parties, a watchlist. |
| **Analysis** | A typology, for one goal of the fraud journey, with the scenarios you choose. It runs on synthetic or online data; each run keeps its results. |
| **Finding** | A case that met every condition of a scenario in a run. |
| **Synthetic data** | Labelled datasets, kept apart, to measure analyses: frauds caught and false alarms. A run on them never raises an alert. |
| **Online data** | The data the detections watch, collected by the sources. Runs on it can raise alerts. |
| **Alert** | A finding sent for review. One alert per unit, whatever the number of scenarios that found it. |
| **Triage** | Rules that order alerts by priority (critical to low) and propose a decision, such as *homonym*, for the analyst to confirm. |
| **Decision** | How an alert or a case is closed, with a reason the typology defines. A decision can have **effects**: exclude a record, add it to a list. |
| **Case** | An investigation of one subject. Opened when an alert is escalated, or by hand. Later alerts on the same subject join it. |
| **Inspection** | A deeper look at one record — screenshots, page text, forms, the ads of a page — kept as evidence. |
| **Evidence** | What an inspection saw, kept with its date: images, text, facts. |
| **Calibration** | The values a scenario runs with in your institution: thresholds, the AI answers that count, the population. A scenario runs only once calibrated. |
| **Retired** | A scenario that no longer runs. It is never deleted: its versions, runs and alerts stay. |
| **Version** | Every change to a scenario, a triage or a calibration makes a new version, with a note saying why. |
| **Coverage** | How far each scenario and fraud type has gone: documented, calibrated, tested, executed. |
| **Export** | A package to run scenarios in another engine: the data required, the context builder and the scenarios. |
| **Studio, Live** | The two spaces: Studio to design, test and export; Live to follow alerts, cases and decisions. |
| **Taxonomy** | A standard classification of fraud used to qualify a confirmed case. |
