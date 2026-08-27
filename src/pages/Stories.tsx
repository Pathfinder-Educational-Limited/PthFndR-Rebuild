import { Link } from 'react-router-dom';
import { storiesContent } from '../content/pages/stories';
import SEO from '../components/SEO';

export default function Stories() {
  return (
    <>
      <SEO title={`${storiesContent.hero.headline} | PthFndR`} description={storiesContent.hero.subheading} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pth-cream to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-pth-navy mb-4">
            {storiesContent.hero.headline}
          </h1>
          <p className="text-2xl text-slate-600">
            {storiesContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesContent.stories && storiesContent.stories.length > 0 ? (
              storiesContent.stories.map((story, i) => (
                <div key={i} className="bg-pth-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {/* Story Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-pth-navy to-pth-green flex items-center justify-center">
                    <div className="text-white text-6xl">👤</div>
                  </div>

                  {/* Story Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-pth-navy mb-2">{story.name}, {story.age}</h3>
                    <p className="text-pth-green font-semibold text-sm mb-3">{story.role}</p>
                    <p className="text-slate-700 text-sm mb-4">{story.summary}</p>
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

      {/* Impact Stats — matches ImpactMetricsSection.tsx styling for consistency with home page */}
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

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pth-navy mb-6">Your story could be here</h2>
          <p className="text-slate-700 mb-8 text-lg">Join 223 young people transforming their futures</p>
          <Link to="/assessment" className="inline-block bg-pth-green hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all">
            Start Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}