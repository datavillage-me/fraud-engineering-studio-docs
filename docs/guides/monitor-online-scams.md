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
3. Each finding is read on three axes, never mixed — each its column and its filter, the same in Findings, Alerts and
   Cases:

   - **Severity** — how serious it is: **critical**, **high**, **medium**, **low**. Given by the triage of the
     scenarios; an analyst can change it on the alert, with a reason.
   - **Threat state** — what the site or page is doing, with the date it was seen:

     | Threat state | What was seen |
     |---|---|
     | **Live** | The site answers with a page of its own. |
     | **Cloaked** | It answers but hides — e.g. it sends our reader to a search engine. Still active. |
     | **Not active yet** | A parking page, an empty or default page. |
     | **Blocked** | The host's suspension page or a phishing warning. |
     | **Suspended by the registrar** | The domain is on hold at its registry. |
     | **Removed by the platform** | The page, its ads or its deployment were removed. |
     | **Offline** | It no longer answers, with no sign of a suspension. |
     | **Unreadable** | Our reader is refused (a captcha): unknown. |

     **Taken down** selects the three where a third party is seen to have acted: blocked, suspended, removed.
     Offline is never counted as taken down.
   - **Handling** — where we stand: **To triage**, **Triaged**, then its **alert** or its **case**.

   **To watch** is a filter, not a value: the findings with no alert, a **low** severity or **not active yet**.
   They are checked again at every analysis.

   **Found by** compares the sources: what each one found, and what only one of them found.
4. Open a finding to see why it was found and what the scenarios saw. The buttons under its name open it outside the
   Studio — **Site ↗** at the link found, **Page ↗** and **Its ads in the Ad Library ↗** for a page — the same on a
   finding, an alert and a case. If your Studio has an isolated browser, they open there (see below).
5. If the use case raises alerts by itself, what reaches its alert level is already in
   **Alerts**. Otherwise, or for the rest: **Raise as alert**, or leave it. A finding a scenario found goes to Alerts
   from the run that found it, with its scenarios and priority; the priority you choose, if another, is set on it
   with your reason. Inspecting a site, and reverse engineering it, is done on its alert or its case.

:::tip Taken down, then back
A finding whose site was taken down keeps that threat state. It needs nothing more, unless a later run finds it live
again. A site that turns **cloaked** is not "no longer detected": its alert keeps its severity.
:::

## Protect a new brand

Two calls, nothing else to edit:

1. **Add the brand to the list** of protected brands, with its names and its official domains — the domains are never
   found as fraud, the names are what the sources search for:
   `POST /api/lists/protected-brands` with `{"entry": {"id": "example-bank", "name": "Example Bank", "identifiers": {"name": ["example bank"], "domain": ["example-bank.com"]}}}`.
2. **Protect it in the organisation**: `POST /api/active/brands` with `{"add": ["example-bank"]}`.

The next collection of the findings connections asks for it (their brands follow the organisation's — `organizations:
scope`), and the next analysis keeps its findings. `GET /api/active/brands` shows the brands protected, and lists those
missing from the list: a brand protected but not in the list would see its findings left out.

The discovery service keeps its own list of the brands it searches by: a brand it does not know yet must be added there
too.

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
