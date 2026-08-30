import SEO from '../components/SEO';
import {
  Briefcase, Users, MessageSquare, Settings, Plus, Calendar
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSupabaseClient } from '../services/supabaseClient';

// ============================================================================
// OrganisationDashboard.tsx — CLEAN REBUILD (Aug 2026)
// Previous version hardcoded an entirely fabricated organisation ("Acme Corp"),
// fabricated opportunities, fabricated named applicants ("Jamal Davis",
// "Sarah Khan"), and fabricated reviews/ratings with named reviewers
// ("Mia T.", "David O.") and quoted testimonials — none of it real.
//
// This version reads real data: the signed-in organisation's own record, their
// real posted opportunities (from the `opportunities` table), and real
// applications to those opportunities (from `opportunity_applications`,
// readable via the RLS policies added alongside this rebuild).
//
// Feedback/Impact tab: there is no feedback or review data model in the
// database at all right now. Rather than fabricate ratings and reviews, this
// tab honestly says the feature doesn't exist yet. Do not add fabricated
// content here — build a real feedback table first if this is wanted.
//
// Settings tab: the organisations table only has name, contact_name, email,
// and sector. There's no website, description, or team-members concept in the
// database — the previous version's "Website", "Description", and "Team
// Members" fields were entirely fabricated UI with no backing data. This
// version only shows and edits fields that genuinely exist.
// ============================================================================

interface OrgProfile {
  id: string;
  name: string;
  contact_name: string;
  email: string;
  sector: string | null;
}

interface Opportunity {
  id: string;
  title: string;
  category: string;
  status: string;
  created_at: string;
}

interface Application {
  id: string;
  opportunity_id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number | null;
  created_at: string;
  status: string;
}

export default function OrganisationDashboard() {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [profile, setProfile] = useState<OrgProfile | null>(null);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: '', sector: '' });

  useEffect(() => {
    const supabase = getSupabaseClient();

    supabase.auth.getSession().then(async ({ data: sessionData }) => {
      const userId = sessionData.session?.user.id;
      if (!userId) {
        setLoading(false);
        return;
      }

      const { data: orgData } = await supabase
        .from('organisations')
        .select('id, name, contact_name, email, sector')
        .eq('id', userId)
        .single();

      if (orgData) {
        setProfile(orgData);
        setProfileForm({ name: orgData.name, sector: orgData.sector ?? '' });
      }

      const { data: oppsData } = await supabase
        .from('opportunities')
        .select('id, title, category, status, created_at')
        .eq('organisation_id', userId)
        .order('created_at', { ascending: false });

      if (oppsData) setOpportunities(oppsData);

      if (oppsData && oppsData.length > 0) {
        const oppIds = oppsData.map((o) => o.id);
        const { data: appsData } = await supabase
          .from('opportunity_applications')
          .select('id, opportunity_id, first_name, last_name, email, age, created_at, status')
          .in('opportunity_id', oppIds)
          .order('created_at', { ascending: false });

        if (appsData) setApplications(appsData);
      }

      setLoading(false);
    });
  }, []);

  const saveProfile = async () => {
    if (!profile) return;
    setSavingProfile(true);
    const supabase = getSupabaseClient();
    await supabase
      .from('organisations')
      .update({ name: profileForm.name, sector: profileForm.sector || null })
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
        <Link to="/login?redirect=/organisation/dashboard" className="inline-flex items-center gap-2 bg-pth-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-pth-navy/90 transition-colors">
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Organisation Dashboard | PthFndR"
        description="Manage your opportunities, applications, and profile."
      />
      <div className="bg-pth-cream min-h-screen pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-pth-navy">Organisation Dashboard</h1>
              <p className="text-slate-600 mt-1">Welcome back, {profile.name}</p>
            </div>
            <Link to="/for-organisations/post-opportunity" className="bg-pth-green text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#4ea858] transition-colors flex items-center gap-2">
              <Plus size={20} />
              Post Opportunity
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-64 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sticky top-24">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('opportunities')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'opportunities' ? 'bg-slate-50 text-pth-navy font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <Briefcase size={20} className={activeTab === 'opportunities' ? 'text-pth-green' : 'text-slate-400'} />
                    My Opportunities
                  </button>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'applications' ? 'bg-slate-50 text-pth-navy font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Users size={20} className={activeTab === 'applications' ? 'text-pth-green' : 'text-slate-400'} />
                      Applications
                    </div>
                    {applications.length > 0 && (
                      <span className="bg-pth-green text-white text-xs font-bold px-2 py-0.5 rounded-full">{applications.length}</span>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('feedback')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'feedback' ? 'bg-slate-50 text-pth-navy font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <MessageSquare size={20} className={activeTab === 'feedback' ? 'text-pth-green' : 'text-slate-400'} />
                    Feedback & Impact
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'settings' ? 'bg-slate-50 text-pth-navy font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <Settings size={20} className={activeTab === 'settings' ? 'text-pth-green' : 'text-slate-400'} />
                    Settings
                  </button>
                </nav>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              {activeTab === 'opportunities' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                  <h2 className="text-xl font-bold text-pth-navy mb-6">Your Opportunities</h2>
                  {opportunities.length === 0 && (
                    <p className="text-slate-500">
                      You haven't posted any opportunities yet.{' '}
                      <Link to="/for-organisations/post-opportunity" className="text-pth-green font-bold hover:underline">
                        Post your first one
                      </Link>.
                    </p>
                  )}
                  <div className="space-y-4">
                    {opportunities.map((opp) => (
                      <div key={opp.id} className="border border-slate-200 rounded-xl p-5 hover:border-pth-teal transition-colors">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-pth-navy text-lg">{opp.title}</h3>
                              <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                                opp.status === 'approved' ? 'bg-green-100 text-green-700' :
                                opp.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                'bg-amber-100 text-amber-700'
                              }`}>
                                {opp.status}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                              <span className="flex items-center gap-1.5"><Calendar size={14} /> Posted: {new Date(opp.created_at).toLocaleDateString('en-GB')}</span>
                              <span>{opp.category}</span>
                            </div>
                          </div>
                        </div>
                        {opp.status === 'approved' && (
                          <div className="flex items-center gap-4 text-sm pt-4 mt-4 border-t border-slate-100">
                            <Link to={`/opportunities/${opp.id}`} className="text-slate-500 hover:text-pth-navy transition-colors">View Public Page</Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                  <h2 className="text-xl font-bold text-pth-navy mb-6">Applications</h2>
                  {applications.length === 0 && (
                    <p className="text-slate-500">No applications yet.</p>
                  )}
                  <div className="space-y-4">
                    {applications.map((app) => (
                      <div key={app.id} className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 rounded-full bg-pth-teal/20 text-pth-teal flex items-center justify-center font-bold text-lg">
                            {app.first_name[0]}{app.last_name[0]}
                          </div>
                          <div>
                            <h4 className="font-bold text-pth-navy">{app.first_name} {app.last_name}</h4>
                            <p className="text-sm text-slate-500">
                              {app.age ? `${app.age} • ` : ''}Applied {new Date(app.created_at).toLocaleDateString('en-GB')}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase">{app.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'feedback' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center py-16">
                  <MessageSquare className="mx-auto text-slate-300 mb-4" size={40} />
                  <h2 className="text-xl font-bold text-pth-navy mb-2">Feedback & Impact</h2>
                  <p className="text-slate-500 max-w-md mx-auto">
                    This feature isn't built yet. Once young people can leave feedback on completed opportunities, it will show here.
                  </p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                  <h2 className="text-xl font-bold text-pth-navy mb-6">Organisation Profile</h2>
                  <div className="space-y-6 max-w-2xl">
                    <div>
                      <label className="block text-sm font-bold text-pth-navy mb-2">Organisation Name</label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-pth-green"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-pth-navy mb-2">Sector</label>
                      <input
                        type="text"
                        value={profileForm.sector}
                        onChange={(e) => setProfileForm({ ...profileForm, sector: e.target.value })}
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
                      className="bg-pth-navy text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#0C2A5C] transition-colors disabled:opacity-50"
                    >
                      {savingProfile ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
