import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../services/supabaseClient';

interface YoungPerson {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
}

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

const PATHWAY_ORDER = ['Product Design', 'Software Development', 'Digital Marketing', 'Core Employability'];
const PROFICIENCY_LEVELS = ['Explore', 'Practise', 'Demonstrate', 'Apply'];

export default function AdminEvidence() {
  const [youngPeople, setYoungPeople] = useState<YoungPerson[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [search, setSearch] = useState('');
  const [selectedPerson, setSelectedPerson] = useState<YoungPerson | null>(null);
  const [existingEvidence, setExistingEvidence] = useState<EvidenceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    skill_id: '',
    proficiency_level: 'Demonstrate',
    evidence_description: '',
    occurred_at: '',
  });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();

    supabase
      .from('young_people')
      .select('id, first_name, last_name, email, age')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setYoungPeople(data);
        setLoading(false);
      });

    supabase
      .from('skills')
      .select('skill_id, name, pathway')
      .order('skill_id')
      .then(({ data }) => {
        if (data) setSkills(data);
      });
  }, []);

  const loadEvidenceFor = async (personId: string) => {
    const supabase = getSupabaseClient();
    const { data } = await supabase
      .from('skill_evidence_record')
      .select('id, skill_id, proficiency_level, evidence_description, occurred_at, created_at')
      .eq('young_person_id', personId)
      .order('created_at', { ascending: false });
    setExistingEvidence(data ?? []);
  };

  const selectPerson = (person: YoungPerson) => {
    setSelectedPerson(person);
    setSaveSuccess(false);
    setForm({ skill_id: '', proficiency_level: 'Demonstrate', evidence_description: '', occurred_at: '' });
    loadEvidenceFor(person.id);
  };

  const handleSave = async () => {
    if (!selectedPerson) return;
    setSaveError(null);

    if (!form.skill_id) {
      setSaveError('Select a skill.');
      return;
    }
    if (!form.evidence_description.trim()) {
      setSaveError('Describe the evidence.');
      return;
    }

    setSaving(true);
    const supabase = getSupabaseClient();

    const { data: sessionData } = await supabase.auth.getSession();
    const adminUserId = sessionData.session?.user.id;

    const { error } = await supabase.from('skill_evidence_record').insert([
      {
        young_person_id: selectedPerson.id,
        skill_id: form.skill_id,
        proficiency_level: form.proficiency_level,
        evidence_description: form.evidence_description.trim(),
        evidence_source: 'admin_entry',
        entered_by: adminUserId ?? null,
        occurred_at: form.occurred_at || null,
      },
    ]);

    if (error) {
      setSaveError('Something went wrong saving this. Please try again.');
      setSaving(false);
      return;
    }

    setSaveSuccess(true);
    setForm({ skill_id: '', proficiency_level: 'Demonstrate', evidence_description: '', occurred_at: '' });
    loadEvidenceFor(selectedPerson.id);
    setSaving(false);
  };

  const filteredPeople = youngPeople.filter((p) =>
    `${p.first_name} ${p.last_name} ${p.email}`.toLowerCase().includes(search.toLowerCase())
  );

  const skillName = (skillId: string) => skills.find((s) => s.skill_id === skillId)?.name ?? skillId;

  if (loading) return <p className="p-8 text-gray-500">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0C2A5C] mb-6">Skills Evidence</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <input
            type="text"
            placeholder="Search young people..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {filteredPeople.map((person) => (
              <button
                key={person.id}
                onClick={() => selectPerson(person)}
                className={`w-full text-left p-3 rounded-lg border text-sm transition-colors ${
                  selectedPerson?.id === person.id
                    ? 'border-[#0C2A5C] bg-[#0C2A5C]/5'
                    : 'border-gray-200 hover:border-[#2B9E82]'
                }`}
              >
                <p className="font-bold text-[#0C2A5C]">{person.first_name} {person.last_name}</p>
                <p className="text-xs text-gray-500">{person.email} · {person.age}</p>
              </button>
            ))}
            {filteredPeople.length === 0 && (
              <p className="text-sm text-gray-400 p-3">No young people found.</p>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          {!selectedPerson ? (
            <p className="text-gray-500 p-8 text-center border border-dashed border-gray-200 rounded-xl">
              Select a young person to log evidence against.
            </p>
          ) : (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="font-bold text-[#0C2A5C] mb-4">
                  Log evidence for {selectedPerson.first_name} {selectedPerson.last_name}
                </h2>

                {saveError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
                    {saveError}
                  </div>
                )}
                {saveSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3 mb-4">
                    Evidence saved.
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Skill</label>
                    <select
                      value={form.skill_id}
                      onChange={(e) => setForm({ ...form, skill_id: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="">Select a skill...</option>
                      {PATHWAY_ORDER.map((pathway) => (
                        <optgroup key={pathway} label={pathway}>
                          {skills.filter((s) => s.pathway === pathway).map((s) => (
                            <option key={s.skill_id} value={s.skill_id}>{s.name}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Proficiency level</label>
                    <div className="flex gap-2">
                      {PROFICIENCY_LEVELS.map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setForm({ ...form, proficiency_level: level })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                            form.proficiency_level === level
                              ? 'bg-[#0C2A5C] text-white border-[#0C2A5C]'
                              : 'bg-white text-gray-600 border-gray-300 hover:border-[#0C2A5C]'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Evidence description
                    </label>
                    <textarea
                      rows={3}
                      value={form.evidence_description}
                      onChange={(e) => setForm({ ...form, evidence_description: e.target.value })}
                      placeholder="e.g. Reviewed the EmployaLingua website navigation and content, produced a written report with 8 specific recommendations."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Date (optional)
                    </label>
                    <input
                      type="date"
                      value={form.occurred_at}
                      onChange={(e) => setForm({ ...form, occurred_at: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>

                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-[#2B9E82] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#4ea858] transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save evidence'}
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0C2A5C] mb-4 text-sm">
                  Existing evidence ({existingEvidence.length})
                </h3>
                {existingEvidence.length === 0 && (
                  <p className="text-sm text-gray-400">No evidence logged yet.</p>
                )}
                <div className="space-y-3">
                  {existingEvidence.map((ev) => (
                    <div key={ev.id} className="border-t border-gray-100 pt-3 first:border-t-0 first:pt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#0C2A5C]">{skillName(ev.skill_id)}</span>
                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full font-medium text-gray-600">
                          {ev.proficiency_level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{ev.evidence_description}</p>
                      {ev.occurred_at && (
                        <p className="text-xs text-gray-400 mt-1">
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
    </div>
  );
}
