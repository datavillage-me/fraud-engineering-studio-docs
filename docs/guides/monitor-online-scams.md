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
| **Triaged** | Given a priority, and not in Alerts. |
| **Alerts** | Sent to Alerts: the alert is where it is decided. |
| **In a case** | Its alert was escalated to a case. |
| **Watch** | Online, but retained by no scenario. |
| **Not retained** | Reported by a source, retained by no scenario. |
| **Blocked** | The site refuses to be read. |
| **Answered** | The people who reported it got their answer. |

   **Found by** compares the sources: what each one found, and what only one of them found.
4. Open a finding to see why it was found and what the scenarios saw. The buttons under its name open it outside the
   Studio — **Site ↗** at the link found, **Page ↗** and **Its ads in the Ad Library ↗** for a page — the same on a
   finding, an alert and a case. If your Studio has an isolated browser, they open there (see below).
5. If the use case raises alerts by itself, what reaches its alert level — **medium** by default — is already in
   **Alerts**. Otherwise, or for the rest: **Raise as alert**, or leave it. A finding a scenario found goes to Alerts
   from the run that found it, with its scenarios and priority; the priority you choose, if another, is set on it
   with your reason. Inspecting a site, and reverse engineering it, is done on its alert or its case.

:::tip Taken down, then back
A finding closed because its host took it down comes back here when a later run finds it online again.
:::

## Open suspicious sites in an isolated browser

A phishing page should not run in the analyst's own browser. When the Studio is set with an isolated browser, every
link to a site, a page or an ad opens there instead — a remote browser that only sends the picture of the page:

- a self-hosted one, such as Kasm Workspaces: `https://<your Kasm>/#/go?kasm_url={raw_url}`;
- a service, such as Cloudflare Browser Isolation: `https://<your team>.cloudflareaccess.com/browser/{raw_url}`.

The setting is the Studio's `isolated_browser` (`POST /api/settings`): an address with `{url}` (the link encoded) or
`{raw_url}` (the link as is). Empty, links open in the analyst's browser.

## Answer the people who reported it

When a finding shows people waiting for an answer:

1. Open it and choose **Reply**.
2. Choose the language, draft with AI, and review the outcome, the summary and what was observed.
3. Send. Everyone waiting in that language gets the same answer; it is kept on the case if there is one.
