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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Story 1 */}
          <article>
            <Link to="/stories" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 cursor-pointer h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="A group of young professionals collaborating around a laptop in a modern office space" 
                  loading="lazy"
                  width="800"
                  height="533"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  <span>Success Story</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-[#004890] mb-3 group-hover:text-[#40D478] transition-colors duration-300">From Classroom to Tech Career</h3>
                <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                  How Sarah transitioned from feeling lost after graduation to landing her dream role as a junior developer through the Activation Lab.
                </p>
                <div className="flex items-center text-[#004890] font-bold text-sm transition-colors duration-300 group-hover:text-[#40D478]">
                  Read story <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </article>

          {/* Story 2 */}
          <article>
            <Link to="/stories" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 cursor-pointer h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                  alt="Business professionals engaging in a lively discussion around a meeting table" 
                  loading="lazy"
                  width="800"
                  height="533"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  <span>Employer Insight</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
                  <span>4 min read</span>
                </div>
                <h3 className="text-xl font-bold text-[#004890] mb-3 group-hover:text-[#40D478] transition-colors duration-300">Why Early Career Hiring Needs a Reset</h3>
                <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                  Traditional CVs are failing both young people and employers. Here's how shifting to capability-based hiring changes everything.
                </p>
                <div className="flex items-center text-[#004890] font-bold text-sm transition-colors duration-300 group-hover:text-[#40D478]">
                  Read story <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </article>

          {/* Story 3 */}
          <article>
            <Link to="/stories" className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 cursor-pointer h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="Students collaborating and brainstorming ideas during an interactive workshop session" 
                  loading="lazy"
                  width="800"
                  height="533"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  <span>Programme Update</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
                  <span>3 min read</span>
                </div>
                <h3 className="text-xl font-bold text-[#004890] mb-3 group-hover:text-[#40D478] transition-colors duration-300">Inside the New Design Accelerator</h3>
                <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                  A look at our latest 8-week intensive designed to turn creative potential into portfolio-ready product design skills.
                </p>
                <div className="flex items-center text-[#004890] font-bold text-sm transition-colors duration-300 group-hover:text-[#40D478]">
                  Read story <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
