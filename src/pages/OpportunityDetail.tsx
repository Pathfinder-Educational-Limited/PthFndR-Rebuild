import { useState, useRef, useEffect } from 'react';
import SEO from '../components/SEO';
import OpportunityApplicationForm from '../components/OpportunityApplicationForm';
import { ArrowLeft, Bookmark, Share2, MapPin, Calendar, Briefcase, CheckCircle, MessageSquare, BriefcaseBusiness } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { opportunities } from '../content/pages/opportunitiesData';
import { getSupabaseClient } from '../services/supabaseClient';

// ============================================================================
// OpportunityDetail.tsx — CLEAN SLATE REBUILD (Aug 2026), wired to local
// data (Aug 27 2026 launch fix).
//
// Previously hardcoded a fabricated listing and never used the `id` route
// param. That was fixed by making the component structurally honest, but
// with no backend endpoint (/api/opportunities/:id doesn't exist in
// server.ts), it always showed "not found."
//
// LAUNCH-DAY FIX: reads from a local, verified data file
// (content/pages/opportunitiesData.ts) instead of a live API call. Every
// listing there is real, not fabricated — this is a stopgap for going live
// before the real backend endpoint exists, not a return to hardcoding fake
// data. Replace the local lookup below with a real fetch once
// /api/opportunities/:id is built.
// ============================================================================

export default function OpportunityDetail() {
  const { id } = useParams();
  const staticMatch = opportunities.find((o) => o.id === id) ?? null;
  const [dbMatch, setDbMatch] = useState<typeof opportunities[number] | null>(null);
  const [checkedDb, setCheckedDb] = useState(false);

  useEffect(() => {
    if (staticMatch || !id) {
      setCheckedDb(true);
      return;
    }
    const supabase = getSupabaseClient();
    supabase
      .from('opportunities')
      .select('*, organisations(name)')
      .eq('id', id)
      .eq('status', 'approved')
      .single()
      .then(({ data, error }) => {
        if (!error && data) {
          setDbMatch({
            id: data.id,
            title: data.title,
            organisationName: data.organisations?.name ?? 'Organisation',
            category: data.category,
            duration: data.duration,
            location: data.location,
            reward: data.reward ?? undefined,
            skillsDeveloped: data.skills_developed ?? [],
            whatYoullDo: data.description,
            whatYoullLearn: [],
            requirements: data.requirements ?? [],
          });
        }
        setCheckedDb(true);
      });
  }, [id, staticMatch]);

  const opportunity = staticMatch ?? dbMatch;
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const applyFormRef = useRef<HTMLDivElement>(null);

  if (!checkedDb) {
    return (
      <div className="bg-pth-cream min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading...</p>
      </div>
    );
  }

  if (!opportunity) {
    return (
      <div className="bg-pth-cream min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-heading font-bold text-pth-navy mb-4">
          We couldn't find that opportunity
        </h1>
        <p className="text-slate-600 mb-8 max-w-md">
          It may have closed, or the link might be out of date. Take a look at what's currently open instead.
        </p>
        <Link
          to="/opportunities"
          className="inline-flex items-center gap-2 bg-pth-green text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4ea858] transition-colors"
        >
          <ArrowLeft size={16} /> Browse opportunities
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${opportunity.title} | PthFndR`}
        description={opportunity.whatYoullDo}
      />

      <div className="bg-pth-cream min-h-screen pb-20">
        <div className="bg-white border-b border-slate-200 pt-8 pb-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link to="/opportunities" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-pth-navy transition-colors mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to Opportunities
            </Link>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                {opportunity.organisationSlug ? (
                  <Link to={`/for-organisations/${opportunity.organisationSlug}`} className="text-sm font-bold text-pth-green hover:underline mb-2 block">
                    {opportunity.organisationName}
                  </Link>
                ) : (
                  <p className="text-sm font-bold text-pth-green mb-2">{opportunity.organisationName}</p>
                )}
                <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-pth-navy mb-4 leading-tight">
                  {opportunity.title}
                </h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">
                  {opportunity.category}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-pth-navy transition-colors bg-white shadow-sm" aria-label="Share this opportunity">
                  <Share2 size={20} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-pth-green transition-colors bg-white shadow-sm" aria-label="Save this opportunity">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Calendar size={16} /> <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Duration</span>
                  </div>
                  <p className="font-bold text-pth-navy">{opportunity.duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <MapPin size={16} /> <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Location</span>
                  </div>
                  <p className="font-bold text-pth-navy">{opportunity.location}</p>
                </div>
                {opportunity.reward && (
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <BriefcaseBusiness size={16} /> <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Reward</span>
                    </div>
                    <p className="font-bold text-pth-navy">{opportunity.reward}</p>
                  </div>
                )}
              </div>

              {opportunity.skillsDeveloped.length > 0 && (
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-bold text-slate-500">Skills developed:</span>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skillsDeveloped.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-10">
                <section>
                  <h3 className="text-xl font-heading font-bold text-pth-navy mb-4">What you'll do</h3>
                  <div className="prose prose-slate max-w-none text-slate-600">
                    <p>{opportunity.whatYoullDo}</p>
                  </div>
                </section>

                {opportunity.whatYoullLearn.length > 0 && (
                  <section>
                    <h3 className="text-xl font-heading font-bold text-pth-navy mb-4">What you'll learn</h3>
                    <ul className="space-y-3">
                      {opportunity.whatYoullLearn.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="text-pth-green shrink-0 mt-0.5" size={20} />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {opportunity.whyThisMatters && (
                  <section>
                    <h3 className="text-xl font-heading font-bold text-pth-navy mb-4">Why this matters</h3>
                    <p className="text-slate-600 leading-relaxed">{opportunity.whyThisMatters}</p>
                  </section>
                )}
              </div>

              {applying && !applied && (
                <div ref={applyFormRef} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                  <OpportunityApplicationForm
                    opportunityId={opportunity.id}
                    opportunityTitle={opportunity.title}
                    onSuccess={() => {
                      setApplied(true);
                      setApplying(false);
                    }}
                  />
                </div>
              )}

              {applied && (
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center">
                  <CheckCircle className="text-pth-green mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-heading font-bold text-pth-navy mb-2">Application sent</h3>
                  <p className="text-slate-600">
                    Thanks for applying to {opportunity.title}. We'll be in touch soon.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full lg:w-80 shrink-0 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg sticky top-24">
                {opportunity.applyBy && (
                  <div className="mb-6">
                    <p className="text-sm font-bold text-red-500 mb-1">Apply by {opportunity.applyBy}</p>
                  </div>
                )}

                {!applying && !applied && (
                  <button
                    onClick={() => {
                      setApplying(true);
                      setTimeout(() => applyFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                    }}
                    className="w-full bg-pth-green text-white px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-[#4ea858] transition-colors shadow-sm mb-4"
                  >
                    Apply Now
                  </button>
                )}

                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-start gap-3">
                  <Briefcase className="text-pth-navy shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-slate-600 font-medium">
                    <span className="font-bold text-pth-navy block mb-1">Portfolio Verification</span>
                    Upon successful completion, this opportunity will be verified and added to your PthFndR capability portfolio.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 text-sm font-bold text-pth-navy hover:text-pth-green transition-colors border-2 border-slate-100 hover:border-pth-green py-2.5 rounded-xl"
                  >
                    <MessageSquare size={16} /> Ask a Question
                  </Link>
                </div>
              </div>

              {opportunity.requirements.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-pth-navy mb-4 uppercase tracking-wider text-xs">Requirements &amp; Details</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {opportunity.requirements.map((req) => (
                      <li key={req} className="flex gap-2">
                        <span className="font-bold text-pth-navy">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
