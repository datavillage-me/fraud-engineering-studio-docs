---
id: how-detection-works
title: How detection works
description: Every detection is built on cases — a payment, a credit, a page — and the values computed for each one.
---

# How detection works

Every detection in the Studio is built the same way, whatever the fraud.

<div class="chain"><span>Case</span><i>→</i><span>Features</span><i>→</i><span>Indicators</span><i>→</i><span>Scenario</span><i>→</i><span>Finding</span></div>

## 1. A case

A scenario looks at one kind of **case** — its **unit**. A case is almost always an event:

| Kind | Examples | Its moment |
|---|---|---|
| **An event** | a payment sent, a credit received, a payee added, a card added to a wallet | when it happens |
| **An object observed** | a website, a page that advertises | when it was found, or seen again |

A unit says three things: the population (one row per case), the moment of each case, and who is involved — the
customer, the account, the payee.

## 2. Features: values computed for each case

A **feature** is one value computed for each case, always *at the moment of the case*: whether a call was in progress,
how this amount compares with the customer's last 90 days, whether the payee was ever paid before.

Features read the moment and the people of the case — columns every unit provides under the same names. The same
feature therefore works for any unit that is an event: *a call in progress* is checked at the moment of a payment, or
at the moment a card is added to a wallet.

## 3. Indicators test the values

An **indicator** is one named condition on features: *a call is in progress, or ended less than 15 minutes before*.
Its thresholds are not in the indicator: they come from the [calibration](../guides/calibrate-a-scenario) of your
institution.

## 4. A scenario combines indicators

A **scenario** reads like a sentence:

```gherkin
Scenario: A payment made while an impersonation call is still live
  Given the payment is completed, with at least 90 days of history before it
  When an inbound call is in progress
  And the customer has never paid that payee before
  And the amount exceeds what the customer usually pays
  Then it becomes a finding
```

The **Given** steps choose the cases looked at; they never change their kind. The **When** steps decide. Each condition
can be checked by a rule, by a question asked to an AI, or both.

## The context

For one kind of case, the **context** is the table of every value the chosen scenarios need: one row per case, one
column per feature. It is computed once, then every scenario reads it.

The context is what an engine needs to run the scenarios — and what the AI reads. It is what the
[export](../guides/export-to-another-engine) delivers: the data required, the context builder, then the scenarios.

## Real time or after the fact

An indicator is either known at the moment of the case, or only afterwards (*the account was emptied the next day*). A
scenario whose indicators are all known at the moment can decide **in real time**, before a payment leaves. The others
run after the fact.
