---
id: add-a-source
title: Add a source
description: Connect a new kind of data from the catalogue.
---

# Add a source

**Where:** Data › Sources

1. Click **+ New source**. The catalogue opens, grouped by kind of data: institution data, ads, websites and domains,
   regulators…
2. Choose an item. Items marked **Soon** are not available yet.
3. If the item supports several technical connections — files, a database, a data platform — choose yours.
4. Fill in the settings: what to search for (usually one of your [lists](../concepts/glossary)), the country, how far
   back. Secrets such as API keys are never typed here; they are set on the server.
5. Check how the data will be mapped with **Test on a sample**, then confirm.
6. Click **Collect**. The collection runs in the background; follow it from the indicator in the top bar.

:::tip Collect again
A source can have several ways to collect: everything again, or only what is new since the last collection. The
choice appears next to **Collect** when there is one.
:::

## Enrichments

Enrichments are not collected by hand: they read more about records — a website's content, a domain's registration —
only when an analysis needs it. **Data › Enrichments** shows what each one reads; **Read again** refreshes what it has
already read.
