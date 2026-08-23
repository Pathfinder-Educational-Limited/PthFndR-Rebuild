import SEO from '../components/SEO';
import { ArrowRight, Hammer, Users2, Rocket, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

export default function ForYoungPeople() {
  return (
    <>
      <SEO
        title="For Young People | PthFndR"
        description="Build real skills, work on real projects, and get hired. PthFndR connects 16-24 year olds with hands-on opportunities and organisations that see your potential."
      />

      {/* HERO SECTION */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[360px] lg:w-[520px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <Eyebrow tone="cyan" className="mb-6">For young people (16-24)</Eyebrow>
              <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-[4.5rem] leading-[0.95] mb-8">
                Build real skills. Do real work. <span className="text-pth-cyan">Get hired.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-xl mb-10">
                No experience? No problem. We match you with hands-on projects, hackathons and micro-opportunities with real organisations — so you can prove what you can do, not just talk about it.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/assessment"
                  className="inline-flex items-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Find your starting point <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <Link
                  to="/opportunities"
                  className="inline-flex items-center gap-2 border-2 border-pth-navy text-pth-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-pth-navy hover:text-white transition-all"
                >
                  Browse opportunities
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl bg-pth-green/20" aria-hidden="true"></div>
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Young person working on a project"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">What you get</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-6">
              Three ways we help you move forward
            </h2>
            <p className="text-lg lg:text-xl text-slate-600">
              Whether you're just starting out or stuck figuring out your next step, there's a way in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                <Hammer size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">Hands-on skills</h3>
              <p className="text-slate-600">Upskill Accelerators and social hackathons where you build something real — not another course you'll never finish.</p>
            </div>

            <div className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">Micro-opportunities</h3>
              <p className="text-slate-600">Short, real projects and placements with organisations who are actively looking for people like you.</p>
            </div>

            <div className="group bg-pth-warm p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 bg-pth-green/10 rounded-2xl flex items-center justify-center text-pth-green mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                <Users2 size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">People in your corner</h3>
              <p className="text-slate-600">A community and mentors who help you figure out what you're good at and back you when it counts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-pth-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">How it works</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              Three steps to your next opportunity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '1', title: 'Find your starting point', desc: 'Take the free 2-minute assessment to see where your strengths are and what to focus on next.', to: '/assessment', cta: 'Take the assessment' },
              { n: '2', title: 'Build real skills', desc: 'Join an Upskill Accelerator or social hackathon and work on something you can actually show people.', to: '/programmes/upskill-accelerators', cta: 'See Upskill Accelerators' },
              { n: '3', title: 'Get matched & get hired', desc: 'Apply for live micro-opportunities with organisations ready to hire people who\u2019ve proven themselves.', to: '/opportunities', cta: 'Browse opportunities' },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm flex flex-col">
                <span className="font-heading font-extrabold text-5xl text-pth-navy/10 mb-4">{step.n}</span>
                <h3 className="text-2xl font-heading font-bold text-pth-navy mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-8 flex-1">{step.desc}</p>
                <Link to={step.to} className="inline-flex items-center gap-2 font-bold text-pth-green hover:text-pth-navy transition-colors">
                  {step.cta} <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-5">Is this for you?</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              This is built for you if...
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "You're 16-24 and not sure what your next step is",
              "You've got a degree (or you're studying) but can't get a foot in the door",
              "You want real experience, not another unpaid internship that goes nowhere",
              "You're figuring things out without a lot of family connections or support behind you",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3">
                <CheckCircle2 className="text-pth-green shrink-0 mt-1" size={22} aria-hidden="true" />
                <p className="text-lg text-slate-700">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pth-navy-deep to-pth-navy px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pth-cyan/10 blur-3xl" aria-hidden="true"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-pth-green/10 blur-3xl" aria-hidden="true"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-white text-balance">Ready to start?</h2>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">Takes 2 minutes. No sign-up needed to find out where to start.</p>
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl"
              >
                Take the free assessment <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
