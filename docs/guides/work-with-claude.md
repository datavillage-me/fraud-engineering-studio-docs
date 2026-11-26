---
id: work-with-claude
title: Work with the Studio in Claude
description: A Claude project that works in your Studio through its MCP server — with one skill.
---

# Work with the Studio in Claude

A **Claude project** where every chat can work in your Studio: read the findings, run a use case, propose alerts and
reports, follow cases. Claude works only through the Studio's API, with the rights of the key you give it — it never
sees the Studio's code or its data store.

Everything it needs comes with the Studio — one file:

| File in the Studio | What it is | Where it goes |
|---|---|---|
| `skills/fraud-studio/SKILL.md` | **How to work in the Studio**: its steps, its rules (verify before stating, propose before sending, stop when the Studio does not answer), its pitfalls. The same for every deployment: it names none. | A skill of your Claude account or organisation |

## Before you start

- The Studio runs, and its MCP server is declared in Claude desktop with an API key: see
  [Connect an AI assistant](connect-an-ai-assistant.md).
- You use Claude desktop on the computer where the MCP server is declared (or a chat linked to it).

## Steps

1. **Add the skill.** In Claude, add the folder `skills/fraud-studio/` as a skill of your account (or of your
   organisation, for the whole team). One skill only: it is the same for everyone.
2. **Create the project.** A new project in Claude, for example *Fraud Engineering Studio*.
3. **Check.** Open a chat in the project and ask: *"List the organisations of the Studio and the Threat Monitoring use
   cases."* Claude answers from the Studio. If it says the Studio does not answer: start the Studio, or open the chat in
   Claude desktop on the right computer.

## What to expect

- Claude **proposes** what others will see — an alert, a case decision, a report — and sends it on your word.
- A long run (a use case's analysis can take hours) is started and checked from time to time.
- A problem that needs a change in the Studio is described precisely, for the team that maintains it; Claude does not
  change the Studio's code.

The skill reads your deployment — organisations, use cases, sources — from the Studio itself; there is nothing to keep
in a separate document. What it should know about your deployment belongs in the Studio: an organisation's description,
a source's description, a brand's official domains in its list. When the Studio changes, update the skill in Claude with
the version that comes with it.
