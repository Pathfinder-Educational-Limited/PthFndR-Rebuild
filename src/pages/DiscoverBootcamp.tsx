import { OfferingPage } from '../components/OfferingPage';

export default function DiscoverBootcamp() {
  return (
    <OfferingPage
      seoTitle="Discover Bootcamp | PthFndR"
      seoDescription="A 6 week programme that helps a young person work out who they are, what they value, and where that translates into real opportunity. Built on the Trapezium Model. Free for the young person."
      canonical="https://pthfndr.org/programmes/discover-bootcamp"
      eyebrow="For Young People, Schools & Organisations"
      headline="Discover"
      accent="Bootcamp."
      subhead="Six weeks to work out who you are, what you actually value, and where that turns into a real next step."
      sections={[
        {
          eyebrow: 'The idea',
          heading: 'Clarity before direction',
          body: [
            'Most career advice starts with "what job do you want," before a young person has had the chance to work out what they\u2019re actually good at, what they value, or where they can add real value to someone else.',
            'Discover Bootcamp starts earlier than that. It\u2019s six weeks built on the Trapezium Model, our approach to helping a young person recognise what they already bring, articulate it clearly, and translate it into a real direction.',
          ],
          bullets: [
            '6 week structured programme',
            'Built on the Trapezium Model',
            'Delivered by PthFndR\u2019s founding team',
            'Free for the young person, every time',
            'Ends with a practical job search strategy, not just self-reflection',
          ],
        },
        {
          eyebrow: 'The programme',
          heading: 'Discover, Develop, Deploy',
          body: [
            'The bootcamp follows the same three-phase structure as everything PthFndR delivers.',
          ],
          bullets: [
            'Discover (Weeks 1-2): identity work. What does this young person already do well? Where does their value actually sit?',
            'Develop (Weeks 3-4): turning that self-understanding into transferable skills, communication, problem-solving, working with others, presenting ideas clearly.',
            'Deploy (Weeks 5-6): four focused modules, LinkedIn & Search Strategy, Direct Outreach, CV That Works, and Using AI Well.',
          ],
        },
        {
          eyebrow: 'Your tutors',
          heading: 'Led by PthFndR\u2019s founding team',
          body: [
            'Discover Bootcamp is delivered by Olayiwola Iyiola, Founder of PthFndR, and Grace Iyiola-Jacobs, Co-Founder and current People Partner at Sainsbury\u2019s. Between them, over 35 years of leadership development and people development experience, brought directly into the room.',
          ],
        },
        {
          eyebrow: 'The outcome',
          heading: 'A clearer next step, not just a certificate',
          body: [
            '223 young people have already come through PthFndR\u2019s programmes, with 95% progressing to work or further education. Discover Bootcamp is built to be the starting point for that progression.',
          ],
          bullets: [
            'Certificate on completion',
            'Personalised reference letter',
            'Access to the PthFndR alumni Discord community',
            'AI tutor support throughout',
          ],
        },
      ]}
      cta={{
        headline: 'Bring Discover Bootcamp to your organisation',
        primaryLabel: 'Book a Conversation',
        primaryTo: '/contact?for=Discover+Bootcamp',
        secondaryLabel: 'See all Upskill Accelerators',
        secondaryTo: '/programmes/upskill-accelerators',
      }}
    />
  );
}
