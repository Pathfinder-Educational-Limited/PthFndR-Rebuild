import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Wrench, MessageSquare, GitMerge, Cpu, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Competence() {
  const pillars = [
    {
      name: 'Technical Mastery',
      icon: Wrench,
      description: 'High-level proficiency in your chosen "Technical Route," ensuring you can execute complex tasks with precision and reliability.',
    },
    {
      name: 'Sector Vocabulary',
      icon: MessageSquare,
      description: 'Speaking the specific, nuanced language of UK industry leaders to build immediate trust and operational alignment.',
    },
    {
      name: 'Process Awareness',
      icon: GitMerge,
      description: 'Understanding the "How" behind the "What"—grasping the systemic workflows and methodologies that drive industry efficiency.',
    },
    {
      name: 'Technological Agility',
      icon: Cpu,
      description: 'Staying current with the digital tools of the modern economy and adapting rapidly to new software and hardware environments.',
    },
    {
      name: 'Collaborative Intelligence',
      icon: Users,
      description: 'The ability to contribute effectively within a multidisciplinary team, amplifying the value of your peers and driving collective success.',
    }
  ];

  const sectors = [
    "Healthcare & Life Sciences",
    "Digital Security & Tech (DiSH Ecosystem)",
    "Sustainable Construction & Infrastructure"
  ];

  return (
    <>
      <SEO 
        title="Competence (BE) | The Language of Vocational Fluency | PthFndR" 
        description="Discover how PthFndR develops Sector-Specific Fluency and technical mastery through the Trapezium Model™ and EmployaLingua."
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
                The Trapezium Model™
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Competence (BE): <br className="hidden sm:block" />
                <span className="text-competence-orange">The Language of Vocational Fluency</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Competence: Mastering the Atoms of Industry
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
                In the Trapezium Model™, Competence is the bridge between internal strength and external impact.
              </p>
              <p>
                To be a net contributor to the UK economy, one must speak the "Language of the Sector." While Identity provides the foundational DNA and Character provides the resilience, Competence is the tangible toolkit required to execute your vision and deliver measurable value.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Vocational Fluency via EmployaLingua</h3>
              <p>
                At our Manchester headquarters, we develop the "Learning Atoms" that define modern industry. Through our <a href="https://www.employalingua.com" target="_blank" rel="noopener noreferrer" className="text-pth-cyan hover:underline font-medium">EmployaLingua</a> platform, we move beyond generic training to provide Sector-Specific Fluency. We recognize that true competence is not just about holding a certificate; it is about possessing the Vocational Fluency to walk into a room and immediately understand the operational realities, the technical challenges, and the specific vocabulary of the environment.
              </p>
              <p>
                For 16-25s and marginalised adults, the barrier to entry is often not a lack of intelligence or capability, but a lack of access to this specific industry language. They are kept on the periphery because they have not been taught how to translate their inherent potential into the precise technical formats required by employers. By focusing on Vocational Fluency, we demystify the workplace. We equip Value-Creators with the exact terminology, process awareness, and technological agility needed to integrate seamlessly into high-growth sectors.
              </p>
              <p>
                This approach is fundamentally Dignity-Infused. It respects the intelligence of the learner by providing them with high-level, relevant skills rather than patronizing, low-tier training. When a contributor can speak the language of Digital Security or Healthcare with confidence, they are no longer asking for a favor; they are negotiating an exchange of value. They step into the economy not as dependents, but as highly capable agents of change.
              </p>
              <p>
                For FE Colleges and Local Authorities, this shift from generic employability skills to targeted Vocational Fluency is the key to closing the regional skills gap. It ensures that educational outputs are directly aligned with economic needs, transforming cohorts of learners into highly sought-after Value-Creators who are ready to hit the ground running.
              </p>
              <p>
                Once a Value-Creator has mastered this language, they are fully equipped to transition into the final phase of the Trapezium Model™: <Link to="/impact" className="text-pth-cyan hover:underline font-medium">Impact (DO)</Link>, where their potential is translated into visible, measurable economic contribution.
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
                <h4 className="text-lg font-heading font-bold text-pth-navy mb-4">Ready to build your vocational fluency?</h4>
                <p className="text-slate-600 mb-6">Assess your current technical mastery and discover your path to Sector-Specific Fluency.</p>
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
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">The 5 Pillars of Competence (BE)</h3>
              <p className="text-slate-600 mb-8">
                To achieve true Vocational Fluency, we focus on developing these five critical areas of competence:
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
