---
id: threat-intelligence
title: Threat Intelligence
description: What organisations share with each other — confirmed frauds, scenarios, signals — and what they never share.
---

# Threat Intelligence

**Where:** Threat Intelligence › **Sent** and **Received**

A fraud found by one organisation is often already at work at the next. Threat Intelligence lets an organisation pass
on what it learned — and lets the other act on it in its own detection.

## What can be shared

| What | What it carries | What the receiver can do |
|---|---|---|
| **A case** | A confirmed and qualified fraud: its typology, the signal it names (an account, a site) and the scenarios that found it. | **Watch this account**, and activate the scenarios. |
| **A scenario** | The scenario as written in the library — never its calibration. | **Calibrate** it, then **Activate** it. |
| **Signals** | Identifiers to watch: accounts, sites. | **Watch** them. |

A scenario backed by case law shows the ⚖ mark next to its title, with the number of decisions saying what should
have been detected. A click opens them.

## What is never shared

No customer data. A shared case carries the fraud's pattern and its signal, never the transactions or the customers
of the organisation that found it. The receiver sees what was shared and nothing of its own data on that screen:
what a watched signal finds in its data appears in its own **Threat Monitoring**.

## What accepting does

- **Watch** — the signals join the watchlist of their kind: an account goes to **Mule accounts**, listed from the date
  the sender detected it. The use case **Payments to reported mules** then alerts on any customer payment to it made
  after that date, and the triages rank such a payment **critical**.
- **Activate** — the scenarios are switched on in **Detection Engineering** and run with the receiver's own
  calibration. A scenario never calibrated there waits for one: **Calibrate** opens it.
- **Dismiss** — nothing is kept.

## Who shares with whom

Organisations share with each other as **peers**. The platform's own threat-intelligence service shares too: scenarios
written from new frauds and case law, and signals from what it monitors.

See [Share threat intelligence](../guides/share-threat-intelligence) for the steps.
