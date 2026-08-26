import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow } from './ui/Eyebrow';

export default function FeaturedStoriesSection() {
  return (
    <section aria-labelledby="featured-heading" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <Eyebrow className="mb-5">Stories &amp; insights</Eyebrow>
            <h2 id="featured-heading" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-6">Real people, real impact</h2>
            <p className="text-lg lg:text-xl text-slate-600">Discover how young people are transforming their potential into real-world impact through our programmes.</p>
          </div>
          <Link to="/stories" aria-label="View all stories and insights" className="inline-flex items-center text-pth-navy font-bold hover:text-pth-green focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 rounded-lg px-2 py-1 transition-colors whitespace-nowrap">
            View all stories <ArrowRight size={20} className="ml-2" aria-hidden="true" />
          </Link>
        </div>

        <div className="py-16 px-6 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-pth-navy mb-4">
            Real stories are on their way
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            We're collecting authentic stories from real people transforming their potential through PthFndR. Check back soon, or read about our approach in the meantime.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-pth-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-pth-green transition-colors focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2"
          >
            Learn about our methodology <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
