import { Link } from 'react-router-dom';
import { Users, Briefcase, HeartHandshake, BookOpen, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';
import { CommunitySchema } from '../components/SEOSchemas';
import { storiesContent } from '../content/pages/stories';

const benefits = [
  { icon: Users, title: 'Peer Network', desc: 'Connect with 223 young people on similar journeys. Share experiences, celebrate wins, and support each other.' },
  { icon: Briefcase, title: 'Real Opportunities', desc: 'Access exclusive micro-opportunities, internships, and work placements with real employers. Build your portfolio.' },
  { icon: HeartHandshake, title: 'Mentorship', desc: 'Get matched with mentors from leading organisations. Get guidance, advice, and support on your journey.' },
  { icon: BookOpen, title: 'Resources & Learning', desc: 'Access exclusive resources, guides, and learning materials to develop your skills and boost your career.' },
  { icon: Star, title: 'Recognition', desc: 'Get recognition for your achievements, build your portfolio with verified experience, and celebrate progress.' },
];

const steps = [
  { n: '1', title: 'You Join', desc: "Create your free account in 2 minutes." },
  { n: '2', title: 'Get Access', desc: 'Gain instant access to community features, opportunities, and resources.' },
  { n: '3', title: 'Explore', desc: 'Browse opportunities, connect with peers, and find your next adventure.' },
  { n: '4', title: 'Grow', desc: 'Develop skills, build experience, and transform your future.' },
];

const faqs = [
  { q: 'Who can join?', a: 'Anyone aged 16-24 who is ready to explore their potential and take action on their future.' },
  { q: 'Is it really free?', a: "Yes! Community membership is completely free. Some premium opportunities may have costs, but that's your choice." },
  { q: "What if I'm still in school?", a: 'Perfect! Many community members are school students. Join while you\u2019re still exploring and building.' },
  { q: 'How do I get support?', a: 'Email hello@pthfndr.org or message us on WhatsApp. We\u2019re here to help.' },
];

export default function Community() {
  return (
    <>
      <SEO
        title="Community | PthFndR"
        description="Join the PthFndR community of young people building their futures. Connect with peers, access exclusive opportunities, get mentorship, and discover your potential."
        url="https://pthfndr.org/community"
      />
      <CommunitySchema />

      {/* HERO */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-28 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[380px] lg:w-[520px] text-pth-green/15" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow tone="cyan" className="mb-6">Join a movement</Eyebrow>
          <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
            The PthFndR <span className="text-pth-cyan">Community</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 font-medium mb-8">
            Join the PthFndR community of young people building their futures. Connect with peers, access exclusive opportunities, get mentorship, and discover your potential.
          </p>
          <Link to="/signup" className="inline-flex items-center gap-2 bg-pth-green text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl">
            Join now, it's free <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Eyebrow className="mb-5">What you get</Eyebrow>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-10">
            Everything you need to level up
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-pth-green/10 text-pth-green flex items-center justify-center">
                  <b.icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-pth-navy mb-1">{b.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-pth-cream p-8 rounded-3xl border-l-4 border-pth-green">
            <p className="text-slate-700 text-lg">
              <strong className="text-pth-navy">Ready to level up your game?</strong> The PthFndR Community is for young people who are serious about building their futures and exploring what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* STORIES — merged in from the retired standalone Stories page */}
      <section className="py-20 bg-pth-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 text-center mx-auto">
            <Eyebrow className="mb-5">Real stories</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance">
              {storiesContent.hero.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesContent.stories && storiesContent.stories.length > 0 ? (
              storiesContent.stories.map((story, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-pth-navy to-pth-green flex items-center justify-center">
                    <div className="text-white text-6xl">👤</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-pth-navy mb-2">{story.name}, {story.age}</h3>
                    <p className="text-pth-green font-semibold text-sm mb-3">{story.role}</p>
                    <p className="text-slate-700 text-sm">{story.summary}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-600 text-lg">Real stories are on their way. Check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section aria-label="Impact Metrics" className="relative bg-pth-navy-deep py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance leading-[1.02] text-center mx-auto">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-12 max-w-3xl mx-auto text-center">
            {storiesContent.stats && storiesContent.stats.map((stat, i) => (
              <div key={i} className="border-t border-white/15 pt-6">
                <p className="font-heading font-extrabold text-pth-green text-6xl lg:text-8xl leading-none mb-4 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/80 font-medium lg:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow tone="cyan" className="mb-5">The journey</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]">
              What happens next
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-slate-200 pt-6">
                <span className="font-heading font-extrabold text-6xl lg:text-7xl text-pth-green leading-none block mb-4">{s.n}</span>
                <h3 className="text-xl font-heading font-bold text-pth-navy mb-2">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <Eyebrow className="mb-5">Questions?</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance">
              Good to know
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white p-8 rounded-3xl border border-black/5">
                <h3 className="font-heading font-bold text-pth-navy text-lg mb-2">{f.q}</h3>
                <p className="text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pth-navy-deep to-pth-navy px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pth-cyan/10 blur-3xl" aria-hidden="true"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-pth-green/10 blur-3xl" aria-hidden="true"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-white text-balance">Ready to join?</h2>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                It takes 2 minutes. Let's build your future together.
              </p>
              <Link to="/signup" className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl">
                Join now <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
