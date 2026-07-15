import SEO from '../components/SEO';
import { ArrowLeft, Bookmark, Share2, MapPin, Clock, Calendar, Users, Briefcase, Star, CheckCircle, MessageSquare, BriefcaseBusiness } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function OpportunityDetail() {
  const { id } = useParams();

  return (
    <>
      <SEO 
        title="Product Design Beta Testing | PthFndR"
        description="Join TechFuture Startup for an exclusive early look at our new educational platform."
      />

      <div className="bg-pth-cream min-h-screen pb-20">
        
        {/* HEADER */}
        <div className="bg-white border-b border-slate-200 pt-8 pb-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link to="/opportunities" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-pth-navy transition-colors mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to Opportunities
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <Link to="/organisation/techfuture" className="text-sm font-bold text-pth-green hover:underline mb-2 block">
                  TechFuture Startup
                </Link>
                <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-pth-navy mb-4 leading-tight">
                  Product Design Beta Testing Session
                </h1>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">
                    Beta Testing
                  </span>
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-pth-navy ml-1">4.8</span>
                    <span className="text-sm text-slate-500 underline cursor-pointer">(12 previous)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-pth-navy transition-colors bg-white shadow-sm">
                  <Share2 size={20} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-pth-green transition-colors bg-white shadow-sm">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* MAIN CONTENT */}
            <div className="flex-1 space-y-8">
              
              {/* Key Details Summary Bar */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Calendar size={16} /> <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Duration</span>
                  </div>
                  <p className="font-bold text-pth-navy">1 day (Oct 24)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <MapPin size={16} /> <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Location</span>
                  </div>
                  <p className="font-bold text-pth-navy">London (In-person)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <BriefcaseBusiness size={16} /> <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Reward</span>
                  </div>
                  <p className="font-bold text-pth-navy">£50 Voucher</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Users size={16} /> <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Capacity</span>
                  </div>
                  <p className="font-bold text-pth-navy">8/10 slots left</p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500">Skills developed:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm">UX Design</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm">Feedback Analysis</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm">Product Strategy</span>
                </div>
              </div>

              {/* Description Sections */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-10">
                
                <section>
                  <h3 className="text-xl font-heading font-bold text-pth-navy mb-4">What you'll do</h3>
                  <div className="prose prose-slate max-w-none text-slate-600">
                    <p>
                      Join our product and engineering teams for an exclusive early look at our new educational platform designed specifically for Gen-Z learners. You'll be part of a small, focused group participating in structured usability tests.
                    </p>
                    <p>
                      Throughout the day, you will be given specific tasks to complete on the platform while sharing your screen and narrating your thought process. Afterwards, we'll have a group discussion to gather qualitative feedback on the overall aesthetic, flow, and value proposition.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-heading font-bold text-pth-navy mb-4">What you'll learn</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-pth-green shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-600">How real tech companies conduct user research and usability testing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-pth-green shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-600">The terminology and metrics used by product designers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-pth-green shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-600">How to give constructive, actionable feedback on digital products.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-heading font-bold text-pth-navy mb-4">Why this matters</h3>
                  <p className="text-slate-600 leading-relaxed">
                    EdTech platforms are often designed *for* young people without actually including them in the process. Your insights will directly shape a product that aims to make learning more accessible and engaging for thousands of students across the UK.
                  </p>
                </section>

              </div>

              {/* Participants Say */}
              <div className="bg-pth-navy-deep rounded-2xl p-8 text-white">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center justify-between">
                  What past participants say
                  <div className="flex items-center gap-1 text-[#F59E0B] text-lg">
                    <Star size={20} fill="currentColor" /> 4.8
                  </div>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-5 rounded-xl border border-white/10">
                    <p className="italic text-slate-300 text-sm mb-4">"Really eye-opening experience. The team actually listened to our criticisms and showed us how they were going to implement changes based on what we said."</p>
                    <p className="font-bold text-sm">Jamie, 19</p>
                  </div>
                  <div className="bg-white/10 p-5 rounded-xl border border-white/10">
                    <p className="italic text-slate-300 text-sm mb-4">"It was great to add this to my CV. I learned a lot about UX design terminology just from being in the room with the professionals."</p>
                    <p className="font-bold text-sm">Amira, 21</p>
                  </div>
                </div>
                <button className="mt-6 text-sm font-bold text-pth-green hover:underline">View all 12 reviews</button>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-full lg:w-80 shrink-0 space-y-6">
              
              {/* Application Card (Sticky) */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg sticky top-24">
                <div className="mb-6">
                  <p className="text-sm font-bold text-red-500 mb-1">Apply by Oct 20</p>
                  <p className="text-xs text-slate-500">Only 8 spots remaining</p>
                </div>
                
                <button className="w-full bg-pth-green text-white px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-colors shadow-sm mb-4">
                  Apply Now
                </button>
                
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-start gap-3">
                  <Briefcase className="text-pth-navy shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-slate-600 font-medium">
                    <span className="font-bold text-pth-navy block mb-1">Portfolio Verification</span>
                    Upon successful completion, this opportunity will be verified and added to your PthFndR capability portfolio.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <button className="w-full flex items-center justify-center gap-2 text-sm font-bold text-pth-navy hover:text-pth-green transition-colors border-2 border-slate-100 hover:border-pth-green py-2.5 rounded-xl">
                    <MessageSquare size={16} /> Ask a Question
                  </button>
                </div>
              </div>

              {/* Organisation Info */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-pth-navy mb-4 uppercase tracking-wider text-xs">About the Host</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl font-bold text-slate-400">
                    TF
                  </div>
                  <div>
                    <Link to="/organisation/techfuture" className="font-bold text-pth-navy hover:text-pth-green transition-colors">TechFuture Startup</Link>
                    <p className="text-xs text-slate-500">London, UK • Since 2024</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                  TechFuture is an early-stage startup building the next generation of personalized learning tools. We believe technology should adapt to the student, not the other way around.
                </p>
                <a href="#" className="text-sm font-bold text-pth-green hover:underline">View Organisation Profile</a>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-pth-navy mb-4 uppercase tracking-wider text-xs">Requirements & Details</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-pth-navy">•</span>
                    <span>No prior design experience required, but an interest in tech is a plus.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-pth-navy">•</span>
                    <span>Must be aged 16-25.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-pth-navy">•</span>
                    <span>Bring your own laptop if possible (spares available if needed).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-pth-navy">•</span>
                    <span>Lunch and refreshments will be provided.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-pth-navy">•</span>
                    <span>Wheelchair accessible venue.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
