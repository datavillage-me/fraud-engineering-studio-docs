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
| **Knowledge** | The fraud library: typologies, scenarios, indicators, mapped to the fraud journey and to standard taxonomies. | Fraud library |
| **Context** | The data a scenario needs, and what it computes for every case. Connect sources; see which scenarios the data supports. | Data |
| **Test** | Run scenarios on synthetic, labelled data; measure what they catch and their false alarms; calibrate. | Analyses |
| **Deploy** | Run them on the data they watch, in the Studio's **Live** space — or export them, with the context they need, to your own engine. | Analyses, Export |

**Coverage** is measured at every step: what you are protected against, and where the gaps are.

## Two spaces

The top bar switches between two spaces, like the test and live modes of a payment platform.

| Space | What you do there | Menu |
|---|---|---|
| **Studio** | Design, test and calibrate detections; export them. | Fraud library · Data · Analyses · Report (Coverage) |
| **Live** | Follow what runs: alerts, cases, decisions. | Analyses · Investigations · Report (Coverage, Activity) |

A link to a page of the other space switches to it.

## Where to start

<div class="cards">
  <a href="concepts/how-detection-works"><b>How detection works</b><span>Cases, features, indicators, scenarios — and the context they share.</span></a>
  <a href="concepts/glossary"><b>Glossary</b><span>The words the Studio uses, one line each.</span></a>
  <a href="processes/detection-cycle"><b>Processes</b><span>Who does what, from a signal to a decision — and how detection improves.</span></a>
  <a href="guides"><b>Guides</b><span>Step by step: add a source, run an analysis, export, open a case.</span></a>
  <a href="integration/contract"><b>API</b><span>Connect your case management, SIEM or data platform.</span></a>
</div>
