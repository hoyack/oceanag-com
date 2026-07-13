# Analytics contract

The implementation initializes a first-party `dataLayer` and emits conversion events without personal or free-form form data. Netlify Web Analytics is the preferred production pageview source after CTO approval; no analytics secret belongs in the repository.

## Events
- `hero_subscribe`, `header_subscribe`, `footer_subscribe`, `dispatch_subscribe`
- `field_dispatch_submit`
- `hero_talk`, `contact_calendly`, `contact_email`

## Weekly scorecard
Unique visitors, route views, CTA clicks, completed subscriptions, subscription conversion rate, source/UTM, qualified conversations, and corrections. Never send names, emails, role values, or message text to analytics.
