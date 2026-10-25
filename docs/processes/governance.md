---
id: governance
title: Governance
description: Versions, notes, checks and traceability — what an auditor can verify.
---

# Governance

The Studio keeps what a model-risk or compliance review needs.

## Everything is versioned

Scenarios, triages and calibrations change only by a new version. **Every change needs a note** saying why, and keeps
who made it and when. A run records the versions it ran with, so any alert can be traced to the exact logic that
raised it.

## Nothing is deleted

A scenario that is no longer wanted is **retired**: it stops running, and its versions, runs and alerts stay, so
every past alert can still be explained.

## Every change is checked

Before a scenario or a triage is saved, the knowledge base's validator checks it: conditions name existing
indicators, indicators read existing features, nothing refers to data that does not exist. A change that does not pass
is refused, and nothing is written.

## Every decision is explained

- An **alert** shows the scenarios that found it and, for each, every condition with the value that met it.
- A **triage** result shows the rule that gave it and the conditions it checked.
- An **AI condition** shows the question, the answer and the model's reasoning.
- A **case** keeps its alerts, inspections with their dates, notes, decisions and the effects they had.

## People stay in charge

The triage proposes; the analyst decides. Nothing is closed, excluded or added to a list without a person's decision,
and every effect can be undone by reopening.
