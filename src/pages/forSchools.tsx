import { forSchoolsContent } from '../content/pages/forSchools';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, Users, SlidersHorizontal, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

const valueCardIcons = [TrendingUp, Award, Users, SlidersHorizontal];

export default function ForSchools() {
  return (
    <>
      <SEO title={`${forSchoolsContent.hero.headline} | PthFndR`} description={forSchoolsContent.hero.subheading} />

      {/* HERO */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[380px] lg:w-[520px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow tone="cyan" className="mb-6">For Schools</Eyebrow>
            <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
              {forSchoolsContent.hero.headline}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 font-medium mb-6">{forSchoolsContent.hero.subheading}</p>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl">{forSchoolsContent.hero.bodyCopy}</p>
            <a href="#programmes" className="inline-flex items-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              {forSchoolsContent.hero.ctaButton} <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Why PthFndR</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              {forSchoolsContent.valueProposition.sectionHeadline}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {forSchoolsContent.valueProposition.cards.map((card, i) => {
              const Icon = valueCardIcons[i % valueCardIcons.length];
              return (
                <div key={card.headline} className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">{card.headline}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative bg-pth-navy-deep py-24 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow tone="cyan" className="mb-5">Trusted by schools</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance leading-[1.02]">
              {forSchoolsContent.socialProof.sectionHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {forSchoolsContent.socialProof.quotes.map((quote) => (
              <blockquote key={quote.author} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <p className="text-lg italic text-white/90 mb-6">"{quote.text}"</p>
                <footer className="text-pth-cyan font-bold">
                  — {quote.author}, <span className="text-white/70 font-medium">{quote.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {forSchoolsContent.socialProof.stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/15 pt-6">
                <p className="font-heading font-extrabold text-pth-green text-5xl lg:text-7xl leading-none mb-3 tracking-tight">{stat.value}</p>
                <p className="text-white/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="bg-pth-cream py-24 lg:py-32" id="programmes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Programmes</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              {forSchoolsContent.programmes.sectionHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {forSchoolsContent.programmes.items.map((programme) => (
              <div key={programme.name} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-black/5">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-pth-navy">{programme.name}</h3>
                  {programme.duration && (
                    <span className="bg-pth-green/10 text-pth-green text-sm font-bold px-3 py-1 rounded-full">{programme.duration}</span>
                  )}
                </div>
                <p className="text-lg text-slate-600 mb-6">{programme.description}</p>

                <h4 className="text-xs font-bold tracking-[0.2em] text-pth-green uppercase mb-2">Who</h4>
                <p className="text-slate-600 mb-6">{programme.who}</p>

                <h4 className="text-xs font-bold tracking-[0.2em] text-pth-green uppercase mb-3">How it works</h4>
                <ul className="space-y-2 mb-6">
                  {programme.howItWorks.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-bold tracking-[0.2em] text-pth-green uppercase mb-3">Outcomes</h4>
                <ul className="space-y-2 mb-8">
                  {programme.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={18} />
                      {outcome}
                    </li>
                  ))}
                </ul>

                <p className="text-slate-600 border-t border-black/10 pt-6">
                  <strong className="text-pth-navy">Cost:</strong> {programme.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow className="mb-5 justify-center">The difference</Eyebrow>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-8">
            {forSchoolsContent.difference.headline}
          </h2>
          {forSchoolsContent.difference.copy.split('\n\n').map((paragraph) => (
            <p key={paragraph} className="text-xl text-slate-600 mb-6">{paragraph}</p>
          ))}
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Getting started</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              {forSchoolsContent.gettingStarted.sectionHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {forSchoolsContent.gettingStarted.steps.map((step) => (
              <div key={step.number} className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-black/5">
                <span className="font-heading font-extrabold text-6xl text-pth-green/25 leading-none block mb-4">{step.number}</span>
                <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow className="mb-5 justify-center">FAQ</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {forSchoolsContent.faq.map((item) => (
              <details key={item.question} className="group bg-pth-cream rounded-2xl">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-bold text-pth-navy text-lg">
                  {item.question}
                  <ChevronDown className="shrink-0 text-pth-green transition-transform group-open:rotate-180" size={20} aria-hidden="true" />
                </summary>
                <p className="px-6 pb-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pth-navy-deep to-pth-navy px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pth-cyan/10 blur-3xl" aria-hidden="true"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-pth-green/10 blur-3xl" aria-hidden="true"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 text-white text-balance">
                {forSchoolsContent.cta.headline}
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl">
                  {forSchoolsContent.cta.primaryButton} <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <a href="/PthFndR-Capability-Statement.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pth-navy transition-all">
                  {forSchoolsContent.cta.secondaryButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
