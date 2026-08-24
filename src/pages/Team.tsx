import { useState, Fragment } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TriangleMotif } from '../components/ui/TriangleMotif';

// ─── Team data ────────────────────────────────────────────────────────────────
// Headshots live in /public/images/team/ matching the `photo` filename.
// If a photo is missing, the card falls back to an initials avatar.
interface Member {
  name: string;
  role: string;
  title?: string;
  bio: string;
  photo: string;
  linkedin?: string;
}

const FOUNDERS: Member[] = [
  { name: 'Olayiwola Iyiola', role: 'Founder', bio: '20+ years in leadership development and workforce management. Former FranklinCovey Education Implementation Specialist.', photo: 'olayiwola.jpg', linkedin: 'https://www.linkedin.com/in/oiyiolajacobs/' },
  { name: 'Grace Iyiola-Jacobs', role: 'Co-Founder', bio: "16+ years in people development and workforce management. Current People Partner at Sainsbury's.", photo: 'grace.jpg', linkedin: 'https://www.linkedin.com/in/giyprofile/' },
  { name: 'Andyson Utomudo', role: 'Co-Founder', bio: 'Driving Technology and Software Engineering.', photo: 'andyson.jpg', linkedin: 'https://www.linkedin.com/in/andyson-utomudo/' },
];

const BOARD: Member[] = [
  { name: 'Henry Ngawoofah', role: 'Board Director', title: 'Business Development & Legal', bio: 'Legal strategist focusing on commercial compliance and business expansion.', photo: 'henry.jpg', linkedin: 'https://www.linkedin.com/in/henry-ngawoofah-3752a427/' },
  { name: 'Olayiwola Iyiola', role: 'Board Director', title: 'Product Development', bio: 'Directing product innovation with a focus on real, measurable outcomes for young people.', photo: 'olayiwola.jpg', linkedin: 'https://www.linkedin.com/in/oiyiolajacobs/' },
];

const ADVISORS: Member[] = [
  { name: 'Seun Sunmola', role: 'Board Advisor', title: 'Growth & Marketing Strategy', bio: 'Expert in scaling mission-driven organisations and orchestrating regional platform adoption through strategic marketing.', photo: 'seun.jpg', linkedin: 'https://www.linkedin.com/in/seun-sunmola/' },
  { name: 'Dayo Okoro', role: 'Board Advisor', title: 'Construction & Built Environment', bio: 'Expert in sustainable construction and built environment educational pathways.', photo: 'dayo.jpg' },
  { name: 'Azeez Adebayo', role: 'Board Advisor', title: 'Product & Experience Design', bio: 'Lead strategist for digital products people actually want to use, built to be genuinely accessible.', photo: 'azeez.jpg', linkedin: 'https://www.linkedin.com/in/azeez-adebayo-661b45b7/' },
  { name: 'Michael Fasipe', role: 'Board Advisor', title: 'Platform Engineering & Technical Architecture', bio: "Platform Engineer specialising in reliable, scalable and automated systems across the full software delivery lifecycle. Trustee of a Manchester-based children's charity, bringing governance experience and community commitment alongside deep technical expertise.", photo: 'michael.jpg', linkedin: 'https://www.linkedin.com/in/michael-fasipe-25961b19/' },
];

const VACANCIES = [
  { title: 'Psychology, Formation & Behavioural Science', desc: 'Psychologist or scientist focusing on how young people build identity, resilience, and genuine wellbeing.' },
  { title: 'Strategic Narrative & Growth Stewardship', desc: 'Senior leader with expertise in mission-led storytelling, communications, and scaling regional impact.' },
  { title: 'Legal, Risk & Ethical Governance', desc: 'Solicitor or legal expert specialising in educational IP, ethical data use, and public sector trust.' },
  { title: 'Finance, Social Investment & Sustainability', desc: 'Finance leader or social investor with experience in EdTech sustainability and purpose-driven economic models.' },
  { title: 'Digital Infrastructure & Platform Logic', desc: 'CTO or Product leader specialising in ethical AI, scalable software architecture, and genuinely usable design.' },
  { title: 'Industrial Alignment & Partnerships', desc: 'Expert in workforce development, regional skills gap analysis, and building corporate talent pipelines.' },
  { title: 'Policy, Public Sector & Systems Change', desc: 'Policy professional with experience in Local Authority, GMCA, and DWP commissioning cycles.' },
  { title: 'Impact Research & Data Integrity', desc: 'Data scientist or researcher focusing on social value measurement, retention metrics, and audit-ready proof.' },
  { title: 'Community Voice & Stakeholder Agency', desc: 'Advocate with deep experience in youth engagement and co-designing services with underserved communities.' },
];

// Static brand accent sets (kept as literal classes so Tailwind emits them).
const ACCENTS = [
  { ring: 'group-hover:ring-pth-cyan/50', text: 'group-hover:text-pth-cyan', chip: 'text-pth-cyan', soft: 'bg-pth-cyan/10' },
  { ring: 'group-hover:ring-pth-green/50', text: 'group-hover:text-pth-green', chip: 'text-pth-green', soft: 'bg-pth-green/10' },
  { ring: 'group-hover:ring-competence-orange/50', text: 'group-hover:text-competence-orange', chip: 'text-competence-orange', soft: 'bg-competence-orange/10' },
  { ring: 'group-hover:ring-impact-purple/50', text: 'group-hover:text-impact-purple', chip: 'text-impact-purple', soft: 'bg-impact-purple/10' },
  { ring: 'group-hover:ring-pth-navy/50', text: 'group-hover:text-pth-navy', chip: 'text-pth-navy', soft: 'bg-pth-navy/10' },
];
const VAC_ACCENTS = [
  { bar: 'bg-pth-cyan', chip: 'text-pth-cyan', chipBg: 'bg-pth-cyan/10', btn: 'bg-pth-cyan' },
  { bar: 'bg-pth-green', chip: 'text-pth-green', chipBg: 'bg-pth-green/10', btn: 'bg-pth-green' },
  { bar: 'bg-competence-orange', chip: 'text-competence-orange', chipBg: 'bg-competence-orange/10', btn: 'bg-competence-orange' },
  { bar: 'bg-impact-purple', chip: 'text-impact-purple', chipBg: 'bg-impact-purple/10', btn: 'bg-impact-purple' },
  { bar: 'bg-pth-navy', chip: 'text-pth-navy', chipBg: 'bg-pth-navy/10', btn: 'bg-pth-navy' },
];

// ─── Member card ─────────────────────────────────────────────────────────────
type Accent = { ring: string; text: string; chip: string; soft: string };

function MemberCard({ member, size, accent }: { member: Member; size: 'lg' | 'md' | 'sm'; accent: Accent }) {
  const [imgError, setImgError] = useState(false);
  const dim = size === 'lg' ? 'w-44 h-44 lg:w-52 lg:h-52' : size === 'md' ? 'w-40 h-40' : 'w-36 h-36';
  const initials = member.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group flex flex-col items-center text-center"
    >
      <div className={`relative ${dim} rounded-full overflow-hidden mb-5 ring-4 ring-transparent ${accent.ring} ${accent.soft} transition-all duration-300`}>
        {!imgError ? (
          <img
            src={`/images/team/${member.photo}`}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition duration-500"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center font-heading font-extrabold text-3xl ${accent.chip}`}>
            {initials}
          </div>
        )}
      </div>

      <p className={`font-heading font-bold text-pth-navy ${size === 'lg' ? 'text-xl' : 'text-lg'} mb-0.5 transition-colors ${accent.text}`}>
        {member.name}
      </p>
      {member.title && (
        <p className={`text-[10px] font-bold tracking-[0.16em] uppercase mb-1.5 ${accent.chip}`}>{member.title}</p>
      )}
      <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-400 mb-2">{member.role}</p>
      <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">{member.bio}</p>

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-slate-400 hover:text-pth-cyan transition-colors`}
        >
          <Linkedin size={14} aria-hidden="true" /> LinkedIn
        </a>
      )}
    </motion.div>
  );
}

// ─── Tier section ────────────────────────────────────────────────────────────
function Tier({ label, title, sub, members, size, gridClass }: { label: string; title: string; sub: string; members: Member[]; size: 'lg' | 'md' | 'sm'; gridClass: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow tone="cyan" className="mb-4 justify-center">{label}</Eyebrow>
        <h2 className="font-heading font-extrabold tracking-tight text-pth-navy text-3xl sm:text-4xl lg:text-5xl text-balance leading-[1.05] mb-4">{title}</h2>
        <p className="text-slate-500 lg:text-lg leading-relaxed">{sub}</p>
      </div>
      <div className={gridClass}>
        {members.map((m, i) => (
          <Fragment key={`${m.name}-${i}`}>
            <MemberCard member={m} size={size} accent={ACCENTS[i % ACCENTS.length]} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Team() {
  return (
    <>
      <SEO
        title="Our Team | PthFndR — Founders, Board & Advisors"
        description="Meet the founders, board of directors and strategic advisors behind PthFndR's mission to empower young people 16-24 through Discover. Develop. Deploy."
      />

      {/* HERO */}
      <section className="relative bg-pth-warm pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <TriangleMotif className="pointer-events-none absolute -top-10 -right-16 w-[360px] lg:w-[520px] text-pth-cyan/15" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow tone="cyan" className="mb-6 justify-center">The people behind the mission</Eyebrow>
          <h1 className="font-heading font-extrabold tracking-tight text-pth-navy text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
            Built by people who <span className="text-pth-cyan">believe in the work.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
            PthFndR is led by founders, governed by a board of directors, and guided by a strategic advisory board — all united by one mission: empowering young people 16-24 to discover genuine opportunity.
          </p>
        </div>
      </section>

      {/* TEAM PHOTO — 2025 Annual Strategy */}
      <div className="relative h-[360px] lg:h-[480px] overflow-hidden">
        <img
          src="/images/team-strategy-2025.jpg"
          alt="PthFndR team at the 2025 First Annual Strategy Day"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pth-navy-deep/80 via-pth-navy-deep/10 to-transparent" />
        <div className="absolute bottom-8 inset-x-0 text-center">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-pth-green mb-1.5">First Annual Strategy Day</p>
          <p className="font-heading text-lg lg:text-xl font-bold text-white">The PthFndR Team · 2025</p>
        </div>
      </div>

      {/* TIER 1 — FOUNDERS */}
      <section className="bg-white py-20 lg:py-28">
        <Tier
          label="Level 01 · Founders"
          title="The founding team."
          sub="The vision, values, and velocity of PthFndR originate here."
          members={FOUNDERS}
          size="lg"
          gridClass="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12 justify-items-center max-w-3xl mx-auto"
        />
      </section>

      {/* TIER 2 — BOARD */}
      <section className="bg-pth-cream py-20 lg:py-28">
        <Tier
          label="Level 02 · Governance"
          title="Board of Directors."
          sub="Providing strategic direction, commercial oversight and legal rigour."
          members={BOARD}
          size="md"
          gridClass="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 justify-items-center max-w-xl mx-auto"
        />
      </section>

      {/* TIER 3 — ADVISORS */}
      <section className="bg-white py-20 lg:py-28">
        <Tier
          label="Level 03 · Strategic Insight"
          title="Board of Advisors."
          sub="Deep sector expertise that sharpens our methodology and extends our reach."
          members={ADVISORS}
          size="sm"
          gridClass="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 justify-items-center"
        />
      </section>

      {/* ADVISOR VACANCIES */}
      <section className="bg-pth-cream py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-pth-green/10 border border-pth-green/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-pth-green animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-pth-green">Now recruiting</span>
            </span>
            <h2 className="font-heading font-extrabold tracking-tight text-pth-navy text-3xl sm:text-4xl lg:text-5xl text-balance leading-[1.05] mb-4">
              Board of Advisors — open seats
            </h2>
            <p className="text-slate-500 lg:text-lg leading-relaxed">
              We are building a diverse advisory board of sector experts who believe in real, lasting change for young people. Nine seats are open. If your expertise aligns, we want to hear from you.
            </p>
          </div>

          <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
            {VACANCIES.map((v, i) => {
              const a = VAC_ACCENTS[i % VAC_ACCENTS.length];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.05 }}
                  className="relative overflow-hidden bg-white rounded-3xl border border-black/5 shadow-sm p-6 flex flex-col"
                >
                  <div className={`absolute top-0 inset-x-0 h-1 ${a.bar}`} />
                  <span className={`inline-flex items-center gap-1.5 ${a.chipBg} rounded-full px-2.5 py-1 mb-3 self-start`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${a.bar}`} />
                    <span className={`text-[8px] font-bold tracking-[0.14em] uppercase ${a.chip}`}>Recruiting</span>
                  </span>
                  <h3 className="font-heading font-bold text-pth-navy text-lg leading-snug mb-3">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{v.desc}</p>
                  <Link to={`/contact?role=applicant&for=${encodeURIComponent(v.title)}`} className={`inline-flex items-center gap-1.5 self-start ${a.btn} text-white rounded-lg px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase hover:opacity-90 transition-opacity`}>
                    Apply <ArrowRight size={12} aria-hidden="true" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITATOR VACANCIES */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-pth-cyan/10 border border-pth-cyan/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-pth-cyan animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-pth-cyan">Now recruiting</span>
            </span>
            <h2 className="font-heading font-extrabold tracking-tight text-pth-navy text-3xl sm:text-4xl lg:text-5xl text-balance leading-[1.05] mb-4">
              Facilitators — open roles
            </h2>
            <p className="text-slate-500 lg:text-lg leading-relaxed">
              We are looking for an experienced facilitator to deliver PthFndR programmes. Based in Manchester, this role requires a genuine commitment to helping young people build real, lasting confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 max-w-2xl mx-auto gap-6 lg:gap-8">
            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="relative overflow-hidden bg-pth-warm rounded-3xl border border-pth-green/25 p-8 lg:p-10"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pth-green to-pth-lime" />
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-pth-green/15 rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pth-green" />
                  <span className="text-[8px] font-bold tracking-[0.14em] uppercase text-pth-green">Recruiting</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.08em] uppercase text-slate-400">Facilitator</span>
              </div>
              <h3 className="font-heading font-extrabold text-pth-navy text-2xl mb-2">Leadership Development Facilitator</h3>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-pth-green mb-5">Identity · Character · Impact · Trapezium Model®</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Facilitate Social Hackathons, Employability Bootcamps and Trapezium Model® workshops for young people aged 16 to 24. You will guide participants through identity, character, and building real, visible results.
              </p>
              <ul className="space-y-2 mb-8">
                {['Background in coaching, youth work or L&D facilitation', 'Experience working with young people or adults facing career barriers', 'Understanding of identity-led development approaches', 'DBS clearance (or willingness to obtain)'].map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-pth-green shrink-0 mt-2" />
                    {req}
                  </li>
                ))}
              </ul>
              <Link to="/contact?role=applicant&for=Leadership%20Development%20Facilitator" className="inline-flex items-center gap-2 bg-pth-green text-white rounded-xl px-6 py-3 text-xs font-bold tracking-[0.09em] uppercase hover:opacity-90 transition-opacity">
                Apply for Leadership role <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOIN BANNER */}
      <section className="relative bg-pth-navy-deep py-24 lg:py-28 overflow-hidden text-center">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-pth-cyan/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Eyebrow tone="cyan" className="mb-5 justify-center">Grow with us</Eyebrow>
          <h2 className="font-heading font-extrabold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl text-balance leading-[1.05] mb-5">
            Interested in joining the mission?
          </h2>
          <p className="text-white/70 lg:text-lg leading-relaxed mb-10">
            Whether you are applying for an advisory seat or want to contribute in another way — we want to hear from you.
          </p>
          <Link to="/contact?role=applicant" className="inline-flex items-center gap-2 bg-gradient-to-r from-pth-cyan to-pth-green text-pth-navy-deep px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all shadow-lg">
            Get in touch <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
