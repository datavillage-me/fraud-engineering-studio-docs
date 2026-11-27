---
id: connect-an-ai-assistant
title: Connect an AI assistant
description: Let an AI assistant drive the Studio through its API, with an API key and the Studio's MCP server.
---

# Connect an AI assistant

An AI assistant can work in the Studio for you: read alerts and cases, run a Threat Monitoring use case, hunt a kit.
It does so through the Studio's API, as the user of an **API key**, with that user's rights — nothing more. The Studio
comes with an **MCP server** (Model Context Protocol) that gives the assistant the Studio's API as tools.

## 1. Make an API key

Ask an administrator of the Studio for an API key for your user. They can hold it to one organisation; without
that, the key acts for any organisation your user may see, chosen on each call.

- The key is shown **once**. Copy it; the Studio keeps only a fingerprint of it.
- The administrator can see when each key was last used, and revoke one at once.

## 2. Declare the MCP server

In Claude desktop: the **Claude** menu of the menu bar › **Settings…** › **Developer** › **Edit Config**. Add the Studio
to `claude_desktop_config.json`, inside `mcpServers`:

```json
{
  "mcpServers": {
    "fraud-studio": {
      "command": "python3",
      "args": ["/path/to/studio/tools/studio_mcp.py"],
      "env": { "STUDIO_API_KEY": "fes_…", "STUDIO_URL": "http://127.0.0.1:8770" }
    }
  }
}
```

Save, quit Claude desktop completely and open it again. The Studio must be running.

Any assistant that speaks MCP over stdio works the same way: run `tools/studio_mcp.py` with `STUDIO_API_KEY` and
`STUDIO_URL` set.

## 3. What the assistant can do

| Tool | What it does |
|---|---|
| `list_organisations` | The organisations of the Studio. |
| `list_alerts`, `get_alert` | Read alerts. |
| `list_cases`, `get_case` | Read cases. |
| `threat_monitoring_findings` | The findings of the Threat Monitoring use cases, filtered by use case, status, priority, source, new since the last pass, or a piece of a domain. |
| `run_threat_monitoring` | Analyze a use case with AI: its scenarios, its triage, or both — on everything, or only on the records given. |
| `threat_monitoring_pass` | What the last pass of a use case ran and found. |
| `send_findings_to_alerts` | Send findings to Alerts from the run that found them: the alert carries its scenarios, trace and priority. |
| `raise_alert_by_hand` | An alert on a record no scenario retained, with the reason and the analyst's priority. |
| `reverse_run` | A site's reverse engineering: its analysis and indicators. |
| `kit_markers`, `markers_from_run`, `add_kit_marker`, `update_kit_marker` | Read and manage a kit's markers. |
| `hunt_kit`, `job_status` | Hunt a kit — and, with `analyze`, analyse the sites found right after — and follow the hunt or any other background job. |
| `remove_kit_sibling` | Remove a site wrongly taken for a sibling; the next hunts leave it out. |
| `studio_api` | Any other route of the API. |

Every tool takes `org`, the organisation to act for.

The tools follow the Studio's own steps. A finding a scenario retained goes to Alerts with `send_findings_to_alerts`,
as the Findings list sends it — never as an alert raised by hand, which would lose its scenarios and priority. Alerts
are what your client sees: ask the assistant to propose them, and send them yourself or on your word.

## 4. Give it the Studio's way of working

The tools say what the assistant *can* do; the skill that comes with the Studio says *how*: which steps follow which, when
a finding goes to Alerts and how, what is never done (reading the data store, raising by hand what a scenario found,
deleting an alert), and the usual pitfalls (cloaked phishing sites, homonyms). It is the folder `skills/fraud-studio/` of
the Studio, a `SKILL.md` file.

- **Claude** — add the folder as a skill of your account or organisation.
- **Claude Code** — copy it into the `.claude/skills/` folder of your project, or of your user.
- **Another assistant** — give it `SKILL.md` as its instructions.

It names no organisation and no use case: the assistant reads them from the Studio it is connected to. To set up a whole Claude project around it, see [Work with the Studio in Claude](work-with-claude.md).

:::caution What a key can do
A key acts with its user's rights: an operator's key can run analyses, decide alerts and close cases. Give an assistant
a key of its own, so its calls are recognisable, and revoke it when you no longer use it.
:::

## Calling the API without MCP

Your own scripts and systems use the same key:

```bash
curl -s https://studio.example-bank.com/api/alerts?status=new \
  -H "Authorization: Bearer $STUDIO_API_KEY" -H "X-Studio-Org: example-bank"
```

See the [integration contract](../integration/contract.md).
