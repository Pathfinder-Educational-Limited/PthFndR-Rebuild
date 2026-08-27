import { Link, useNavigate } from 'react-router-dom';
import { getSupabaseClient } from '../../services/supabaseClient';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const supabase = getSupabaseClient();
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0C2A5C] text-white px-6 py-4 flex justify-between items-center">
        <span className="font-bold">PthFndR Admin</span>
        <button onClick={handleSignOut} className="text-sm text-white/70 hover:text-white">
          Sign out
        </button>
      </div>
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0C2A5C] mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/admin/applications"
            className="block p-5 bg-white rounded-lg border border-gray-200 hover:border-[#2B9E82] transition-colors"
          >
            <p className="font-semibold text-[#0C2A5C]">Applications</p>
            <p className="text-sm text-gray-500 mt-1">Review and manage opportunity applications</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
