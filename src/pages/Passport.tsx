import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSupabaseClient } from '../services/supabaseClient';
import { Award } from 'lucide-react';

interface Skill {
  skill_id: string;
  name: string;
  pathway: string;
}

interface EvidenceRecord {
  id: string;
  skill_id: string;
  proficiency_level: string;
  evidence_description: string;
  occurred_at: string | null;
  created_at: string;
}

interface Profile {
  first_name: string;
  last_name: string;
}

const PATHWAY_ORDER = ['Product Design', 'Software Development', 'Digital Marketing', 'Core Employability'];
const LEVEL_ORDER = ['Explore', 'Practise', 'Demonstrate', 'Apply'];

export default function Passport() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [evidence, setEvidence] = useState<EvidenceRecord[]>([]);
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
        .select('first_name, last_name')
        .eq('id', userId)
        .single();
      if (profileData) setProfile(profileData);

      const { data: skillsData } = await supabase
        .from('skills')
        .select('skill_id, name, pathway')
        .order('skill_id');
      if (skillsData) setSkills(skillsData);

      const { data: evidenceData } = await supabase
        .from('skill_evidence_record')
        .select('id, skill_id, proficiency_level, evidence_description, occurred_at, created_at')
        .eq('young_person_id', userId)
        .order('created_at', { ascending: false });
      if (evidenceData) setEvidence(evidenceData);

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
          Sign in to view your Skills Passport
        </h1>
        <Link to="/login?redirect=/passport" className="inline-flex items-center gap-2 bg-pth-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-pth-navy/90 transition-colors">
          Sign in
        </Link>
      </div>
    );
  }

  const bestLevelBySkill = new Map<string, string>();
  evidence.forEach((ev) => {
    const current = bestLevelBySkill.get(ev.skill_id);
    const currentRank = current ? LEVEL_ORDER.indexOf(current) : -1;
    const newRank = LEVEL_ORDER.indexOf(ev.proficiency_level);
    if (newRank > currentRank) bestLevelBySkill.set(ev.skill_id, ev.proficiency_level);
  });

  const skillsWithEvidence = skills.filter((s) => bestLevelBySkill.has(s.skill_id));
  const skillName = (skillId: string) => skills.find((s) => s.skill_id === skillId)?.name ?? skillId;

  const countByPathway = PATHWAY_ORDER.map((pathway) => ({
    pathway,
    count: skillsWithEvidence.filter((s) => s.pathway === pathway).length,
  })).filter((p) => p.count > 0);

  return (
    <>
      <SEO
        title="Your Skills Passport | PthFndR"
        description="A record of the real skills you've demonstrated through PthFndR opportunities."
      />
      <div className="bg-pth-cream min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full bg-pth-navy text-white flex items-center justify-center text-xl font-bold">
              {profile.first_name[0]}{profile.last_name[0]}
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-pth-navy">
                {profile.first_name} {profile.last_name}'s Skills Passport
              </h1>
              <p className="text-slate-500">
                {skillsWithEvidence.length} skill{skillsWithEvidence.length === 1 ? '' : 's'} evidenced
              </p>
            </div>
          </div>

          {skillsWithEvidence.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm text-center">
              <Award className="mx-auto text-slate-300 mb-4" size={40} />
              <h2 className="text-xl font-heading font-bold text-pth-navy mb-2">Nothing here yet</h2>
              <p className="text-slate-500 max-w-md mx-auto mb-6">
                Once you complete an opportunity, we'll add the real skills you demonstrated here.
              </p>
              <Link to="/opportunities" className="inline-flex items-center gap-2 bg-pth-green text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4ea858] transition-colors">
                Browse opportunities
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h2 className="font-bold text-pth-navy mb-4">Skills by category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {countByPathway.map(({ pathway, count }) => (
                    <div key={pathway} className="text-center">
                      <p className="text-3xl font-heading font-extrabold text-pth-green">{count}</p>
                      <p className="text-xs text-slate-500 mt-1">{pathway}</p>
                    </div>
                  ))}
                </div>
              </div>

              {PATHWAY_ORDER.map((pathway) => {
                const pathwaySkills = skillsWithEvidence.filter((s) => s.pathway === pathway);
                if (pathwaySkills.length === 0) return null;
                return (
                  <div key={pathway} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-pth-navy mb-4">{pathway}</h3>
                    <div className="space-y-3">
                      {pathwaySkills.map((skill) => {
                        const level = bestLevelBySkill.get(skill.skill_id)!;
                        const levelIndex = LEVEL_ORDER.indexOf(level);
                        return (
                          <div key={skill.skill_id}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                              <span className="text-xs font-bold text-pth-green">{level}</span>
                            </div>
                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-pth-green rounded-full transition-all"
                                style={{ width: `${((levelIndex + 1) / LEVEL_ORDER.length) * 100}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h2 className="font-bold text-pth-navy mb-4">Evidence log</h2>
                <div className="space-y-4">
                  {evidence.map((ev) => (
                    <div key={ev.id} className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-pth-navy">{skillName(ev.skill_id)}</span>
                        <span className="text-xs px-2 py-0.5 bg-pth-green/10 text-pth-green rounded-full font-bold">
                          {ev.proficiency_level}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{ev.evidence_description}</p>
                      {ev.occurred_at && (
                        <p className="text-xs text-slate-400 mt-1">
                          {new Date(ev.occurred_at).toLocaleDateString('en-GB')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
