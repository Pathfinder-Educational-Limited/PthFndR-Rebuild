# PthFndR: search acquisition and conversion plan

Research date: 17 October 2026. Objective: qualified commissioning conversations and suitable employer briefs, alongside participant discovery.

## Evidence and limits

This is an intent-led keyword priority list derived from public search results, provider terminology and official buyer language. It is NOT a search-volume ranking. No Keyword Planner, Ahrefs keyword-volume export or Search Console query data was available for this work. Search results vary by geography and time. Validate impressions, demand and conversion after indexing; do not invent volumes or difficulty scores.

Primary sources inspected:
- National Careers Service, work experience: https://nationalcareers.service.gov.uk/careers-advice/types-of-work-experience — strengths, career exploration, soft skills and flexible experience.
- Careers & Enterprise Company provider directory: https://find-activity-provider.careersandenterprise.co.uk/search — school/college purchasing context and employability/employer-engagement categories.
- LGA, Education to Employment: https://www.local.gov.uk/publications/education-employment-supporting-youth-participation — participation, transition support, local partnership and provider/employer engagement.
- GMCA, employer participation: https://www.greatermanchester-ca.gov.uk/what-we-do/education-work-and-skills/technical-education-city-region/employers-help-shape-greater-manchester-s-future-talent/ — workplace activities, visits and projects. This is terminology evidence, not evidence PthFndR is an approved MBacc provider.
- Google JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics — static rendering, unique titles and descriptions, canonical consistency, crawlable links.
- Google rendering guidance: https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering — prefer static/server rendering over bot-specific dynamic rendering.

Public SERP examples reviewed included Manchester Young Lives, ThinkForward, Catch22 and See-Me. These establish language and competing page types, not market share or willingness to pay. An official Find a Tender results page could not be fetched; no tender eligibility or live buying opportunity is inferred.

## Priority keyword map

Order reflects fit, specificity and commercial intent, not volume.

| Priority | Query family | Intended searcher | Main destination | Conversion |
|---|---|---|---|---|
| 1 | youth employability programmes Manchester; youth employability Greater Manchester | Employment/skills commissioner; provider lead | /youth-employability-programmes-manchester | Request pilot proposal |
| 2 | commission youth employability programme; youth employment delivery partner | Commissioner; prime delivery partner | /for-organisations/partnerships | Programme scope enquiry |
| 3 | employability programmes for colleges; employability programme for training providers | Head of employability; curriculum/careers lead | /for-schools (canonical to cohort page while content is identical) | Cohort enquiry |
| 4 | NEET support programmes Greater Manchester; NEET prevention provider | Participation/post-16/youth commissioning teams | /for-organisations/social-value | Discuss cohort suitability |
| 5 | youth employment support provider; youth engagement and progression programme | Youth employment lead; youth service commissioner | /for-organisations/social-value | Commissioning brief |
| 6 | employer engagement programmes for young people | Careers/employer-engagement lead | /for-organisations | Cohort or employer project |
| 7 | work experience for 16–24 year olds Manchester | Young person; parent; referral worker | /for-young-people | Relevant current opportunities |
| 8 | short work experience projects; micro opportunities for young people | Young person; educator | /opportunities | Eligible application when open |
| 9 | host work experience; employer projects for young people | Employer early careers / social value / HR lead | /for-organisations/create-opportunities | Share employer brief |
| 10 | youth employment social value delivery | Social value manager; commissioner; contractor | /for-organisations/social-value | Discuss scoped delivery |

NEET is buyer terminology. Use people-first wording for participants. Do not target SEND-specialist provision, supported internships, apprenticeships, accredited qualifications, guaranteed jobs, free provision or Youth Guarantee/MBacc approval without a verified offer and eligibility. Do not publish near-duplicate pages for every borough.

## Implementation

- One substantial Greater Manchester landing page with the agreed six-week, 10–15-person pilot; eligibility, weekly journey, purchase scope, questions and clear enquiry action. No unapproved fixed price published.
- Metadata aligned to intent on home, buyer, employer and participant entry pages.
- Static HTML for six buyer pages, generated from the actual React page components at build time, served identically to all user agents. Other mapped pages get initial-response metadata. This is not full-site SSR.
- Identical school/cohort variants canonicalise to /for-organisations/partnerships; duplicate variants removed from sitemap.
- Buyer CTAs near the top and bottom of offer pages; links from homepage and footer to the local pilot page.
- Enquiry aliases now map to real select options; buyer messages no longer say 'apply for'; visible submission errors allow retry or email fallback.
- Consent-gated programme_enquiry_click and contact_enquiry_submitted events. Properties use page/placement, fixed roles and allowlisted interest categories, never names, email or message text. Submission event means the API accepted the request, not that a sale happened or all downstream delivery is verified.
- Unsupported progression percentages and automatic TOMs/policy-compliance claims removed from the commissioning page.

## Measure outcomes

1. Confirm the domain is verified in Search Console; submit https://pthfndr.org/sitemap.xml and inspect the local pilot and cohort URLs. Not completed in this implementation: authenticated Search Console access was not available.
2. Record a starting 28-day baseline: search impressions, clicks, non-brand queries, landing pages and enquiry counts. Track Greater Manchester and UK intent separately when data permits.
3. Review after 28 and 56 days, comparing equivalent periods. Start with impressions and indexing; ranking changes and leads may take longer. No rank or lead guarantee.
4. Manually qualify enquiries: buyer role, cohort fit, budget/funding stage, timeframe, meeting, proposal, paid pilot and repeat booking. Use the CRM, not analytics free-text properties.
5. Track consented CTA clicks and accepted enquiries by page. Do not present the ratio as all-visitor conversion: cookie refusal means partial coverage. No baseline or uplift is claimed yet.

## Next growth work

- Publish one consented, evidence-backed case study showing a real brief, learner work, employer feedback and next steps. Avoid unsupported aggregate outcome claims.
- Confirm eligible inclusion in Manchester youth opportunity listings and the Careers & Enterprise Company directory. Ask existing partners for accurate programme links on relevant pages. These listings and outreach were not submitted by this change.
- Use the six-week landing page in Nickala's commissioner introductions; bring a privately costed proposal.
- Interview the first five relevant budget holders about buying language and procurement requirements. Update the page from their actual questions.
- Prioritise a stronger existing page over extra generic blog articles. Add an employer guide or provider buying guide only where it answers a real recurring question.
