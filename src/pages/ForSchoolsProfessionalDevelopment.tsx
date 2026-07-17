import { OfferingPage } from '../components/OfferingPage';

export default function ForSchoolsProfessionalDevelopment() {
  return (
    <OfferingPage
      seoTitle="Professional Development for Schools | PthFndR"
      seoDescription="Equip your careers team and educators to deliver identity-led, outcomes-focused career development with PthFndR training and resources."
      canonical="https://pthfndr.org/for-schools/professional-development"
      eyebrow="For Schools"
      headline="Professional"
      accent="Development."
      subhead="Equip your careers leads and educators to deliver identity-led, outcomes-focused development — with training, facilitator resources, and ongoing support."
      sections={[
        {
          eyebrow: 'CPD for your team',
          heading: 'Confident facilitators, better outcomes',
          body: [
            'The strongest careers provision is delivered by staff who feel equipped and supported. We train your team to facilitate identity, capability, and opportunity sessions using the Trapezium Model™ — so the work continues long after we do.',
          ],
          bullets: [
            'Practical training in the Trapezium Model™ and Ginosko-Sterizo® approach',
            'Facilitator guides and ready-to-run session plans',
            'Student-facing materials and resources',
            'Ongoing check-ins and refreshers with your dedicated partner',
          ],
        },
        {
          eyebrow: 'How it works',
          heading: 'Built around your calendar',
          body: [
            'We deliver CPD in a format that fits your school — twilight sessions, INSET days, or a rolling programme across a term. Every session is practical and immediately usable in the classroom.',
            'Development can run standalone, or alongside a School Partnership so your team is ready to deliver our programmes directly.',
          ],
        },
      ]}
      cta={{
        headline: 'Invest in your team',
        primaryLabel: 'Talk to us about CPD',
        primaryTo: '/contact',
        secondaryLabel: 'Explore school partnerships',
        secondaryTo: '/for-schools/partnerships',
      }}
    />
  );
}
