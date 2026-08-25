import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Sparkles, Brain, Target, ShieldCheck } from 'lucide-react';

export default function Methodology() {
  const [activeLayer, setActiveLayer] = useState<string | null>('identity');

  const trapeziumLayers = [
    {
      id: 'impact',
      title: 'Impact',
      subtitle: 'Real, Visible Results',
      color: 'bg-impact-purple',
      icon: Target,
      description: 'Turning everything you\u2019ve built into something real: work that gets noticed, skills that get used, a genuine track record.',
      width: 'max-w-2xl',
    },
    {
      id: 'competence',
      title: 'Competence',
      subtitle: 'Real, Usable Skills',
      color: 'bg-competence-orange',
      icon: ShieldCheck,
      description: 'Building the specific, practical skills a field actually needs, not just a certificate, but the real ability to do the work.',
      width: 'max-w-3xl',
    },
    {
      id: 'character',
      title: 'Character',
      subtitle: 'Strength to Keep Going',
      color: 'bg-character-green',
      icon: Brain,
      description: 'Building the staying power to keep moving when things get difficult, without losing your sense of who you are.',
      width: 'max-w-4xl',
    },
    {
      id: 'identity',
      title: 'Identity',
      subtitle: 'Knowing Who You Are',
      color: 'bg-identity-blue',
      icon: Sparkles,
      description: 'The foundation: understanding your own strengths, background, and value, before figuring out what\u2019s next.',
      width: 'max-w-5xl',
    }
  ];

  return (
    <>
      <SEO 
        title="Our Approach | PthFndR" 
        description="The Ginosko-Sterizo philosophy and the Trapezium Model: PthFndR's approach to helping young people discover who they are and build toward real opportunity."
      />
      
      {/* Ginosko-Sterizo Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-5xl">
              The <span className="text-transparent bg-clip-text bg-pth-gradient">Ginosko-Sterizo®</span> Approach
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Our foundational approach to helping young people discover who they are and build toward real potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Ginosko */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-pth-cyan"></div>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-pth-cyan/20 rounded-full blur-3xl group-hover:bg-pth-cyan/30 transition-all"></div>
              
              <h3 className="text-3xl font-heading font-bold text-white mb-2">Ginosko</h3>
              <p className="text-pth-cyan font-medium tracking-wide uppercase text-sm mb-6">Knowing Yourself</p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The foundation of <strong className="text-white font-semibold">knowing who you are before you do</strong>. 
                It's about real, honest understanding of your own identity, your background, and your potential. It's the first step to breaking through whatever's been holding you back.
              </p>
            </motion.div>

            {/* Sterizo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-pth-lime"></div>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-pth-lime/20 rounded-full blur-3xl group-hover:bg-pth-lime/30 transition-all"></div>
              
              <h3 className="text-3xl font-heading font-bold text-white mb-2">Sterizo</h3>
              <p className="text-pth-lime font-medium tracking-wide uppercase text-sm mb-6">Standing Firm, Moving Forward</p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The move into <strong className="text-white font-semibold">Being and Doing</strong>. 
                Once you know who you are, Sterizo is the strength and skill to stand firm, act with purpose, and turn that identity into something real.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trapezium Model Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-pth-navy sm:text-5xl">
              The Trapezium Model&reg;
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              A structured journey for young people aged 16 to 24: from knowing who you are, to delivering real, visible results.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 max-w-5xl mx-auto">
            {trapeziumLayers.map((layer, index) => {
              const isActive = activeLayer === layer.id;
              
              return (
                <motion.div
                  key={layer.id}
                  layout
                  onClick={() => setActiveLayer(isActive ? null : layer.id)}
                  className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${layer.width} w-full`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Layer Header / Visible Bar */}
                  <div className={`${layer.color} p-6 flex items-center justify-between text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <layer.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold tracking-wide">{layer.title}</h3>
                        <p className="text-white/80 text-sm font-medium uppercase tracking-wider">{layer.subtitle}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-white/80" />
                    </motion.div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white border-x border-b border-slate-200"
                      >
                        <div className="p-8">
                          <p className="text-lg text-slate-700 leading-relaxed">
                            {layer.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
