import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from './SEO';
import { Eyebrow } from './ui/Eyebrow';
import { TriangleMotif } from './ui/TriangleMotif';

export interface OfferingSection {
  eyebrow?: string;
  heading: string;
  body?: string[];
  bullets?: string[];
}

export interface OfferingPageProps {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  eyebrow: string;
  headline: string;
  accent?: string;
  subhead: string;
  atAGlance?: string[];
  sections: OfferingSection[];
  cta: {
    headline: string;
    primaryLabel: string;
    primaryTo: string;
    secondaryLabel?: string;
    secondaryTo?: string;
    secondaryExternal?: boolean;
  };
}

export function OfferingPage({ seoTitle, seoDescription, canonical, eyebrow, headline, accent, subhead, atAGlance, sections, cta }: OfferingPageProps) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} url={canonical} />

      {/* HERO */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[360px] lg:w-[520px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Eyebrow tone="cyan" className="mb-6">{eyebrow}</Eyebrow>
          <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
            {headline} {accent && <span className="text-pth-cyan">{accent}</span>}
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-2xl">{subhead}</p>
          {atAGlance && atAGlance.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {atAGlance.map((item) => (
                <li key={item} className="flex items-center gap-2 text-base font-semibold text-pth-navy">
                  <CheckCircle2 size={18} className="text-pth-green shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* SECTIONS (alternating white / cream) */}
      {sections.map((s, i) => (
        <section key={s.heading} className={i % 2 === 0 ? 'bg-white py-20 lg:py-28' : 'bg-pth-cream py-20 lg:py-28'}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {s.eyebrow && <Eyebrow className="mb-5">{s.eyebrow}</Eyebrow>}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.05] mb-6">
              {s.heading}
            </h2>
            {s.body?.map((p) => (
              <p key={p} className="text-lg text-slate-600 leading-relaxed mb-4">{p}</p>
            ))}
            {s.bullets && (
              <ul className="space-y-3 mt-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-700 text-lg">
                    <CheckCircle2 size={20} className="text-pth-green shrink-0 mt-1" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pth-navy-deep to-pth-navy px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pth-cyan/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-pth-green/10 blur-3xl" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 text-white text-balance">{cta.headline}</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to={cta.primaryTo} className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl">
                  {cta.primaryLabel} <ArrowRight size={20} aria-hidden="true" />
                </Link>
                {cta.secondaryLabel && cta.secondaryTo && (
                  cta.secondaryExternal ? (
                    <a href={cta.secondaryTo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pth-navy transition-all">
                      {cta.secondaryLabel}
                    </a>
                  ) : (
                    <Link to={cta.secondaryTo} className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pth-navy transition-all">
                      {cta.secondaryLabel}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
