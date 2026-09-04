import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Eye, TrendingUp, PieChart, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impact() {
  const pillars = [
    {
      name: 'Getting Noticed',
      icon: Eye,
      description: 'Moving from doing good work quietly to having that work actually seen and valued.',
    },
    {
      name: 'Making a Real Difference',
      icon: TrendingUp,
      description: 'Going beyond the basic requirements of a role to actually move things forward.',
    },
    {
      name: 'Creating Real Value',
      icon: PieChart,
      description: 'Directly contributing to the organisations you work with, whether that\u2019s a startup at DiSH or a healthcare team.',
    },
    {
      name: 'Lifting Others Up',
      icon: HeartHandshake,
      description: 'Using what you\u2019ve built to support others coming up behind you, and strengthen your community.',
    },
    {
      name: 'Staying in Demand',
      icon: ShieldCheck,
      description: 'Building skills solid enough that they hold up no matter how the job market shifts.',
    }
  ];

  return (
    <>
      <SEO 
        title="Impact (Deploy) | Real, Measurable Change | PthFndR" 
        description="Impact is the final stage of the Trapezium Model, where identity, character, and competence turn into real, visible results."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-impact-purple/20 via-pth-navy-deep to-pth-navy-deep"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-impact-purple/10 border border-impact-purple/20 text-impact-purple text-sm font-bold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-impact-purple"></span>
                The Trapezium Model
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Impact: <br className="hidden sm:block" />
                <span className="text-impact-purple">From Potential to Proof</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Everything you've built, turned into something real.
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
            >
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-6">
                In the Trapezium Model, Impact is the last stage, where everything else comes together.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                At Pathfinder Educational Limited (PthFndR), Identity, Character, and Competence all prepare a young person. Impact is the proof: real, visible evidence that it's working.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't measure impact by whether someone got a job. We measure it by whether their work is actually solving problems, for their employer, for their community, for themselves.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Talented, but overlooked</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Some of the young people we work with are genuinely strong, resilient and skilled, but still get passed over. They're doing great work quietly in the background, without the platform or the visibility to get properly recognised for it.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We help change that. Once someone knows what they bring and has built real skill, the next step is making sure that work actually gets seen, not just done.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Where we're headed</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our 10-year ambition is to help move 250,000 young people out of the underemployment gap. We're working toward that through three things: technology, partnership, and people, building the tools, the relationships, and the direct support to get there.
              </p>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-heading font-bold text-pth-navy mb-4">You've made it through the whole model.</h4>
                <p className="text-slate-600 leading-relaxed mb-6">Identity, Character, Competence, Impact. Now find out where you actually stand.</p>
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
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">Five things we measure</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Real impact, broken down into five practical areas:
              </p>
              <div className="space-y-6">
                {pillars.map((pillar, index) => (
                  <motion.div 
                    key={pillar.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-impact-purple/10 flex items-center justify-center text-impact-purple group-hover:bg-impact-purple group-hover:text-white transition-colors">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-pth-navy mb-2">{pillar.name}</h4>
                      <p className="text-slate-600 leading-relaxed mb-6">
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
      <section className="py-16 bg-pth-cream border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">You've reached the end of the Trapezium Model</p>
          <p className="text-slate-600 mb-6">Ready to put it into practice?</p>
          <Link to="/programmes" className="inline-flex items-center gap-2 text-lg font-heading font-bold text-pth-navy hover:text-impact-purple transition-colors">
            Explore our programmes <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
