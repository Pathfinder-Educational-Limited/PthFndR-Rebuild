// JSON-LD structured data (schema.org). Rendered as inline <script> tags —
// React 19 keeps them in place; search engines read JSON-LD anywhere in the DOM.
// NOTE: telephone is intentionally omitted from all schemas to keep the number
// out of machine-readable markup (consistent with the anti-spam decision — the
// number is reachable only via the click-to-call / WhatsApp links).

const ORIGIN = 'https://pthfndr.org';

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ── Global (rendered once in MainLayout) ───────────────────────────────────────
export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'PthFndR',
        description:
          'Youth development platform connecting young people with real opportunities, mentorship, and career pathways. We help young people discover their identity, build skills, and access employment.',
        url: ORIGIN,
        logo: `${ORIGIN}/logos/pthfndr-favicon.png`,
        sameAs: [
          'https://www.linkedin.com/company/pthfndrconnect',
          'https://www.instagram.com/pthfndrconnect',
          'https://www.facebook.com/pthfndrconnect',
          'https://x.com/PthFndRconnect',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'hello@pthfndr.org',
          availableLanguage: 'en-GB',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Heron House (DiSH), 47 Lloyd Street',
          addressLocality: 'Manchester',
          postalCode: 'M2 5LE',
          addressCountry: 'GB',
        },
        foundingDate: '2024-04-19',
        founder: [{ '@type': 'Person', name: 'Olayiwola Iyiola' }],
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        knowsAbout: ['Youth Development', 'Career Development', 'Employment Services', 'Mentorship', 'Skills Training'],
      }}
    />
  );
}

// ── Home ───────────────────────────────────────────────────────────────────────
export function HomePageSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'PthFndR - Discover. Develop. Deploy.',
        description:
          'PthFndR helps young people aged 16 to 24 discover who they are, develop the skills and confidence to move forward, and deploy that potential into real opportunity.',
        url: `${ORIGIN}/`,
        isPartOf: { '@type': 'WebSite', name: 'PthFndR', url: ORIGIN },
        mainEntity: {
          '@type': 'EducationalOrganization',
          name: 'PthFndR',
          description: 'Youth development and career acceleration platform',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` }],
        },
      }}
    />
  );
}

// ── Upskill Accelerators (Course) ──────────────────────────────────────────────
// aggregateRating + review omitted on purpose: shipping fabricated ratings/reviews
// violates Google's structured-data policy. Add real, verifiable data to re-enable.
export function ProgrammeSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Upskill Accelerators - 6-Week Intensive Programme',
        description:
          'Sector-specific skill-building across Cyber, Digital Marketing, Construction, or a General track. 6-week intensive programme combining self-discovery, skill-building, and real employer engagement.',
        url: `${ORIGIN}/programmes/upskill-accelerators`,
        provider: { '@type': 'EducationalOrganization', name: 'PthFndR', sameAs: ORIGIN },
        courseCode: 'UA-001',
        timeRequired: 'P6W',
        educationalLevel: 'Secondary/PostSecondary',
        inLanguage: 'en-GB',
        teaches: [
          'Career Planning',
          'Self-Discovery',
          'Professional Skills',
          'Interview Preparation',
          'CV Writing',
          'Employer Engagement',
          'Portfolio Development',
        ],
      }}
    />
  );
}

// ── Opportunities (CollectionPage) ─────────────────────────────────────────────
export function OpportunitiesListSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Opportunities - Real Work Experience',
        description:
          'Browse real work opportunities, internships, and micro-projects. Build portfolio evidence, earn experience, and connect with employers.',
        url: `${ORIGIN}/opportunities`,
        isPartOf: { '@type': 'WebSite', name: 'PthFndR', url: ORIGIN },
        mainEntity: { '@type': 'ItemList', name: 'Available Opportunities' },
      }}
    />
  );
}

// ── Community ──────────────────────────────────────────────────────────────────
export function CommunitySchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'PthFndR Community - Connect, Learn, Grow, Explore',
        description:
          'Join the PthFndR Community of young people building their futures. Connect with peers, access exclusive opportunities, get mentorship, and discover your potential.',
        url: `${ORIGIN}/community`,
        mainEntity: {
          '@type': 'OnlineBusiness',
          name: 'PthFndR Community',
          description: 'Peer network and mentorship platform for young people',
          provider: { '@type': 'EducationalOrganization', name: 'PthFndR' },
        },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free community membership' },
      }}
    />
  );
}

// ── About ──────────────────────────────────────────────────────────────────────
export function AboutPageSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About PthFndR',
        description:
          "Learn about PthFndR's mission to help young people own their futures through identity discovery, skill development, and real opportunities.",
        url: `${ORIGIN}/about`,
        mainEntity: {
          '@type': 'EducationalOrganization',
          name: 'PthFndR',
          description:
            'Youth development platform connecting young people with real opportunities and mentorship',
          slogan: 'Discover. Develop. Deploy.',
          foundingDate: '2024-04-19',
          areaServed: 'United Kingdom',
        },
      }}
    />
  );
}

// ── Contact ────────────────────────────────────────────────────────────────────
export function ContactPageSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact PthFndR',
        description:
          'Get in touch with PthFndR. Questions about programmes, partnerships, or joining the community?',
        url: `${ORIGIN}/contact`,
        mainEntity: {
          '@type': 'Organization',
          name: 'PthFndR',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'hello@pthfndr.org',
            availableLanguage: 'en-GB',
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Heron House (DiSH), 47 Lloyd Street',
            addressLocality: 'Manchester',
            postalCode: 'M2 5LE',
            addressCountry: 'GB',
          },
        },
      }}
    />
  );
}
