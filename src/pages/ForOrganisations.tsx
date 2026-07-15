import SEO from '../components/SEO';
import { Building2, Users, FileText, ArrowRight, CheckCircle2, TrendingUp, Handshake, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_TEL_HREF, PHONE_WHATSAPP_HREF } from '../constants/contact';

export default function ForOrganisations() {
  return (
    <>
      <SEO 
        title="For Organisations | PthFndR"
        description="Access emerging talent, gather real-world insights, and build impactful partnerships with PthFndR."
      />

      {/* HERO SECTION */}
      <section className="bg-pth-cream pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-bold tracking-widest text-pth-green uppercase mb-4 block">For Organisations</span>
              <h1 className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-pth-navy leading-tight mb-6">
                Access Emerging Talent & Real-World Insights.
              </h1>
              <p className="text-xl text-slate-600 font-medium mb-10">
                Partner with PthFndR to develop young people, test products, or hire talent who know their purpose.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/opportunities/create" className="bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-colors shadow-lg hover:shadow-xl inline-flex items-center">
                  Post an Opportunity
                </Link>
                <a href="#partnership" className="border-2 border-pth-navy text-pth-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-pth-navy hover:text-white transition-colors shadow-lg hover:shadow-xl inline-flex items-center">
                  Build a Partnership
                </a>
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
                alt="Diverse organization collaboration"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-pth-navy/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH PTHFNDR */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-pth-navy mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-slate-600">Connect with a vetted community of over 500 engaged young people ready to contribute to your organisation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-pth-cream p-8 rounded-2xl">
              <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-pth-green mb-6 shadow-sm">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-pth-navy mb-3">Engaged Demographic</h3>
              <p className="text-slate-600">Direct access to diverse, vetted young people eager for real-world experience.</p>
            </div>
            
            <div className="bg-pth-cream p-8 rounded-2xl">
              <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-pth-green mb-6 shadow-sm">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold text-pth-navy mb-3">Real-World Feedback</h3>
              <p className="text-slate-600">Authentic user testing, focus groups, and beta testing from your future customers.</p>
            </div>
            
            <div className="bg-pth-cream p-8 rounded-2xl">
              <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-pth-green mb-6 shadow-sm">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-pth-navy mb-3">Talent Pipeline</h3>
              <p className="text-slate-600">Hire graduates and build an early talent pipeline of self-aware young professionals.</p>
            </div>
            
            <div className="bg-pth-cream p-8 rounded-2xl">
              <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-pth-green mb-6 shadow-sm">
                <Handshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-pth-navy mb-3">Social Impact</h3>
              <p className="text-slate-600">Fulfill ESG credentials while actively contributing to youth development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE COLLABORATION MODELS */}
      <section className="bg-pth-cream py-24" id="partnership">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-pth-navy mb-6">Three Ways to Collaborate</h2>
            <p className="text-xl text-slate-600">Choose the engagement model that best fits your organisation's goals.</p>
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
      <section className="bg-pth-navy-deep py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-slate-300">See the impact of partnering with PthFndR.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-pth-navy mb-8">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Let's discuss how we can build a partnership that drives real impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:partnerships@pthfndr.org" className="bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-colors shadow-lg hover:shadow-xl">
              Email partnerships@pthfndr.org
            </a>
            <a href={PHONE_TEL_HREF} className="bg-pth-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0C2A5C] transition-colors shadow-lg hover:shadow-xl">
              Call Us
            </a>
            <a href={PHONE_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1ebe5b] transition-colors shadow-lg hover:shadow-xl">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
