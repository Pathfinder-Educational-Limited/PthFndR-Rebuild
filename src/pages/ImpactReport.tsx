import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Users, Lightbulb, Target, TrendingUp, Award, Handshake } from 'lucide-react';

export default function ImpactReport() {
  return (
    <>
      <SEO 
        title="RE-DESIGN & RE-THINK 2026 Impact Report | PthFndR" 
        description="PthFndR in collaboration with MEaP & GIFT presents: Own Your City. Discover how we re-imagined youth innovation."
      />

      {/* Top Sponsorship Bar */}
      <div className="bg-slate-900 text-slate-300 py-3 text-center text-sm font-medium tracking-wide border-b border-white/10">
        Supported by MEaP, Flourish Together CIC, and dishMCR by Barclays Eagle Labs.
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pth-navy-deep py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-pth-cyan font-bold tracking-wider uppercase text-sm mb-6">
              RE-DESIGN & RE-THINK 2026 Impact Report
            </p>
            <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
              PthFndR in collaboration with MEaP & GIFT presents: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-pth-gradient">Own Your City.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ROI Widget (Institutional Briefing) */}
      <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl font-heading font-bold text-pth-navy uppercase tracking-wider">
              Social Value "Institutional Briefing"
            </h2>
            <p className="text-sm text-slate-500 mt-2">Social Value Metrics (Feb 18-20)</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3"><Users className="w-8 h-8 text-identity-blue" /></div>
              <p className="text-3xl font-bold text-pth-navy">8</p>
              <p className="text-sm font-medium text-slate-600 mt-1">Young People (16-25)</p>
            </div>
            <div>
              <div className="flex justify-center mb-3"><Handshake className="w-8 h-8 text-character-green" /></div>
              <p className="text-3xl font-bold text-pth-navy">1:2</p>
              <p className="text-sm font-medium text-slate-600 mt-1">Mentorship Ratio</p>
              <p className="text-[10px] text-slate-400">High-Support Infrastructure</p>
            </div>
            <div>
              <div className="flex justify-center mb-3"><Lightbulb className="w-8 h-8 text-competence-orange" /></div>
              <p className="text-3xl font-bold text-pth-navy">5</p>
              <p className="text-sm font-medium text-slate-600 mt-1">Solutions Developed</p>
              <p className="text-[10px] text-slate-400">Systems-Level</p>
            </div>
            <div>
              <div className="flex justify-center mb-3"><Award className="w-8 h-8 text-pth-lime" /></div>
              <p className="text-4xl font-extrabold text-pth-lime drop-shadow-sm">£640</p>
              <p className="text-sm font-medium text-slate-600 mt-1">Implementation Funding</p>
              <p className="text-[10px] text-slate-400">Awarded via prizes</p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm font-medium text-slate-600">
              <strong className="text-pth-navy">Anchor Partners:</strong> MEaP and dishMCR by Barclays Eagle Labs
            </p>
            <p className="text-sm font-medium text-slate-600 mt-2 max-w-2xl mx-auto">
              <strong className="text-pth-navy">ROI Metric:</strong> Cost per solution of just £265. With <span className="text-pth-lime font-bold">£640</span> in prize funding across 5 solutions, this highlights the extreme efficiency of the PthFndR x MEaP x GIFT delivery model.
            </p>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-heading font-bold text-pth-navy mb-8 leading-tight text-center">
              Collaboration as a Catalyst: How PthFndR, MEaP, and GIFT Re-Imagined Youth Innovation.
            </h2>
            
            <p className="lead text-xl text-slate-600 mb-10 text-center font-medium">
              Last week at the Digital Security Hub (DiSH), a unique partnership proved that when organizations align their missions, the results are transformative.
            </p>

            <p>
              Pathfinder Educational Limited (trading as PthFndR), in collaboration with Making Education a Priority (MEaP) and Grace Incorporated Faith Trust (GIFT), delivered the RE-DESIGN & RE-THINK 2026 bootcamp.
            </p>
            <p>
              This wasn't just an event; it was a community-led intervention supported by Flourish Together CIC and dishMCR by Barclays Eagle Labs.
            </p>

            <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-4">The Power of the Partnership</h3>
            <p>
              By combining PthFndR's Trapezium Model™ with MEaP's educational priority and GIFT's community trust, we created a high-support environment for 8 young architects.
            </p>

            <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-6">The 3-Day Transformation: From Identity to Intervention</h3>
            
            <div className="space-y-8 my-8 not-prose">
              {/* Day 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-identity-blue"></div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-identity-blue/10 text-identity-blue font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase">Day 1</span>
                  <h4 className="text-xl font-heading font-bold text-pth-navy">Identity</h4>
                </div>
                <p className="text-slate-600">
                  <strong className="text-pth-navy">IP Integration: Ginosko (Experiential Knowledge).</strong> Grounded in Ginosko, participants explored their unique value. Supported by PthFndR pedagogical expertise, this stage moved beyond "soft skills" into deep professional identity.
                </p>
              </div>

              {/* Day 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-character-green"></div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-character-green/10 text-character-green font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase">Day 2</span>
                  <h4 className="text-xl font-heading font-bold text-pth-navy">Systems Thinking and Storytelling</h4>
                </div>
                <p className="text-slate-600">
                  Narratives for change. Participants learned to bridge the gap between their lived experience and systemic solutions.
                </p>
              </div>

              {/* Day 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-impact-purple"></div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-impact-purple/10 text-impact-purple font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase">Day 3</span>
                  <h4 className="text-xl font-heading font-bold text-pth-navy">The Social Hackathon</h4>
                </div>
                <p className="text-slate-600">
                  <strong className="text-pth-navy">IP Integration: Sterizo (Action/Impact).</strong> Five young people pitched to a panel of industry experts, including judges from BoohooMAN, Barclays Bank and End2End Talent.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-4">The 5 Solutions for Greater Manchester</h3>
            <p>
              The solutions designed—ranging from social-media-based job boards to intergenerational community centre—weren't just ideas; they were "architected" interventions ready for pilot.
            </p>

            <h3 className="text-2xl font-heading font-bold text-pth-navy mt-12 mb-4">Scaling the Success</h3>
            <p>
              As we enter March, our focus shifts to the Greater Manchester Combined Authority (GMCA). The collaboration between PthFndR, MEaP, and GIFT has provided a blueprint for how social value can be delivered efficiently. With a cost per solution of just £265, and <strong className="text-pth-lime">£640</strong> in direct implementation prize funding awarded across 5 solutions, we have proven the extreme efficiency and scalability of this delivery model.
            </p>
          </article>
        </div>
      </section>

      {/* Bottom Sponsorship Bar */}
      <div className="bg-slate-900 text-slate-300 py-4 text-center text-sm font-medium tracking-wide">
        Supported by MEaP, Flourish Together CIC, and dishMCR by Barclays Eagle Labs.
      </div>
    </>
  );
}
