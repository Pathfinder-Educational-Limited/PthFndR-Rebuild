import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSupabaseClient } from '../services/supabaseClient';
import { DashboardCard } from '../components/dashboard/DashboardCard';
import { JourneyIndicator } from '../components/dashboard/JourneyIndicator';
import { ARCHETYPE_CTA, type Pattern } from './Assessment';
import { ArrowRight, Award, Compass, Target, Briefcase, TrendingUp } from 'lucide-react';

interface Profile {
  first_name: string;
}

interface AssessmentResult {
  pattern: Pattern;
  identity_score: number;
  character_score: number;
  competence_score: number;
  impact_score: number;
  created_at: string;
}

interface OpportunityPreview {
  id: string;
  title: string;
  category: string;
}

interface PassportSummary {
  skillsCount: number;
  mostRecentSkillName: string | null;
  mostRecentDate: string | null;
}

const ARCHETYPE_STRAPLINE: Record<Pattern, string> = {
  'The Explorer': 'Ready to discover',
  'The Regrouper': 'Finding the way back',
  'The Builder': 'Learning by doing',
  'The Spark': 'Talent not yet lit',
  'The Pathfinder': 'Ready for what\u2019s next',
};

export default function YoungPersonDashboard() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);
  const [opportunities, setOpportunities] = useState<OpportunityPreview[]>([]);
  const [passportSummary, setPassportSummary] = useState<PassportSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabaseClient();

    supabase.auth.getSession().then(async ({ data: sessionData }) => {
      const userId = sessionData.session?.user.id;
      if (!userId) {
        setCheckingAuth(false);
        setLoading(false);
        return;
      }
      setCheckingAuth(false);

      const { data: profileData } = await supabase
        .from('young_people')
        .select('first_name')
        .eq('id', userId)
        .single();
      if (profileData) setProfile(profileData);

      const { data: resultData } = await supabase
        .from('assessment_result')
        .select('pattern, identity_score, character_score, competence_score, impact_score, created_at')
        .eq('young_person_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      if (resultData) setAssessmentResult(resultData as AssessmentResult);

      const { data: oppData } = await supabase
        .from('opportunities')
        .select('id, title, category')
        .eq('status', 'approved')
        .limit(3);
      if (oppData) setOpportunities(oppData);

      const { data: evidenceData } = await supabase
        .from('skill_evidence_record')
        .select('skill_id, created_at, skills(name)')
        .eq('young_person_id', userId)
        .order('created_at', { ascending: false });
      if (evidenceData) {
        const first = evidenceData[0] as any;
        setPassportSummary({
          skillsCount: evidenceData.length,
          mostRecentSkillName: first?.skills?.name ?? null,
          mostRecentDate: first?.created_at ?? null,
        });
      }

      setLoading(false);
    });
  }, []);

  if (checkingAuth || loading) {
    return (
      <div className="bg-pth-cream min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-pth-cream min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-heading font-bold text-pth-navy mb-4">
          Sign in to view your dashboard
        </h1>
        <Link to="/login?redirect=/dashboard" className="inline-flex items-center gap-2 bg-pth-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-pth-navy/90 transition-colors">
          Sign in
        </Link>
      </div>
    );
  }

  const pattern = assessmentResult?.pattern ?? null;
  const cta = pattern ? ARCHETYPE_CTA[pattern] : null;

  return (
    <>
      <SEO title="Dashboard | PthFndR" description="Your PthFndR dashboard." />
      <div className="bg-pth-cream min-h-screen pt-10 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <h1 className="text-2xl font-heading font-bold text-pth-navy">
              Welcome back, {profile.first_name}
            </h1>
            {pattern && (
              <p className="text-slate-500 mt-1">You're at {pattern} stage.</p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 space-y-6">

              <DashboardCard title="Starting Point" icon={Compass} accentColor="text-pth-cyan">
                {pattern ? (
                  <>
                    <h2 className="text-2xl font-heading font-bold text-pth-navy mb-1">{pattern}</h2>
                    <p className="text-pth-green font-semibold">{ARCHETYPE_STRAPLINE[pattern]}</p>
                  </>
                ) : (
                  <>
                    <p className="text-slate-600 mb-4">You haven't taken your Starting Point assessment yet.</p>
                    <Link to="/assessment" className="inline-flex items-center gap-2 bg-pth-green text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#4ea858] transition-colors">
                      Take your free Starting Point assessment <ArrowRight size={18} />
                    </Link>
                  </>
                )}
              </DashboardCard>

              <DashboardCard title="Your next move" icon={Target} accentColor="text-pth-green">
                {pattern && cta ? (
                  <Link to={cta.to} className="inline-flex items-center gap-2 bg-pth-navy text-white px-6 py-3.5 rounded-xl font-bold hover:bg-pth-navy/90 transition-colors">
                    {cta.label} <ArrowRight size={18} />
                  </Link>
                ) : (
                  <p className="text-slate-500">Take your Starting Point assessment to see a recommended next move here.</p>
                )}
              </DashboardCard>

              <DashboardCard title="Things you can try" icon={Briefcase} accentColor="text-competence-orange">
                {opportunities.length === 0 ? (
                  <p className="text-slate-500">No opportunities available right now — check back soon.</p>
                ) : (
                  <div className="space-y-3">
                    {opportunities.map((opp) => (
                      <Link
                        key={opp.id}
                        to={`/opportunities/${opp.id}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-pth-green transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-pth-navy">{opp.title}</p>
                          <p className="text-sm text-slate-500">{opp.category}</p>
                        </div>
                        <ArrowRight size={18} className="text-slate-400" />
                      </Link>
                    ))}
                  </div>
                )}
                <Link to="/opportunities" className="inline-flex items-center gap-1.5 text-sm font-bold text-pth-navy hover:text-pth-green transition-colors mt-4">
                  See all opportunities <ArrowRight size={14} />
                </Link>
              </DashboardCard>
            </div>

            <div className="space-y-6">

              <DashboardCard title="Skills Passport" icon={Award} accentColor="text-pth-green">
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-4xl font-heading font-extrabold text-pth-green">
                    {passportSummary?.skillsCount ?? 0}
                  </p>
                  <p className="text-sm text-slate-500 leading-tight">skills<br />evidenced</p>
                </div>
                {passportSummary?.mostRecentSkillName ? (
                  <p className="text-sm text-slate-600 mb-4">
                    Most recent: <span className="font-semibold text-pth-navy">{passportSummary.mostRecentSkillName}</span>
                  </p>
                ) : (
                  <p className="text-sm text-slate-500 mb-4">Nothing evidenced yet — it'll show up here once you complete an opportunity.</p>
                )}
                <Link to="/passport" className="inline-flex items-center gap-1.5 text-sm font-bold text-pth-navy hover:text-pth-green transition-colors">
                  View full Passport <ArrowRight size={14} />
                </Link>
              </DashboardCard>

              <DashboardCard title="Journey" icon={TrendingUp} accentColor="text-impact-purple">
                {assessmentResult ? (
                  <JourneyIndicator
                    identityScore={assessmentResult.identity_score}
                    characterScore={assessmentResult.character_score}
                    competenceScore={assessmentResult.competence_score}
                    impactScore={assessmentResult.impact_score}
                  />
                ) : (
                  <p className="text-sm text-slate-500">Your Identity, Character, Competence, and Impact signals will show here once you've taken the assessment.</p>
                )}
              </DashboardCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
