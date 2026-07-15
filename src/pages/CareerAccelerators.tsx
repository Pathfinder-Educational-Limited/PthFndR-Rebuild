import { careerAcceleratorsContent } from '../content/pages/careerAccelerators';
import SEO from '../components/SEO';

export default function CareerAccelerators() {
  return (
    <>
      <SEO title={`${careerAcceleratorsContent.hero.headline} | PthFndR`} description={careerAcceleratorsContent.hero.subheading} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-pth-navy mb-4">
            {careerAcceleratorsContent.hero.headline}
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            {careerAcceleratorsContent.hero.subheading}
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {careerAcceleratorsContent.hero.bodyCopy}
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            {careerAcceleratorsContent.hero.ctaButton}
          </button>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-12 text-center">
            {careerAcceleratorsContent.theChallenge.headline}
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded">
            <ul className="space-y-4">
              {careerAcceleratorsContent.theChallenge.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-500 font-bold mr-4">✗</span>
                  <span className="text-gray-700 text-lg">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-700 text-lg italic border-t border-red-200 pt-4">
              {careerAcceleratorsContent.theChallenge.result}
            </p>
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-4 text-center">
            {careerAcceleratorsContent.programmeStructure.headline}
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            {careerAcceleratorsContent.programmeStructure.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {careerAcceleratorsContent.programmeStructure.phases.map((phase, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 font-bold text-lg mb-2">
                  Weeks {phase.weeks}
                </div>
                <h3 className="text-2xl font-bold text-pth-navy mb-4">{phase.title}</h3>
                <ul className="space-y-2 mb-6">
                  {phase.activities.map((activity, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-gray-700">
                    <span className="text-green-600">Outcome:</span> {phase.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-pth-navy mb-2">Post-Programme Support</h3>
            <p className="text-gray-700">{careerAcceleratorsContent.programmeStructure.postProgramme}</p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-4 text-center">
            {careerAcceleratorsContent.outcomes.headline}
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-12 rounded-lg mb-12 text-center border-2 border-green-500">
            <div className="text-5xl font-bold text-green-600 mb-2">85%</div>
            <p className="text-lg text-gray-700">{careerAcceleratorsContent.outcomes.mainOutcome}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {careerAcceleratorsContent.outcomes.keyMetrics.map((metric, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.metric}</div>
                <p className="text-gray-700">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-16 text-center">Success Stories</h2>
          
          {careerAcceleratorsContent.successStories.map((story, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-pth-navy">{story.name}, {story.age}</h3>
                  <p className="text-gray-600">{story.company}</p>
                </div>
                <div className="text-right text-sm text-gray-500">{story.context}</div>
              </div>
              <p className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-12 text-center">Programme Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="font-bold text-pth-navy mb-2">Duration</h3>
              <p className="text-gray-700">{careerAcceleratorsContent.programmeDetails.duration}</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="font-bold text-pth-navy mb-2">Time Commitment</h3>
              <p className="text-gray-700 text-sm">
                Group Sessions: {careerAcceleratorsContent.programmeDetails.timeCommitment.groupSessions}<br/>
                Assignments: {careerAcceleratorsContent.programmeDetails.timeCommitment.assignments}<br/>
                <strong>Total: {careerAcceleratorsContent.programmeDetails.timeCommitment.total}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {careerAcceleratorsContent.faq.map((item, i) => (
              <details key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-pth-navy cursor-pointer hover:text-blue-600">
                  {item.question}
                </summary>
                <p className="mt-4 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pth-navy-deep to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">{careerAcceleratorsContent.cta.headline}</h2>
          <p className="text-xl mb-12">{careerAcceleratorsContent.cta.subtitle}</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors mr-4">
            {careerAcceleratorsContent.cta.primaryButton}
          </button>
          <button className="bg-white hover:bg-gray-100 text-pth-navy font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            {careerAcceleratorsContent.cta.secondaryButton}
          </button>
        </div>
      </section>
    </>
  );
}