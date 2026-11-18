---
id: add-a-source
title: Add a source
description: Connect a new kind of data from the catalogue.
---

# Add a source

**Where:** **Connections**

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

## What the data supports

Open a source and its **Scenarios** tab: the scenarios of the library that can run on this data — in use, or ready to
calibrate — and those that already use it but need more, grouped by what is missing.

## Test datasets

**Connections** also holds the labelled test datasets — synthetic or imported — each in its own store, apart from
production. An analysis run on them is measured against the labels and never raises an alert.

## Enrichments

Enrichments are not collected by hand: they read more about records — a website's content, a domain's registration —
only when an analysis needs it. **Connections** shows what each enrichment reads; **Read again** refreshes what it has
already read.
