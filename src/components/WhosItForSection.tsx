import { User, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow } from './ui/Eyebrow';

const audiences = [
  {
    n: '01',
    icon: User,
    label: 'Young People',
    sub: '(16-25)',
    desc: 'Discover your potential, build real skills, and get hired by top organisations looking for your unique talent.',
    to: '/for-young-people',
    cta: 'Start your journey',
    // bold cyan card
    panel: 'bg-pth-cyan text-white',
    iconWrap: 'bg-white/15 text-white',
    button: 'bg-white text-pth-cyan hover:bg-pth-navy hover:text-white',
    body: 'text-white/90',
    num: 'text-white/25',
  },
  {
    n: '02',
    icon: GraduationCap,
    label: 'Schools',
    sub: '',
    desc: "Transform your students' career readiness with proven outcomes, structured programmes, and measurable impact tracking.",
    to: '/for-schools',
    cta: 'Partner with us',
    // deep navy card
    panel: 'bg-pth-navy-deep text-white',
    iconWrap: 'bg-white/10 text-pth-cyan',
    button: 'bg-pth-green text-white hover:bg-[#36b666]',
    body: 'text-white/80',
    num: 'text-white/15',
  },
  {
    n: '03',
    icon: Briefcase,
    label: 'Organisations',
    sub: '',
    desc: 'Connect with vetted talent, measure your social impact, and build a culture of mentorship and growth.',
    to: '/for-organisations',
    cta: 'Create opportunities',
    // warm light card
    panel: 'bg-pth-warm text-pth-navy border border-black/5',
    iconWrap: 'bg-pth-green/10 text-pth-green',
    button: 'bg-pth-navy text-white hover:bg-pth-navy-deep',
    body: 'text-slate-600',
    num: 'text-pth-navy/10',
  },
];

export default function WhosItForSection() {
  return (
    <section aria-labelledby="audience-heading" className="bg-pth-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Eyebrow className="mb-5">Who it's for</Eyebrow>
          <h2
            id="audience-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02]"
          >
            Built for everyone in your journey
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 mt-6 max-w-2xl">
            Whether you're starting your career, guiding students, or building a team, PthFndR provides the platform to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((a) => (
            <div
              key={a.label}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${a.panel}`}
            >
              <span className={`absolute top-6 right-8 font-heading font-extrabold text-6xl lg:text-7xl select-none ${a.num}`}>
                {a.n}
              </span>
              <div className="relative flex-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${a.iconWrap}`}>
                  <a.icon size={26} aria-hidden="true" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                  {a.label}
                  {a.sub && <span className="text-base font-sans font-normal opacity-70 ml-2">{a.sub}</span>}
                </h3>
                <p className={`mb-8 leading-relaxed ${a.body}`}>{a.desc}</p>
              </div>
              <Link
                to={a.to}
                className={`inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pth-green ${a.button}`}
              >
                {a.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
