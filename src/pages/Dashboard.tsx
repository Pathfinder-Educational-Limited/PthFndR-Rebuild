import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, BookOpen, Shield, Zap, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEO 
        title="Dashboard | EmployaLingua" 
        description="Your EmployaLingua User Dashboard" 
      />
      
      {/* Dashboard Header */}
      <header className="bg-pth-navy-deep text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl sm:text-3xl font-rasa font-bold tracking-wide hover:text-pth-cyan transition-colors">
            Employa<i className="italic">L</i>ingua
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-sm text-slate-300">
              Welcome back, <span className="text-white font-semibold">Student</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-pth-gradient flex items-center justify-center text-pth-navy font-bold shadow-sm">
              ST
            </div>
            <Link to="/" className="text-slate-300 hover:text-white transition-colors ml-2">
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Trapezium Tracker - Mobile: Prominent Circle, Desktop: Sidebar Persistent */}
          <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-28 h-fit order-1 lg:order-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-slate-200"
            >
              <h2 className="text-xl font-heading font-bold text-pth-navy mb-6 text-center lg:text-left">
                Trapezium Tracker
              </h2>
              
              {/* Responsive Visual: Circle on mobile, Stacked blocks on desktop */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-64 h-64 lg:w-full lg:h-auto lg:aspect-auto rounded-full lg:rounded-2xl overflow-hidden flex flex-col shadow-inner border-4 border-white ring-1 ring-slate-100 relative transition-all duration-500">
                  {/* Impact (Purple) - Top */}
                  <div className="flex-1 bg-impact-purple flex items-center justify-center text-white font-bold text-sm lg:py-5 transition-all hover:bg-impact-purple/90 cursor-help" title="Impact">
                    Impact
                  </div>
                  {/* Competence (Orange) */}
                  <div className="flex-1 bg-competence-orange flex items-center justify-center text-white font-bold text-sm lg:py-5 transition-all hover:bg-competence-orange/90 cursor-help" title="Competence">
                    Competence
                  </div>
                  {/* Character (Green) */}
                  <div className="flex-1 bg-character-green flex items-center justify-center text-white font-bold text-sm lg:py-5 transition-all hover:bg-character-green/90 cursor-help" title="Character">
                    Character
                  </div>
                  {/* Identity (Blue) - Bottom */}
                  <div className="flex-1 bg-identity-blue flex items-center justify-center text-white font-bold text-sm lg:py-5 transition-all hover:bg-identity-blue/90 cursor-help" title="Identity">
                    Identity
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Overall Progress</span>
                  <span className="font-bold text-pth-navy">68%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '68%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-pth-gradient h-full rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Main Content: Daily Actions */}
          <div className="lg:w-2/3 xl:w-3/4 space-y-10 order-2 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-pth-navy mb-3">
                Daily Actions
              </h1>
              <p className="text-lg text-slate-600">
                Complete your Ginosko-Sterizo cascading tasks to build vocational fluency.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* KNOW (Ginosko) */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-identity-blue/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-identity-blue" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-pth-navy flex items-baseline gap-2">
                    KNOW <span className="text-slate-400 font-medium text-lg">(Ginosko)</span>
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <ActionCard 
                    title="Asset Mapping" 
                    description="Identify your existing skills and inherent value." 
                    completed={true} 
                    color="text-identity-blue" 
                  />
                  <ActionCard 
                    title="Legacy Definition" 
                    description="Define the long-term impact you want to create." 
                    completed={false} 
                    color="text-identity-blue" 
                  />
                </div>
              </motion.section>

              {/* BE (Sterizo) */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-character-green/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-character-green" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-pth-navy flex items-baseline gap-2">
                    BE <span className="text-slate-400 font-medium text-lg">(Sterizo)</span>
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <ActionCard 
                    title="Resilience Training" 
                    description="Develop staying power for career transitions." 
                    completed={false} 
                    color="text-character-green" 
                  />
                  <ActionCard 
                    title="Cultural Nuance" 
                    description="Understand the unwritten rules of the workplace." 
                    completed={false} 
                    color="text-character-green" 
                  />
                </div>
              </motion.section>

              {/* DO (Sterizo) */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-competence-orange/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-competence-orange" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-pth-navy flex items-baseline gap-2">
                    DO <span className="text-slate-400 font-medium text-lg">(Sterizo)</span>
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <ActionCard 
                    title="Pitch Practice" 
                    description="Articulate your value proposition clearly." 
                    completed={false} 
                    color="text-competence-orange" 
                  />
                  <ActionCard 
                    title="Vocational Vocabulary" 
                    description="Master the specific language of your target industry." 
                    completed={false} 
                    color="text-competence-orange" 
                  />
                </div>
              </motion.section>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function ActionCard({ title, description, completed, color }: { title: string, description: string, completed: boolean, color: string }) {
  return (
    <div className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group">
      <div className="mt-0.5 shrink-0">
        {completed ? (
          <CheckCircle2 className={`w-6 h-6 ${color}`} />
        ) : (
          <Circle className="w-6 h-6 text-slate-300 group-hover:text-slate-400 transition-colors" />
        )}
      </div>
      <div>
        <h3 className={`text-lg font-heading font-bold mb-1 transition-colors ${completed ? 'text-slate-400 line-through' : 'text-pth-navy group-hover:text-pth-primary-blue'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${completed ? 'text-slate-400' : 'text-slate-500'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
