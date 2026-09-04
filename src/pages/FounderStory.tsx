import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Eyebrow } from '../components/ui/Eyebrow';

export default function FounderStory() {
  return (
    <>
      <SEO
        title="Founder Story | PthFndR"
        description="The name came before the company. Why PthFndR exists, and where the name comes from."
        url="https://pthfndr.org/about/founder-story"
      />

      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow tone="cyan" className="mb-6 justify-center">Founder Story</Eyebrow>
          <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            The name came before the company.
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto space-y-6">
            <p className="text-xl text-slate-700 font-medium leading-relaxed mb-6">
              In Yoruba, there is a word that captures something at the heart of why PthFndR
              exists: Onalaja, the one who finds a path.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              But it carries a deeper meaning than simply finding your own way. An Onalaja is
              someone who discovers a path and then helps others find it too.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">That idea stayed with me.</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Because when I looked at the world of work, I kept seeing young people with
              potential, ambition and ability who simply could not see a clear path from where
              they were to where they wanted to be.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              They were being told to get experience, build confidence, develop skills, improve
              their CV and network more.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">The advice wasn't necessarily wrong.</p>
            <p className="text-slate-600 leading-relaxed mb-6">But something was missing.</p>
            <p className="text-pth-navy font-heading font-bold text-2xl">A pathway.</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              For too many young people, the journey from potential to opportunity is broken
              into separate pieces. They have to navigate education, skills, confidence,
              language, networks, experience and the job market as separate problems. And when
              they struggle to make those connections, we often interpret that as a lack of
              potential.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">We see it differently.</p>
            <p className="text-pth-navy font-heading font-bold text-2xl">
              Potential is everywhere. Pathways are not.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">That's why we created PthFndR.</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              PthFndR is our shorthand for Pathfinder, inspired by the idea of the Onalaja:
              someone willing to find a path where one isn't obvious, and then make that path
              easier for others to follow.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">Our ambition is simple: to create better pathways for young people.</p>
            <p className="text-slate-600 leading-relaxed mb-6">We do that through three stages: Discover, Develop, Deploy.</p>

            <div className="not-prose grid gap-4 my-10">
              <div className="bg-pth-warm rounded-2xl p-6">
                <span className="font-heading font-bold text-pth-cyan">Discover</span>
                <span className="text-slate-600">. Helping young people understand who they are, what they bring and what is possible.</span>
              </div>
              <div className="bg-pth-warm rounded-2xl p-6">
                <span className="font-heading font-bold text-pth-green">Develop</span>
                <span className="text-slate-600">. Helping them build the language, confidence, capabilities and experiences to move forward.</span>
              </div>
              <div className="bg-pth-warm rounded-2xl p-6">
                <span className="font-heading font-bold text-pth-navy">Deploy</span>
                <span className="text-slate-600">. Connecting potential to real-world opportunities where they can contribute, earn, learn and grow.</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              But we don't want young people to remain dependent on pathways that someone else
              created.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">We want them to eventually become pathfinders themselves.</p>
            <p className="text-slate-600 leading-relaxed mb-6">To find their way.</p>
            <p className="text-slate-600 leading-relaxed mb-6">To create new possibilities.</p>
            <p className="text-slate-600 leading-relaxed mb-6">And, just as importantly, to take others with them.</p>
            <p className="text-slate-600 leading-relaxed mb-6">That is the PthFndR idea.</p>
            <p className="text-slate-600 leading-relaxed mb-6">We aren't here simply to tell young people where the jobs are.</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We're here to help them find a path to them, and, ultimately, to help them create
              paths for others.
            </p>
          </div>

          <div className="text-center mt-16">
            <p className="font-heading font-extrabold text-pth-navy text-2xl mb-8">
              PthFndR. Discover. Develop. Deploy.
            </p>
            <Link
              to="/programmes"
              className="inline-flex items-center justify-center gap-2 bg-pth-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-all shadow-lg hover:shadow-xl"
            >
              Explore programmes <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
