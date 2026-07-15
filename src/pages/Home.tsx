import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { COPY } from '../constants/copy';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';
import { HomePageSchema } from '../components/SEOSchemas';

// Lazy load sections below the fold
const ThreeStreamsSection = React.lazy(() => import('../components/ThreeStreamsSection'));
const WhosItForSection = React.lazy(() => import('../components/WhosItForSection'));
const ImpactMetricsSection = React.lazy(() => import('../components/ImpactMetricsSection'));
const FeaturedStoriesSection = React.lazy(() => import('../components/FeaturedStoriesSection'));

export default function Home() {
  return (
    <>
      <SEO
        title="Home | PthFndR"
        description={COPY.HERO.SUBHEADING}
        url="https://pthfndr.org/"
      />
      <HomePageSchema />
      
      {/* HERO SECTION */}
      <section aria-labelledby="hero-heading" className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        {/* Motif: oversized outlined triangles echoing the logo */}
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[380px] lg:w-[560px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <Eyebrow tone="cyan" className="mb-6">For young people · schools · organisations</Eyebrow>
              <h1
                id="hero-heading"
                className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] mb-8"
              >
                {COPY.HERO.HEADING_1}{' '}
                <span className="text-pth-cyan">{COPY.HERO.HEADING_2}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-xl mb-10">
                {COPY.HERO.SUBHEADING}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/assessment"
                  className="inline-flex items-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Take the free assessment <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <Link
                  to="/for-organisations"
                  className="inline-flex items-center gap-2 border-2 border-pth-navy text-pth-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-pth-navy hover:text-white transition-all"
                >
                  For organisations
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              {/* Offset colour block behind the image */}
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl bg-pth-green/20" aria-hidden="true"></div>
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="PthFndR participant interacting"
                  width="1200"
                  height="1500"
                  className="absolute inset-0 w-full h-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-40 flex items-center justify-center text-slate-400">Loading...</div>}>
        <ThreeStreamsSection />
        <WhosItForSection />
        <ImpactMetricsSection />
        <FeaturedStoriesSection />
      </Suspense>
    </>
  );
}
