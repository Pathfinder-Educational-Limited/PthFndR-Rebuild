import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const contact = 'privacy@pthfndr.org';
const sections = [
  ['Who is responsible', 'Balance is a puzzle game being developed by Pathfinder Educational Limited, the controller responsible for personal information processed for Balance. Contact privacy@pthfndr.org for privacy questions or requests.'],
  ['Current development stage', 'Balance currently offers a browser-based pilot at /balance. Daily progress, the start time and completion result are saved locally in your browser so you can resume a puzzle. You can remove these records by clearing this site’s browser storage. An optional LinkedIn sign-in integration is being prepared through the dedicated Balance Supabase project. It remains disabled until the account processing and hosting arrangements described below have been confirmed. Server score submissions and leaderboards are not enabled.'],
  ['Visiting this page and contacting us', 'Our website infrastructure may process technical request information, such as IP address, browser information, requested URL and timestamps, to deliver the website, diagnose errors and protect it from misuse. If you email us, we receive your email address, message and any information you choose to include. Please avoid sending passwords or unnecessary sensitive information.'],
  ['Why we use information', 'We use technical information to operate and secure the website, and correspondence to answer enquiries and handle privacy requests. Our lawful basis for routine website operation and enquiries is legitimate interests: maintaining a reliable and secure website and responding to people who contact us. Where a legal duty requires us to handle or retain information, our basis is legal obligation.'],
  ['Optional LinkedIn sign-in', 'When enabled, optional LinkedIn sign-in requests openid, profile and email permissions to create or recognise your Balance account through Supabase. This can include a LinkedIn identifier, name, profile picture and email address. Balance displays your name after sign-in; it does not publish your profile or email. Supabase manages authentication and stores the account and a browser session. We do not receive your LinkedIn password or connections list. Sign-in does not synchronise game scores or grant permission to publish a post. Before enabling it, we will confirm the account retention policy, hosting region, international safeguards and lawful basis.'],
  ['Scores and leaderboards planned for Balance', 'The proposed game would record puzzle identifiers, completion results and timing information to calculate rankings. A leaderboard would display a player name or alias and game results; your email address would not be displayed. Before launch, we will explain the visibility settings, league membership and how to remove your profile and associated results. Puzzle performance is not an assessment of employability, intelligence or personal worth.'],
  ['Recipients and hosting', 'Website hosting and email providers may process technical information or correspondence on our behalf. Access within Pathfinder is limited to people who need it for support, security or handling requests. We may disclose information where the law requires it. The final game providers and any international transfer arrangements will be identified here before account features launch. Balance account information is not currently collected through this page.'],
  ['How long information is kept', 'Correspondence is kept while an enquiry or request is being handled and for any additional period necessary to resolve a dispute or meet a legal requirement. Technical records are retained according to the hosting configuration and the operational or security purpose they serve. The exact configured periods, including any backup retention, will be confirmed before the player service launches.'],
  ['Cookies and browser storage', 'The wider PthFndR website offers optional PostHog analytics. If you accept its cookie banner, analytics can record page visits and use cookies and browser storage. If you decline, the analytics integration is not initialised. The privacy page adds no player storage. The game uses browser local storage for daily progress; practice progress lasts only while the game page is open. These records are not submitted to a Balance server. Daily records remain until you clear site storage. Website analytics are separate from the planned game features; before those launch, we will explain any additional storage and choices.'],
  ['Your rights and deletion requests', 'Depending on the circumstances, you can ask to access, correct or erase personal information, restrict its use, or receive portable data. You can object to processing based on legitimate interests. Where processing relies on consent, you can withdraw it. Email privacy@pthfndr.org with your request; we may need proportionate information to verify your identity. Where applicable, we normally respond within one month. You can also complain to the UK Information Commissioner’s Office.'],
  ['Changes to this notice', 'We will update this page as Balance moves from prototype to a live service. This development-stage notice must be reviewed against the actual implementation before LinkedIn authorisation or account-based play is enabled.'],
];

export default function BalancePrivacy() {
  return (
    <>
      <SEO title="Balance Privacy | PthFndR" description="Development-stage privacy notice for Balance, a puzzle game by Pathfinder Educational Limited." url="https://pthfndr.org/balance/privacy" />
      <div className="bg-white py-16 sm:py-24">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <img src="/logos/balance-logo.png" alt="" width="64" height="64" className="rounded-xl" />
            <p className="text-sm font-semibold uppercase tracking-wider text-pth-navy">Balance · Pathfinder Educational Limited</p>
          </div>
          <h1 className="mt-8 text-4xl font-heading font-extrabold tracking-tight text-pth-navy sm:text-5xl">Balance privacy notice</h1>
          <p className="mt-5 text-slate-600">Last updated: <time dateTime="2026-10-03">3 October 2026</time> · Development stage</p>
          <p className="mt-6 text-lg leading-8 text-slate-700">How we handle information while developing Balance, and what we will explain before player accounts launch.</p>
          <nav aria-label="Privacy notice sections" className="mt-8 border-y border-slate-200 py-6">
            <ul className="grid gap-3 sm:grid-cols-2">{sections.map(([title], i) => <li key={title}><a className="text-pth-navy underline underline-offset-4 focus-visible:outline focus-visible:outline-2" href={`#balance-privacy-${i + 1}`}>{title}</a></li>)}</ul>
          </nav>
          <div className="mt-10 space-y-10 text-base leading-7 text-slate-700">
            {sections.map(([title, text], i) => <section key={title} id={`balance-privacy-${i + 1}`} className="scroll-mt-24"><h2 className="text-2xl font-bold text-pth-navy">{title}</h2><p className="mt-4">{text}</p></section>)}
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 space-y-3">
            <p><a href={`mailto:${contact}`} className="text-pth-navy underline underline-offset-4">{contact}</a></p>
            <p><a href="https://ico.org.uk/make-a-complaint/" className="text-pth-navy underline underline-offset-4">Contact the Information Commissioner’s Office</a></p>
            <p><Link to="/privacy" className="text-pth-navy underline underline-offset-4">PthFndR website privacy policy</Link></p>
          </div>
        </article>
      </div>
    </>
  );
}
