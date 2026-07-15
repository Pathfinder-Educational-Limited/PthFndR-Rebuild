import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Shield, Zap, Anchor, RotateCcw, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Character() {
  const pillars = [
    {
      name: 'Resilient Persistence',
      icon: RotateCcw,
      description: 'The internal drive to maintain momentum when external pathways to contribution are temporarily blocked or challenged.',
    },
    {
      name: 'Contribution Courage',
      icon: Zap,
      description: 'The boldness to offer your unique value in high-stakes environments, even when you feel underrepresented or unseen.',
    },
    {
      name: 'Emotional Self-Regulation',
      icon: Shield,
      description: 'Developing the internal stability to navigate the pressures of a high-growth career without losing your sense of self.',
    },
    {
      name: 'Ethical Alignment',
      icon: Scale,
      description: 'The commitment to aligning your daily actions with your Contribution DNA and the mission of Economic Dignity.',
    },
    {
      name: 'Adaptable Fortitude',
      icon: Anchor,
      description: 'The "Sterizo" strength to pivot your tactics and approach without ever sacrificing your core identity or value.',
    }
  ];

  return (
    <>
      <SEO 
        title="Character (BE) | Building Internal Muscle | PthFndR" 
        description="Character is the internal scaffolding of the Trapezium Model™. Learn how PthFndR builds the resilience needed for long-term Economic Contribution."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-character-purple/20 via-pth-navy-deep to-pth-navy-deep"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-character-purple/10 border border-character-purple/20 text-character-purple text-sm font-bold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-character-purple"></span>
                The Trapezium Model™
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Character (BE): <br className="hidden sm:block" />
                <span className="text-character-purple">The Internal Muscle of Grit</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Sterizo: The Strength to Sustain Your Contribution
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
                In the Trapezium Model™, Character is not about following rules—it is about building the internal scaffolding that supports your talent.
              </p>
              <p>
                Knowing who you are (Identity) is the spark, but <strong>Character (BE)</strong> is the fuel that keeps you in the room. For 16-25s and marginalized adults, the path to Economic Dignity is rarely a straight line. It requires what we call <strong>Sterizo</strong>—a specific type of internal strengthening that turns "potential" into "permanence."
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Beyond "Soft Skills"</h3>
              <p>
                The modern workplace often talks about "soft skills," but we find that term dismissive. What industries like Tech and Healthcare actually need are contributors with <strong>Internal Muscle</strong>. At PthFndR, we don't teach you how to "behave"; we teach you how to remain unshakable. 
              </p>
              <p>
                From our hub at <strong>Manchester DiSH</strong>, we see that the most successful contributors aren't necessarily the ones with the most certificates—they are the ones with the highest level of vocational grit. They are the ones who can handle a technical setback, a difficult feedback session, or a systemic barrier without their identity crumbling.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">The "Powerhouse" in Motion</h3>
              <p>
                When a "Powerhouse" profile combines their <strong>Contribution DNA</strong> with <strong>Sterizo</strong> strength, they become unstoppable. They no longer look for permission to belong; they understand that their character is their permit. This is where we move from "training" to "transformation."
              </p>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-heading font-bold text-pth-navy mb-4">Master the Language of Industry.</h4>
                <p className="text-slate-600 mb-6">Once you have the character to sustain your path, the next step is mastering the specific skills needed to lead.</p>
                <Link 
                  to="/competence" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-cyan transition-colors"
                >
                  Explore Competence (BE)
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
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">The 5 Pillars of Character (BE)</h3>
              <p className="text-slate-600 mb-8">
                Building the internal resilience required for long-term economic contribution:
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
                      <div className="w-12 h-12 rounded-xl bg-character-purple/10 flex items-center justify-center text-character-purple group-hover:bg-character-purple group-hover:text-white transition-colors">
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
