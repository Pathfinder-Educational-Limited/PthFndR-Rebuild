import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../services/supabaseClient';

interface Opportunity {
  id: string;
  created_at: string;
  organisation_id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  location: string;
  reward: string | null;
  skills_developed: string[];
  requirements: string[];
  status: string;
  admin_notes: string | null;
  organisations?: { name: string; contact_name: string; email: string } | null;
}

const STATUS_COLOURS: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
};

export default function AdminOpportunities() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Opportunity | null>(null);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase
      .from('opportunities')
      .select('*, organisations(name, contact_name, email)')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setOpportunities(data ?? []);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const supabase = getSupabaseClient();
    await supabase
      .from('opportunities')
      .update({ status })
      .eq('id', id);
    setOpportunities(prev =>
      prev.map(o => (o.id === id ? { ...o, status } : o))
    );
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  };

  if (loading) return <p className="p-8 text-gray-500">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0C2A5C] mb-6">Opportunities</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Organisation</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Received</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map(opp => (
              <tr key={opp.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{opp.title}</td>
                <td className="px-4 py-2 text-xs text-gray-500">{opp.organisations?.name ?? 'Unknown'}</td>
                <td className="px-4 py-2">{opp.category}</td>
                <td className="px-4 py-2">{opp.duration}</td>
                <td className="px-4 py-2 text-xs text-gray-500">
                  {new Date(opp.created_at).toLocaleDateString('en-GB')}
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${STATUS_COLOURS[opp.status] ?? ''}`}>
                    {opp.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setSelected(opp)}
                    className="text-[#2B9E82] text-xs underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-bold text-[#0C2A5C]">
                {selected.title}
              </h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <dl className="space-y-2 text-sm mb-4">
              <div><dt className="font-medium text-gray-500">Organisation</dt><dd>{selected.organisations?.name ?? '—'}</dd></div>
              <div><dt className="font-medium text-gray-500">Contact</dt><dd>{selected.organisations?.contact_name ?? '—'} ({selected.organisations?.email ?? '—'})</dd></div>
              <div><dt className="font-medium text-gray-500">Category</dt><dd>{selected.category}</dd></div>
              <div><dt className="font-medium text-gray-500">Duration</dt><dd>{selected.duration}</dd></div>
              <div><dt className="font-medium text-gray-500">Location</dt><dd>{selected.location}</dd></div>
              <div><dt className="font-medium text-gray-500">Reward</dt><dd>{selected.reward ?? '—'}</dd></div>
              <div>
                <dt className="font-medium text-gray-500">Description</dt>
                <dd className="mt-1 whitespace-pre-wrap">{selected.description}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Skills developed</dt>
                <dd className="mt-1">{selected.skills_developed?.length ? selected.skills_developed.join(', ') : '—'}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Requirements</dt>
                <dd className="mt-1">{selected.requirements?.length ? selected.requirements.join(', ') : '—'}</dd>
              </div>
            </dl>
            <div className="flex gap-2 flex-wrap">
              {['pending', 'approved', 'rejected'].map(s => (
                <button
                  key={s}
                  onClick={() => updateStatus(selected.id, s)}
                  className={`px-3 py-1 rounded text-xs font-medium border transition-colors ${
                    selected.status === s
                      ? 'bg-[#0C2A5C] text-white border-[#0C2A5C]'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-[#0C2A5C]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
