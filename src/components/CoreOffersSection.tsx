import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';

const offers = [
  { title: 'Commission a cohort programme', description: 'For colleges, schools, youth providers and commissioners supporting 16–24-year-olds.', items: ['Starting-point assessment and practical preparation', 'Short employer projects and supported reflection', 'Work examples, feedback and an agreed outcomes report'], detail: 'A managed service, quoted for your cohort and delivery scope.', to: '/for-organisations/partnerships', cta: 'Explore the programme' },
  { title: 'Host a short employer project', description: 'For employers with a useful brief and time to support emerging talent.', items: ['A defined task, from three hours to two weeks', 'Agreed participant preparation and coordination', 'Useful outputs and feedback for the next step'], detail: 'Share a brief; agree any managed delivery support and costs with our team.', to: '/for-organisations/create-opportunities', cta: 'Explore employer projects' },
];

export default function CoreOffersSection() {
  return <section aria-labelledby="offers-heading" className="bg-pth-cream py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Eyebrow className="mb-5">What we deliver</Eyebrow>
      <h2 id="offers-heading" className="text-4xl sm:text-5xl font-heading font-extrabold text-pth-navy mb-6">Employability programmes built around real work.</h2>
      <p className="text-lg text-slate-600 max-w-3xl mb-10">Our team brings together preparation, employer briefs and guided reflection. You commission a defined service, with the delivery and reporting agreed up front.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {offers.map(offer => <article key={offer.title} className="bg-white rounded-3xl border border-black/5 p-8 lg:p-10 flex flex-col">
          <h3 className="text-3xl font-heading font-bold text-pth-navy mb-4">{offer.title}</h3>
          <p className="text-slate-600 mb-6">{offer.description}</p>
          <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-6">{offer.items.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="text-slate-600 mb-8">{offer.detail}</p>
          <Link to={offer.to} className="mt-auto inline-flex items-center gap-2 font-bold text-pth-navy underline underline-offset-4">{offer.cta}<ArrowRight size={18} aria-hidden="true" /></Link>
        </article>)}
      </div>
      <p className="mt-8 text-lg text-slate-700">Planning a local pilot? <Link to="/youth-employability-programmes-manchester" className="font-bold text-pth-navy underline underline-offset-4">Explore our six-week youth employability programme in Greater Manchester</Link>.</p>
      <aside className="mt-10 rounded-2xl border border-pth-navy/10 p-6 lg:p-8">
        <p className="text-sm font-bold text-pth-teal uppercase tracking-wide mb-3">Illustrative project · Website review</p>
        <p className="text-lg text-slate-700">A small team tests a website, identifies confusing steps and presents recommendations to the host. Participants practise research, teamwork and communication, then use their findings and host feedback as work evidence.</p>
      </aside>
    </div>
  </section>;
}
