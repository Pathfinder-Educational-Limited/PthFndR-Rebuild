import SEO from '../components/SEO';
import { OpportunitiesListSchema } from '../components/SEOSchemas';
import { Search, Filter, CheckSquare, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { opportunities } from '../content/pages/opportunitiesData';
import { getSupabaseClient } from '../services/supabaseClient';

export default function Opportunities() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [dbOpportunities, setDbOpportunities] = useState<typeof opportunities>([]);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase
      .from('opportunities')
      .select('id, title, category, duration, organisations(name)')
      .eq('status', 'approved')
      .then(({ data }) => {
        if (data) {
          const mapped = data.map((o: any) => ({
            id: o.id,
            title: o.title,
            organisationName: o.organisations?.name ?? 'Organisation',
            category: o.category,
            duration: o.duration,
          }));
          setDbOpportunities(mapped as any);
        }
      });
  }, []);

  const allOpportunities = [...opportunities, ...dbOpportunities];

  return (
    <>
      <SEO
        title="Opportunities | PthFndR"
        description="Discover micro-internships, hackathons, and real-world projects."
        url="https://pthfndr.org/opportunities"
      />
      <OpportunitiesListSchema />

      {/* HERO */}
      <section className="bg-pth-navy-deep pt-16 pb-12 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
              Real-World Opportunities
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              1-day events, projects, micro-internships, and more to build your capability portfolio.
            </p>

            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search by title, organisation, or keyword..."
                className="block w-full pl-12 pr-4 py-4 rounded-xl border-none ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-pth-green sm:text-lg shadow-sm placeholder:text-white"
              />
              <button className="absolute inset-y-2 right-2 bg-pth-green text-white px-6 rounded-lg font-bold hover:bg-[#4ea858] transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pth-cream py-12 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 font-bold text-pth-navy shadow-sm w-full justify-center"
            >
              <Filter size={18} />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">

            {/* FILTERS (Left Sidebar) */}
            <div className={`w-full md:w-64 shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 md:sticky md:top-24 space-y-8">

                {/* Type Filter */}
                <div>
                  <h3 className="font-bold text-pth-navy mb-4 flex items-center justify-between">
                    Opportunity Type
                  </h3>
                  <div className="space-y-3">
                    {['1-Day Event', '2-5 Day Project', 'Micro-Internship', 'Focus Group', 'Beta Testing', 'Competition'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-pth-green transition-colors">
                          <CheckSquare size={14} className="text-pth-green opacity-0" />
                        </div>
                        <span className="text-sm text-slate-600 group-hover:text-pth-navy transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div>
                  <h3 className="font-bold text-pth-navy mb-4">Duration</h3>
                  <div className="space-y-3">
                    {['1 day', '2-5 days', '1-2 weeks', '3-4 weeks'].map(dur => (
                      <label key={dur} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-pth-green transition-colors"></div>
                        <span className="text-sm text-slate-600 group-hover:text-pth-navy transition-colors">{dur}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Compensation Filter */}
                <div>
                  <h3 className="font-bold text-pth-navy mb-4">Compensation</h3>
                  <div className="space-y-3">
                    {['Paid', 'Unpaid', 'Stipend / Voucher'].map(comp => (
                      <label key={comp} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-pth-green transition-colors"></div>
                        <span className="text-sm text-slate-600 group-hover:text-pth-navy transition-colors">{comp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
                  Filters are for browsing only right now — every current opportunity is shown below.
                </p>
              </div>
            </div>

            {/* RESULTS (Main) */}
            <div className="flex-1">
              <p className="text-slate-600 mb-6">
                {allOpportunities.length} open {allOpportunities.length === 1 ? 'opportunity' : 'opportunities'} right now.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allOpportunities.map((opp) => (
                  <Link
                    key={opp.id}
                    to={`/opportunities/${opp.id}`}
                    className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 w-fit mb-4">
                      {opp.category}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-pth-navy mb-2 group-hover:text-pth-green transition-colors">
                      {opp.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">{opp.organisationName}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {opp.duration}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> Manchester</span>
                    </div>
                    <div className="mt-auto flex items-center gap-1 text-sm font-bold text-pth-navy group-hover:text-pth-green transition-colors">
                      View details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
                <h2 className="text-xl font-heading font-bold text-pth-navy mb-2">
                  Not sure which one fits you?
                </h2>
                <p className="text-slate-600 mb-6">
                  Take the free 2-minute assessment to see what direction fits you best.
                </p>
                <Link
                  to="/assessment"
                  className="inline-block bg-pth-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-pth-navy/90 transition-colors"
                >
                  Start your free assessment
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
