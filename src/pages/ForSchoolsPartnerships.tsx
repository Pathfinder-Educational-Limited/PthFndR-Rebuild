import { OfferingPage } from '../components/OfferingPage';

export default function ForSchoolsPartnerships() {
  return (
    <OfferingPage
      seoTitle="School Partnership Programme | PthFndR"
      seoDescription="Bring PthFndR's career development into your school — proven programmes, real employer connections, and measurable destination outcomes."
      canonical="https://pthfndr.org/for-schools/partnerships"
      eyebrow="For Schools"
      headline="School Partnership"
      accent="Programme."
      subhead="Embed PthFndR's identity-led career development into your school — with proven programmes, real employer connections, and outcomes you can measure."
      sections={[
        {
          eyebrow: 'What a partnership looks like',
          heading: 'We work alongside your careers provision',
          body: [
            "We don't parachute in and leave. We integrate our Career Accelerators and Micro-Opportunities into your existing PSHE or careers curriculum, train your team to facilitate, and stay involved throughout.",
          ],
          bullets: [
            'A dedicated PthFndR partner for your school',
            'Facilitator training and comprehensive session materials',
            'Employer connections, visits, and real placements for students',
            'Regular check-ins and progress reviews',
            'Destination-outcome tracking, not just engagement metrics',
          ],
        },
        {
          eyebrow: 'Why schools partner with us',
          heading: 'Outcomes, not activity',
          body: [
            '85% of young people completing our programmes progress to employment or further study. We measure success by real destinations — did they get hired, did they progress, are they confident about their future.',
            'Flexible integration means the partnership fits your school: 6-week intensive, 12-week part-time, or a model tailored to your cohort and timetable.',
          ],
        },
        {
          eyebrow: 'Getting started',
          heading: 'A conversation, then a pilot',
          body: [
            'It starts with a 30-minute conversation — no commitment, no sales pitch. If it feels right, we run a small pilot with a group of students so you can see the difference firsthand before launching with your full cohort.',
          ],
        },
      ]}
      cta={{
        headline: 'Bring PthFndR to your school',
        primaryLabel: 'Book a conversation',
        primaryTo: '/contact',
        secondaryLabel: 'Download school overview (PDF)',
        secondaryTo: '/PthFndR-Capability-Statement.pdf',
        secondaryExternal: true,
      }}
    />
  );
}
