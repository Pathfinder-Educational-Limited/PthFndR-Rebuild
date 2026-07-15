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
      subtitle: 'Measurable Change',
      color: 'bg-impact-purple',
      icon: Target,
      description: 'Delivering measurable impact in their communities and careers. Transforming from learners to leaders who shape the future of work.',
      width: 'max-w-2xl',
    },
    {
      id: 'competence',
      title: 'Competence',
      subtitle: 'Practical Skills',
      color: 'bg-competence-orange',
      icon: ShieldCheck,
      description: 'Acquiring the practical skills, vocational fluency, and professional capabilities required to thrive in the modern workplace.',
      width: 'max-w-3xl',
    },
    {
      id: 'character',
      title: 'Character',
      subtitle: 'Resilience & Mindset',
      color: 'bg-character-green',
      icon: Brain,
      description: 'Developing resilience, integrity, and the mindset needed to navigate life and work. Building the inner strength to overcome systemic barriers.',
      width: 'max-w-4xl',
    },
    {
      id: 'identity',
      title: 'Identity',
      subtitle: 'Experiential Knowledge',
      color: 'bg-identity-blue',
      icon: Sparkles,
      description: 'Recognising who you are. The critical foundation for 16-25s and marginalised adults to discover their inherent value and potential before they "do".',
      width: 'max-w-5xl',
    }
  ];

  return (
    <>
      <SEO 
        title="Methodology & IP | PthFndR" 
        description="Discover the Ginosko-Sterizo philosophy and the Trapezium Model™."
      />
      
      {/* Ginosko-Sterizo Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-5xl">
              The <span className="text-transparent bg-clip-text bg-pth-gradient">Ginosko-Sterizo</span> Philosophy
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Our foundational framework for closing the underemployment gap through dignity-infused learning.
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
              <p className="text-pth-cyan font-medium tracking-wide uppercase text-sm mb-6">Experiential Knowledge</p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The foundation of <strong className="text-white font-semibold">knowing who you are before you do</strong>. 
                Ginosko is about deep, experiential understanding of one's own identity, inherent value, and potential. It is the critical first step for marginalised adults and youth to break through systemic barriers.
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
              <p className="text-pth-lime font-medium tracking-wide uppercase text-sm mb-6">Transformation & Establishment</p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The transformation into <strong className="text-white font-semibold">Being and Doing</strong>. 
                Once identity is established through Ginosko, Sterizo provides the structural support and practical competence to stand firm, act with purpose, and deliver measurable impact in the modern workforce.
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
              The Trapezium Model™
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              A structured journey for 16-25s and marginalised adults: from recognising Identity to delivering measurable Impact.
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
