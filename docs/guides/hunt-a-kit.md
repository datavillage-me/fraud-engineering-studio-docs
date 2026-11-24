---
id: hunt-a-kit
title: Hunt a kit
description: Find the other sites built with the same phishing or fake-shop kit as a site under investigation.
---

# Hunt a kit

**Where:** Threat Monitoring › a use case › **Cases** › a case on a website › **Reverse engineering**

A fraudster changes domain every few days, but rarely rewrites the kit behind the site: the same files, the same
script names, the same page title, the same folder in its links, the same servers it calls. **Hunt this kit** searches
the public page scans for those **markers** and brings back the other sites of the same kit — including the ones no
other source found, because their names carry no brand.

:::info Operators only
Reverse engineering and kit hunting are for the platform's operators. A client's analyst does not see them.
:::

## Before you start

The site must have been inspected (**Inspect**) and reverse engineered (**Reverse engineer with AI**): the hunt reads
the kit's markers from the files the reverse engineering kept.

## Hunt the kit

1. Open the case on the website.
2. Click **Hunt this kit**. The Studio reads the kit's markers from the reverse engineering, then searches each of them
   in the public page scans. The button shows how far it has got.
3. When it ends, the sites found are listed under the reverse engineering: **N other sites of the same kit**, each with
   the markers it shares and when it was last seen. Click one to open its record.

The sites found join the use case of the case you started from, with the same brands. The next run of the use case
reads them and the scenarios judge them like any other finding. **Why it is here** says **Same kit as** the site you
started from.

## The markers

Under the reverse engineering, **Kit markers** lists what the hunt searches.

| Kind | What it is | Example |
|---|---|---|
| **File (hash)** | One of the site's own files, byte for byte | the kit's form script |
| **File name** | The name of one of its scripts | `app-form-log.js` |
| **Page title** | The title the kit gives its page | `Example Pay — choose your bank` |
| **Path token** | A constant folder in its links | `/Xk9fQwT2abR/` |
| **Host called** | A server the kit's code calls: where it sends data, or where it gets its content | `relay.example-feed.com` |

Each marker shows how many scans matched it (**Scans**) and how many other sites it found (**Sites**).

- **Retire** a marker that brings back genuine sites — a bank's logo, an image many sites share. **Use again** brings
  it back.
- **Add marker**: choose the kind, type the value, click **Add marker**. Use it for a marker you found yourself — a
  product photo the same fake shops share, a title you saw.
- A marker matched by more than 300 scans is too common to identify a kit: the hunt retires it by itself and says so.

:::tip Markers are kept
The markers stay with the site. Hunt the kit again later — or hunt every marker of the organisation at once with the
API — to find the kit's new sites.
:::

## With the API

| Step | Call |
|---|---|
| Read the markers of a run, or of a site | `GET /api/kit/markers?run={run_id}` or `?seed_id={site}` |
| Read the candidate markers of a run's kit | `POST /api/reverse/{run_id}/markers` |
| Add a marker by hand | `POST /api/kit/markers` |
| Retire a marker, use it again, or set its own limit | `POST /api/kit/markers/{marker_id}` |
| Hunt a run's kit, a site's, or every marker | `POST /api/kit/hunt` with `{"run": …}`, `{"seed_id": …}` or `{"all": true}` |
| Follow the hunt | `GET /api/kit/hunt/{job_id}` |

```bash
curl -s -X POST https://studio.example-bank.com/api/kit/hunt \
  -H "Authorization: Bearer $STUDIO_API_KEY" -H "X-Studio-Org: example-bank" \
  -H "Content-Type: application/json" -d '{"all": true}'
```

Call it daily from a scheduler to keep up with the kits you already know.
