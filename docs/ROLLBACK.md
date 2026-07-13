# Rollback

Before DNS change, preserve the prior web DNS records and Netlify deploy ID. If the release fails: restore the previous Netlify deploy first; if domain routing or TLS remains broken, restore only the prior web A/AAAA/CNAME records. Never modify MX/TXT/SPF/DKIM/DMARC during rollback. Verify trusted HTTPS, expected title, forms, and mail DNS after recovery.
