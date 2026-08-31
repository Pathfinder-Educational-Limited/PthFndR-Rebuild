import { Link } from 'react-router-dom';
import { XCircle, Fingerprint, Wrench, Globe, Target, Heart, LineChart, Handshake, Users, Compass, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';
import { AboutPageSchema } from '../components/SEOSchemas';

const challenges = [
  { title: 'Young People Feel Stuck', points: ['Uncertain about career direction', 'Limited access to real experience', 'No authentic employer connections', 'Applying for jobs without clarity'] },
  { title: 'Schools Are Overwhelmed', points: ['Careers support stretched thin', 'Limited employer relationships', 'Difficulty measuring impact', 'Students progress without direction'] },
  { title: 'Employers Miss Talent', points: ['Talent pipeline broken', 'Diversity hiring challenges', 'Difficulty accessing entry-level talent', 'Limited time to invest'] },
];

const streams = [
  { tag: 'Identity', title: 'Discover', icon: Fingerprint, accent: 'text-pth-cyan', wrap: 'bg-pth-cyan/10', desc: 'Understand who you are: your strengths, values, interests, and what matters to you. Before you can own your future, you need to know yourself.' },
  { tag: 'Capability', title: 'Develop', icon: Wrench, accent: 'text-pth-green', wrap: 'bg-pth-green/10', desc: 'Build the practical skills employers want: communication, problem-solving, professional presence, and sector-specific ability. Theory meets practice, straight away.' },
  { tag: 'Opportunity', title: 'Deploy', icon: Globe, accent: 'text-pth-navy', wrap: 'bg-pth-navy/10', desc: 'Connect with real work, real organisations, and real impact. Build evidence you can show. Make real connections. Earn if you can. Explore if you want.' },
];

const stats = [
  { value: '223', label: 'young people reached to date' },
  { value: '95%', label: 'progression rate to work or further education' },
  { value: '72%', label: 'of young people surveyed are tired of generic employability advice' },
];

const quotes: any[] = [];

const values = [
  { icon: Target, title: 'Outcome-Obsessed', desc: 'We measure success by real impact: did they get hired? Did they progress? Are they confident? Not by engagement metrics or course completion.' },
  { icon: Heart, title: 'Young Person-Centered', desc: "Every decision starts with: what's best for the young person? Not what's easiest for us or most profitable." },
  { icon: LineChart, title: 'Evidence-Based', desc: "We test, measure, and iterate. Data informs every decision. We're transparent about what works and what doesn't." },
  { icon: Handshake, title: 'Partnership-Driven', desc: 'We work alongside organizations we respect. We invest financially and strategically. We share responsibility for outcomes.' },
  { icon: Users, title: 'Inclusive', desc: "Backgrounds, grades, locations—they don't matter. If you have potential and willingness, we're here." },
  { icon: Compass, title: 'Mission-Driven', desc: 'We\'re a mission-driven organisation. Social value matters more than profit, and every decision we make reflects that.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | PthFndR"
        description="We're building the career development system every young person deserves — connecting young people with the support, skills, and real opportunities they need to own their future."
        url="https://pthfndr.org/about"
      />
      <AboutPageSchema />

      {/* HERO */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[380px] lg:w-[520px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow tone="cyan" className="mb-6">About PthFndR</Eyebrow>
          <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
            Where young potential becomes <span className="text-pth-cyan">real impact.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
            We're building the career development system every young person deserves.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Eyebrow className="mb-5">Our mission</Eyebrow>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-10">
            Every young person has potential. Most never unlock it.
          </h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>We believe every young person has potential. Most never unlock it—not because they're not capable, but because they don't know themselves, don't have real skills, and don't know where to start.</p>
            <p className="text-pth-navy font-heading font-bold text-2xl">We're here to change that.</p>
            <p>PthFndR connects young people with the support, skills, and real opportunities they need to own their future. We're not another careers advice service. We're a complete ecosystem: diagnosis, development, and deployment.</p>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">The problem</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              The challenge we solve
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {challenges.map((c) => (
              <div key={c.title} className="bg-white p-8 lg:p-10 rounded-3xl border border-black/5 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-pth-navy mb-6">{c.title}</h3>
                <ul className="space-y-4">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-600">
                      <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE CORE STREAMS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Our approach</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              Discover, Develop, Deploy
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 mt-6">Three stages. One journey. Here's how it works.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {streams.map((s) => (
              <div key={s.title} className="group bg-pth-warm p-8 lg:p-10 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.wrap}`}>
                  <s.icon size={26} className={s.accent} aria-hidden="true" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">{s.tag}</span>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-pth-navy mt-1 mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-pth-navy-deep rounded-3xl p-8 lg:p-10 text-center">
            <p className="text-white/90 text-lg lg:text-xl italic max-w-3xl mx-auto">
              Discover without Develop is wasted potential. Develop without Deploy is untested skill. Deploy without Discover is just random effort. <strong className="text-pth-green not-italic font-heading">Together? Transformation.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="relative bg-pth-navy-deep py-24 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow tone="cyan" className="mb-5">Track record</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance leading-[1.02]">
              What we've achieved
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-white/15 pt-6">
                <p className="font-heading font-extrabold text-pth-green text-6xl lg:text-7xl leading-none mb-4 tracking-tight">{s.value}</p>
                <p className="text-white/80 lg:text-lg">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-5">Our values</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              How we operate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v) => (
              <div key={v.title} className="group bg-white p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-pth-green/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                  <v.icon size={26} className="text-pth-green" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-bold text-pth-navy mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow className="mb-5 justify-center">Built through partnership</Eyebrow>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-8">
            We don't do this alone
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 mb-6">
            PthFndR is shaped by our work with leading youth development organizations. We invest financially and strategically in organizations doing frontline work.
          </p>
          <p className="text-slate-600">
            We partner with GIFT, Elevate Young Minds, BreakOut Charity, Flourish Together CIC, New Wine Nation, and Creative Ideation Hub to ensure young people get the support they deserve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pth-navy-deep to-pth-navy px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pth-cyan/10 blur-3xl" aria-hidden="true"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-pth-green/10 blur-3xl" aria-hidden="true"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-white text-balance">Ready to own your future?</h2>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">Or ready to partner with us to change how young people develop?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/programmes/upskill-accelerators" className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl">
                  Explore programmes <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <Link to="/for-organisations" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pth-navy transition-all">
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
