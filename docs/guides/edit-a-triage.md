---
id: edit-a-triage
title: Edit a triage
description: Change how alerts are prioritised and which decision is proposed.
---

# Edit a triage

**Where:** Knowledge › Scenarios › a triage › **Edit**

A triage is an ordered list of rules. For each alert, **the first rule whose conditions all hold gives the result**:
a priority (critical, high, medium, low) or a proposed decision (a homonym, the brand's own page…).

1. Open the triage and click **Edit**.
2. Change the rules:
   - **+ Add rule** — name it, add its conditions with **+ Add condition**, and choose its result.
   - Reorder rules with the arrows: order matters, the first match wins.
   - The last rule has no condition: it gives the result for everything else.
3. Write why you changed it, and click **Save**. The change is checked before it is kept; a new version is made.
4. Triage the alerts again to apply it.

## Example

| # | Rule | Conditions | Result |
|---|---|---|---|
| 1 | The brand's own page | the page is one of the brand's own pages | decision: official page |
| 2 | Another business with the same name | the page is about something other than the brand | decision: homonym |
| 3 | An ad is running | at least one of the page's ads is running | **critical** |
| 4 | Ads stopped, not taken down | the page stopped ads the platform did not take down | **high** |
| 5 | Live page without ads | the page is public, and never advertised | **medium** |
| 6 | Anything else | — | **low** |

:::note Conditions
Conditions use existing indicators. A condition that needs a new indicator is added by
[writing a scenario](write-a-scenario) or by your fraud engineer.
:::
