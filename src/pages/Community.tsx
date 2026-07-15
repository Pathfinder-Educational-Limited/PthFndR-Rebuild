import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, HeartHandshake, BookOpen, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

const benefits = [
  { icon: Users, title: 'Peer Network', desc: 'Connect with hundreds of young people on similar journeys. Share experiences, celebrate wins, and support each other.' },
  { icon: Briefcase, title: 'Real Opportunities', desc: 'Access exclusive micro-opportunities, internships, and work placements with real employers. Build your portfolio.' },
  { icon: HeartHandshake, title: 'Mentorship', desc: 'Get matched with mentors from leading organisations. Get guidance, advice, and support on your journey.' },
  { icon: BookOpen, title: 'Resources & Learning', desc: 'Access exclusive resources, guides, and learning materials to develop your skills and boost your career.' },
  { icon: Star, title: 'Recognition', desc: 'Get recognition for your achievements, build your portfolio with verified experience, and celebrate progress.' },
];

const steps = [
  { n: '1', title: 'You Join', desc: "Complete your profile in 2 minutes. Tell us about yourself and what you're looking for." },
  { n: '2', title: 'Get Access', desc: 'Gain instant access to community features, opportunities, and resources.' },
  { n: '3', title: 'Explore', desc: 'Browse opportunities, connect with peers, and find your next adventure.' },
  { n: '4', title: 'Grow', desc: 'Develop skills, build experience, and transform your future.' },
];

const faqs = [
  { q: 'Who can join?', a: 'Anyone aged 16-25 who is ready to explore their potential and take action on their future.' },
  { q: 'Is it really free?', a: "Yes! Community membership is completely free. Some premium opportunities may have costs, but that's your choice." },
  { q: "What if I'm still in school?", a: 'Perfect! Many community members are school students. Join while you’re still exploring and building.' },
  { q: 'How do I get support?', a: 'Email support@pthfndr.org or message us on WhatsApp. We’re here to help.' },
];

const inputClass =
  'w-full px-4 py-3 text-base rounded-xl border border-slate-300 bg-white text-pth-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pth-green focus:border-transparent transition-shadow';

export default function Community() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    interests: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission - connect to backend/email service
    console.log('Form submitted:', formData);
    alert('Thanks for joining! Check your email to get started.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', age: '', interests: '' });
  };

  return (
    <>
      <SEO
        title="Community | PthFndR"
        description="Join the PthFndR community of young people building their futures. Connect with peers, access exclusive opportunities, get mentorship, and discover your potential."
      />

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
          <span className="inline-flex items-center gap-2 bg-pth-green/10 text-pth-navy font-bold px-5 py-2.5 rounded-full">
            <Star size={18} className="text-pth-green" aria-hidden="true" /> And it&apos;s free to join!
          </span>
        </div>
      </section>

      {/* WHAT YOU GET + SIGN UP */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <Eyebrow className="mb-5">What you get</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-10">
                Everything you need to level up
              </h2>

              <div className="space-y-6">
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
                  <strong className="text-pth-navy">Ready to level up your game?</strong> The PthFndR Community is for young people who are serious about building their futures and exploring what&apos;s possible.
                </p>
              </div>
            </div>

            {/* Signup form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-pth-warm p-8 lg:p-10 rounded-3xl border border-black/5 shadow-xl">
                <h3 className="text-3xl font-heading font-extrabold text-pth-navy mb-2">Sign up</h3>
                <p className="text-slate-600 mb-8">Join the PthFndR Community today. It takes 2 minutes.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-pth-navy mb-1.5">First name *</label>
                      <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-pth-navy mb-1.5">Last name *</label>
                      <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-pth-navy mb-1.5">Email *</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-pth-navy mb-1.5">Phone number *</label>
                      <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+44..." />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-semibold text-pth-navy mb-1.5">Age *</label>
                      <input id="age" type="number" name="age" value={formData.age} onChange={handleChange} required min="16" max="30" className={inputClass} placeholder="Your age" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-semibold text-pth-navy mb-1.5">What interests you most?</label>
                    <textarea id="interests" name="interests" value={formData.interests} onChange={handleChange} className={inputClass} placeholder="E.g., Tech, Marketing, Social Impact..." rows={3} />
                  </div>

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-pth-green text-white font-bold py-4 px-6 rounded-xl text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl mt-2">
                    Join the community <ArrowRight size={20} aria-hidden="true" />
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-2">
                    By signing up, you agree to our{' '}
                    <Link to="/terms" className="underline hover:text-pth-navy">Terms of Service</Link> and{' '}
                    <Link to="/privacy" className="underline hover:text-pth-navy">Privacy Policy</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="relative bg-pth-navy-deep py-24 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Eyebrow tone="cyan" className="mb-5">The journey</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance leading-[1.02]">
              What happens next
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-6">
                <span className="font-heading font-extrabold text-6xl lg:text-7xl text-pth-green leading-none block mb-4">{s.n}</span>
                <h3 className="text-xl font-heading font-bold mb-2">{s.title}</h3>
                <p className="text-white/70 leading-relaxed">{s.desc}</p>
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
                It takes 2 minutes. Let&apos;s build your future together.
              </p>
              <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#36b666] transition-all shadow-lg hover:shadow-xl">
                Join now <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
