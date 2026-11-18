---
id: intro
title: Overview
slug: /
description: What the Fraud Engineering Studio does, and where to start.
---

# Fraud Engineering Studio

The Fraud Engineering Studio is where fraud detection is engineered: the knowledge of how frauds work, turned into
detections that are tested, calibrated and deployed — in the Studio itself, or in the engine you already run.

Every detection is written in plain language, built from named conditions, tested on data and versioned. An analyst,
a fraud engineer and an auditor read the same thing.

<div class="chain"><span>Knowledge</span><i>→</i><span>Context</span><i>→</i><span>Test</span><i>→</i><span>Deploy</span></div>

| Step | What it means | Where |
|---|---|---|
| **Knowledge** | The fraud library: typologies, scenarios, indicators, mapped to the fraud journey and to standard taxonomies. | Library |
| **Context** | The data a scenario needs, and what it computes for every case. Connect sources; see which scenarios the data supports. | Connections |
| **Test** | Run scenarios on labelled test data; measure what they catch and their false alarms; calibrate. | Detection Engineering |
| **Deploy** | Run them on the data they watch, in **Threat Monitoring** — or export them, with the context they need, to your own engine. | Threat Monitoring, Export |

**Coverage** is measured at every step: what you are protected against, and where the gaps are.

## The menu

| Menu | What you do there |
|---|---|
| **Overview** | **Coverage**: what each scenario and fraud type has reached. **Activity**: what changed lately. |
| **Detection Engineering** | Choose and calibrate scenarios, test them on labelled data (**Test data**). See [Calibrate a scenario](guides/calibrate-a-scenario). |
| **Threat Monitoring** | The use cases that watch for fraud — online scams, fraudulent webshops, APP scam receiving accounts, payments to reported mules — each with its **Dashboard**, **Findings**, **Alerts** and **Cases**. See [Threat Monitoring](concepts/threat-monitoring). |
| **Fraud Pentesting** | Play a fraudster's behaviour on your own application in staging, and see what your defences did. See [Fraud Pentesting](concepts/fraud-pentesting). |
| **Threat Intelligence** | Share confirmed frauds, scenarios and signals with other organisations, and act on what you receive. See [Threat Intelligence](concepts/threat-intelligence). |
| **Library** | The typologies, scenarios, indicators and taxonomies — read-only here; calibration happens in Detection Engineering. |
| **Connections** | The sources and the lists. The labelled test datasets are under **Detection Engineering › Test data**. |

The selector next to the Studio's name switches between [organisations](concepts/organisations): each one sees only
its own data, calibrations, lists and cases.

## Where to start

<div class="cards">
  <a href="concepts/how-detection-works"><b>How detection works</b><span>Cases, features, indicators, scenarios — and the context they share.</span></a>
  <a href="concepts/threat-monitoring"><b>Threat Monitoring</b><span>The use cases that watch for fraud, from findings to cases.</span></a>
  <a href="concepts/threat-intelligence"><b>Threat Intelligence</b><span>What organisations share — and what they never share.</span></a>
  <a href="concepts/glossary"><b>Glossary</b><span>The words the Studio uses, one line each.</span></a>
  <a href="processes/detection-cycle"><b>Processes</b><span>Who does what, from a signal to a decision — and how detection improves.</span></a>
  <a href="guides"><b>Guides</b><span>Step by step: calibrate, monitor, share, pentest, open a case.</span></a>
  <a href="integration/contract"><b>API</b><span>Connect your case management, SIEM or data platform.</span></a>
</div>
