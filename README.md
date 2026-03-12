# GIVE Interactuar — API Docs

Interactive API documentation for the **GIVE Interactuar** impact-measurement platform. Renders the OpenAPI 2.0 (Swagger) specification as an interactive UI where you can read endpoint details, explore schemas, and try requests live.

## What it is

- A **Next.js** app that serves `public/openapi.yaml` through **Swagger UI**.
- The spec documents the read-only REST API backed by **Supabase (PostgreSQL)**.
- All wire formats use `snake_case` JSON; timestamps are ISO 8601 UTC.

## API overview

| Tag | What it covers |
|---|---|
| `organizations` | Organizations and internal users |
| `entrepreneurs` | Entrepreneurs, business profiles, snapshots, financial profiles |
| `credentials` | Verifiable credentials, issuance drafts, templates |
| `forms-sync` | Form sources, raw submissions, sync run logs |
| `verification` | Credential verification records |
| `analytics` | Dashboard aggregates and entrepreneur records |
| `entrepreneur-risk` | Risk table: credit status, overdue details, accompaniment |
| `impact-credentials` | Derived impact/behavior/profile credentials |

**Base URL:** `https://give-interactuar.vercel.app/api`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — Swagger UI loads automatically.

## Editing the spec

The single source of truth is `public/openapi.yaml` (Swagger 2.0). After editing, validate before committing:

```bash
npx swagger-cli validate public/openapi.yaml
```

Then restart the dev server (or just reload the browser — Next.js serves the file statically).

## Project structure

```
public/
  openapi.yaml          # Swagger 2.0 spec — edit this to update the docs
src/app/
  page.tsx              # Header + info bar + Swagger UI mount
  components/
    SwaggerUI.tsx        # swagger-ui-react wrapper (client component)
    SwaggerUIClient.tsx  # Dynamic import with SSR disabled
api-medicion-impacto.md # Narrative API guide with query examples
```

## Deployment

Deployed on Vercel. Any push to `main` triggers an automatic deploy. The live docs are at:

```
https://give-interactuar-docs-swagger.vercel.app
```
