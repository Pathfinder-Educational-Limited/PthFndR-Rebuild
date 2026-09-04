import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Fingerprint, Target, Heart, Globe, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Identity() {
  const pillars = [
    {
      name: 'What Makes You, You',
      icon: Fingerprint,
      description: 'Your skills, your experiences, the things you\u2019re actually good at, even the ones you haven\u2019t thought to mention on a CV yet.',
    },
    {
      name: 'What You Want to Leave Behind',
      icon: Target,
      description: 'A sense of the kind of impact you want your work to have, not just a job title, but what you actually want to change or build.',
    },
    {
      name: 'What You Care About',
      icon: Heart,
      description: 'Matching what you\u2019re naturally drawn to with real, in-demand fields, like cyber, healthcare, or construction, so work doesn\u2019t feel like a compromise.',
    },
    {
      name: 'Where You Come From',
      icon: Globe,
      description: 'Your culture, your background, your beliefs, whatever they are. They\u2019ve shaped who you are, and that\u2019s something to build on, not hide.',
    },
    {
      name: 'Taking Ownership',
      icon: Key,
      description: 'Treating your own path as something you\u2019re actively building, not something that happens to you.',
    }
  ];

  return (
    <>
      <SEO 
        title="Identity (Discover) | Know Who You Are | PthFndR" 
        description="Identity is the first stage of the Trapezium Model. Discover how PthFndR helps young people understand who they are before figuring out what's next."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-identity-blue/20 via-pth-navy-deep to-pth-navy-deep"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-identity-blue/10 border border-identity-blue/20 text-identity-blue text-sm font-bold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-identity-blue"></span>
                The Trapezium Model
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Identity: <br className="hidden sm:block" />
                <span className="text-identity-blue">Know Who You Are First</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Before you can decide where you're going, you need to know what you're working with.
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
              className="space-y-6 text-lg text-slate-700"
            >
              <p className="text-xl font-semibold text-slate-900">
                In the Trapezium Model, Identity comes first, before skills, before opportunity.
              </p>
              <p>
                For the young people we work with at Heron House, understanding what you bring is the first real step toward figuring out where you're going. It turns the question "who am I?" into something more useful: "what do I actually have to offer?"
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-pth-navy pt-4">Why so many young people feel stuck</h3>
              <p>
                A lot of young people we meet are genuinely capable, but don't see it, because they've been taught to think about themselves in terms of what they're missing: no experience, no network, no "traditional" background. That way of thinking puts an artificial ceiling on what's actually possible.
              </p>
              <p>
                We work with young people to flip that. Instead of asking "what am I missing," we start with "what do I already have." Most people are carrying more real, usable strengths than they realise, they just haven't had the chance to name them properly.
              </p>
              <p>
                Based at Manchester's Digital Security Hub, we see this shift happen constantly. The fastest-growing sectors, tech, healthcare, sustainable construction, aren't just looking for hands. They're looking for people who understand their own value and can explain it clearly.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy pt-4">When energy and direction don't match</h3>
              <p>
                Some of the most driven young people we work with are also the most stuck, not because they lack effort, but because that effort has nowhere clear to go. Real strength and real skill, without a clear sense of direction, gets scattered. People end up working hard in the wrong direction, and burning out from it.
              </p>
              <p>
                Once you're clear on who you are, the next step is building the resilience to hold onto that under pressure. Explore how <Link to="/character" className="text-pth-cyan hover:underline font-medium">Character</Link> builds the staying power to keep going when things get hard.
              </p>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-heading font-bold text-pth-navy mb-4">Start with who you are.</h4>
                <p className="text-slate-600 mb-6">Take the free assessment to get a clearer picture of what you bring, and where it could take you.</p>
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
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">Five things we help you get clear on</h3>
              <p className="text-slate-600 mb-8">
                Understanding yourself isn't one big realisation, it's five smaller, practical ones:
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
                      <div className="w-12 h-12 rounded-xl bg-identity-blue/10 flex items-center justify-center text-identity-blue group-hover:bg-identity-blue group-hover:text-white transition-colors">
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
      <section className="py-16 bg-pth-cream border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Next in the Trapezium Model</p>
          <Link to="/character" className="inline-flex items-center gap-2 text-lg font-heading font-bold text-pth-navy hover:text-character-green transition-colors">
            Character <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
