import { careerAcceleratorsContent as C } from '../content/pages/careerAccelerators';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ChevronDown, ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

export default function CareerAccelerators() {
  return (
    <>
      <SEO title={`${C.hero.headline} | PthFndR`} description={C.hero.subheading} />

      {/* HERO */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[380px] lg:w-[520px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow tone="cyan" className="mb-6">Career Accelerators</Eyebrow>
          <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
            {C.hero.headline}
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 font-medium mb-6">{C.hero.subheading}</p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">{C.hero.bodyCopy}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            {C.hero.ctaButton} <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-5">The challenge</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              {C.theChallenge.headline}
            </h2>
          </div>
          <div className="bg-pth-cream rounded-3xl border-l-4 border-red-400 p-8 lg:p-10">
            <ul className="space-y-4">
              {C.theChallenge.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-lg">
                  <XCircle size={22} className="text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-slate-700 text-lg italic border-t border-black/10 pt-6">{C.theChallenge.result}</p>
          </div>
        </div>
      </section>

      {/* PROGRAMME STRUCTURE */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">{C.programmeStructure.subtitle}</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              {C.programmeStructure.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {C.programmeStructure.phases.map((phase, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-3xl border border-black/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="inline-block bg-pth-green/10 text-pth-green text-sm font-bold px-3 py-1 rounded-full mb-4">Weeks {phase.weeks}</span>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-pth-navy mb-5">{phase.title}</h3>
                <ul className="space-y-3 mb-6">
                  {phase.activities.map((activity, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={18} className="text-pth-green shrink-0 mt-1" aria-hidden="true" />
                      {activity}
                    </li>
                  ))}
                </ul>
                <div className="bg-pth-cream rounded-2xl p-4 border-l-4 border-pth-green">
                  <p className="text-sm text-slate-700"><span className="font-bold text-pth-navy">Outcome:</span> {phase.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-pth-navy-deep rounded-3xl p-8 lg:p-10">
            <h3 className="font-heading font-bold text-white text-xl mb-2">Post-programme support</h3>
            <p className="text-white/80">{C.programmeStructure.postProgramme}</p>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative bg-pth-navy-deep py-24 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow tone="cyan" className="mb-5">The results</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance leading-[1.02]">
              {C.outcomes.headline}
            </h2>
          </div>

          <div className="mb-16">
            <p className="font-heading font-extrabold text-pth-green text-7xl lg:text-8xl leading-none mb-4 tracking-tight">85%</p>
            <p className="text-xl text-white/85 max-w-2xl">{C.outcomes.mainOutcome}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {C.outcomes.keyMetrics.map((metric, i) => (
              <div key={i} className="border-t border-white/15 pt-6">
                <p className="font-heading font-extrabold text-white text-5xl lg:text-6xl leading-none mb-3 tracking-tight">{metric.metric}</p>
                <p className="text-white/70">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <Eyebrow className="mb-5">Success stories</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              Real people, real results
            </h2>
          </div>

          <div className="space-y-6">
            {C.successStories.map((story, i) => (
              <div key={i} className="bg-pth-cream p-8 lg:p-10 rounded-3xl border border-black/5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-pth-navy">{story.name}, {story.age}</h3>
                    <p className="text-slate-500">{story.company}</p>
                  </div>
                  <span className="text-sm text-pth-cyan font-bold">{story.context}</span>
                </div>
                <p className="text-lg italic text-slate-700 border-l-4 border-pth-green pl-5">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME DETAILS */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <Eyebrow className="mb-5">The details</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              Programme details
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-3xl border border-black/5">
              <div className="w-12 h-12 rounded-2xl bg-pth-cyan/10 flex items-center justify-center mb-5">
                <Clock size={22} className="text-pth-cyan" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-pth-navy text-xl mb-2">Duration</h3>
              <p className="text-slate-600">{C.programmeDetails.duration}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-black/5">
              <div className="w-12 h-12 rounded-2xl bg-pth-green/10 flex items-center justify-center mb-5">
                <CheckCircle2 size={22} className="text-pth-green" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-pth-navy text-xl mb-2">Time commitment</h3>
              <p className="text-slate-600 leading-relaxed">
                Group sessions: {C.programmeDetails.timeCommitment.groupSessions}<br />
                Assignments: {C.programmeDetails.timeCommitment.assignments}<br />
                <strong className="text-pth-navy">Total: {C.programmeDetails.timeCommitment.total}</strong>
              </p>
            </div>
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
            {C.faq.map((item, i) => (
              <details key={i} className="group bg-pth-cream rounded-2xl">
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

      {/* CTA */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pth-navy-deep to-pth-navy px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pth-cyan/10 blur-3xl" aria-hidden="true"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-pth-green/10 blur-3xl" aria-hidden="true"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-white text-balance">{C.cta.headline}</h2>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">{C.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl">
                  {C.cta.primaryButton} <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pth-navy transition-all">
                  {C.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
