---
id: from-data-to-case
title: From data to case
description: How a record found by a source becomes a decided case.
---

# From data to case

<div class="chain"><span>Sources</span><i>→</i><span>Data</span><i>→</i><span>Scenarios</span><i>→</i><span>Findings</span><i>→</i><span>Alerts</span><i>→</i><span>Triage</span><i>→</i><span>Cases</span></div>

## 1. Sources bring the data

A source collects records — the pages that advertise with your brand name, the websites scanned with your name in
them, your accounts and payments — and maps them to one common data model. A domain is a domain, whichever source
found it. Each record keeps **how it was found** (for example *ad search: example-bank*), which scenarios use to choose
their population.

## 2. Scenarios look at the data

A scenario starts from a population (*Given*) and checks its conditions in order, cheapest first (*When*). Rule
conditions are computed; AI conditions are asked to a language model only on what the rules kept. When a scenario
needs data it does not have yet — a website's text, a page's ads — the matching **enrichment** reads it during the run.

```gherkin
Scenario: A look-alike website of the brand
  Given the domain was found by one of the discovery criteria
  And the domain is not one of the brand's own
  When the site answers
  And the domain's name resembles the brand
  And the site presents itself as the brand
  Then it becomes a finding
```

## 3. Findings become alerts

You review a run's findings and send them to **Alerts**. One unit gives one alert, whatever the number of scenarios
that found it. The **triage** gives each alert a priority and, when it can tell, a proposed decision.

## 4. Alerts are decided or escalated

An analyst closes an alert with a reason (a homonym, the brand's own page) or escalates it. Escalating adds it to the
**case** of its subject — a new case if none is open.

## 5. Cases are investigated and closed

A case gathers the subject's alerts, inspections, notes and history. It is closed with a reason; a confirmed fraud is
qualified in the fraud taxonomy. The decision's effects — excluding a record, adding it to a list — apply to the next
runs.

A case can also be **opened by hand**: a fraud known from a complaint, or a record found while investigating another
case. These are the frauds detection missed, and they are how it improves — see [the improvement cycle](../processes/improvement-cycle).
