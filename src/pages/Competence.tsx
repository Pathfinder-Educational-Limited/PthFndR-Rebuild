import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Wrench, MessageSquare, GitMerge, Cpu, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Competence() {
  const pillars = [
    {
      name: 'Real Technical Skill',
      icon: Wrench,
      description: 'Being genuinely good at the specific thing you\u2019ve chosen, not just familiar with it.',
    },
    {
      name: 'Speaking the Language',
      icon: MessageSquare,
      description: 'Understanding the specific words and ideas people in your field actually use, so you\u2019re taken seriously from day one.',
    },
    {
      name: 'Understanding How Things Work',
      icon: GitMerge,
      description: 'Knowing not just what to do, but why it\u2019s done that way, so you can actually solve problems, not just follow steps.',
    },
    {
      name: 'Keeping Up With the Tools',
      icon: Cpu,
      description: 'Staying comfortable with the software and technology your field actually uses, and adapting as it changes.',
    },
    {
      name: 'Working Well With Others',
      icon: Users,
      description: 'Making the people around you better, not just doing your own part well.',
    }
  ];

  const sectors = [
    "Digital Security & Tech",
    "Digital Marketing",
    "Construction"
  ];

  return (
    <>
      <SEO 
        title="Competence (Develop) | Real, Usable Skills | PthFndR" 
        description="Competence sits between character and impact in the Trapezium Model. Discover how PthFndR builds real, sector-specific skills through Upskill Accelerators and EmployaLingua."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-competence-orange/20 via-pth-navy-deep to-pth-navy-deep"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-competence-orange/10 border border-competence-orange/20 text-competence-orange text-sm font-bold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-competence-orange"></span>
                The Trapezium Model
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Competence: <br className="hidden sm:block" />
                <span className="text-competence-orange">Skills That Actually Work</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Real skills, built for the field you actually want to work in.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg prose-slate"
            >
              <p className="lead text-xl text-slate-700 font-medium">
                In the Trapezium Model, Competence is the bridge between who you are and what you can actually do.
              </p>
              <p>
                Identity gives you a starting point. Character gives you the staying power. Competence is the toolkit, the real, specific skills you need to actually deliver.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Skills, not just a certificate</h3>
              <p>
                Through our <a href="https://www.employalingua.com" target="_blank" rel="noopener noreferrer" className="text-pth-cyan hover:underline font-medium">EmployaLingua</a> platform, we go beyond generic training. Holding a certificate isn't the same as walking into a room and actually understanding what's going on around you, the specific challenges, the specific language, the way things actually get done.
              </p>
              <p>
                For a lot of young people, the barrier isn't ability, it's never having had access to that specific industry knowledge. We help close that gap, so a young person can walk in and add value straight away, not spend months catching up.
              </p>
              <p>
                Once you've built real competence, you're ready for the last stage: <Link to="/impact" className="text-pth-cyan hover:underline font-medium">Impact</Link>, where everything you've built turns into something real and visible.
              </p>
              
              <ul className="list-none pl-0 space-y-3 mt-6 mb-8">
                {sectors.map((sector, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-competence-orange flex-shrink-0" />
                    {sector}
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-lg font-heading font-bold text-pth-navy mb-4">Ready to build real skills?</h4>
                <p className="text-slate-600 mb-6">Take the free assessment to find the right track for you.</p>
                <Link 
                  to="/diagnostic" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-cyan transition-colors"
                >
                  Find Your Path
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: The 5 Pillars */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">Five things we help you build</h3>
              <p className="text-slate-600 mb-8">
                Real competence, broken down into five practical areas:
              </p>
              <div className="space-y-6">
                {pillars.map((pillar, index) => (
                  <motion.div 
                    key={pillar.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-competence-orange/10 flex items-center justify-center text-competence-orange group-hover:bg-competence-orange group-hover:text-white transition-colors">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-pth-navy mb-2">{pillar.name}</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
