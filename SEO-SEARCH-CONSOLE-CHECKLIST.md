# Google Search Console checklist

Site: https://zoomsolutions.ae/
Prepared: 26 September 2026

Status on 6 October 2026: the sitemap is in the repository, including the blog, freight forwarding, warehousing and privacy URLs. Search Console itself is not verified from this repository. Domain verification still needs the TXT record Google shows, added at the DNS host (`ns3.tasjeel.ae` and `ns4.tasjeel.ae`). Page measurement uses the existing Google Analytics 4 property `G-KWK96N34RF`. Filter reports by the hostname `zoomsolutions.ae`.

The quote form now posts to ebrahim@zoomsolutions.ae and copies neaz@zoombahrain.co. The first delivery needs the UAE inbox to open FormSubmit’s confirmation email.

Do this after the updated repository is on GitHub Pages and the live homepage title is `Pharma Cold Chain Logistics UAE | Zoom Solutions`. Submitting the sitemap before that deploy will ask Google to index the June 2026 pages.

Search Console: https://search.google.com/search-console

## 1. Domain property verification

1. Add a property.
2. Choose **Domain** and enter `zoomsolutions.ae`.
3. Copy the TXT record Google shows.
4. Add that TXT record at the DNS host for `zoomsolutions.ae`. The nameservers are `ns3.tasjeel.ae` and `ns4.tasjeel.ae`.
5. Wait for DNS, then click **Verify**.

A URL-prefix property for `https://zoomsolutions.ae/` is a fallback if the DNS record cannot be added. The domain property also covers `www` and `http`.

## 2. Sitemap submission

1. Open the domain property.
2. Go to **Sitemaps**.
3. Submit: `https://zoomsolutions.ae/sitemap.xml`
4. Confirm the status is Success and that it reports 8 URLs.

On 26 September 2026 that URL returned 404. Submit it only after the file is live.

## 3. Homepage URL inspection

Inspect:

https://zoomsolutions.ae/

Confirm:

- Google shows the title `Pharma Cold Chain Logistics UAE | Zoom Solutions`
- The page is on HTTPS
- The canonical is `https://zoomsolutions.ae/`
- The user-declared canonical matches the Google-selected canonical

## 4. Service-page URL inspection

Inspect each URL:

- https://zoomsolutions.ae/cold-chain-logistics/
- https://zoomsolutions.ae/biological-substance-handling/
- https://zoomsolutions.ae/temperature-controlled-packaging/
- https://zoomsolutions.ae/live-visibility-monitoring/
- https://zoomsolutions.ae/sample-collection-logistics/
- https://zoomsolutions.ae/about/
- https://zoomsolutions.ae/contact/

Confirm the live title matches the repository, the canonical has the trailing slash, and the page is indexable.

## 5. Request indexing

For each URL in sections 3 and 4, use **Request indexing** after the inspected HTML shows the new title. Requesting indexing of the old HTML does not publish the new copy.

## 6. Page indexing report

Open **Pages** (page indexing).

Check:

- The eight URLs are indexed, or are waiting after the new request
- No unexpected “Crawled – currently not indexed” or “Duplicate without user-selected canonical” for these URLs
- `robots.txt` is no longer a 404
- There is no excluded copy on `www` or `http`

## 7. HTTPS report

Open **HTTPS**.

Confirm the property has no HTTP URLs indexed as the canonical version. Live checks on 26 September 2026 already showed one 301 from HTTP and from `www` to `https://zoomsolutions.ae/`.

## 8. Core Web Vitals

Open **Core Web Vitals** for mobile and desktop.

This repository has no measured Lighthouse score. Use the report Google collects from Chrome, and run PageSpeed Insights on the homepage and one service page after deploy:

https://pagespeed.web.dev/

Record the real LCP, INP, and CLS. Do not copy a guessed score into the ranking file.

## 9. Search Performance

Open **Performance**.

After the property has data, export queries and fill `SEO-RANKING-BASELINE.md`. Filter by page to see which URL Google shows for each query. Leave the baseline blank until that export exists.

## 10. Manual Actions

Open **Security & Manual Actions** → **Manual actions**.

The expected state is: no manual actions. If one is listed, do not request a new review until the stated issue is fixed.

## 11. Security Issues

Open **Security & Manual Actions** → **Security issues**.

The expected state is: no security issues. Also open the HTTPS report if browsers show a certificate warning. GitHub Pages is the certificate provider for this domain.
