---
id: monitor-online-scams
title: Monitor online scams
description: Run a Threat Monitoring use case, read its findings, and decide what goes on.
---

# Monitor online scams

**Where:** Threat Monitoring › **Online scams** › **Findings** (the same for every use case)

1. Click **Analyze with AI**. The use case collects its sources, runs its typologies' scenarios and triages what they
   found, in the background. **Show the run** follows each typology: its scenarios, how many cases each step kept,
   and the priorities given.
2. When it ends, **Findings** lists what the run found. Each row is a site with the link it was found with, or a page,
   with its priority, typologies, scenarios, brand, who found it and the domain's age.
3. Filter by state:

| State | Meaning |
|---|---|
| **To triage** | Found by the last run, not triaged yet. |
| **Triaged** | Given a priority, below the use case's alert level. |
| **Watch** | Online, but retained by no scenario. |
| **Not retained** | Reported by a source, retained by no scenario. |
| **Blocked** | The site refuses to be read. |
| **Answered** | The people who reported it got their answer. |

4. Open a finding to see why it was found, the evidence, and **Site ↗** to open it at the link found.
5. What reaches the use case's alert level — **medium** by default — is already in **Alerts**. For the rest:
   **Raise an alert**, **Inspect** it, or leave it.

:::tip Taken down, then back
A finding closed because its host took it down comes back here when a later run finds it online again.
:::

## Answer the people who reported it

When a finding shows people waiting for an answer:

1. Open it and choose **Reply**.
2. Choose the language, draft with AI, and review the outcome, the summary and what was observed.
3. Send. Everyone waiting in that language gets the same answer; it is kept on the case if there is one.
