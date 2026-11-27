---
id: threat-monitoring
title: Threat Monitoring
description: The use cases that watch for fraud, and how what they find becomes alerts and cases.
---

# Threat Monitoring

**Where:** Threat Monitoring

Threat Monitoring is where detection runs on the data it watches. It is organised in **use cases** — one job each, kept
apart because they are handled by different people:

| Use case | What it watches |
|---|---|
| **Online scams** | Websites and social media pages that impersonate your brands: phishing, fake investment offers, fake support. |
| **Fraudulent webshops** | Shops that take payment and never deliver. |
| **APP scam receiving accounts** | Accounts that receive the money of authorised push payment scams. |
| **Payments to reported mules** | Your customers' payments to accounts reported as mules — by your own cases or by another organisation. |

Each organisation chooses its use cases. Each use case has four pages: **Dashboard**, **Findings**, **Alerts** and
**Cases**.

## From a run to a case

<div class="chain"><span>Collect</span><i>→</i><span>Analyse</span><i>→</i><span>Findings</span><i>→</i><span>Triage</span><i>→</i><span>Alerts</span><i>→</i><span>Cases</span></div>

1. **Analyze with AI** runs the use case: its sources collect, its typologies' scenarios run, and the triage gives
   each finding a priority. **Show the run** follows it scenario by scenario, with how many cases each step kept.
2. **Findings** lists what the last run found, on three axes never mixed: its **severity** (critical to low), its
   **threat state** (live, cloaked, not active yet, blocked, suspended, removed, offline, unreadable — with the date
   seen; *taken down* groups blocked, suspended and removed) and its **handling** (to triage, triaged, alert, case).
   **To watch** is a filter: no alert, and a low severity or not active yet.
3. What becomes an **alert** depends on the use case's **alert level**, set for each deployment (`alert_from`):
   - a priority: findings from that priority up become alerts by themselves;
   - **none**: the analysis only finds and classifies, and the analyst decides which findings go to Alerts with
     **Raise as alert**. The tooltip of **Analyze with AI** says which applies.

   A finding a scenario found is sent to Alerts **from the run that found it**: the alert keeps its scenarios, what
   each step saw and the AI's answers, and so does its case. Only a finding no scenario retained is raised by hand.
4. An analyst decides each alert — see [Handle alerts](../guides/handle-alerts) — and escalates the frauds to a
   **case**.

A finding that already has an alert is no longer listed under Findings: it is in **Alerts**. An alert closed, then
found again by a later run — a site taken down and back online — returns to **Findings**.

![Threat Monitoring › APP scam receiving accounts › Findings](/img/screens/findings.png)

## A site is named by its link

A website is always shown with the link it was found with, its path kept — `https://example-site.com/pay`, not
`example-site.com`. The same link opens the site from **Site ↗**, in every list and every detail.

## Answers to the people who reported it

When a source collects reports from the public — a check site where people submit a link, for example — the people who
reported a site wait for an answer. A finding shows how many wait; from the finding or its case, the analyst drafts the
answer with AI, reviews it and sends it to all of them at once, in their language. The answer is kept on the case.
