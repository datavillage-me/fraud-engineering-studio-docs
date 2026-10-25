---
id: detection-cycle
title: The detection cycle
description: Who does what, from a collection to a decided case.
---

# The detection cycle

The detection cycle runs again and again: collect, analyse, triage, investigate, decide.

| Step | Who | What happens | Where |
|---|---|---|---|
| **1. Collect** | Fraud engineer, or a schedule | Sources bring new records, with how each was found. | Data › Sources |
| **2. Analyse** | Fraud engineer | An analysis runs its scenarios on the data. Enrichments read what the scenarios need. | Analysis › Analyses |
| **3. Send to alerts** | Fraud engineer | The run's findings are reviewed and sent to Alerts. | A run's results |
| **4. Triage** | Automatic | Each alert gets a priority and, when possible, a proposed decision. | Analysis › Alerts |
| **5. Decide the alert** | Analyst | Close it with a reason, or escalate it to a case. | An alert |
| **6. Investigate** | Analyst | Inspect the subject and what it leads to, add notes, open related cases. | A case |
| **7. Close the case** | Analyst | Close with a reason; qualify a confirmed fraud. Effects apply to the next runs. | A case |

## What a decision changes

Decisions are not just labels. Each reason a typology defines can carry **effects**:

- **Exclude** — the record is no longer alerted on by the scenarios concerned, for a period or for good.
- **Add to a list** — the record joins a list the scenarios read: a trusted party, the brand's own pages, a watchlist.

Reopening an alert or a case undoes its effects.

## Priorities

The triage orders the queue so that the most harmful cases are handled first. For pages that advertise, for example:
an ad running now is **critical**; ads stopped but not taken down by the platform are **high**, since they can run
again; a public page that never advertised is **medium**; everything else is **low**. Each typology has its own
triage, which you can [edit](../guides/edit-a-triage).
