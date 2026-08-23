import { Eyebrow } from './ui/Eyebrow';

const metrics = [
  { value: '223', label: 'young people supported' },
  { value: '8', label: 'school & organisation partners' },
  { value: '95%', label: 'progress to work or further education' },
];

export default function ImpactMetricsSection() {
  return (
    <section aria-label="Impact Metrics" className="relative bg-pth-navy-deep py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Eyebrow tone="cyan" className="mb-5">Our impact</Eyebrow>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white text-balance leading-[1.02]">
            Numbers that mean something
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {metrics.map((m) => (
            <div key={m.label} className="border-t border-white/15 pt-6">
              <p className="font-heading font-extrabold text-pth-green text-6xl lg:text-8xl leading-none mb-4 tracking-tight">
                {m.value}
              </p>
              <p className="text-white/80 font-medium lg:text-lg">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
