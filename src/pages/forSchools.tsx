import { forSchoolsContent } from '../content/pages/forSchools';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, Users, SlidersHorizontal, CheckCircle2, ChevronDown } from 'lucide-react';

const valueCardIcons = [TrendingUp, Award, Users, SlidersHorizontal];

export default function ForSchools() {
  return (
    <>
      <SEO
        title={`${forSchoolsContent.hero.headline} | PthFndR`}
        description={forSchoolsContent.hero.subheading}
      />

      {/* HERO SECTION */}
      <section className="bg-pth-cream pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-widest text-pth-green uppercase mb-4 block">For Schools</span>
            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-pth-navy leading-tight mb-6">
              {forSchoolsContent.hero.headline}
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-6">
              {forSchoolsContent.hero.subheading}
            </p>
            <p className="text-lg text-slate-600 mb-10">
              {forSchoolsContent.hero.bodyCopy}
            </p>
            <a
              href="#programmes"
              className="bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-colors shadow-lg hover:shadow-xl inline-flex items-center"
            >
              {forSchoolsContent.hero.ctaButton}
            </a>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-pth-navy mb-6">
              {forSchoolsContent.valueProposition.sectionHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {forSchoolsContent.valueProposition.cards.map((card, i) => {
              const Icon = valueCardIcons[i % valueCardIcons.length];
              return (
                <div key={card.headline} className="bg-pth-cream p-8 rounded-2xl">
                  <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-pth-green mb-6 shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-pth-navy mb-3">{card.headline}</h3>
                  <p className="text-slate-600">{card.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="bg-pth-navy-deep py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {forSchoolsContent.socialProof.sectionHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {forSchoolsContent.socialProof.quotes.map((quote) => (
              <blockquote key={quote.author} className="bg-white/10 p-8 rounded-2xl border border-white/10">
                <p className="text-lg italic text-slate-200 mb-6">"{quote.text}"</p>
                <footer className="text-pth-green font-bold">
                  — {quote.author}, <span className="text-slate-300 font-medium">{quote.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {forSchoolsContent.socialProof.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-heading font-extrabold text-pth-green mb-2">{stat.value}</p>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES SECTION */}
      <section className="bg-pth-cream py-24" id="programmes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-pth-navy mb-6">
              {forSchoolsContent.programmes.sectionHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {forSchoolsContent.programmes.items.map((programme) => (
              <div key={programme.name} className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-pth-navy">{programme.name}</h3>
                  {programme.duration && (
                    <span className="bg-pth-green/10 text-pth-green text-sm font-bold px-3 py-1 rounded-full">
                      {programme.duration}
                    </span>
                  )}
                </div>
                <p className="text-lg text-slate-600 mb-6">{programme.description}</p>

                <h4 className="text-sm font-bold tracking-widest text-pth-green uppercase mb-2">Who</h4>
                <p className="text-slate-600 mb-6">{programme.who}</p>

                <h4 className="text-sm font-bold tracking-widest text-pth-green uppercase mb-3">How it works</h4>
                <ul className="space-y-2 mb-6">
                  {programme.howItWorks.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-bold tracking-widest text-pth-green uppercase mb-3">Outcomes</h4>
                <ul className="space-y-2 mb-8">
                  {programme.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={18} />
                      {outcome}
                    </li>
                  ))}
                </ul>

                <p className="text-slate-600 border-t border-slate-100 pt-6">
                  <strong className="text-pth-navy">Cost:</strong> {programme.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-pth-navy mb-8">
            {forSchoolsContent.difference.headline}
          </h2>
          {forSchoolsContent.difference.copy.split('\n\n').map((paragraph) => (
            <p key={paragraph} className="text-xl text-slate-600 mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* GETTING STARTED SECTION */}
      <section className="bg-pth-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-pth-navy mb-6">
              {forSchoolsContent.gettingStarted.sectionHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forSchoolsContent.gettingStarted.steps.map((step) => (
              <div key={step.number} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="h-12 w-12 bg-pth-green text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-pth-navy mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-pth-navy mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {forSchoolsContent.faq.map((item) => (
              <details key={item.question} className="group bg-pth-cream rounded-2xl">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-bold text-pth-navy text-lg">
                  {item.question}
                  <ChevronDown className="shrink-0 text-pth-green transition-transform group-open:rotate-180" size={20} />
                </summary>
                <p className="px-6 pb-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-pth-navy-deep py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            {forSchoolsContent.cta.headline}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-colors shadow-lg hover:shadow-xl"
            >
              {forSchoolsContent.cta.primaryButton}
            </Link>
            <a
              href="/PthFndR-Capability-Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pth-navy transition-colors shadow-lg hover:shadow-xl"
            >
              {forSchoolsContent.cta.secondaryButton}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
