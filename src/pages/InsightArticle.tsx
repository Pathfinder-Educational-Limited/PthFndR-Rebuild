import SEO from '../components/SEO';
import { ArrowLeft, Download, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ReactNode } from 'react';

interface ArticleData {
  title: string;
  category: string;
  domain: string;
  domainColor: string;
  date: string;
  readTime: string;
  hook: string;
  research: ReactNode;
  solution: ReactNode;
  seoTitle?: string;
  seoDescription?: string;
}

const articlesData: Record<string, ArticleData> = {
  "1": {
    title: "The Identity Gap: Why 16-24s are Stuck in Neutral",
    category: "Youth Mobility",
    domain: "Identity",
    domainColor: "bg-identity-blue",
    date: "January 12, 2026",
    readTime: "7 min read",
    hook: `"As of late 2025, over 1.25 million young people (aged 16-24) are classified as NEET (Not in Education, Employment, or Training). Youth unemployment has spiked to 13.4%, the highest in years."`,
    research: (
      <>
        <p>
          According to the <strong>Learning and Work Institute (December 2025 Labour Market Briefing)</strong> and reports from <strong>NESTA</strong> on youth innovation, this isn't just a statistical anomaly—it's a structural failure. When young people are "hidden" from the system, they lose their professional identity.
        </p>
        <p>
          Furthermore, the <strong>Employment Related Services Association (ERSA)</strong> highlights that traditional employability programs often fail to address the psychological barriers of long-term disengagement. When we apply the <strong>Trapezium Model™</strong> to this demographic, we see that traditional interventions often skip the foundational layer: <em>Identity</em>. Without a secure professional identity, subsequent attempts to build Character or Competence are built on unstable ground.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          At PthFndR, we solve this paralysis through <strong>Experiential Knowledge (Ginosko)</strong>. PthFndR Social Hackathons act as the first "Ginosko" step to re-engage them, aligning directly with the <strong>Department for Education (DfE)</strong> mandates for practical, skills-based learning.
        </p>
        <p>
          Rather than telling young adults what they should be, we place them in high-support, immersive environments where they can <em>experience</em> their own competence. This social innovation approach allows them to rebuild their professional narrative from the ground up.
        </p>
      </>
    )
  },
  "2": {
    title: "The Underemployment Trap: Solving the Skills-to-Job Mismatch",
    category: "Vocational Fluency",
    domain: "Competence",
    domainColor: "bg-competence-orange",
    date: "February 9, 2026",
    readTime: "8 min read",
    hook: `"Research shows that the social and psychological impact of being underemployed (working below one's skill or hourly potential) is comparable to being unemployed. It leads to 'economic anxiety' and a loss of 'social connection'."`,
    research: (
      <>
        <p>
          Drawing on <strong>The Underemployment Project (University of Salford / Prof. Daiga Kamerāde)</strong> and the <strong>CIPD's</strong> latest labour market outlook, we see a severe "skills-to-job mismatch." This trap is particularly devastating for marginalized adults and non-native speakers.
        </p>
        <p>
          Traditional <strong>ESOL (English for Speakers of Other Languages)</strong> programs teach conversational English, but fail to deliver the "Vocational Fluency" required by <strong>Skills England's</strong> new frameworks. We aren't just teaching words; we are solving the mismatch that traps talented adults in low-value roles.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          <strong>EmployaLingua</strong> is the digital engine for this transition. By focusing on the <em>Competence</em> pillar of the Trapezium Model™, we move learners from basic comprehension to industry-specific mastery.
        </p>
        <p>
          This directly supports <strong>ERSA's</strong> mandate for sustainable employment and the <strong>DfE's Skills for Life</strong> strategy, ensuring that marginalized professionals can articulate their true value in the modern workplace.
        </p>
      </>
    )
  },
  "3": {
    title: "The Employer Investment Gap: Why Institutions Must Step In",
    category: "Leadership development",
    domain: "Character",
    domainColor: "bg-character-green",
    date: "February 23, 2026",
    readTime: "6 min read",
    hook: `"UK employer investment in training has fallen by 20% in real terms since 2011. One-third of UK workers will need to reskill in the next five years, yet access to training remains uneven for those in lower-skilled roles."`,
    research: (
      <>
        <p>
          The <strong>CIPD (Skills Development in the UK Workplace, 2025)</strong> and <strong>Skills England</strong> indicate a critical gap in workforce development. Employers are training less, meaning the burden of upskilling falls heavily on the individual and the state.
        </p>
        <p>
          <strong>NESTA</strong> and <strong>ERSA</strong> have both warned that without institutional intervention, the skills gap will widen. FE Colleges and Local Authorities must step in to develop not just technical skills, but the <em>Character</em> and resilience required to navigate a volatile job market.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          PthFndR acts as the "external training engine" for these institutions. Through the <strong>Trapezium Model™</strong>, we provide the framework that institutions need to deliver on <strong>Social Value Act 2012</strong> requirements.
        </p>
        <p>
          Since employers are training less, institutional partners must step in to ensure the "Character" and "Competence" of the workforce. Our intensive Employability Bootcamps provide the scalable social innovation required to meet this demand.
        </p>
      </>
    )
  },
  "4": {
    title: "Breaking the In-Work Poverty Cycle: The Pursuit of Economic Dignity",
    category: "Assessment Science",
    domain: "Impact",
    domainColor: "bg-impact-purple",
    date: "February 16, 2026",
    readTime: "7 min read",
    hook: `"Two-thirds of working-age adults in poverty live in a household where at least one person works. Work alone is no longer a route out of poverty; the quality of work (security and pay) is what matters."`,
    research: (
      <>
        <p>
          The <strong>Joseph Rowntree Foundation (UK Poverty 2024/25)</strong> and <strong>NESTA's Future of Work</strong> initiatives highlight that 'any job' is a flawed metric. <strong>ERSA</strong> advocates for sustained career progression over immediate, low-wage placement.
        </p>
        <p>
          This directly challenges the <em>Impact</em> pillar of the Trapezium Model™. When marginalized adults are pushed into precarious employment, they cannot generate the long-term impact needed to break the cycle of poverty.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          We don't just aim for "any job"—we aim for <strong>Economic Dignity</strong>. PthFndR Assessments track the transition into secure, high-value roles in sectors like Healthcare and Tech.
        </p>
        <p>
          By aligning with the <strong>GM Baccalaureate (MBacc)</strong> technical routes and <strong>Skills England's</strong> focus on high-growth sectors, we ensure that our interventions lead to measurable, sustainable human impact.
        </p>
      </>
    )
  },
  "5": {
    title: "Sterizo: The Science of 'Staying Power' in Career Transitions",
    category: "Vocational Fluency",
    domain: "Character",
    domainColor: "bg-character-green",
    date: "February 2, 2026",
    readTime: "5 min read",
    hook: `"Over 40% of career transitioners from marginalized backgrounds drop out of upskilling programs within the first three months due to a lack of structural and psychological support."`,
    research: (
      <>
        <p>
          Research from <strong>NESTA</strong> on adult learning and <strong>DfE's Skills for Life</strong> retention data shows that technical competence alone is insufficient. The missing ingredient is what the Trapezium Model™ calls <em>Character (Sterizo)</em>—the inner virtues like persistence, courage, and resilience.
        </p>
        <p>
          <strong>CIPD</strong> behavioral studies confirm that "staying power" is the primary differentiator between those who successfully transition into high-value roles and those who fall back into underemployment.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          PthFndR embeds <strong>Sterizo</strong> into every layer of our curriculum. Whether through EmployaLingua or our Bootcamps, we actively train the psychological resilience required to navigate the modern workplace.
        </p>
        <p>
          This holistic approach to social innovation ensures that learners don't just acquire skills—they acquire the fortitude to deploy them effectively.
        </p>
      </>
    )
  },
  "6": {
    title: "The Stuck Professional's Diagnostic: A Guide to Professional Re-Alignment",
    category: "Vocational Fluency",
    domain: "Identity",
    domainColor: "bg-identity-blue",
    date: "January 26, 2026",
    readTime: "10 min read",
    hook: `"Despite record numbers of job vacancies, millions of adults remain 'stuck' in roles that underutilize their potential, leading to a £120 billion annual loss in UK productivity."`,
    research: (
      <>
        <p>
          Data from <strong>Skills England</strong> and the <strong>Learning and Work Institute</strong> reveals a massive misalignment between workforce potential and actual deployment. For many, particularly those requiring <strong>ESOL</strong> support, the barrier isn't capability—it's clarity.
        </p>
        <p>
          Without a diagnostic framework to identify whether the gap lies in <em>Identity, Character, Competence, or Impact</em>, professionals remain trapped in the "Seeker" or "Hidden Gem" patterns.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          The <strong>Trapezium Model™ Diagnostic</strong> provides the clarity needed to unstick these professionals. By mapping their current state against our four domains, we provide a personalized roadmap for realignment.
        </p>
        <p>
          This tool is now being utilized by our institutional partners to ensure that <strong>DfE</strong> and <strong>Local Authority</strong> funding is directed precisely where it will have the highest ROI for the individual.
        </p>
      </>
    )
  },
  "7": {
    title: "Beyond Income: The Power of Economic Contribution",
    category: "Youth Mobility",
    domain: "Impact",
    domainColor: "bg-impact-purple",
    date: "March 4, 2026",
    readTime: "6 min read",
    seoTitle: "Economic Contribution vs. Income Generation | PthFndR Insights",
    seoDescription: "Explore how PthFndR is reframing the UK immigration and employment narrative through Economic Contribution and the Trapezium Model™.",
    hook: `"In the current UK socio-political landscape, the conversation surrounding immigration, youth employment, and marginalised communities has become increasingly centered on 'cost.' Public discourse often frames these groups through the lens of dependency or integration—asking what the state must provide to support them."`,
    research: (
      <>
        <p>
          At Pathfinder Educational Limited (trading as PthFndR), we believe this perspective is fundamentally flawed. It ignores the inherent professional DNA within every individual. Our mission, rooted in the Digital Security Hub (<Link to="/contact" className="text-pth-cyan hover:underline font-medium">DiSH</Link>) in Manchester, is to shift this narrative from passive income generation to active Economic Contribution.
        </p>
        <p>
          Income generation is an individual result; Economic Contribution is a systemic impact. When we equip 16-24s and marginalised adults with "Dignity-Infused Learning," we are not merely helping them find a job to pay bills. We are facilitating their transition into becoming net contributors to the UK’s GDP.
        </p>
        <p>
          The UK economy is currently hindered by a "Hidden Gem" paradox: thousands of individuals possess the character and latent talent to fill critical skills gaps in Healthcare, Digital Security, and Construction, yet they remain "stuck" due to a lack of professional alignment.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          Through the <strong>Trapezium Model™</strong>, we move individuals through a specific transformation pathway:
        </p>
        
        {/* The Contribution Bridge Chart */}
        <div className="my-10 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-heading font-bold text-pth-navy mb-6 text-center">The Contribution Bridge</h4>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl mb-3 border-4 border-white shadow-sm">
                01
              </div>
              <h5 className="font-heading font-bold text-slate-700">Dependency</h5>
              <p className="text-xs text-slate-500 text-center mt-1">Surviving & seeking roles</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-identity-blue/20 flex items-center justify-center text-identity-blue font-bold text-xl mb-3 border-4 border-white shadow-sm">
                02
              </div>
              <h5 className="font-heading font-bold text-identity-blue"><Link to="/identity" className="hover:underline">Identity</Link></h5>
              <p className="text-xs text-slate-500 text-center mt-1">Professional-in-Waiting</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-impact-purple/20 flex items-center justify-center text-impact-purple font-bold text-xl mb-3 border-4 border-white shadow-sm">
                03
              </div>
              <h5 className="font-heading font-bold text-impact-purple">Economic Impact</h5>
              <p className="text-xs text-slate-500 text-center mt-1">Solving complex problems</p>
            </div>
          </div>
        </div>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong><Link to="/identity" className="text-pth-cyan hover:underline">Identity</Link> (KNOW):</strong> Recognising oneself not as a "migrant" or "unemployed youth," but as a Professional-in-Waiting.</li>
          <li><strong>Character & Competence (BE):</strong> Developing the inner resilience (Sterizo) and the <a href="https://www.employalingua.com" target="_blank" rel="noopener noreferrer" className="text-pth-cyan hover:underline font-medium">Vocational Fluency</a> needed to meet the rigorous standards of Skills England and the MBacc.</li>
          <li><strong>Impact (DO):</strong> Realising the capacity to solve complex problems that drive local and national growth.</li>
        </ul>
        <p>
          By applying <strong>Ginosko-Sterizo™</strong>, we provide the experiential knowledge (Ginosko) that traditional education often overlooks. We don't just teach skills; we build the "internal muscles" of contribution. When a person understands their professional uniqueness, they no longer seek a role—they offer a solution.
        </p>
        <p>
          For our partners in FE Colleges and Local Authorities, the goal must be higher than "employment statistics." We must aim for Economic Dignity. This means moving 250,000 individuals into roles where their contribution is visible, measurable, and sustained. From our base at Heron House, Manchester, PthFndR is proving that when you invest in the professional identity of the marginalised, you aren't just solving a social issue—you are fueling the nation’s economic engine.
        </p>
      </>
    )
  }
};

export default function InsightArticle() {
  const { id } = useParams<{ id: string }>();
  const article = id && articlesData[id] ? articlesData[id] : articlesData["1"];

  return (
    <>
      <SEO 
        title={article.seoTitle || `${article.title} | PthFndR Insights`} 
        description={article.seoDescription || "Analyzing the root causes of underemployment and how experiential knowledge can jumpstart professional journeys."}
      />
      
      <article className="bg-white pb-24">
        {/* Header */}
        <header className="bg-pth-navy-deep py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep"></div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link to="/insights" className="inline-flex items-center gap-2 text-pth-cyan hover:text-pth-soft-cyan transition-colors mb-8 font-medium text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-pth-gradient text-pth-navy font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase">
                {article.category}
              </span>
              <span className={`${article.domainColor} text-white font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase border border-white/20`}>
                Trapezium: {article.domain}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-300 text-sm font-medium">
              <span>{article.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="prose prose-lg prose-slate max-w-none">
            
            {/* The Hook */}
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-pth-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-pth-cyan/10 text-pth-cyan flex items-center justify-center text-sm">01</span>
                The Hook
              </h2>
              <p className="text-xl leading-relaxed text-slate-700 font-medium border-l-4 border-pth-cyan pl-6 italic">
                {article.hook}
              </p>
            </div>

            {/* The Research */}
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-pth-navy mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full ${article.domainColor}/10 text-pth-navy flex items-center justify-center text-sm`}>02</span>
                The Research
              </h2>
              <div className="text-slate-700 space-y-4">
                {article.research}
              </div>
            </div>

            {/* The Solution */}
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-pth-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-pth-cyan/10 text-pth-cyan flex items-center justify-center text-sm">03</span>
                The Solution
              </h2>
              <div className="text-slate-700 space-y-4">
                {article.solution}
              </div>
            </div>

            {/* The Action */}
            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200 text-center">
              <h2 className="text-2xl font-heading font-bold text-pth-navy mb-4">
                The Action
              </h2>
              <p className="text-slate-600 mb-8">
                Ready to bridge the identity gap in your own career or organization? Discover the actionable steps to realign your professional trajectory.
              </p>
              <Link 
                to="/diagnostic" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pth-gradient text-pth-navy font-bold hover:opacity-90 transition-opacity shadow-sm"
              >
                <ArrowRight className="w-5 h-5" />
                Find Your Path
              </Link>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
