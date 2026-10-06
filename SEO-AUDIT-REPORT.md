# Zoom Solutions SEO audit report

Site: https://zoomsolutions.ae/
Audit date: 26 September 2026
Scope: all public HTML pages in this repository

This report does not predict rankings and does not claim a Google top-10 position.

**Production status, checked 26 September 2026:** https://zoomsolutions.ae/ is still the GitHub Pages version last modified 18 June 2026. The SEO changes in this repository are not live. See [Production verification](#production-verification).

## 1. Executive summary

Before this pass, the site was a small static HTML site with eight public pages, valid canonicals, HTTPS URLs in the markup, and useful service content. The main problems were keyword overlap, titles that paired “UAE & Bahrain” on every page, a keywords meta tag that Google does not use, generic internal anchors, a contact page with no H1, FAQ structured data on the contact page that was not visible, and a few unsupported credential phrases (GDP, WHO-compliant, validated vehicles, qualified packaging).

The work in this pass assigns one primary keyword to each page, makes the UAE the main location signal, keeps Bahrain in body copy and the office block, aligns titles, descriptions, H1s, Open Graph and Twitter cards, and links services with descriptive anchors. Unsupported certification wording was removed. No new city pages, articles, client names, statistics, or credentials were invented.

The repository is in better shape for crawling and for matching commercial searches. It still has no measured backlink profile, the quote form opens an email rather than posting to a server, and production Lighthouse has not been run. A follow-up on the same day removed FAQPage JSON-LD, moved Manrope off CSS `@import`, and added WebP alternatives beside the original images. None of that is on the live site until the repository is pushed.

## 2. Pages audited

| URL | Page purpose | Primary keyword | SEO status |
|---|---|---|---|
| https://zoomsolutions.ae/ | Company homepage and service hub | pharma cold chain logistics UAE | Updated |
| https://zoomsolutions.ae/cold-chain-logistics/ | Refrigerated and controlled-room-temperature logistics | 2-8°C cold chain logistics UAE | Updated |
| https://zoomsolutions.ae/biological-substance-handling/ | Biological substances, UN3373, medical express, cell and gene therapy | biological substance handling UAE | Updated |
| https://zoomsolutions.ae/temperature-controlled-packaging/ | Passive packaging for healthcare shipments | temperature-controlled packaging UAE | Updated |
| https://zoomsolutions.ae/live-visibility-monitoring/ | Temperature, GPS and condition monitoring | live temperature monitoring UAE | Updated |
| https://zoomsolutions.ae/sample-collection-logistics/ | Clinical and biological sample pickup and transport | clinical sample collection UAE | Updated |
| https://zoomsolutions.ae/about/ | Company overview | Zoom Solutions | Updated |
| https://zoomsolutions.ae/contact/ | Quote request | Contact / conversion | Updated |

There is no blog, insights, or location-hub URL in the repository.

## 3. Keyword mapping

| Page | Primary keyword | Secondary keywords | Search intent | Market |
|---|---|---|---|---|
| Homepage | pharma cold chain logistics UAE | pharmaceutical logistics UAE, life science logistics UAE, healthcare logistics UAE, temperature-controlled logistics | Commercial | UAE, with Bahrain mentioned as a second office |
| Cold chain | 2-8°C cold chain logistics UAE | pharmaceutical cold chain Dubai, 2-8°C transport, 2-25°C controlled room temperature, vaccine cold chain, biologics logistics, pharma air cargo, temperature-controlled road freight | Commercial | UAE primary, Bahrain in supporting copy |
| Biological substance handling | biological substance handling UAE | biological substance Category B, UN3373 shipping UAE, biological sample transport, clinical sample transport, clinical trial specimens, cell and gene therapy logistics, medical express service | Commercial | UAE primary, Bahrain in supporting copy |
| Packaging | temperature-controlled packaging UAE | cold chain packaging UAE, 2-8°C packaging, 2-25°C packaging, passive packaging, insulated shipping, biological substance packaging, clinical sample packaging | Commercial | UAE |
| Live monitoring | live temperature monitoring UAE | real-time shipment monitoring, pharma cold chain tracking, GPS shipment tracking, temperature data logger, humidity monitoring, cold chain excursion monitoring | Commercial | UAE |
| Sample collection | clinical sample collection UAE | medical sample transport, specimen transport, biological sample pickup, clinical laboratory courier, chain of custody, temperature-controlled sample logistics | Commercial | UAE |
| About | Zoom Solutions | healthcare logistics company, UAE and Bahrain offices | Navigational / trust | UAE and Bahrain |
| Contact | Request a logistics quote | none assigned as a ranking target | Transactional | UAE and Bahrain offices |

“Pharma cold chain logistics UAE” is owned by the homepage. The cold-chain page owns the 2–8°C query and may mention the broader phrase, but its title and H1 do not target the homepage phrase as the primary.

## 4. Title tag report

Displayed titles are shown. The sample-collection source uses the HTML entity `&amp;`, which browsers show as `&`.

| Page | Previous title | New title | Reason |
|---|---|---|---|
| Homepage | Pharma Cold Chain Logistics UAE & Bahrain \| Zoom Solutions | Pharma Cold Chain Logistics UAE \| Zoom Solutions | UAE is the primary market. Bahrain stays in the page body. |
| Cold chain | 2-8°C Cold Chain Logistics UAE & Bahrain \| Zoom Solutions | 2–8°C Pharma Cold Chain Logistics UAE \| Zoom Solutions | Gives this page the 2–8°C query and stops sharing the homepage title pattern. |
| Biological handling | Biological Substance Handling UAE & Bahrain \| Zoom Solutions | Biological Substance Handling UAE \| UN3373 Logistics | Puts the primary service and UN3373 in the title without a second country. |
| Packaging | Cold Chain Packaging UAE & Bahrain \| Zoom Solutions | Temperature-Controlled Packaging UAE \| Zoom Solutions | Matches the keyword assigned to this page. |
| Monitoring | Live Temperature Monitoring UAE & Bahrain \| Zoom Solutions | Live Temperature Monitoring for Pharma Shipments \| Zoom Solutions | Describes the service. This title is 65 characters, the longest on the site. |
| Sample collection | Clinical Sample Collection UAE & Bahrain \| Zoom Solutions | Clinical Sample Collection & Transport UAE \| Zoom Solutions | Covers collection and transport, which are both on the page. |
| About | About Zoom Solutions \| Pharma Cold Chain UAE & Bahrain | About Zoom Solutions \| Healthcare Logistics Company | Stops the About page competing as another cold-chain landing page. |
| Contact | Contact Zoom Solutions \| Pharma Logistics UAE & Bahrain | Contact Zoom Solutions \| Request a Logistics Quote | Keeps the page focused on conversion. |

## 5. Meta description report

| Page | Previous description | New description |
|---|---|---|
| Homepage | Life science and pharma cold chain logistics in the UAE and Bahrain for vaccines, biologics, biological samples and live monitoring. | Pharmaceutical cold chain and life science logistics in the UAE for temperature-sensitive healthcare shipments. Request a quote from Zoom Solutions. (148 characters) |
| Cold chain | 2-8°C and 2-25°C pharmaceutical cold chain logistics in the UAE and Bahrain, with live monitoring, air cargo and road freight. | 2–8°C pharmaceutical cold chain logistics in the UAE, with 2–25°C options, air cargo, road freight and monitoring. Request a Zoom Solutions shipment plan. (154 characters) |
| Biological handling | UN3373 Category B biological substance handling in the UAE and Bahrain for clinical samples, cell and gene therapy and medical express. | Biological substance handling in the UAE for UN3373 Category B, clinical samples and cell and gene therapy materials. Request a shipment quote. (143 characters) |
| Packaging | Temperature-controlled packaging in the UAE and Bahrain for 2-8°C and 2-25°C pharma, clinical and biological shipments. | Temperature-controlled packaging in the UAE for 2–8°C and 2–25°C pharma, clinical and biological shipments. Request packaging support from Zoom Solutions. (154 characters) |
| Monitoring | Live temperature, GPS and humidity monitoring for pharma cold chain and biological shipments in the UAE and Bahrain. | Live temperature, GPS and humidity monitoring for pharmaceutical and biological shipments in the UAE. Discuss a monitoring setup with Zoom Solutions. (149 characters) |
| Sample collection | Clinical sample collection and specimen transport in the UAE and Bahrain, with temperature checks, monitoring and proof of delivery. | Clinical sample collection and specimen transport in the UAE, with temperature checks, monitoring and proof of delivery. Talk to Zoom Solutions about a pickup. (159 characters) |
| About | Zoom Solutions provides pharma cold chain, biological substance handling and life science logistics in the UAE and Bahrain. | Zoom Solutions is a healthcare logistics company in the UAE and Bahrain, supporting temperature-sensitive pharmaceutical and life science shipments. (148 characters) |
| Contact | Request a quote for pharma cold chain, biological substance handling, sample collection and live monitoring in the UAE and Bahrain. | Request a logistics quote from Zoom Solutions. Share the route, temperature range, shipment type and deadline for your pharmaceutical or biological movement. (157 characters) |

The keywords meta tag was removed from every page. Google does not use it for ranking, and the previous lists repeated the same phrases across pages.

## 6. Heading report

Each public page now has exactly one H1. Footer labels “Solutions” and “Company” are paragraphs, not headings.

### Homepage

- H1: Pharma cold chain logistics in the UAE
- Major H2s kept: cold chain transport for temperature-sensitive shipments; one logistics partner; pickup to delivery; temperature ranges; live monitoring; why Zoom Solutions; Bahrain and UAE offices; FAQ; quote CTA
- H2 changed: “Search-ready cold chain support…” became “Healthcare logistics services for UAE and Bahrain routes.”

### Cold chain

- H1: 2–8°C cold chain logistics in the UAE
- H2s preserved: temperature control, end-to-end support, pickup to proof of delivery, temperature profiles, packaging, monitoring, air and road freight, product integrity, who is supported, FAQ, quote CTA

### Biological substance handling

- H1: Biological substance handling in the UAE
- H2s preserved: sensitive materials, export and transport modes, handling process, temperature ranges, monitoring, audiences, documentation, FAQ, quote CTA

### Packaging

- H1: Temperature-controlled packaging in the UAE
- H2s preserved: why packaging matters, temperature profiles, packing process, shipment preparation, route protection, monitoring, audiences, shipment details, cold-chain plan, FAQ, quote CTA

### Live monitoring

- H1: Live temperature monitoring for pharma shipments
- H2s preserved: shipment integrity, conditions tracked, acting on risk, pickup to delivery, shipment types, condition data, why visibility matters, FAQ, quote CTA

### Sample collection

- H1: Clinical sample collection and transport in the UAE
- H2s preserved: collection process, request to proof of delivery, shipment types, quality checks, temperature ranges, packing, tracking, audiences, shipment details, FAQ, quote CTA

### About

- H1 unchanged: Precision logistics built for the future of healthcare.
- H2s unchanged, including the Bahrain and UAE office section

### Contact

- New H1, styled at the previous H2 size: Send your shipment details.
- Remaining H2: Email your shipment details

## 7. Content changes

Added:

- One sentence on the biological-substance page linking packaging and 2–8°C cold chain. The services were already described on that page.
- Descriptive link text on existing buttons and cards. The destinations did not change.

Rewritten:

- Titles, descriptions, H1s listed above.
- Homepage service-directory heading, so it no longer says “search-ready”.
- Credential language that the site does not document: “GDP-compliant” image alt, “WHO-compliant shipping process”, “validated vehicles”, “validated pickup”, “validated collection process”, “temperature-qualified packaging”, and “qualified packaging”. These now say monitoring equipment, documented process, temperature-controlled collection, controlled pickup, controlled collection, temperature-controlled packaging, or suitable packaging.

Reorganised:

- Footer labels are no longer headings, so each page has a single H1 and the footer does not add extra H2s.

Removed:

- The keywords meta tag.
- Contact-page FAQ structured data that had no matching visible FAQ.

Preserved:

- Layout, navigation labels, forms, WhatsApp widget, offices, temperature ranges 2–8°C and 2–25°C, UN3373 Category B support already stated on the site, medical express, cell and gene therapy support, process steps, images, and existing FAQs.

Not added, because the repository does not document them: GDP, WHO, IATA, or ISO certification, validated packaging, calibrated equipment, lane counts, client names, case studies, prices, or a dedicated Bahrain marketing page.

## 8. Internal linking report

The header still uses short labels so the existing navigation layout is unchanged. Descriptive anchors are used in the body and footer.

Links added or retargeted:

| Anchor | From | To |
|---|---|---|
| 2–8°C pharmaceutical cold chain logistics | Homepage, biological page, packaging page, monitoring page, about page | /cold-chain-logistics/ |
| Biological substance handling | Homepage, sample-collection page, monitoring page, about page | /biological-substance-handling/ |
| Temperature-controlled packaging | Homepage, cold-chain page, sample-collection page, biological page, monitoring page, about page | /temperature-controlled-packaging/ |
| Live shipment temperature monitoring | Homepage, cold-chain page, biological page, packaging page, sample-collection page, about page | /live-visibility-monitoring/ |
| Clinical sample collection services | Homepage, cold-chain page, biological page, monitoring page | /sample-collection-logistics/ |
| Pharmaceutical logistics UAE | Homepage service card | /cold-chain-logistics/ |
| Cold chain logistics Bahrain | Homepage service card | /cold-chain-logistics/ |
| Biological sample courier | Homepage service card | /sample-collection-logistics/ |
| UN3373 Category B support | Homepage service card | /biological-substance-handling/ |
| Temperature-controlled transport | Homepage service card | /cold-chain-logistics/ |
| Live temperature monitoring | Homepage service card | /live-visibility-monitoring/ |
| About Zoom Solutions | Homepage | /about/ |

Architecture: the homepage introduces the company and links to each service. Each service page links to the adjacent services a shipper needs next (packaging, monitoring, collection, cold chain) and to the quote page. Bahrain is reached from the homepage office block and from cold-chain copy, not from a separate URL.

“Explore Services” remains only as the homepage button that jumps to the on-page solutions section.

## 9. Technical SEO report

| Item | Status | Notes |
|---|---|---|
| HTTPS | PRODUCTION VERIFIED | Live checks on 26 September 2026: `http://zoomsolutions.ae/`, `http://www.zoomsolutions.ae/`, and `https://www.zoomsolutions.ae/` each return one 301 to `https://zoomsolutions.ae/`. |
| Preferred domain | PRODUCTION VERIFIED | The preferred host is `https://zoomsolutions.ae/`. GitHub Pages already redirects www and HTTP to that host. |
| Canonicals | PASS | Every public page has a self-referencing canonical with a trailing slash, except the homepage, which is https://zoomsolutions.ae/. |
| robots.txt | LOCAL VERIFIED / PRODUCTION 404 | The file in this repository allows crawling and points to the sitemap. `https://zoomsolutions.ae/robots.txt` returned 404 on 26 September 2026 because that file is not deployed. |
| sitemap.xml | LOCAL VERIFIED / PRODUCTION 404 | The local sitemap lists the eight indexable URLs only. `https://zoomsolutions.ae/sitemap.xml` returned 404 on 26 September 2026. |
| Indexability | PASS | All public pages use index, follow. No accidental noindex. |
| Redirects | PRODUCTION VERIFIED | GitHub Pages sends HTTP and www to `https://zoomsolutions.ae/` in one hop. There is no redirect file in the repository because the host already does this. |
| 404s | LOCAL VERIFIED | Internal links checked against files in the repository. No broken internal page links were found. Live `robots.txt` and `sitemap.xml` are 404s until deploy. |
| Duplicate URLs | PRODUCTION VERIFIED | `/cold-chain-logistics`, `/about`, and `/contact` without a slash each 301 to the slash URL. |
| Trailing slash | PRODUCTION VERIFIED | Canonicals, the local sitemap, and the live host use the trailing-slash URL. |
| Structured data | LOCAL VERIFIED | JSON-LD parses on all eight local pages. FAQPage markup was removed in the follow-up pass. The live site still has the older schema, including FAQPage. |
| Open Graph | FIXED | og:title, og:description, og:url, og:type, og:site_name, and og:image are on every public page. |
| Twitter cards | FIXED | summary_large_image cards added where they were missing. The homepage already had one and was updated. |
| Semantic HTML | FIXED | Contact page now has one H1. Footer labels are paragraphs. header, nav, main, section, and footer were already present. |
| Crawlability | PASS | Pages are static HTML. No content depends on JavaScript to appear. |

## 10. Structured data report

| Page | Schema | Properties included | Still missing |
|---|---|---|---|
| Homepage | Organization and ProfessionalService | name, url, logo, image, description, email, areaServed, two postal addresses, contact points, knowsAbout | legalName, telephone, sameAs. Do not add these until the company confirms one legal entity, a public phone number, and real social profiles. |
| Homepage | WebSite | url, name, publisher, inLanguage | — |
| Homepage | WebPage | url, name, description, image, language | — |
| Homepage | Service | name, serviceType, provider, areaServed, audience, offer catalog of the five services | — |
| Homepage | FAQPage | Removed on 26 September 2026. The visible FAQ remains. | Do not add FAQPage back for Google rich results. Google no longer shows those results. |
| Each service page | Organization | name, url, description, areaServed, email | sameAs, telephone |
| Each service page | Service | name, serviceType or description, provider, areaServed | Offer price. No prices are published. |
| Each service page | BreadcrumbList | Home and the current page | — |
| Each service page | FAQPage | Removed on 26 September 2026. The visible FAQ remains. | — |
| About | Organization with two LocalBusiness departments | Manama and Sharjah addresses and emails already on the page | sameAs, opening hours, geo coordinates |
| About | AboutPage, WebSite, BreadcrumbList | url, name, description | — |
| Contact | Organization, ContactPage, two LocalBusiness offices, BreadcrumbList | addresses and emails already on the page | FAQPage was removed because those questions were not visible |
| Contact | FAQPage | Removed earlier because the questions were not visible. Still absent. | Do not add FAQPage unless the questions are visible, and not for rich-result eligibility. |

No review or AggregateRating markup is present.

## 11. Image SEO report

- Alt text was already present on content images.
- One homepage alt that said “GDP-compliant monitoring equipment” now describes the monitoring equipment without a certification.
- One cold-chain alt that said “validated 2–8°C” now describes a refrigerated van and a 2–8°C shipment.
- Filenames were not renamed. They are already descriptive, and renaming them would require updating every srcset. Doing that in this pass had more chance of breaking images than of helping rankings.
- Most content images already use picture, width, height, and loading="lazy". Hero images are not lazy-loaded, which is correct for the first screen.
- Follow-up on 26 September 2026: 179 referenced PNG and JPEG files now have a WebP sibling at quality 82. Originals were kept. `about-hero-bg.jpg` (76 KB) stayed JPEG because the WebP was not meaningfully smaller. Picture elements list the WebP source first and keep the PNG as the fallback. Hero backgrounds use `image-set` with the PNG or JPEG still declared first for older browsers.
- Example sizes, originals unchanged: `hero-cold-chain.png` 1,823 KB and `hero-cold-chain.webp` 72 KB; `cold-chain-hero-page.png` 1,775 KB and the WebP 69 KB. The homepage intro image was checked visually after conversion and still shows the same scene.
- These WebP files are local only. The live site still serves the June PNG heroes.
- The homepage intro artwork, `assets/images/cold-chain-intro.png`, has “GDP COMPLIANT” printed inside the image. That is not supported by any certificate in the repository. The HTML no longer says it. Replacing the artwork needs a new image from the company.

## 12. Performance report

Identified in code, before the follow-up:

- Manrope was loaded with a CSS `@import` from Google Fonts. That import is discovered only after the CSS file downloads.
- Hero backgrounds were multi-megabyte PNGs.

Changed locally on 26 September 2026:

- The `@import` was removed from `style.css` and `assets/css/global.css`. Every page now has a `preconnect` and a stylesheet link for Manrope in the document head, with `display=swap`. A local check showed the page using Manrope and requesting the font file directly.
- Hero WebP files are preloaded. Supporting browsers load the WebP hero; the PNG remains the fallback.
- `assets/js/main.js` now also validates the quote form. It is still a small file at the end of the body.

Core Web Vitals: no Lighthouse or PageSpeed run was performed. Do not treat any score as measured. The live site still has the old font import and the large PNG heroes, so its LCP risk is unchanged until deploy. Locally, the likely remaining risks are the still-blocking Google Fonts stylesheet and the large original PNGs, which are downloaded only when WebP is unsupported. Contact H1 size was 32px on a 390px-wide screen.

## 13. Mobile SEO report

Checked locally in a browser.

- 1280px-wide homepage: one H1, desktop navigation visible, no horizontal overflow (scroll width matched the viewport).
- 768px-wide biological-substance page: one H1, hamburger navigation, no horizontal overflow.
- 390px-wide contact page: hamburger navigation, form fields and labels intact, H1 at 32px, no horizontal overflow.

CTAs, the quote form, and the service sections remain readable. A production check on a physical phone is still worth doing after deploy. No new horizontal scrolling was found in these three checks.

## 14. Keyword cannibalisation report

Before:

- The homepage and the cold-chain page both led with pharma cold chain plus “UAE & Bahrain”.
- Packaging, monitoring, sample collection, about, and contact also put “UAE & Bahrain” in the title.
- The homepage keywords tag listed every service keyword.

Correction:

- Homepage title and H1 own “pharma cold chain logistics UAE”.
- Cold-chain title and H1 own “2–8°C cold chain logistics” in the UAE.
- Packaging owns “temperature-controlled packaging UAE”.
- Monitoring owns live temperature monitoring for pharma shipments.
- Sample collection owns clinical sample collection and transport in the UAE.
- Biological handling owns biological substance handling and UN3373.
- About and contact no longer target the commercial cold-chain phrase as their title.

Bahrain cold chain still appears as a homepage card and in office copy. It links to the cold-chain page. It does not have its own URL, so it does not create a second competing landing page.

## 15. UAE SEO strategy

The `.ae` domain, Sharjah office address, UAE email, UAE WhatsApp link, and `en-AE` language remain in place. Titles and H1s now lead with the UAE for commercial pages. Service pages explain 2–8°C, 2–25°C, packaging, monitoring, collection, and biological handling in UAE-led headings. Internal links point those queries at the page that owns them. Bahrain is not removed; it is no longer forced into every title.

## 16. Bahrain SEO strategy

Bahrain coverage that already exists was kept:

- Head office: Zoom Solutions WLL, Office 12, Bldg 656, Road No 3625, Manama
- Email: neaz@zoombahrain.co
- WhatsApp Bahrain
- Homepage section “Bahrain and UAE offices”
- LocalBusiness markup for that address on the about and contact pages
- Cold-chain and biological copy that mentions Bahrain routes where the page already did

No `/bahrain/` page was created. The only verified Bahrain facts are the office, the email, and the statement that shipments can be planned from Bahrain. A page that swapped “UAE” for “Bahrain” would be a duplicate. A useful Bahrain page needs facts the site does not yet publish: lanes, typical pickup areas, whether the Manama office handles operations or only commercial contact, and any Bahrain-only process.

No separate UAE city page was created either. The homepage already owns “pharma cold chain logistics UAE”, and a second UAE hub would compete with it. The verified UAE location is Sharjah Research Technology & Innovation Park, not a set of city landing pages.

## 17. Missing trust signals

Collect these only if they are real. Do not publish them until they can be documented.

- Which legal entity owns the website: Zoom Solutions WLL, Zoom Solutions FZC, or both, and the matching licence
- Public telephone numbers, if they should appear beside the emails and WhatsApp links
- GDP, IATA, ISO, or health-authority approvals, with the certificate scope and date
- Whether vehicles, packaging, or loggers are validated or calibrated, and by whom
- Temperature ranges beyond 2–8°C and 2–25°C, if they are actually offered
- Photographs of the Sharjah and Manama operations, packaging, and vehicles that are the company’s own
- Named team roles and short biographies
- Monitoring screenshots from the system the company uses
- Customer permission for case studies or testimonials
- Industry memberships or exhibition participation
- Social profile URLs for Organization sameAs

## 18. Content roadmap

Do not publish these until the operations team can review the facts. The site has no article template, so these should wait until a simple resources section exists.

| Priority | Article | Target keyword | Search intent | Internal link destination |
|---|---|---|---|---|
| 1 | How Zoom Solutions plans a 2–8°C pharmaceutical shipment | 2-8°C cold chain logistics UAE | Commercial investigation | /cold-chain-logistics/ |
| 2 | 2–8°C and 2–25°C: how a shipment range is chosen | 2-25°C pharmaceutical transport | Informational | /cold-chain-logistics/ and /temperature-controlled-packaging/ |
| 3 | What to send before a UN3373 Category B shipment | UN3373 shipping UAE | Informational | /biological-substance-handling/ |
| 4 | Clinical sample collection and chain of custody | clinical sample transport UAE | Commercial investigation | /sample-collection-logistics/ |
| 5 | How passive cold-chain packaging is selected | temperature-controlled packaging UAE | Informational | /temperature-controlled-packaging/ |
| 6 | What live temperature monitoring shows during transit | live temperature monitoring UAE | Informational | /live-visibility-monitoring/ |
| 7 | Vaccine shipments: what the quote request needs | vaccine logistics UAE | Commercial investigation | /cold-chain-logistics/ |
| 8 | Biologics shipments: temperature, route, and monitoring | biologics logistics UAE | Commercial investigation | /cold-chain-logistics/ |
| 9 | Cell and gene therapy materials: what can be planned today | cell and gene therapy logistics UAE | Commercial investigation | /biological-substance-handling/ |
| 10 | Air cargo and road freight for healthcare shipments | pharma air cargo UAE | Informational | /cold-chain-logistics/ |

## 19. Backlink strategy

Pursue links that a real partner would place. Do not buy link packages.

- Pharmaceutical and life-science associations in the UAE and Bahrain, if membership is real
- Logistics and freight associations the company actually belongs to
- Hospitals, laboratories, or distributors who agree to a factual case mention
- Packaging, airline-cargo, or monitoring suppliers who list Zoom Solutions as a customer
- Sharjah Research Technology & Innovation Park or Bahrain business directories that list the real office
- Exhibition or conference pages where the company is an exhibitor or speaker
- Trade publications, only for a reported shipment or an interview that can be fact-checked

## 20. Google Search Console actions

After this version is deployed:

1. Add the domain property for zoomsolutions.ae if it is not already verified.
2. Submit https://zoomsolutions.ae/sitemap.xml.
3. Use URL Inspection on the homepage and each service URL, then request indexing.
4. Open the Page indexing report after the next crawl and confirm the eight URLs are indexed.
5. Open Experience, then Core Web Vitals, after the pages have field data.
6. Open Performance and track the queries in section 21 by page.
7. Check Manual actions and Security issues.
8. Check the HTTPS report.
9. Test the homepage and one service page in the Rich Results Test. Expect Organization, Service, Breadcrumb, and FAQ where those are visible. Do not expect review stars.
10. In Google Business Profile, confirm the Sharjah and Manama listings match the addresses on the site, if those profiles exist.

## 21. Keywords to monitor

### High priority commercial

- pharma cold chain logistics UAE
- pharmaceutical cold chain Dubai
- pharmaceutical logistics UAE
- life science logistics UAE
- healthcare logistics UAE
- 2-8°C cold chain logistics UAE
- cold chain logistics Bahrain
- temperature-controlled transport UAE

### Specialist

- biological substance handling UAE
- UN3373 shipping UAE
- biological sample transport UAE
- clinical sample collection UAE
- clinical sample transport UAE
- vaccine logistics UAE
- biologics logistics UAE
- temperature-controlled packaging UAE
- pharma cold chain packaging UAE
- live temperature monitoring UAE
- pharma shipment tracking UAE
- medical express UAE

### Informational

- what is biological substance category B
- UN3373 packing requirements
- 2-8°C vs 15-25°C pharmaceutical transport
- how cold chain packaging works
- cold chain temperature excursion
- clinical sample chain of custody
- cell and gene therapy shipment requirements

## 22. Top remaining SEO priorities

### Critical

- Deploy these files to https://zoomsolutions.ae/.
- Confirm one host: https://zoomsolutions.ae/ without a second indexable www or HTTP version.
- Submit the sitemap and request indexing.
- Connect the contact form to a real inbox. The page already says the form is not connected to a backend.

### High priority, next 30 days

- Run PageSpeed Insights on the live homepage and one service page.
- Replace the Google Fonts `@import` with a non-blocking font load if the test shows it delays the hero.
- Add a public phone number and confirmed legal name only if the company wants them published.
- Create or correct Google Business Profiles for the real Sharjah and Manama locations.

### Medium priority, 60–90 days

- Gather the trust documents in section 17.
- Decide whether a Bahrain page is justified once Bahrain-specific operations can be described in detail.
- Compress or convert the largest PNGs after a visual check.

### Long term

- Publish the articles in section 18 only after factual review.
- Earn the partner and association links in section 19.
- Review Search Console queries quarterly and adjust the page that already owns the query. Do not create a new page for a phrase an existing page should own.

## 23. Deployment checklist

- [x] Pages load locally as static HTML. There is no separate production build step in this repository.
- [x] Public pages checked for one H1, a title, a description, a canonical, index,follow, Open Graph, and valid JSON-LD
- [x] Desktop homepage checked at about 1280px
- [x] Tablet biological-substance page checked at 768px
- [x] Mobile contact page checked at 390px
- [x] Contact form fields, labels, and service select are present
- [x] HTTPS confirmed on the live host. The live pages are still the 18 June 2026 version.
- [x] Canonicals confirmed in the local HTML. Live canonicals still point at the same URLs, with the old titles.
- [x] Local sitemap confirmed. Live sitemap is a 404.
- [x] Local robots.txt confirmed. Live robots.txt is a 404.
- [x] Local structured data parses. Live structured data is the older graph.
- [x] No accidental noindex on the live pages that were fetched
- [x] No broken internal page links found in the repository
- [x] Open Graph images point at files that exist in the repository
- [ ] Push `main` to GitHub so GitHub Pages publishes this repository
- [ ] Google Search Console sitemap submission required after that deploy
- [ ] Google Business Profile review required
- [ ] Production PageSpeed / Lighthouse test required after deploy

The local quote form opens an email to ebrahim@zoomsolutions.ae. It does not store the inquiry on a server. The live form still posts nowhere.

## Production verification

Checked: 26 September 2026, from this environment, against the public URLs. Local checks used `http://localhost:8765/`.

| Check | Result |
|---|---|
| Deployment status | NOT DEPLOYED. GitHub Pages serves commit content last modified Thu, 18 Jun 2026 12:21:04 GMT. `main` matches `origin/main`, and the SEO edits are uncommitted local changes. |
| Production URL checked | https://zoomsolutions.ae/ and the seven inner pages, plus robots.txt and sitemap.xml |
| Date checked | 26 September 2026 |
| Titles verified | PRODUCTION: old titles, including “Pharma Cold Chain Logistics UAE & Bahrain”. LOCAL: the UAE titles in this report. |
| Headings verified | PRODUCTION homepage H1: “Pharma Cold Chain Logistics in UAE & Bahrain”. LOCAL homepage H1: “Pharma cold chain logistics in the UAE”. Contact has an H1 locally and no H1 on the live page. |
| Redirects verified | PRODUCTION VERIFIED. One 301 from HTTP apex, HTTP www, and HTTPS www to https://zoomsolutions.ae/. No redirect chain. |
| Structured data verified | PRODUCTION still includes FAQPage. LOCAL JSON-LD parses and no longer includes FAQPage. Visible FAQ sections remain. |
| Sitemap verified | LOCAL file lists eight URLs. PRODUCTION https://zoomsolutions.ae/sitemap.xml is 404. |
| Robots verified | LOCAL file allows `/` and names the sitemap. PRODUCTION https://zoomsolutions.ae/robots.txt is 404. Live pages still send `index, follow`. No accidental noindex. |
| Contact form status | PRODUCTION: `action="#"` and the old “needs to be connected” note. LOCAL: client-side validation, a honeypot, and a mailto to ebrahim@zoomsolutions.ae. There is still no server. |
| Performance status | LOCAL: font `@import` removed; WebP heroes preload. PRODUCTION: unchanged June assets. No Lighthouse score was measured. |
| Remaining warnings | Live copy still contains GDP-compliant, qualified packaging, validated vehicles, validated pickup, and “Search-ready cold chain”. The local homepage intro image still shows “GDP COMPLIANT” inside the artwork. |

### Live wording still present

| URL | Phrases found in the live HTML |
|---|---|
| https://zoomsolutions.ae/ | GDP-compliant, validated vehicles, validated pickup, qualified packaging, Search-ready cold chain |
| https://zoomsolutions.ae/cold-chain-logistics/ | qualified packaging |
| https://zoomsolutions.ae/about/ | WHO-compliant, qualified packaging |
| https://zoomsolutions.ae/biological-substance-handling/ | none of those phrases |
| https://zoomsolutions.ae/temperature-controlled-packaging/ | none of those phrases |
| https://zoomsolutions.ae/live-visibility-monitoring/ | none of those phrases |
| https://zoomsolutions.ae/sample-collection-logistics/ | none of those phrases |
| https://zoomsolutions.ae/contact/ | none of those phrases. The live contact page has no H1. |

A text search of the repository found those phrases only in this report, as a record of what was removed. There is no certificate, licence, or other document in the repository that supports GDP, WHO, validated vehicles, validated pickup, or qualified packaging.

### How this site is deployed

- Host: GitHub Pages. DNS for `zoomsolutions.ae` uses the GitHub Pages A records `185.199.108.153`–`185.199.111.153`. `www` is a CNAME to `zoombahrainservices-lab.github.io`. Nameservers are `ns3.tasjeel.ae` and `ns4.tasjeel.ae`, not Cloudflare.
- Repository remote: `https://github.com/zoombahrainservices-lab/zoom-solutions-ae.git`, branch `main`.
- `CNAME` contains `zoomsolutions.ae`.
- There is no `.htaccess`, Netlify, Vercel, Wrangler, or GitHub Actions file. Host redirects are already done by GitHub Pages, so none were added.
- GitHub CLI is not signed in here, so this environment cannot push.

Publish with:

```powershell
git add index.html about contact cold-chain-logistics biological-substance-handling temperature-controlled-packaging live-visibility-monitoring sample-collection-logistics assets robots.txt sitemap.xml SEO-AUDIT-REPORT.md SEO-SEARCH-CONSOLE-CHECKLIST.md SEO-RANKING-BASELINE.md
git commit -m "Publish the UAE SEO update, WebP images, and quote-form email handoff."
git push origin main
```

Wait until GitHub Pages finishes, then re-check the live title. Do not treat the site as updated until `https://zoomsolutions.ae/` shows `Pharma Cold Chain Logistics UAE | Zoom Solutions`.
