import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | PthFndR" description="The page you're looking for doesn't exist. Explore PthFndR's programmes, opportunities, and community." />
      <section className="relative bg-pth-warm min-h-[70vh] flex items-center overflow-hidden py-24">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[380px] lg:w-[560px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow tone="cyan" className="mb-6 justify-center">Error 404</Eyebrow>
          <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Lost the <span className="text-pth-cyan">path?</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-xl mx-auto mb-10">
            This page doesn't exist — but your next step might. Head back home or explore what we do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl">
              Back home <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/programmes/career-accelerators" className="inline-flex items-center justify-center gap-2 border-2 border-pth-navy text-pth-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-pth-navy hover:text-white transition-all">
              Explore programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
