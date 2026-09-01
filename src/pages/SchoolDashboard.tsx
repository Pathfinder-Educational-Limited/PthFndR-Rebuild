import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSupabaseClient } from '../services/supabaseClient';

interface SchoolProfile {
  id: string;
  school_name: string;
  contact_name: string;
  email: string;
  local_authority: string | null;
}

export default function SchoolDashboard() {
  const [profile, setProfile] = useState<SchoolProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [form, setForm] = useState({ school_name: '', local_authority: '' });

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.auth.getSession().then(async ({ data: sessionData }) => {
      const userId = sessionData.session?.user.id;
      if (!userId) {
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from('schools')
        .select('id, school_name, contact_name, email, local_authority')
        .eq('id', userId)
        .single();
      if (data) {
        setProfile(data);
        setForm({ school_name: data.school_name, local_authority: data.local_authority ?? '' });
      }
      setLoading(false);
    });
  }, []);

  const saveProfile = async () => {
    if (!profile) return;
    setSavingProfile(true);
    const supabase = getSupabaseClient();
    await supabase
      .from('schools')
      .update({ school_name: form.school_name, local_authority: form.local_authority || null })
      .eq('id', profile.id);
    setSavingProfile(false);
  };

  if (loading) {
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
        <Link to="/login?redirect=/school/dashboard" className="inline-flex items-center gap-2 bg-pth-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-pth-navy/90 transition-colors">
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO title="School Dashboard | PthFndR" description="Manage your school profile." />
      <div className="bg-pth-cream min-h-screen pt-10 pb-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-heading font-bold text-pth-navy mb-2">School Dashboard</h1>
          <p className="text-slate-600 mb-8">Welcome back, {profile.school_name}</p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
            <h2 className="text-xl font-bold text-pth-navy mb-6">School Profile</h2>
            <div className="space-y-6 max-w-lg">
              <div>
                <label className="block text-sm font-bold text-pth-navy mb-2">School Name</label>
                <input
                  type="text"
                  value={form.school_name}
                  onChange={(e) => setForm({ ...form, school_name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-pth-green"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-pth-navy mb-2">Local Authority</label>
                <input
                  type="text"
                  value={form.local_authority}
                  onChange={(e) => setForm({ ...form, local_authority: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-pth-green"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-pth-navy mb-2">Contact Name</label>
                <p className="text-slate-600 py-2">{profile.contact_name}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-pth-navy mb-2">Email</label>
                <p className="text-slate-600 py-2">{profile.email}</p>
              </div>
              <button
                onClick={saveProfile}
                disabled={savingProfile}
                className="bg-pth-navy text-white px-6 py-2.5 rounded-xl font-bold hover:bg-pth-navy/90 transition-colors disabled:opacity-50"
              >
                {savingProfile ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center py-12">
            <p className="text-slate-500 max-w-md mx-auto">
              Student referrals and partnership tools aren't built yet. In the meantime, contact us directly to refer a student or discuss a partnership.
            </p>
            <Link to="/contact?for=School+Partnership" className="inline-block mt-4 bg-pth-green text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4ea858] transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
