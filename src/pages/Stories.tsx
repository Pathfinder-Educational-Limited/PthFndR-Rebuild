import { storiesContent } from '../content/pages/stories';
import SEO from '../components/SEO';

export default function Stories() {
  return (
    <>
      <SEO title={`${storiesContent.hero.headline} | PthFndR`} description={storiesContent.hero.subheading} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-pth-navy mb-4">
            {storiesContent.hero.headline}
          </h1>
          <p className="text-2xl text-gray-600">
            {storiesContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Filter/Sort Options */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600">
              All
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300">
              By Programme
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300">
              By Sector
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300">
              Most Inspiring
            </button>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesContent.stories && storiesContent.stories.map((story, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {/* Story Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                  <div className="text-white text-6xl">👤</div>
                </div>
                
                {/* Story Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-pth-navy mb-2">{story.name}, {story.age}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-3">{story.role}</p>
                  <p className="text-gray-700 text-sm mb-4">{story.summary}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-pth-navy-deep text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {storiesContent.stats && storiesContent.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pth-navy mb-6">Your story could be here</h2>
          <p className="text-gray-700 mb-8 text-lg">Join hundreds of young people transforming their futures</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </>
  );
}