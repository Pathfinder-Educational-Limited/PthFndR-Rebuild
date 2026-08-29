import { OfferingPage } from '../components/OfferingPage';

export default function CreateOpportunities() {
  return (
    <OfferingPage
      seoTitle="Create Opportunities | PthFndR"
      seoDescription="Post micro-opportunities, projects and micro-internships to a vetted community of engaged young people ready to contribute to your organisation."
      canonical="https://pthfndr.org/for-organisations/create-opportunities"
      eyebrow="For Organisations"
      headline="Create"
      accent="Opportunities."
      subhead="Post real, bite-sized work to a vetted community of engaged young people — and get authentic feedback, fresh talent, and genuine social impact in return."
      sections={[
        {
          eyebrow: 'What you can post',
          heading: 'Real work, right-sized',
          body: [
            'Opportunities can be as small as a single afternoon or as involved as a multi-day project. If it gives a young person real experience and gives you real value, it belongs here.',
          ],
          bullets: [
            '1-day events and workshops',
            '2-5 day projects and micro-internships',
            'Beta testing and user-research sessions',
            'Focus groups with your future customers',
          ],
        },
        {
          eyebrow: 'Why post with us',
          heading: 'More than a job board',
          body: [
            'Every young person in our community is vetted and genuinely engaged. You get authentic feedback and real talent discovery — and you actively contribute to creating genuine opportunities for young people, strengthening your ESG and social-value credentials.',
          ],
        },
        {
          eyebrow: 'Getting started',
          heading: 'Tell us what you need',
          body: [
            "Posting is free. Tell us the kind of opportunity you'd like to run and we'll help you shape it, match it to the right young people, and get it live.",
          ],
        },
      ]}
      cta={{
        headline: 'Post your first opportunity',
        primaryLabel: 'Get started',
        primaryTo: '/for-organisations/signup',
        secondaryLabel: 'Explore partnerships',
        secondaryTo: '/for-organisations/partnerships',
      }}
    />
  );
}
