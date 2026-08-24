import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Zap, Hammer, RotateCcw, Trophy } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';

const pathways = [
  {
    name: 'The Explorer',
    icon: Compass,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    description: 'Ready to discover.',
    detail: 'Not sure yet what you want, and that\'s a completely normal place to start. Identity work first, direction second.',
  },
  {
    name: 'The Regrouper',
    icon: RotateCcw,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    description: 'Finding the way back.',
    detail: 'You\'ve got a sense of direction — right now, the hard part is staying with it. A bit of structure can help.',
  },
  {
    name: 'The Builder',
    icon: Hammer,
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    description: 'Learning by doing.',
    detail: 'You know who you are and you keep going when it\'s hard. Now it\'s about building real, practical skill.',
  },
  {
    name: 'The Spark',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    description: 'Talent not yet lit.',
    detail: 'You\'re ready — you just haven\'t had the platform yet. What\'s missing is the opportunity to show it.',
  },
  {
    name: 'The Pathfinder',
    icon: Trophy,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    description: 'Ready for what\'s next.',
    detail: 'You\'ve got direction, resilience, and real skills. Ready for bigger opportunities — and to help others too.',
  },
];

export default function AssessmentPathwaysSection() {
  return (
    <section aria-labelledby="pathways-heading" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Eyebrow tone="cyan" className="mb-5">Find your path</Eyebrow>
          <h2
            id="pathways-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-pth-navy text-balance leading-[1.02] mb-6"
          >
            Take the free 2-minute assessment
          </h2>
          <p className="text-lg lg:text-xl text-slate-600">
            Answer 4 quick questions to discover your starting point — and exactly what to focus on next. No experience needed.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-pth-navy mb-8">
            You might be:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <div
                  key={pathway.name}
                  className={`group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 ${pathway.bgColor}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pathway.iconBg}`}>
                    <Icon className={`${pathway.color}`} size={24} aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-pth-navy mb-2">
                    {pathway.name}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {pathway.description}
                  </p>
                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
                    {pathway.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-600 font-medium mb-6">
            Ready to discover which one fits you?
          </p>
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start the assessment <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
