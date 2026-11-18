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
| **Analysis** | A typology with the scenarios you choose. In Detection Engineering it runs on labelled test data and is measured; in Threat Monitoring it runs on the data watched. Each run keeps its results. |
| **Finding** | A case that met every condition of a scenario in a run. A site is shown with the link it was found with. |
| **Synthetic data** | Labelled test datasets, kept apart — generated or imported — to measure analyses: recall, precision, false alarms. A run on them never raises an alert. |
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
| **Use case** | A job of Threat Monitoring with its own typologies, findings, alerts and cases: online scams, fraudulent webshops, APP scam receiving accounts, payments to reported mules. |
| **Organisation** | One institution served by the Studio, with its own data, calibrations, lists and cases. The library is shared. |
| **Threat Intelligence** | What organisations share with each other: confirmed frauds as case shares, scenarios, signals. Never customer data. |
| **Case share** | A confirmed, qualified fraud in a form another organisation can use: its typology, its signal, the scenarios that found it. |
| **Signal** | An identifier worth watching — an account, a site — passed on through Threat Intelligence. |
| **Watchlist** | A list of identifiers scenarios check against; **Mule accounts** holds the accounts reported as mules. |
| **Pentest** | A fraudster's behaviour played by an AI agent on your own application in staging, step by step, with what the defence did: blocked, friction, allowed. |
| **Recall** | Of the labelled frauds, the share a scenario found. |
| **Precision** | Of what a scenario flagged, the share that is a labelled fraud. |
| **F1** | One number for recall and precision together: their harmonic mean. |
| **Taxonomy** | A standard classification of fraud used to qualify a confirmed case. |
