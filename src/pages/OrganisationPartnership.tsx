import { OfferingPage } from '../components/OfferingPage';

export default function OrganisationPartnership() {
  return (
    <OfferingPage
      seoTitle="Organisation Partnership | PthFndR"
      seoDescription="Build a long-term partnership with PthFndR — custom programmes, research collaboration, and an early talent pipeline of self-aware young professionals."
      canonical="https://pthfndr.org/for-organisations/partnerships"
      eyebrow="For Organisations"
      headline="Organisation"
      accent="Partnership."
      subhead="Go beyond one-off opportunities. Build a long-term partnership with custom programmes, research collaboration, and a pipeline of ready-to-contribute talent."
      sections={[
        {
          eyebrow: 'Ways to partner',
          heading: 'Three ways to go deeper',
          body: [
            'Whatever your goal — developing young people, gathering insight, or hiring emerging talent — there is a partnership model that fits.',
          ],
          bullets: [
            'Long-term programmes — custom facilitation, training, and curriculum design, based on scope and scale',
            'Talent pipeline — hire graduates and build an early pipeline of self-aware young professionals',
          ],
        },
        {
          eyebrow: 'Who partners with us',
          heading: 'For organisations that mean it',
          body: [
            'We work with schools, colleges, local authorities, and employers who want measurable interventions — holistic youth development, policy-aligned outcomes, and certified facilitators.',
            'Every partnership is built around real impact: did young people progress, did they get hired, are they contributing.',
          ],
        },
      ]}
      cta={{
        headline: "Let's build something lasting",
        primaryLabel: 'Start a conversation',
        primaryTo: '/contact',
        secondaryLabel: 'Post an opportunity',
        secondaryTo: '/for-organisations/create-opportunities',
      }}
    />
  );
}
