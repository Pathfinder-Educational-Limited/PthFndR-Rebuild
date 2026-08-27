import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../services/supabaseClient';

interface Application {
  id: string;
  created_at: string;
  opportunity_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  age: number | null;
  postcode: string | null;
  why_applying: string;
  what_you_bring: string | null;
  availability: string | null;
  status: string;
  admin_notes: string | null;
}

const STATUS_COLOURS: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-800',
  reviewing: 'bg-blue-100 text-blue-800',
  accepted: 'bg-green-100 text-green-800',
  declined: 'bg-red-100 text-red-800',
};

export default function AdminApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Application | null>(null);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase
      .from('opportunity_applications')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setApplications(data ?? []);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const supabase = getSupabaseClient();
    await supabase
      .from('opportunity_applications')
      .update({ status })
      .eq('id', id);
    setApplications(prev =>
      prev.map(a => (a.id === id ? { ...a, status } : a))
    );
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  };

  if (loading) return <p className="p-8 text-gray-500">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0C2A5C] mb-6">Applications</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Opportunity</th>
              <th className="px-4 py-2">Received</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{app.first_name} {app.last_name}</td>
                <td className="px-4 py-2">{app.email}</td>
                <td className="px-4 py-2">{app.age ?? '—'}</td>
                <td className="px-4 py-2 text-xs text-gray-500">{app.opportunity_id}</td>
                <td className="px-4 py-2 text-xs text-gray-500">
                  {new Date(app.created_at).toLocaleDateString('en-GB')}
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${STATUS_COLOURS[app.status] ?? ''}`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setSelected(app)}
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
                {selected.first_name} {selected.last_name}
              </h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <dl className="space-y-2 text-sm mb-4">
              <div><dt className="font-medium text-gray-500">Email</dt><dd>{selected.email}</dd></div>
              <div><dt className="font-medium text-gray-500">Phone</dt><dd>{selected.phone ?? '—'}</dd></div>
              <div><dt className="font-medium text-gray-500">Age</dt><dd>{selected.age ?? '—'}</dd></div>
              <div><dt className="font-medium text-gray-500">Postcode</dt><dd>{selected.postcode ?? '—'}</dd></div>
              <div><dt className="font-medium text-gray-500">Availability</dt><dd>{selected.availability ?? '—'}</dd></div>
              <div>
                <dt className="font-medium text-gray-500">Why applying</dt>
                <dd className="mt-1 whitespace-pre-wrap">{selected.why_applying}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">What they bring</dt>
                <dd className="mt-1 whitespace-pre-wrap">{selected.what_you_bring ?? '—'}</dd>
              </div>
            </dl>

            <div className="flex gap-2 flex-wrap">
              {['pending', 'reviewing', 'accepted', 'declined'].map(s => (
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
