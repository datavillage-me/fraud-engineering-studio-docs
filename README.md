# Fraud Engineering Studio — documentation

The public documentation of the Fraud Engineering Studio by Datavillage: concepts, processes, guides and the API.
Built with [Docusaurus](https://docusaurus.io) and
[docusaurus-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs); published on GitHub Pages.

```bash
npm install
npm start            # http://localhost:3000/fraud-engineering-studio-docs/
npm run build        # the static site in build/
```

## Content

| Folder | What |
|---|---|
| `docs/` | Overview, concepts, processes |
| `docs/guides/` | Step-by-step guides |
| `docs/integration/` | The integration contract |
| `openapi/openapi.yaml` | The Studio's API contract — a copy of `studio/openapi.yaml` |
| `src/pages/whats-new.md` | What's new |

The API reference (`docs/api/`) is generated from `openapi/openapi.yaml` at build time; it is not committed.

## When the Studio's API changes

```bash
npm run sync-api     # copies ../studio/openapi.yaml (or: npm run sync-api -- <path>)
```

Commit the copy with the docs. In the Studio, `python3 tools/check_openapi.py` checks the contract against the routes
the server declares.

## Writing

- English, plain words, short sentences. The UI's labels in **bold**, exactly as on screen.
- Generic examples only: Example Bank, example-bank-secure.com — never a client's name or data.
- Guides: **Where:**, then numbered steps, one action each.

## Publishing

GitHub Pages, from `.github/workflows/deploy.yml` on every push to `main`. In the repository's settings, Pages ›
Source: **GitHub Actions**.
