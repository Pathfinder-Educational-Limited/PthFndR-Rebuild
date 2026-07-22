import { programmesContent } from '../content/pages/programmes';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

export default function Programmes() {
  return (
    <>
      <SEO
        title={`${programmesContent.hero.headline} | PthFndR`}
        description={programmesContent.hero.subheading}
        url="https://pthfndr.org/programmes"
      />

      {/* HERO */}
      <section className="relative bg-pth-navy-deep pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[380px] lg:w-[520px] text-white/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow tone="cyan" className="mb-6 text-white/70">Programmes</Eyebrow>
            <h1 className="font-heading font-extrabold tracking-tight text-white text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
              {programmesContent.hero.headline}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 font-medium mb-6">{programmesContent.hero.subheading}</p>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl">{programmesContent.hero.bodyCopy}</p>
            <a href="#programmes" className="inline-flex items-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              {programmesContent.hero.ctaButton} <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMMES GRID */}
      <section id="programmes" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Our Programmes</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              Choose Your Pathway
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmesContent.programmes.map((programme) => (
              <div key={programme.id} className="group relative bg-pth-warm rounded-3xl p-8 border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-pth-green/10 text-pth-green px-3 py-1 rounded-full text-xs font-bold">
                  {programme.badge}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6">{programme.icon}</div>

                {/* Title & Duration */}
                <h3 className="text-2xl font-heading font-bold text-pth-navy mb-2">
                  {programme.name}
                </h3>
                <p className="text-sm font-medium text-pth-cyan mb-4">{programme.duration}</p>

                {/* Description */}
                <p className="text-slate-600 mb-6">
                  {programme.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-8">
                  {programme.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <div className="text-pth-green mt-1">✓</div>
                      <span className="text-sm text-slate-600">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={programme.href}
                  className="inline-flex items-center gap-2 text-pth-green font-bold hover:text-pth-navy transition-colors group-hover:gap-3"
                >
                  {programme.cta}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Why Choose Us</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              {programmesContent.features.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmesContent.features.items.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-heading font-bold text-pth-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pth-navy-deep to-pth-cyan rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance mb-4">
              {programmesContent.cta.headline}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {programmesContent.cta.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {programmesContent.cta.buttons.map((button) => (
                <Link
                  key={button.label}
                  to={button.href}
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-pth-green text-white hover:bg-[#36b666] shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                      : 'bg-white text-pth-navy hover:bg-slate-100'
                  }`}
                >
                  {button.label}
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
