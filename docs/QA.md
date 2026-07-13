# QA evidence

## Review artifact

- Temporary content preview: https://oceanag-preview.malleable-tracker.workers.dev
- Desktop screenshot: `docs/screenshots/home-desktop.png` (1440 px)
- Mobile screenshot: `docs/screenshots/home-mobile.png` (390 px)
- The review URL is a temporary Cloudflare content preview because this runtime has no Netlify authentication. Production remains Netlify Path A; Netlify Forms, configured headers, DNS, and production HTTPS require the CTO deployment gate.

## Automated verification

Verified on July 12–13, 2026 UTC:

- `npm run validate`: HTML validation passed.
- `npm run test:static`: 10 pages, all local links, exact ag-ops concept lock, claims boundary, Hoyack footer, and Netlify form contract passed.
- `BASE_URL=http://127.0.0.1:4273 npm test`: all 10 routes passed at 1440×900 and 390×844; mobile menu and form controls passed; zero console errors.
- `BASE_URL=https://oceanag-preview.malleable-tracker.workers.dev npm test`: all 10 preview routes passed at both viewports with zero console errors.
- Lighthouse 13.0.3, local final homepage: Performance 100, Accessibility 100, Best Practices 100, SEO 100.
- `npm audit --audit-level=high`: 0 known vulnerabilities.
- Calendly CTA: HTTPS 200 with `utm_source=oceanag` preserved.
- `npm run build`: 17 deployable files in `dist/`; docs, tests, screenshots, environment examples, package metadata, and build scripts excluded.
- Preview publish check: `/` returns 200; `/scripts/build.mjs` returns 404.

## Manual visual review

Desktop and mobile full-page screenshots were inspected for clipping, overflow, navigation, type hierarchy, contrast, CTA visibility, and responsive layout. No clipping or horizontal overflow was found. The final Lighthouse pass confirms the repaired dispatch eyebrow contrast and brand-link accessible name.

Slop diagnostic after repair: **0/10**. No tech gradient, generic indigo, generic icon-tile feature grid, accent rails, glass blur, monument stats, icon toppers, center-stack composition, default Inter typography, or surface mismatch. The page uses a Decide/Learn editorial field-memo composition.

## Production-only acceptance gates

Before closure, CTO/operations must provide: approved merge; Netlify deploy and form-detection proof; tagged form-delivery evidence; production analytics event evidence; web-DNS before/after snapshot with MX/TXT/SPF/DKIM/DMARC preserved; trusted HTTPS; synthetic monitoring; and rollback evidence. Only then should `oceanagricultural.com` be cut over as a separate HTTPS 301.
