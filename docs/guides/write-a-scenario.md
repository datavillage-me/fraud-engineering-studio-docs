---
id: write-a-scenario
title: Write a scenario
description: Turn a fraud pattern into a detection, step by step.
---

# Write a scenario

**Where:** Knowledge › Typologies › a typology › **✦ Write with AI**, next to its scenarios

A scenario is written in six steps. **✦ Write with AI** guides you through them with the knowledge base's method; you
validate each step with **Validate step** before the next one. An existing scenario can also be edited by hand with
**Edit**.

## Before you start

Have in mind, in your own words, the fraud as you would tell a colleague: *"Fake pages use our name and run ads that
lead to a site asking for card details."* Know which records it is about — a page, a domain, an account — and roughly
how you would recognise it.

## The six steps

### 1. The scenario and its title

Describe the fraud. The Studio proposes a **title** — the fraud as it shows, without its conditions — the typology,
the unit (what one alert will be about), and says whether this is a new pattern or a variant of an existing scenario.
A variant is often better handled by a calibration or a triage rule.

### 2. The steps

The scenario in plain language:

- **Given** — the population: records chosen by how they were found or by a status, from collected data only.
- **When / And** — the conditions, one fact each, cheapest first: rules before AI.
- **Then it becomes a finding** — always the same.

Each condition is marked *rule* or *AI*, with the indicator it reuses or *new indicator*. Conditions the data cannot
give yet are listed as **left out**, with what they would need.

```gherkin
Scenario: A page named like the brand that advertises
  Given the page was found by one of the discovery criteria
  And the page is not one of the brand's own pages
  When the page ran at least one ad
  And the page presents itself as the brand
  Then it becomes a finding
```

### 3. Indicators and AI questions

For each rule condition, the indicator — reused, or a new one built on an existing feature. For each AI condition,
the question and its possible answers, from least to most suspicious. Thresholds are never written here: they belong
to the calibration.

### 4. What happens to its findings

The decisions an analyst can take on its alerts and cases, and their effects. They are shared by every scenario on
the same unit, so a change here applies to all of them.

### 5. Write and check

The scenario is written and checked by the validator, then reviewed by an independent reviewer. If a check fails,
nothing is kept.

### 6. Learn

If you corrected the method along the way, the correction is proposed as a lesson for the next scenarios — kept only
if you agree.

## After writing

A new scenario is a **draft** and does not run yet. [Calibrate it](calibrate-a-scenario), then add it to an analysis.

## Rules of thumb

- One scenario, one way of recognising the fraud. Two different patterns are two scenarios.
- The population (*Given*) uses collected data only; anything costly — reading a website, asking the AI — is a *When*.
- A condition is a fact, not a judgment: *the domain is less than 30 days old* belongs to the calibration as
  *the domain is recent*.
- Never name a source in a scenario: say how the record was found, not where.
