import { OfferingPage } from '../components/OfferingPage';

export default function YouthEmployabilityManchester() {
  return <OfferingPage
    seoTitle="Youth Employability Programmes Manchester | PthFndR"
    seoDescription="Commission a six-week employability pilot for 10–15 young people aged 16–24 in Greater Manchester: preparation, employer projects and an outcomes report."
    canonical="https://pthfndr.org/youth-employability-programmes-manchester"
    eyebrow="For commissioners, colleges & training providers"
    headline="Youth employability programmes"
    accent="in Greater Manchester."
    subhead="Commission a six-week pilot for 10–15 young people aged 16–24. Connect practical preparation with short employer projects, work evidence and an agreed next step."
    atAGlance={['6 weeks', '10–15 participants', 'Ages 16–24', 'Scoped programme fee']}
    sections={[
      { eyebrow: 'Who commissions this?', heading: 'A delivery partner for your next cohort', body: ['For local authority employment and skills teams, youth service commissioners, FE colleges, independent training providers and youth organisations looking for a defined employability intervention.', 'Based in Manchester, PthFndR works with partners to agree the cohort, referral route, delivery location and support requirements. The pilot can complement existing careers provision or employment support.'] },
      { eyebrow: 'Youth employment and NEET prevention', heading: 'Practical experience at a transition point', body: ['The pilot is designed for young people who need clearer direction, practical experience and support to explain their skills. We can discuss cohorts who are not in education, employment or training (NEET), or at risk of disengagement, where the agreed support is appropriate.', 'Eligibility, additional support and safeguarding responsibilities are agreed with the referring organisation. This is an employability programme; specialist or statutory services remain with the appropriate partners.'] },
      { eyebrow: 'Six-week delivery plan', heading: 'Discover. Develop. Deploy.', bullets: ['Week 1 — strengths, interests, starting-point reflection and personal goals.', 'Week 2 — practical preparation in communication, teamwork and responding to a brief.', 'Week 3 — understand an employer brief and plan a small team project.', 'Weeks 4–5 — complete supported project activity, present outputs and gather host feedback.', 'Week 6 — turn experience into application examples and an individual next-step plan.'], body: ['The proposed format combines a weekly two-hour session with approximately six hours of supported project activity per participant. Timings, employer availability and supervision are confirmed in the delivery proposal.'] },
      { eyebrow: 'What your budget buys', heading: 'A defined service and evidence you can review', bullets: ['Cohort onboarding, learning materials and facilitated preparation.', 'Employer brief development, project coordination and agreed supervision.', 'Participant work examples, guided reflection and employer feedback.', 'An outcomes report covering agreed measures: participation, completion, work produced and next steps.'], body: ['We agree a fixed pilot fee after discussing cohort needs, venue, delivery and reporting. Participant travel, accessibility support, project payments and any progression follow-up are specified in the proposal.'] },
      { eyebrow: 'Questions before you commission', heading: 'How does commissioning the pilot work?', body: ['Tell us about your cohort, intended outcomes, preferred start window, budget range if known and procurement requirements. We discuss suitability and prepare a scoped proposal. No live cohort or start date is assumed until agreed.'] },
      { heading: 'Is this a guaranteed job or placement?', body: ['No. The pilot focuses on practical experience, demonstrable skills and next-step planning. Employer projects depend on suitable hosts and agreed briefs. Employment and progression outcomes are tracked where agreed, rather than promised.'] },
      { heading: 'Can a college or training provider refer a group?', body: ['Yes. We can discuss a commissioned cohort through a college, school, training provider or youth organisation. Agree referral criteria and participant support with us before recruitment begins.'] },
      { heading: 'What do employers contribute?', body: ['A useful brief, a named contact and agreed feedback. Our team helps shape the activity and responsibilities. For example, a small team could test a website and present findings, or research a question and summarise recommendations.'] },
    ]}
    cta={{ headline: 'Discuss a six-week pilot for your cohort', primaryLabel: 'Request a pilot proposal', primaryTo: '/contact?role=institution&for=youth-employability-pilot', secondaryLabel: 'Explore employer projects', secondaryTo: '/for-organisations/create-opportunities' }}
  />;
}
