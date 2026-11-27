---
id: hunt-a-kit
title: Hunt a kit
description: Find the other sites built with the same phishing or fake-shop kit as a site under investigation.
---

# Hunt a kit

**Where:** Threat Monitoring › a use case › **Cases** › a case on a website › **Reverse engineering**

A fraudster changes domain every few days, but rarely rewrites the kit behind the site. **Hunt this kit** finds the
other sites built from the same kit as the site under investigation — including the ones no other source found.

:::info Operators only
Reverse engineering and kit hunting are for the platform's operators. A client's analyst does not see them.
:::

## Before you start

The site must have been inspected (**Inspect**, on its alert) and reverse engineered (**Reverse engineer with AI**, on
its case). **Hunt this kit** appears on the case's full page as soon as the reverse engineering has ended.

## Hunt the kit

1. Open the case on the website.
2. Click **Hunt this kit**. The button shows how far it has got.
3. When it ends, the sites found are listed under the reverse engineering: **N other sites of the same kit**, each with
   when it was last seen. Click one to open its record.

The sites found join the use case of the case you started from, with the same brands. **Why it is here** says
**Same kit as** the site you started from.

## Judge what it found

The sites a hunt brings are only candidates. Analyse them where they joined — the use case's **Findings**, filtered on
the source **Kit siblings**, then **Analyze with AI** on what the list shows. Send the ones the scenarios retained to
**Alerts**, as any other finding.

A genuine site wrongly taken for a sibling is removed from the findings, and the next hunts leave it out. Its record,
and any alert already raised on it, stay; close the alert if there is one.

**Kit markers**, under the reverse engineering, shows what identifies the kit. An operator can set aside one that
brings back genuine sites, or add one found by hand.

:::tip Hunt again
What identifies the kit stays with the site: hunt it again later to find the kit's new sites — or every known kit at
once, daily, from a scheduler with the API.
:::

The API calls are in the [API reference](/api/fraud-engineering-studio-api).
