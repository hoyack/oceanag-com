# Netlify deployment and runbook

1. Review and approve the feature PR; do not merge from Prometheus scope.
2. Create or connect Netlify site to `hoyack/oceanag-com`; production branch `main`, build command `npm run build`, publish directory `dist`.
3. Deploy a review preview and confirm all routes, headers, redirects, and `field-dispatch` form detection.
4. Submit a tagged test subscription; confirm Netlify Forms receipt and notification delivery; delete the record after evidence capture.
5. Snapshot current `oceanag.com` A/AAAA/CNAME, MX, TXT, SPF, DKIM, and DMARC. Change web records only.
6. Add and verify `oceanag.com` and `www.oceanag.com`; wait for trusted HTTPS before directing traffic.
7. Enable approved analytics, synthetic homepage check, and certificate monitoring.
8. Only after production is verified, coordinate the separate `oceanagricultural.com` HTTPS 301.

## Acceptance
Trusted HTTPS; 200 on primary routes; canonical/robots/sitemap valid; form delivery proven; analytics event visible; MX/TXT unchanged; mobile/desktop screenshots; monitoring and rollback evidence recorded.
