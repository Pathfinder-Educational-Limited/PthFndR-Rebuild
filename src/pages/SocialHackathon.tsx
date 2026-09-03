import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Lightbulb, Users, Trophy, Rocket, BarChart3, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialHackathon() {
  const pillars = [
    {
      name: 'Real-World Briefs',
      icon: Lightbulb,
      description: 'Moving beyond theory to solve actual business and community challenges provided by Manchester industry partners.',
    },
    {
      name: 'Collaborative Intelligence',
      icon: Users,
      description: 'Working in multidisciplinary teams to combine diverse perspectives and lived experiences into a single solution.',
    },
    {
      name: 'Rapid Prototyping',
      icon: Zap,
      description: 'Developing, testing, and refining ideas within a high-pressure, time-boxed environment to simulate industry speed.',
    },
    {
      name: 'The "Pitch" Authority',
      icon: Rocket,
      description: "Presenting solutions to industry leaders at DiSH, proving you're ready for the marketplace.",
    },
    {
      name: 'Measurable ROI',
      icon: BarChart3,
      description: 'Every solution is evaluated on its potential for real economic and social impact.',
    }
  ];

  return (
    <>
      <SEO
        title="Social Hackathons | The Proving Ground | PthFndR"
        description="PthFndR Social Hackathons move young people from theory to action. Join us at Manchester DiSH to solve real-world industry briefs."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pth-cyan/10 border border-pth-cyan/20 text-pth-cyan text-sm font-bold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-pth-cyan animate-pulse"></span>
                Action-Led Learning
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Social Hackathons: <br className="hidden sm:block" />
                <span className="text-pth-cyan">The Proving Ground</span>
              </h1>
              <p className="text-xl leading-8 text-slate-300 font-medium">
                Where real skills meet real-world challenges.
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
              className=""
            >
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-6">
                At PthFndR, we believe that competence is best proven through action. Our Social Hackathons are the bridge between "learning" and "doing."
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Operating out of <strong className="text-pth-navy font-semibold">Heron House (DiSH)</strong>, these events bring together young people and industry experts to solve real problems. This isn't a classroom exercise; it is a high-stakes simulation of the modern UK workplace. This is the moment a young person's value becomes visible to the city.
              </p>

              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">The Hackathon Methodology</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Most training programs end with a certificate. Ours ends with a solution. During a PthFndR Social Hackathon, participants are placed into multidisciplinary teams and handed a brief from a real-world partner, be it a tech firm in Manchester or a healthcare provider in the North West.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Teams navigate the friction of collaboration, the pressure of deadlines, and the technical requirements of the brief, drawing on the same Ginosko-Sterizo® approach that shapes our programmes. By the end of the day, they don't just have a project; they have a real track record they can show.
              </p>
              <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">Why Industry Partners Join Us</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Based at the <strong className="text-pth-navy font-semibold">Digital Security Hub</strong>, these hackathons give organisations a direct look at new talent. They get to see young people in action, their character, their grit, and their ability to solve problems, before they even see a CV.
              </p>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-heading font-bold text-pth-navy mb-4">Ready to Prove Your Value?</h4>
                <p className="text-slate-600 mb-6">Join our next Social Hackathon at DiSH and show what you can really do.</p>
                <Link
                  to="/contact?for=Social+Hackathon"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-cyan transition-colors"
                >
                  Register for the Next Event
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: The 5 Pillars of the Hackathon */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">The Hackathon Experience</h3>
              <p className="text-slate-600 mb-8">
                How we turn potential into measurable economic impact in 24-48 hours:
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
                    className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-pth-cyan/10 flex items-center justify-center text-pth-cyan group-hover:bg-pth-cyan group-hover:text-white transition-colors">
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
