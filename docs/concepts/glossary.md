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
| **Feature** | A value computed per record that indicators read, such as *the domain's age in days*. |
| **Unit** | What one alert is about: a page, a domain, an account. Each scenario declares its unit. |
| **Source** | A system the Studio collects data from: an ad library, page scans, your transaction data. |
| **Enrichment** | A source that reads more about records already found, only when an analysis needs it: a website's content, a domain's registration. |
| **List** | Names and identifiers the Studio checks against: your own brands and domains, trusted parties, a watchlist. |
| **Analysis** | A typology run on the current data, with the scenarios you choose. Each run keeps its results. |
| **Finding** | A unit that met every condition of a scenario in a run. |
| **Alert** | A finding sent for review. One alert per unit, whatever the number of scenarios that found it. |
| **Triage** | Rules that order alerts by priority (critical to low) and propose a decision, such as *homonym*, for the analyst to confirm. |
| **Decision** | How an alert or a case is closed, with a reason the typology defines. A decision can have **effects**: exclude a record, add it to a list. |
| **Case** | An investigation of one subject. Opened when an alert is escalated, or by hand. Later alerts on the same subject join it. |
| **Inspection** | A deeper look at one record — screenshots, page text, forms, the ads of a page — kept as evidence. |
| **Evidence** | What an inspection saw, kept with its date: images, text, facts. |
| **Calibration** | The values a scenario runs with in your institution: thresholds, the AI answers that count, the population. A scenario runs only once calibrated. |
| **Version** | Every change to a scenario, a triage or a calibration makes a new version, with a note saying why. |
| **Taxonomy** | A standard classification of fraud used to qualify a confirmed case. |
