---
id: investigate-and-open-a-case
title: Investigate and open a case
description: Follow a case to what it leads to, inspect it, and open a case on it.
---

# Investigate and open a case

**Where:** Threat Monitoring › a use case › **Cases**

A case is about one subject. Investigating it often leads to other records: the website a page's ads lead to, the
domain a site redirects to. Each can become a case of its own, linked to the first.

## Inspect the subject

A subject is inspected on its **alert**, before the alert is escalated: the case then shows what was seen.

1. Open the alert and click **Inspect**. The Studio looks at the subject as a visitor would and keeps what it saw as
   evidence: for a page, its recent ads (running or stopped, removed by the platform, where each leads); for a
   website, its pages, screenshots and forms; for an **account** held at your institution, what your own data says
   about it — nothing is fetched outside:

   | Question | What the inspection of an account answers |
   |---|---|
   | Since when | When the account was opened, when its holder became a customer, the first payment received. |
   | What it receives | How many payments, how much, from how many payers, and how many different names the payers gave. |
   | Where the money goes | What was sent, by method, the largest destinations, and the share of the money received that was moved on — by transfer, cash or crypto, not card spending — within 24 hours. |
   | Who is behind it | The holder, the holder's other accounts, and the customers using the same devices. |
   | Is it known | The lists it is on, and its alerts and cases. |

   Names are never copied: only how many there are.
2. Click **Generate report with AI**, next to **Inspect**. The report is drafted from what the inspection saw and what
   the data holds: a result, a summary, the observations — each with what it rests on — and the next steps. Read it,
   correct it, then publish it: it shows first on the alert and stays on its case. The same button works on a site, a
   page or an account. It appears once the subject has been inspected.
3. Escalate it. In the case, **In short** and **Detail › Inspection** show the inspection, with its date. A case has
   no **Inspect** button of its own: it decides on what was inspected.
3. Click a capture to see it large, with what was seen there. Use **←** and **→** to move between captures.

## Follow where it leads

Inspections record where a record leads: an ad to its site, a site to the site it redirects to. A record shows
**Leads to** and **Reached from**, with the dates each link was seen. If a site starts redirecting elsewhere, the new
destination is added; nothing is overwritten.

1. Click a site under **Leads to** — in a record, or in an ad's capture. It opens in the side panel, with what is
   known of it: its record, the inspections already made, and where it leads in turn.
2. To inspect it, open it from **Findings** or from its own alert and click **Inspect** there.

Each link of the chain enters the data, found the same way as the first one, so the scenarios can find it too.

## Find the kit behind a site

For operators, on a case about a website that was inspected:

1. Click **Reverse engineer with AI**. The Studio keeps every file the site loads and explains how it works: what it
   takes from the victim, what the fraudster will do next, how to find the victims, and the **Indicators** the parties
   concerned can look for in their own logs (**Copy as CSV**).
2. Click **Hunt this kit** to find the other sites built with the same kit. See [Hunt a kit](hunt-a-kit.md).

## Open a case on it

1. In the side panel, click **+ New case**.
2. The case opens in the same typology as the case you came from. If there is no case on screen and several
   typologies apply, choose one.
3. The new case shows **opened from** the first case; the first case shows **led to** the new one, under
   **Related cases**.

:::info If a detection finds it later
When a scenario later raises an alert on the same subject, escalating the alert adds it to this case — no second case
is opened.
:::

## Decide and close the case

A case moves through four steps, shown at the top of its panel:

1. **Investigate** — read the evidence: the alerts and what each scenario saw, the subject and its records. Write what
   you find with **Add note**; the first note puts the case in review. Then **I have looked — decide →**.
2. **Decide** — choose the outcome: confirmed fraud, concern, not fraud, undecided.
3. **Qualify** — a confirmed fraud is qualified in the fraud taxonomy: what was observed, and whether a payment was
   made.
4. **Confirm** — the case closes with its decision. Its effects apply to the next runs.

![A case closed as confirmed fraud: its decision and its qualification in the fraud taxonomy](/img/screens/case.png)

## Share it

A confirmed and qualified fraud can be passed on to other organisations: **Share case**, choose who receives it, add a
note. Only the case share goes — its typology, its signal and the scenarios that found it, never customer data. See
[Share threat intelligence](share-threat-intelligence).
