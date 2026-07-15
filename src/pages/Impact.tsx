import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Eye, TrendingUp, PieChart, HeartHandshake, ShieldCheck, ArrowRight, Building2, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impact() {
  const pillars = [
    {
      name: 'Visible Contribution',
      icon: Eye,
      description: 'Moving from a "Hidden Gem" to a recognized Value-Creator whose economic contribution is seen, measured, and utilized by leadership.',
    },
    {
      name: 'Influential Outcomes',
      icon: TrendingUp,
      description: 'The ability to affect change and deliver results that exceed the basic requirements of a job description, driving real growth.',
    },
    {
      name: 'Value Creation',
      icon: PieChart,
      description: 'Directly contributing to the ROI of an organization, whether through innovation at DiSH or operational excellence in Healthcare.',
    },
    {
      name: 'Community Agency',
      icon: HeartHandshake,
      description: 'Using your platform as a net contributor to mentor others and strengthen the local social fabric of Greater Manchester.',
    },
    {
      name: 'Economic Sustenance',
      icon: ShieldCheck,
      description: 'Achieving a level of vocational fluency that ensures long-term, high-value employment regardless of market shifts.',
    }
  ];

  return (
    <>
      <SEO 
        title="Impact (DO) | The Evidence of Economic Contribution | PthFndR" 
        description="Discover how PthFndR measures success through Impact (DO), the final domain of the Trapezium Model™ that shifts internal growth to external contribution."
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
                The Trapezium Model™
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Impact (DO): <br className="hidden sm:block" />
                <span className="text-impact-purple">The Evidence of Economic Contribution</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Moving from Potential to Measurable Value
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
                In the Trapezium Model™, Impact is the final domain. It represents the critical shift from internal growth to external contribution.
              </p>
              <p>
                At Pathfinder Educational Limited (PthFndR), we teach that while Identity (KNOW), Character (BE), and Competence (BE) prepare the individual, Impact (DO) is the measurable evidence that a contributor is actively driving growth. For 16-25s and marginalised adults, this is the ultimate goal: moving from a state of dependency or underemployment to becoming a recognized, high-value asset in the UK economy.
              </p>
              <p>
                We define impact not by the mere attainment of a job, but by the Economic Dignity achieved when an individual’s work solves complex problems and creates tangible value for their employer, their community, and the nation. It is about transitioning from an "income-seeker" to a true "Value-Creator."
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Solving the "Hidden Gem" Profile</h3>
              <p>
                Our research and daily operations at Heron House show that many marginalised adults suffer from the "Hidden Gem" paradox. These are individuals who score exceptionally high in Character (Internal Muscle) and Competence (Vocational Fluency) but remain low in Impact. They possess the capacity to contribute significantly, yet they lack the platform, the network, or the strategic positioning to make their value known.
              </p>
              <p>
                They are often the "engine room" of companies—working tirelessly behind the scenes—but are frequently overlooked for promotion, leadership, or strategic roles. We use the Ginosko-Sterizo™ framework to provide the specific "External Strength" needed for these contributors to claim their seat at the table. By aligning their unique Contribution DNA with their output, we turn latent potential into <strong>Visible Contribution</strong>. We teach them how to ensure their work is not just done, but seen, measured, and valued by decision-makers.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">The PthFndR Agent Program (PAP)</h3>
              <p>
                To facilitate this transition into Impact, we developed the PthFndR Agent Program (PAP). We do not view our participants as students or trainees; we view them as <strong>Ready-to-Contribute Agents</strong>. This program is designed to place these Agents into high-stakes environments—such as the tech startups at the Manchester DiSH or critical healthcare settings—where they can immediately apply their Vocational Fluency and Internal Muscle to solve real-world problems.
              </p>
              <p>
                By treating them as Agents of change rather than passive learners, we accelerate their path to Economic Dignity. They learn to navigate complex organizational structures, advocate for their ideas, and deliver outcomes that directly impact the bottom line.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Social Value & The UK Economy</h3>
              <p>
                For our institutional partners in Local Government and Further Education (FE) Colleges, the Impact (DO) domain provides the longitudinal data required for Social Value Act 2012 compliance. It proves that our interventions are not just feel-good exercises, but rigorous economic strategies.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <GraduationCap className="w-6 h-6 text-impact-purple flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-pth-navy">For FE Colleges:</strong>
                    <span className="text-slate-600">We move learners from "curriculum completion" to "industrial contribution," ensuring that educational outcomes translate directly into economic value.</span>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <Building2 className="w-6 h-6 text-impact-purple flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-pth-navy">For Employers:</strong>
                    <span className="text-slate-600">We provide Ready-to-Contribute Agents who do not need extensive hand-holding, but instead bring immediate problem-solving capabilities and resilience to the team.</span>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-6 h-6 text-impact-purple flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-pth-navy">For the Region:</strong>
                    <span className="text-slate-600">We contribute to the Skills England mandate by creating a workforce that is not just "ready to work," but "ready to lead" and innovate from within.</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-heading font-bold text-pth-navy mb-4">Complete the Trapezium Journey.</h4>
                <p className="text-slate-600 mb-6">You have explored Identity, Character, Competence, and Impact. Now, discover where you stand.</p>
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
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">The 5 Pillars of Impact (DO)</h3>
              <p className="text-slate-600 mb-8">
                To move 250,000 individuals out of the underemployment gap, we measure success through five core pillars of contribution:
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