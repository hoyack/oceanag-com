# OceanAG

Production-ready static MVP for [oceanag.com](https://oceanag.com): practical agricultural operations intelligence for growers, co-ops, and ag operators.

## Run and verify

```bash
npm ci
npx playwright install chromium
npm run test:all
```

The site is plain HTML/CSS/JS. `npm run build` creates the production-only `dist/` artifact; Netlify publishes that directory. The feature branch is intentionally reviewed through a PR before merge. No secrets are required or committed.

## Product boundary

OceanAG is agricultural operations intelligence—not marine/blue-economy media, commodity AgTech copy, or professional agronomic advice. `oceanagricultural.com` is handled separately as a post-launch HTTPS 301 to this domain.

See `docs/` for concept, analytics, content operations, CRO, architecture, deployment, monitoring, rollback, and review evidence.
