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
| `threat_monitoring_findings` | Every finding of the Threat Monitoring use cases, its state and priority. |
| `run_threat_monitoring` | Run a use case: its scenarios, its triage, or both. |
| `reverse_run` | A site's reverse engineering: its analysis and indicators. |
| `kit_markers`, `markers_from_run`, `add_kit_marker`, `update_kit_marker` | Read and manage a kit's markers. |
| `hunt_kit`, `job_status` | Hunt a kit, and follow the hunt or any other background job. |
| `studio_api` | Any other route of the API. |

Every tool takes `org`, the organisation to act for.

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
