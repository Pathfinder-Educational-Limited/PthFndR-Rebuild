import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | PthFndR"
        description="We're building the career development system every young person deserves — connecting young people with the support, skills, and real opportunities they need to own their future."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-pth-navy mb-4">
            Where Young Potential Becomes Real Impact
          </h1>
          <p className="text-2xl text-gray-600">
            We're building the career development system every young person deserves.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We believe every young person has potential. Most never unlock it—not because they're not capable, but because they don't know themselves, don't have real skills, and don't know where to start.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We're here to change that.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            PthFndR connects young people with the support, skills, and real opportunities they need to own their future. We're not another careers advice service. We're a complete ecosystem: diagnosis, development, and deployment.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-12">The Challenge We Solve</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Young People */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-pth-navy mb-4">Young People Feel Stuck</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>42% unsure about career direction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Limited access to real experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>No authentic employer connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Applying for jobs without clarity</span>
                </li>
              </ul>
            </div>

            {/* Schools */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-pth-navy mb-4">Schools Are Overwhelmed</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Careers support stretched thin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Limited employer relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Difficulty measuring impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Students progress without direction</span>
                </li>
              </ul>
            </div>

            {/* Employers */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-pth-navy mb-4">Employers Miss Talent</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Talent pipeline broken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Diversity hiring challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Difficulty accessing entry-level talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Limited time to invest</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach: Three Streams */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-12 text-center">Our Approach: Three Core Streams</h2>
          
          <p className="text-center text-gray-600 mb-12 text-lg">
            We approach youth development through three interconnected streams:
          </p>

          <div className="space-y-8">
            {/* Know - Identity */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-pth-navy mb-3">Know (Identity)</h3>
              <p className="text-gray-700">
                Help young people understand themselves—their strengths, values, interests, and what matters to them. Before you can own your future, you need to know yourself.
              </p>
            </div>

            {/* Build - Capability */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-pth-navy mb-3">Build (Capability)</h3>
              <p className="text-gray-700">
                Develop practical skills employers want: communication, problem-solving, professional presence, sector-specific capability. Theory meets practice. Immediately.
              </p>
            </div>

            {/* Do - Opportunity */}
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-8 rounded-lg border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-pth-navy mb-3">Do (Opportunity)</h3>
              <p className="text-gray-700">
                Connect with real work, real companies, real impact. Move from "someday" to "right now." Build portfolio evidence. Make employer connections. Earn if you can. Explore if you want.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-700 italic">
              Identity without skill = confusion. Skill without opportunity = frustration. Opportunity without identity = random. <strong>Together? Transformation.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-pth-navy-deep text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What We've Achieved</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-gray-200">young people supported (2024)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">85%</div>
              <p className="text-gray-200">progress to employment or further study</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">30+</div>
              <p className="text-gray-200">school partners</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <h3 className="font-bold mb-4">What Partners Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm italic mb-2">"Our students didn't just get skills. They got confidence and real opportunity. The results speak for themselves."</p>
                <p className="text-xs text-gray-300">— School Leader</p>
              </div>
              <div>
                <p className="text-sm italic mb-2">"We found emerging talent. We actually helped young people. We measured the impact. This is CSR that works."</p>
                <p className="text-xs text-gray-300">— Employer</p>
              </div>
              <div>
                <p className="text-sm italic mb-2">"I went from lost to excited about my future. Real experience. Real contacts. Real confidence."</p>
                <p className="text-xs text-gray-300">— Young Person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-pth-navy mb-12 text-center">How We Operate</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-pth-navy mb-3">Outcome-Obsessed</h3>
              <p className="text-gray-700">We measure success by real impact: did they get hired? Did they progress? Are they confident? Not by engagement metrics or course completion.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-pth-navy mb-3">Young Person-Centered</h3>
              <p className="text-gray-700">Every decision starts with: what's best for the young person? Not what's easiest for us or most profitable.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-pth-navy mb-3">Evidence-Based</h3>
              <p className="text-gray-700">We test, measure, and iterate. Data informs every decision. We're transparent about what works and what doesn't.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-pth-navy mb-3">Partnership-Driven</h3>
              <p className="text-gray-700">We work alongside organizations we respect. We invest financially and strategically. We share responsibility for outcomes.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-pth-navy mb-3">Inclusive</h3>
              <p className="text-gray-700">Backgrounds, grades, locations—they don't matter. If you have potential and willingness, we're here.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-pth-navy mb-3">Mission-Driven</h3>
              <p className="text-gray-700">Sterizo Research Group supports youth development organizations because social value matters more than profit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-pth-navy mb-8">Built Through Partnership</h2>
          <p className="text-lg text-gray-700 mb-8">
            PthFndR is shaped by our work with leading youth development organizations. We invest financially and strategically in organizations doing frontline work.
          </p>
          <p className="text-gray-600">
            We partner with GIFT, Elevate Young Minds, BreakOut Charity, Loreto Schools, Prayer Storm, Flourish Together CIC, and 1 Million Mentor to ensure young people get the support they deserve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pth-navy-deep to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to Own Your Future?</h2>
          <p className="text-xl mb-8">Or ready to partner with us to change how young people develop?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Explore Programmes
            </button>
            <button className="bg-white hover:bg-gray-100 text-pth-navy font-bold py-3 px-8 rounded-lg transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}