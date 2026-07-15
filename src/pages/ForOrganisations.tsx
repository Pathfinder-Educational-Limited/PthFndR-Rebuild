import SEO from '../components/SEO';
import { Users, ArrowRight, CheckCircle2, TrendingUp, Handshake, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_TEL_HREF, PHONE_WHATSAPP_HREF } from '../constants/contact';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

export default function ForOrganisations() {
  return (
    <>
      <SEO 
        title="For Organisations | PthFndR"
        description="Access emerging talent, gather real-world insights, and build impactful partnerships with PthFndR."
      />

      {/* HERO SECTION */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[360px] lg:w-[520px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <Eyebrow tone="cyan" className="mb-6">For Organisations</Eyebrow>
              <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-[4.5rem] leading-[0.95] mb-8">
                Access emerging talent &amp; <span className="text-pth-cyan">real-world insights.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-xl mb-10">
                Partner with PthFndR to develop young people, test products, or hire talent who know their purpose.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/opportunities/create" className="bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2">
                  Post an opportunity <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <a href="#partnership" className="border-2 border-pth-navy text-pth-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-pth-navy hover:text-white transition-all inline-flex items-center">
                  Build a partnership
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl bg-pth-green/20" aria-hidden="true"></div>
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                  alt="Diverse organization collaboration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH PTHFNDR */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Why partner</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-6">Why partner with us?</h2>
            <p className="text-lg lg:text-xl text-slate-600">Connect with a vetted community of over 500 engaged young people ready to contribute to your organisation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">Engaged Demographic</h3>
              <p className="text-slate-600">Direct access to diverse, vetted young people eager for real-world experience.</p>
            </div>
            
            <div className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">Real-World Feedback</h3>
              <p className="text-slate-600">Authentic user testing, focus groups, and beta testing from your future customers.</p>
            </div>
            
            <div className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">Talent Pipeline</h3>
              <p className="text-slate-600">Hire graduates and build an early talent pipeline of self-aware young professionals.</p>
            </div>
            
            <div className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                <Handshake size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">Social Impact</h3>
              <p className="text-slate-600">Fulfill ESG credentials while actively contributing to youth development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE COLLABORATION MODELS */}
      <section className="bg-pth-cream py-24" id="partnership">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Collaboration models</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-6">Three ways to collaborate</h2>
            <p className="text-lg lg:text-xl text-slate-600">Choose the engagement model that best fits your organisation's goals.</p>
          </div>

          <div className="space-y-12">
            {/* MODEL 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row">
              <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest text-pth-green uppercase mb-4 block">Model 1</span>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-pth-navy mb-4">Post Micro-Opportunities</h3>
                <p className="text-lg text-slate-600 mb-6">Host 1-day events, 2-5 day projects, micro-internships, or beta testing sessions.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">For:</span> <span className="text-slate-600">Tech companies, nonprofits, agencies, startups.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">Cost:</span> <span className="text-slate-600">Free to post (premium features coming soon).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">Benefits:</span> <span className="text-slate-600">Real feedback, authentic user testing, social impact.</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/opportunities/create" className="bg-pth-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0C2A5C] transition-colors w-fit">
                  Post Your First Opportunity
                </Link>
              </div>
              <div className="lg:w-1/2 bg-slate-100 relative min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Micro-opportunity" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* MODEL 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row-reverse">
              <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest text-pth-green uppercase mb-4 block">Model 2</span>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-pth-navy mb-4">Build Long-Term Partnerships</h3>
                <p className="text-lg text-slate-600 mb-6">Custom programmes, facilitation, training, and curriculum design tailored to your context.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">For:</span> <span className="text-slate-600">Schools, colleges, local authorities.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">Investment:</span> <span className="text-slate-600">Based on scale (Bronze/Silver/Gold tiers).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">Benefits:</span> <span className="text-slate-600">Holistic youth development, policy-aligned outcomes, certified facilitators.</span>
                    </div>
                  </div>
                </div>
                
                <a href="https://calendly.com/pthfndr" target="_blank" rel="noopener noreferrer" className="bg-pth-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0C2A5C] transition-colors w-fit">
                  Schedule a Partnership Call
                </a>
              </div>
              <div className="lg:w-1/2 bg-slate-100 relative min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Long-term partnership" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* MODEL 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row">
              <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest text-pth-green uppercase mb-4 block">Model 3</span>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-pth-navy mb-4">Research & Insight Partnerships</h3>
                <p className="text-lg text-slate-600 mb-6">Contribute to the annual Formation Index research and access exclusive youth insights.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">For:</span> <span className="text-slate-600">Organisations tracking youth formation and development.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">Cost:</span> <span className="text-slate-600">Free or data-sharing partnership.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-pth-navy">Benefits:</span> <span className="text-slate-600">Benchmark data, thought leadership, exclusive research access.</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact" className="bg-pth-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0C2A5C] transition-colors w-fit">
                  Join Formation Index
                </Link>
              </div>
              <div className="lg:w-1/2 bg-slate-100 relative min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Research and data" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="relative bg-pth-navy-deep py-24 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow tone="cyan" className="mb-5">Success stories</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance leading-[1.02] mb-6">See the impact</h2>
            <p className="text-lg lg:text-xl text-white/75">See the impact of partnering with PthFndR.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <div className="text-pth-green font-bold text-sm tracking-wider uppercase mb-2">Google</div>
              <h4 className="text-xl font-bold mb-4">Hosted a 2-Day Hackathon</h4>
              <p className="text-slate-300 mb-6">Engaged 50 young people in solving a real product challenge, resulting in 3 direct hires.</p>
              <p className="italic text-slate-400">"Authentic feedback and incredible talent discovery."</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <div className="text-pth-green font-bold text-sm tracking-wider uppercase mb-2">Local Authority</div>
              <h4 className="text-xl font-bold mb-4">District-wide Activation Lab</h4>
              <p className="text-slate-300 mb-6">Implemented our identity curriculum across 12 schools, increasing engagement by 40%.</p>
              <p className="italic text-slate-400">"Transformed how our students view their potential."</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <div className="text-pth-green font-bold text-sm tracking-wider uppercase mb-2">Fintech Startup</div>
              <h4 className="text-xl font-bold mb-4">Gen-Z Beta Testing</h4>
              <p className="text-slate-300 mb-6">Hosted a focus group to test a new financial literacy app, leading to critical UI improvements.</p>
              <p className="italic text-slate-400">"The insights saved us months of misguided development."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pth-navy-deep to-pth-navy px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pth-cyan/10 blur-3xl" aria-hidden="true"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-pth-green/10 blur-3xl" aria-hidden="true"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-white text-balance">Ready to get started?</h2>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">Let's discuss how we can build a partnership that drives real impact.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:partnerships@pthfndr.org" className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl">
                  Email us
                </a>
                <a href={PHONE_TEL_HREF} className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pth-navy transition-all">
                  Call us
                </a>
                <a href={PHONE_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1ebe5b] transition-all shadow-lg hover:shadow-xl">
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
