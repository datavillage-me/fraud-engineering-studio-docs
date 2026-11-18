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

## Raise an alert by hand

From a finding no scenario retained — or any record — **Raise an alert** puts it in the queue with a typology and a
note.
