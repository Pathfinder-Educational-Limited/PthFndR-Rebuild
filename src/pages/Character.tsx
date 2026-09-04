import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Shield, Zap, Anchor, RotateCcw, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Character() {
  const pillars = [
    {
      name: 'Sticking With It',
      icon: RotateCcw,
      description: 'The drive to keep going when the way forward isn\u2019t obvious, or gets blocked for a while.',
    },
    {
      name: 'Speaking Up',
      icon: Zap,
      description: 'The confidence to offer what you can do, even in a room where you feel like the odd one out.',
    },
    {
      name: 'Staying Steady',
      icon: Shield,
      description: 'Handling pressure without losing your sense of who you are.',
    },
    {
      name: 'Staying True to Yourself',
      icon: Scale,
      description: 'Making sure what you do day to day actually lines up with what you said mattered to you.',
    },
    {
      name: 'Bending Without Breaking',
      icon: Anchor,
      description: 'Being able to change your approach when something isn\u2019t working, without losing your footing.',
    }
  ];

  return (
    <>
      <SEO 
        title="Character (Develop) | Building Strength | PthFndR" 
        description="Character is the second stage of the Trapezium Model. Learn how PthFndR helps young people build the resilience to keep going."
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
                The Trapezium Model
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Character: <br className="hidden sm:block" />
                <span className="text-character-purple">The Strength to Keep Going</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Knowing who you are gets you started. Character keeps you in the room.
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
                In the Trapezium Model, Character isn't about following rules, it's about building the strength that supports your talent.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Knowing who you are gets you started. But the path from where you are to where you want to be is rarely straight. Character is what keeps you moving through the parts that are actually hard.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">More than "soft skills"</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                People often call this stuff "soft skills," but that undersells it. What most workplaces actually need is someone who can stay steady when things get difficult. We're not trying to teach you how to "behave." We're helping you build the kind of strength that doesn't crack under pressure.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Based at Manchester's Digital Security Hub, we see it again and again: the young people who go furthest aren't always the ones with the most certificates. They're the ones who can take a setback, a hard piece of feedback, or a closed door, and keep going anyway.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">When strength and skill come together</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Someone who knows what they bring, and has the strength to keep showing up, becomes genuinely hard to stop. They stop waiting for permission and start trusting that they belong in the room. That's the shift from just training to real, lasting change.
              </p>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-heading font-bold text-pth-navy mb-4">Build the skills to back it up.</h4>
                <p className="text-slate-600 leading-relaxed mb-6">Once you've got the strength to stay in the game, the next step is building the specific skills to lead in it.</p>
                <Link 
                  to="/competence" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-cyan transition-colors"
                >
                  Explore Competence
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
              <p className="text-slate-600 leading-relaxed mb-6">
                Building real staying power, piece by piece:
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
    </>
  );
}
