import { OfferingPage } from '../components/OfferingPage';

export default function UpskillAccelerators() {
  return (
    <OfferingPage
      seoTitle="Upskill Accelerators | PthFndR"
      seoDescription="A 6 week programme that builds real, usable skills in a specific field, or helps a young person figure out which field is right for them. Free, every time."
      canonical="https://pthfndr.org/programmes/upskill-accelerators"
      eyebrow="For Young People, Schools & Organisations"
      headline="Upskill"
      accent="Accelerators."
      subhead="A 6 week programme that builds real, usable skills, whether you already know the field you want or you're still figuring it out."
      sections={[
        {
          eyebrow: 'The idea',
          heading: 'Six weeks, one focus, real skills',
          body: [
            'Upskill Accelerators run for 6 weeks. Each one is built around a specific area, so the time goes toward something a young person can actually use.',
            'There\u2019s also a General track for anyone who isn\u2019t sure yet what direction fits them. It\u2019s built to help someone find that direction, not just tell them to pick one.',
          ],
          bullets: [
            '6 week structured programme',
            'A specific focus area, or a General track to help find one',
            'Free for the young person, every time',
            'Certificate, personalised reference letter, alumni Discord community, and AI tutor support included',
          ],
        },
        {
          eyebrow: 'Track: Cyber',
          heading: 'Cybersecurity for Beginners',
          body: [
            'What cybersecurity actually is, real threats explained in plain terms, and where cybersecurity careers actually exist. Hands-on work through real, simplified scenarios, ending in a practical security assessment project.',
            'Delivered by an experienced, credentialed tutor — session dates to be confirmed.',
          ],
        },
        {
          eyebrow: 'Track: Digital Marketing',
          heading: 'Digital Marketing',
          body: [
            'What digital marketing actually covers, content, social, SEO, paid, email, and how organisations really think about audience, message, and channel. Ends with a real campaign concept for a portfolio.',
            'Delivered by an experienced, credentialed tutor — session dates to be confirmed.',
          ],
        },
        {
          eyebrow: 'Track: Construction',
          heading: 'Careers in Construction',
          body: [
            'What the construction industry actually includes, far wider than "on a building site", covering design, project management, trades, and surveying. Real pathways in: apprenticeships, trades, and technical routes.',
            'Delivered by an experienced, credentialed tutor — session dates to be confirmed.',
          ],
        },
        {
          eyebrow: 'Track: General',
          heading: 'General',
          body: [
            'For a young person who isn\u2019t sure which direction fits. Structured self-reflection on what they already do well, short exposure to a few different fields, and building transferable skills that matter regardless of direction.',
            'Tutors: Olayiwola Iyiola (Founder, PthFndR) and Grace Iyiola-Jacobs (Co-Founder, current People Partner at Sainsbury\u2019s).',
          ],
        },
      ]}
      cta={{
        headline: 'Find the right track',
        primaryLabel: 'Book a Conversation',
        primaryTo: '/contact?for=Upskill+Accelerators',
        secondaryLabel: 'See PthFndR Accelerator',
        secondaryTo: '/programmes/pthfndr-accelerator',
      }}
    />
  );
}
