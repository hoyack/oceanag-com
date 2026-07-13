# Architecture and security

Static, dependency-light HTML/CSS/JS on Netlify (Path A). `npm run build` creates a production-only `dist/` artifact, excluding docs, tests, screenshots, and repository metadata. Netlify Forms provides subscription handling with a honeypot, consent, fixed source/offer fields, and a local success route. Security headers deny framing and unnecessary browser capabilities; CSP limits scripts, images, connections, and form actions to same-origin. Stable assets use revalidating cache policy rather than immutable year-long caching.

No secret, runtime API, database, user account, or client-side personal-data storage is required. `oceanagricultural.com` is out of scope here and becomes an HTTPS 301 only after this site is production-ready.
