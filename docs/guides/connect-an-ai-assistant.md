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

On the machine where the Studio runs, in the Studio's folder:

```bash
python3 tools/api_keys.py create --name "AI assistant" --user <your user id>
```

- The key is shown **once**. Copy it; the Studio keeps only a fingerprint of it.
- `--org <organisation>` holds the key to one organisation. Without it, the key acts for any organisation the user may
  see, chosen on each call.
- `python3 tools/api_keys.py list` lists the keys and when each was last used. `python3 tools/api_keys.py revoke <id>`
  stops one at once.

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
