import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Search, Mail, ArrowUpRight } from 'lucide-react';

type Category = 'All' | 'Youth Mobility' | 'Vocational Fluency' | 'Assessment Science' | 'Leadership development';
type Domain = 'Identity' | 'Character' | 'Competence' | 'Impact';

interface Article {
  id: number;
  title: string;
  description: string;
  category: Category;
  domain: Domain;
  date: string;
  readTime: string;
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = [
    'All',
    'Youth Mobility',
    'Vocational Fluency',
    'Assessment Science',
    'Leadership development'
  ];

  const domainStyles: Record<Domain, string> = {
    Identity: 'bg-identity-blue text-white',
    Character: 'bg-character-green text-white',
    Competence: 'bg-competence-orange text-white',
    Impact: 'bg-impact-purple text-white',
  };

  const featuredArticle = {
    title: 'The 2026 Global Impact Report',
    description: 'A comprehensive analysis of how dignity-infused learning is reshaping the landscape for marginalised adults. Discover the metrics behind the movement, including our recent £640 implementation funding milestone across 5 youth-led solutions.',
    category: 'Leadership development' as Category,
    domain: 'Impact' as Domain,
    date: 'March 1, 2026',
    readTime: '15 min read',
  };

  const articles: Article[] = [
    {
      id: 7,
      title: 'Beyond Income: The Power of Economic Contribution',
      description: 'Reframing the Narrative of Professional Identity in the UK. Shifting from passive income generation to active Economic Contribution.',
      category: 'Youth Mobility',
      domain: 'Impact',
      date: 'March 4, 2026',
      readTime: '6 min read',
    },
    {
      id: 1,
      title: 'The Identity Gap: Why 16-25s are Stuck in Neutral',
      description: 'Analyzing the root causes of youth underemployment and how experiential knowledge can jumpstart their professional journey.',
      category: 'Youth Mobility',
      domain: 'Identity',
      date: 'January 12, 2026',
      readTime: '7 min read',
    },
    {
      id: 2,
      title: 'The Underemployment Trap: Solving the Skills-to-Job Mismatch',
      description: 'Research shows underemployment causes economic anxiety. See how EmployaLingua builds Vocational Fluency to break the cycle.',
      category: 'Vocational Fluency',
      domain: 'Competence',
      date: 'February 9, 2026',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'The Employer Investment Gap: Why Institutions Must Step In',
      description: 'With employer training down 20%, discover how PthFndR acts as the external training engine for FE Colleges and Local Authorities.',
      category: 'Leadership development',
      domain: 'Character',
      date: 'February 23, 2026',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Breaking the In-Work Poverty Cycle: The Pursuit of Economic Dignity',
      description: 'Work alone is no longer a route out of poverty. How PthFndR Assessments track transitions into secure, high-value roles.',
      category: 'Assessment Science',
      domain: 'Impact',
      date: 'February 16, 2026',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Sterizo: The Science of \'Staying Power\' in Career Transitions',
      description: 'Understanding the role of resilience and character in maintaining momentum during challenging professional shifts.',
      category: 'Vocational Fluency',
      domain: 'Character',
      date: 'February 2, 2026',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'The Stuck Professional\'s Diagnostic: A Guide to Professional Re-Alignment',
      description: 'A practical framework based on our Diagnostic Guide to help you identify roadblocks and realign your career path.',
      category: 'Vocational Fluency',
      domain: 'Identity',
      date: 'January 26, 2026',
      readTime: '10 min read',
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Thought Leadership Insights | PthFndR" 
        description="Explore our latest thoughts, research, and stories on closing the underemployment gap and building a more dignified future of work."
      />
      
      {/* Header Section */}
      <section className="bg-white pt-20 pb-10 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-extrabold tracking-tight text-pth-navy sm:text-5xl lg:text-6xl mb-6">
            Thought Leadership <span className="text-transparent bg-clip-text bg-pth-gradient">Insights</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Research, perspectives, and evidence-based strategies for closing the underemployment gap through dignity-infused learning.
          </p>
        </div>
      </section>

      {/* Featured Article (Global Impact Report) */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-pth-navy-deep shadow-xl group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pth-cyan/30 via-pth-navy-deep to-pth-navy-deep opacity-80"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-pth-gradient text-pth-navy font-bold px-4 py-1.5 rounded-full text-xs tracking-wide uppercase">
                    {featuredArticle.category}
                  </span>
                  <span className={`${domainStyles[featuredArticle.domain]} font-bold px-4 py-1.5 rounded-full text-xs tracking-wide uppercase border border-white/20`}>
                    Trapezium: {featuredArticle.domain}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight group-hover:text-pth-soft-cyan transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  {featuredArticle.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-400 font-medium">
                  <span>{featuredArticle.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              
              <div className="hidden lg:flex justify-end items-center">
                <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border border-pth-cyan/30 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 rounded-full border border-pth-lime/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <ArrowUpRight className="w-16 h-16 text-pth-cyan group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
            
            <a href="/impact-report" className="absolute inset-0 z-10"><span className="sr-only">Read Global Impact Report</span></a>
          </div>
        </div>
      </section>

      {/* Grid & Cluster Layout */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area (Grid) */}
            <div className="lg:col-span-8 xl:col-span-9">
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-slate-200">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeCategory === category
                        ? 'bg-pth-navy text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredArticles.map((article) => (
                    <motion.article
                      key={article.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group flex flex-col justify-between bg-pth-soft-cyan/20 rounded-3xl p-8 border border-pth-soft-cyan/50 hover:bg-pth-soft-cyan/30 transition-colors relative"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                          <span className="bg-pth-gradient text-pth-navy font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-sm">
                            {article.category}
                          </span>
                          <span className={`${domainStyles[article.domain]} font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-sm`}>
                            {article.domain}
                          </span>
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-pth-navy mb-4 leading-tight group-hover:text-pth-primary-blue transition-colors">
                          <a href={`/insights/${article.id}`}>
                            <span className="absolute inset-0" />
                            {article.title}
                          </a>
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-8">
                          {article.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-sm font-medium text-slate-500 pt-6 border-t border-pth-navy/10">
                        <div className="flex items-center gap-3">
                          <span>{article.date}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                          <span>{article.readTime}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-pth-navy group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
              
              {filteredArticles.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-lg text-slate-500">No insights found matching your criteria.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                    className="mt-4 text-pth-cyan font-semibold hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-8">
              {/* Search */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                <h3 className="text-lg font-heading font-bold text-pth-navy mb-4">Search Insights</h3>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Search className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full rounded-full border-0 py-3 pl-11 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pth-cyan sm:text-sm sm:leading-6"
                    placeholder="Keywords, topics..."
                  />
                </div>
              </div>

              {/* Reference Library */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                <h3 className="text-lg font-heading font-bold text-pth-navy mb-4">Reference Library</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://pthfndr-my.sharepoint.com/:b:/g/personal/info_pthfndr_org/IQBdIXoYO8bATqdpmIgYXdtgAb9vetsnVrJDCn2gENS04kU?e=auaiC7" target="_blank" rel="noopener noreferrer" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">PthFndR Knowledge Base</h4>
                      <p className="text-xs text-slate-500 mt-1">Access our proprietary research, framework documentation, and diagnostic guides.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">NESTA</h4>
                      <p className="text-xs text-slate-500 mt-1">Innovation in Education & Employability – Research on the future of work.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">ERSA</h4>
                      <p className="text-xs text-slate-500 mt-1">Employment Related Services Association – Best practices for sustainable employment.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">Department for Education (DfE)</h4>
                      <p className="text-xs text-slate-500 mt-1">Skills for Life – Government-funded intensive training and adult education.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">Skills England</h4>
                      <p className="text-xs text-slate-500 mt-1">Growth & Skills Levy – Frameworks for sector-specific modular learning.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">Learning and Work Institute</h4>
                      <p className="text-xs text-slate-500 mt-1">Labour Market Briefings – Best for real-time UK employment trends.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">Underemployment.info</h4>
                      <p className="text-xs text-slate-500 mt-1">The Underemployment Project – Specific research on the 'lived experience' of underemployed workers.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">Youth Futures Foundation</h4>
                      <p className="text-xs text-slate-500 mt-1">NEET Trends Analysis – Deep dives into why 16-25s are currently 'hidden'.</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <h4 className="text-sm font-heading font-bold text-pth-navy group-hover:text-pth-cyan transition-colors">CIPD Knowledge Hub</h4>
                      <p className="text-xs text-slate-500 mt-1">Skills & Training Factsheets – Authoritative data on UK employer needs.</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Subscribe CTA */}
              <div className="bg-pth-navy-deep p-8 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pth-cyan/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pth-lime/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-pth-cyan" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    Weekly Reflections
                  </h3>
                  <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                    Subscribe to receive our latest insights on dignity-infused learning, assessment science, and social innovation directly to your inbox.
                  </p>
                  <form className="w-full space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pth-cyan text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 rounded-xl bg-pth-gradient text-pth-navy font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Subscribe Now
                    </button>
                  </form>
                  <p className="text-[10px] text-slate-400 mt-4">
                    By subscribing, you agree to our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Strategic Policy Alignment */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-pth-navy">Strategic Policy Alignment</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">How the Trapezium Model™ integrates with 2026 UK Government and Regional mandates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-2">Skills England</h3>
              <p className="text-sm font-medium text-pth-cyan mb-4">The Growth & Skills Levy</p>
              <p className="text-slate-600 text-sm mb-4">Moving away from rigid apprenticeships to flexible, sector-specific modular learning.</p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-700"><strong className="text-pth-navy">PthFndR Integration:</strong> Validates EmployaLingua's "Micro-learning Atoms." Positions our Competence pillar as the answer to Skills England's call for agility.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-2">GM Baccalaureate (MBacc)</h3>
              <p className="text-sm font-medium text-pth-cyan mb-4">The Technical Route</p>
              <p className="text-slate-600 text-sm mb-4">Creating a clear path for 14–19 year olds in Greater Manchester who choose technical over academic routes.</p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-700"><strong className="text-pth-navy">PthFndR Integration:</strong> Aligns our 16-25 Youth focus with the MBacc's 7 core sectors. Social Hackathons become the experiential bridge for students.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-2">DfE</h3>
              <p className="text-sm font-medium text-pth-cyan mb-4">Skills for Life & Bootcamps</p>
              <p className="text-slate-600 text-sm mb-4">Government-funded intensive training to fast-track adults into vacancies.</p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-700"><strong className="text-pth-navy">PthFndR Integration:</strong> References the DfE's Section 106 and Social Value requirements. PthFndR Assessments act as the tracking tool for funded outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Linking Note / CTA */}
      <section className="py-20 bg-pth-navy-deep text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep opacity-80"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-pth-cyan font-bold tracking-wider uppercase text-sm mb-6">
            Pathfinder Educational Limited (trading as PthFndR)
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Is your organization navigating the new Skills England Levy?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Book a Framework Briefing to see how the Trapezium Model™ ensures your social value spend delivers measurable human impact.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pth-gradient text-pth-navy font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            Book a Framework Briefing
          </a>
        </div>
      </section>
    </>
  );
}

