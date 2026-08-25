import { Fingerprint, Wrench, Globe } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';

const streams = [
  {
    n: '01',
    tag: 'Identity',
    title: 'Discover',
    icon: Fingerprint,
    desc: 'Understand who you are: your strengths, values, interests, and what matters to you. Before you can own your future, you need to know yourself.',
  },
  {
    n: '02',
    tag: 'Capability',
    title: 'Develop',
    icon: Wrench,
    desc: 'Build the practical skills employers want: communication, problem-solving, professional presence, and sector-specific ability. Theory meets practice, straight away.',
  },
  {
    n: '03',
    tag: 'Opportunity',
    title: 'Deploy',
    icon: Globe,
    desc: 'Connect with real work, real organisations, and real impact. Build evidence you can show. Make real connections. Earn if you can. Explore if you want.',
  },
];

export default function ThreeStreamsSection() {
  return (
    <section aria-labelledby="streams-heading" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <Eyebrow className="mb-5">Our approach</Eyebrow>
          <h2
            id="streams-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.0] mb-6"
          >
            Discover.<span className="text-pth-teal"> Develop.</span><span className="text-pth-green"> Deploy.</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 mt-6 max-w-2xl">
            Our approach ensures young people are not just prepared for jobs, but ready to thrive in their careers and lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {streams.map((s) => (
            <div
              key={s.title}
              className="group relative bg-pth-warm p-8 lg:p-10 rounded-3xl border border-black/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span className="absolute top-6 right-8 font-heading font-extrabold text-6xl lg:text-7xl text-pth-navy/5 group-hover:text-pth-green/20 transition-colors duration-300 select-none">
                {s.n}
              </span>
              <div className="relative">
                <div className="w-14 h-14 bg-pth-green/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-pth-green/20">
                  <s.icon size={28} className="text-pth-green" aria-hidden="true" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{s.tag}</p>
                <h3 className="text-3xl lg:text-4xl font-heading font-extrabold text-pth-navy mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
