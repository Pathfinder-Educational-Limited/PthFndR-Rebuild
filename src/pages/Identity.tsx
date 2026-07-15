import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Fingerprint, Target, Heart, Globe, Key, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Identity() {
  const pillars = [
    {
      name: 'Unique Contribution DNA',
      icon: Fingerprint,
      description: 'Identifying the specific talent set and lived experiences that differentiate you as a high-value asset in the Manchester labor market.',
    },
    {
      name: 'Legacy Intent',
      icon: Target,
      description: 'Defining the long-term economic and social impact you intend to leave through your daily work and community engagement.',
    },
    {
      name: 'Vocational Calling',
      icon: Heart,
      description: 'Aligning your inner passions and inherent strengths with the actual, pressing needs of critical sectors like Digital Security and Healthcare.',
    },
    {
      name: 'Cultural Fluency',
      icon: Globe,
      description: 'Understanding how to navigate the operational norms of the UK workplace and industry environments without losing your authentic self.',
    },
    {
      name: 'Ownership',
      icon: Key,
      description: 'Taking full, unapologetic command of your contribution pathway as an active, indispensable contributor to the UK economy.',
    }
  ];

  return (
    <>
      <SEO 
        title="Identity (KNOW) | The Foundation of Contribution | PthFndR" 
        description="Reframing identity from 'Status' to 'Economic Contribution'. Discover how PthFndR uses the Trapezium Model™ to build your Contribution DNA."
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
                The Trapezium Model™
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Identity (KNOW): <br className="hidden sm:block" />
                <span className="text-identity-blue">The Foundation of Contribution</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Contribution DNA: The Engine of Economic Contribution
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
                In the Trapezium Model™, Identity is not a passive concept; it is the fundamental "KNOW" (Ginosko) that precedes all high-value action. 
              </p>
              <p>
                For the 16-25s and marginalised adults we serve at Heron House, establishing a robust Contribution DNA is the absolute first step in moving from merely seeking income to actively offering a substantial economic contribution. It fundamentally reframes the traditional, often limiting question of "Who am I?" into a far more powerful, forward-looking inquiry: <strong>"What is my Economic Value?"</strong>
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-pth-navy pt-4">The Crisis of the "Unseen Contributor"</h3>
              <p>
                Across the UK, a significant number of individuals find themselves severely underemployed, not due to a lack of capability, but because their Contribution DNA is fragmented. They have been conditioned to see themselves primarily through the lens of their barriers—whether that be their immigration status, a lack of traditional work experience, or systemic exclusion from mainstream opportunities. This fragmented, deficit-based view creates an artificial ceiling on their potential, turning highly capable individuals into "unseen contributors" who are unable to fully participate in and enrich the economy.
              </p>
              <p>
                At PthFndR, we deploy our proprietary <strong>Ginosko-Sterizo™</strong> framework to systematically reconstruct this identity. We help you move from being a passive "job seeker" to an active "Value-Creator." This shift is not merely a psychological exercise; it is deeply practical and economically vital. When an individual truly understands their Contributor Identity, they stop asking employers for a chance and start offering them a concrete solution. They begin to see how their unique background, lived experiences, and diverse perspectives are not liabilities to be hidden, but rather distinct assets that the modern UK workforce desperately needs to innovate and grow.
              </p>
              <p>
                Operating from our strategic base at the <strong>Manchester DiSH</strong> (Digital Security Hub), we witness firsthand the transformative power of identity clarity every single day. The rapidly expanding tech, healthcare, and sustainable construction sectors are not just looking for hands to do the work; they are actively seeking minds that understand their own worth and potential. By cultivating a strong, undeniable <strong>Contribution DNA</strong>, we empower individuals to step into these high-demand, high-value roles with unwavering confidence and clear purpose. This is the essence of Economic Dignity—knowing that your work matters and that your presence in the room is justified by the value you create.
              </p>
              <p>
                For FE Colleges and Local Authorities, recognizing and nurturing this Contribution DNA is the key to unlocking regional economic growth. It shifts the paradigm from managing dependency to cultivating a thriving ecosystem of Value-Creators who drive innovation from the ground up.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy pt-4">Diagnostic Hook: Are you a "Powerhouse"?</h3>
              <p>
                Our comprehensive Unseen Contributor's Diagnostic often reveals a fascinating pattern: the "Powerhouse" profile. These are individuals equipped with immense internal strength (Character) and undeniable technical skill (Vocational Fluency), yet they fundamentally lack Identity Clarity. Without a clear, articulated "KNOW," their immense energy is diffused, their efforts are scattered, and their ultimate economic contribution is stalled. They work incredibly hard, but often in the wrong direction, leading to inevitable burnout, frustration, and a profound sense of underachievement.
              </p>
              <p>
                The transformational journey, however, does not stop at simply knowing who you are. Once your Identity (KNOW) is firmly established, the next critical step in the Ginosko-Sterizo™ journey is building the fortitude to sustain it. We invite you to explore how <Link to="/character" className="text-pth-cyan hover:underline font-medium">Character (BE)</Link> forms the essential internal muscle required to maintain your trajectory as a Value-Creator in the face of inevitable adversity and industry challenges.
              </p>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-heading font-bold text-pth-navy mb-4">Unlock your Identity.</h4>
                <p className="text-slate-600 mb-6">Start your diagnostic to discover your unique profile and begin your journey toward Economic Contribution.</p>
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
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">The 5 Pillars of Identity (KNOW)</h3>
              <p className="text-slate-600 mb-8">
                To achieve true vocational fluency and economic dignity, we meticulously guide our participants through five core identity markers:
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
    </>
  );
}
