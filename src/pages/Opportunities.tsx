import SEO from '../components/SEO';
import { OpportunitiesListSchema } from '../components/SEOSchemas';
import { Search, MapPin, Clock, Calendar, Bookmark, Filter, ChevronDown, CheckSquare, Square } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Opportunities() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock opportunities data
  const opportunities = [
    {
      id: 1,
      org: "TechFuture Startup",
      title: "Product Design Beta Testing Session",
      type: "Beta Testing",
      typeColor: "bg-purple-100 text-purple-700",
      duration: "1 day",
      dates: "Oct 24, 2026",
      location: "London (In-person)",
      compensation: "£50 Amazon Voucher",
      skills: ["UX Design", "Feedback", "Product"],
      desc: "Join our product team for an exclusive early look at our new educational platform. We need honest feedback on the user interface before we launch.",
      deadline: "Apply by Oct 20",
      bookmarked: true
    },
    {
      id: 2,
      org: "Global Marketing Agency",
      title: "Gen-Z Brand Focus Group",
      type: "Focus Group",
      typeColor: "bg-blue-100 text-blue-700",
      duration: "3 hours",
      dates: "Nov 5, 2026",
      location: "Remote",
      compensation: "£40",
      skills: ["Marketing", "Communication", "Trends"],
      desc: "Share your perspective on upcoming marketing campaigns for major retail brands. We want to know what resonates with your generation.",
      deadline: "Apply by Oct 28",
      bookmarked: false
    },
    {
      id: 3,
      org: "EcoInnovate",
      title: "Sustainability Hackathon",
      type: "Competition",
      typeColor: "bg-orange-100 text-orange-700",
      duration: "2 days",
      dates: "Nov 12-13, 2026",
      location: "Manchester",
      compensation: "Prizes up to £1000",
      skills: ["Problem Solving", "Teamwork", "Innovation"],
      desc: "Work in teams to design sustainable solutions for urban environments. Mentorship provided by industry experts throughout the weekend.",
      deadline: "Apply by Nov 1",
      bookmarked: false
    },
    {
      id: 4,
      org: "Local Tech Council",
      title: "Junior Web Developer Micro-Internship",
      type: "Micro-Internship",
      typeColor: "bg-green-100 text-green-700",
      duration: "2 weeks",
      dates: "Dec 1-14, 2026",
      location: "Hybrid (London)",
      compensation: "£400 Stipend",
      skills: ["HTML/CSS", "React", "Git"],
      desc: "Shadow our development team and contribute to a real open-source community project. Perfect for boot camp grads or self-taught coders.",
      deadline: "Apply by Nov 15",
      bookmarked: false
    }
  ];

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
              <button className="absolute inset-y-2 right-2 bg-pth-green text-white px-6 rounded-lg font-bold hover:bg-[#36b666] transition-colors">
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

              </div>
            </div>

            {/* RESULTS (Main) */}
            <div className="flex-1">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <p className="text-slate-600 font-medium">
                  <span className="font-bold text-pth-navy">23</span> opportunities match your filters
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">Sort by:</span>
                  <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pth-green text-pth-navy shadow-sm">
                    <option>Newest</option>
                    <option>Deadline Soon</option>
                    <option>Soonest Start</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {opportunities.map(opp => (
                  <div key={opp.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative">
                    
                    <button className="absolute top-6 right-6 text-slate-400 hover:text-pth-green transition-colors">
                      <Bookmark size={24} fill={opp.bookmarked ? 'currentColor' : 'none'} className={opp.bookmarked ? 'text-pth-green' : ''} />
                    </button>

                    <div className="mb-4 pr-10">
                      <p className="text-sm font-medium text-slate-500 mb-1">{opp.org}</p>
                      <h3 className="text-xl font-bold text-pth-navy mb-3 group-hover:text-pth-green transition-colors">
                        <Link to={`/opportunities/${opp.id}`} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {opp.title}
                        </Link>
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${opp.typeColor}`}>
                        {opp.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-slate-400" />
                        <span>{opp.duration} <span className="text-slate-300 mx-1">•</span> {opp.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" />
                        <span>{opp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <span className="font-medium text-pth-navy">Compensation:</span> {opp.compensation}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                      {opp.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2">
                        {opp.skills.map(skill => (
                          <span key={skill} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="text-xs font-bold text-red-500">{opp.deadline}</span>
                        <span className="text-sm font-bold text-pth-navy group-hover:text-pth-green transition-colors flex items-center gap-1 relative z-10">
                          View Details
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-pth-green hover:text-pth-green transition-colors">
                    &lt;
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-pth-navy text-white font-bold">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-pth-green hover:text-pth-green transition-colors font-bold">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-pth-green hover:text-pth-green transition-colors font-bold">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-pth-green hover:text-pth-green transition-colors">
                    &gt;
                  </button>
                </nav>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
