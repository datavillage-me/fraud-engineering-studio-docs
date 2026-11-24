---
id: handle-alerts
title: Handle alerts
description: Decide an alert — close it with a reason, or escalate it to a case.
---

# Handle alerts

**Where:** Threat Monitoring › a use case › **Alerts**

The list shows the **new** alerts, ordered by the triage's priority. The status filter adds the **closed** and
**escalated** ones. An alert shows what it is about — a site with the link it was found with — the scenarios that found
it with the conditions they checked, and the triage's proposal.

![An alert: why it was raised, and the decision — investigate it, or close it with a reason](/img/screens/alert.png)

1. Open an alert.
2. Check the triage's proposed decision, if any, against what you see. **Site ↗** opens the site at the link found.
3. Choose:
   - **Yes — investigate it** to escalate. The alert joins the case of its subject — a new case if none is open. If a
     case is already open on the same subject, the alert says which one.
   - A **reason** to close it: a homonym, the brand's own page… The reasons come from the typology. Some require a
     note; some have effects, shown under the reason.
4. Confirm.

To change a decision, open the alert and click **Reopen alert**. Its effects are undone.

:::info Closed, then back
A site closed because its host took it down, then found again online by a later run, comes back under **Findings**.
:::

## Change the priority

The triage sets an alert's priority from what the detection saw. You may know more: a site aimed at your customers
right now, a campaign you already follow.

1. Open the alert and click its **Priority**.
2. Choose a priority, give the reason — it is required — and **Save**.

Your priority wins: the list is ordered by it. Under it the alert shows who set it and the triage's own value. The
next runs keep updating the triage's value but never yours; if the triage puts the alert higher than you did, the alert
says so (**The triage now says critical ↑**). **Reset to triage**, in the same menu, removes yours.

Every change is kept with its note: if analysts keep raising the same alerts, the triage's rule is set too low.

## Raise an alert by hand

From a finding no scenario retained, **Raise an alert** puts it in the queue. Who raises it classifies it: the
**priority** and the **reason** are required. The priority is yours from the start, shown as set by you; the triage's
comes beside it with the next run.

The **typology** can stay **Not determined yet**. The alert is then listed in the use case it was raised from, under
*Not determined*, with no triage. It is closed with the generic reasons — **Official page or site of the brand** (no
longer analysed by any typology), **Legitimate use of the brand**, **Not about the brand** — or escalated, and the
fraud is qualified in its case.
