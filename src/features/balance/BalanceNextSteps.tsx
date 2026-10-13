import { Link } from 'react-router-dom';
import { track } from '../../services/analytics';

export function trackBalanceLink(destination: string, placement: string) {
  track('balance_pthfndr_link_clicked', { destination, placement });
}

export default function BalanceNextSteps() {
  return (
    <section aria-label="Explore PthFndR after Balance" className="mt-5 rounded-2xl border border-slate-300 bg-[#e8efe9] p-5">
      <p className="text-xs font-semibold uppercase tracking-wider">Beyond Balance · PthFndR</p>
      <h2 className="mt-2 text-xl font-semibold">Ready for a different kind of challenge?</h2>
      <p className="mt-2 text-sm leading-relaxed">PthFndR helps young people aged 16–24 explore their strengths, build skills and try real projects with organisations.</p>
      <Link to="/opportunities" onClick={() => trackBalanceLink('/opportunities', 'completion')} className="mt-4 flex min-h-11 items-center justify-center rounded-xl bg-[#24342f] px-4 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">Explore opportunities</Link>
      <p className="mt-4 text-sm leading-relaxed">Could your organisation offer a young person a small, meaningful project?</p>
      <Link to="/for-organisations/create-opportunities" onClick={() => trackBalanceLink('/for-organisations/create-opportunities', 'completion')} className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">Find out about hosting a micro-opportunity</Link>
    </section>
  );
}
