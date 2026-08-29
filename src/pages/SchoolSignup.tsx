import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSupabaseClient } from '../services/supabaseClient';
import { CheckCircle2 } from 'lucide-react';

export default function SchoolSignup() {
  const [form, setForm] = useState({
    school_name: '',
    contact_name: '',
    email: '',
    password: '',
    local_authority: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            account_type: 'school',
            school_name: form.school_name,
            contact_name: form.contact_name,
            local_authority: form.local_authority,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('School signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-pth-cream min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-10 border border-slate-100 shadow-sm text-center">
          <CheckCircle2 className="text-pth-green mx-auto mb-6" size={48} />
          <h1 className="text-2xl font-heading font-bold text-pth-navy mb-4">
            Check your email
          </h1>
          <p className="text-slate-600 mb-2">
            We've sent a confirmation link to <strong>{form.email}</strong>.
          </p>
          <p className="text-slate-600">
            Confirm your email to finish setting up your account, then you'll be able to refer students into opportunities.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="School Sign Up | PthFndR"
        description="Create an account to refer students into opportunities and programmes."
      />
      <div className="bg-pth-cream min-h-screen py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-pth-navy mb-2">
              Create your school account
            </h1>
            <p className="text-slate-600">
              Free to sign up. Refer students once your account is confirmed.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="school_name" className="block text-sm font-semibold text-pth-navy mb-1.5">
                School name *
              </label>
              <input
                id="school_name"
                type="text"
                required
                value={form.school_name}
                onChange={(e) => setForm({ ...form, school_name: e.target.value })}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="contact_name" className="block text-sm font-semibold text-pth-navy mb-1.5">
                Your name *
              </label>
              <input
                id="contact_name"
                type="text"
                required
                value={form.contact_name}
                onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="local_authority" className="block text-sm font-semibold text-pth-navy mb-1.5">
                Local authority <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                id="local_authority"
                type="text"
                value={form.local_authority}
                onChange={(e) => setForm({ ...form, local_authority: e.target.value })}
                placeholder="e.g. Manchester City Council"
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-pth-navy mb-1.5">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-pth-navy mb-1.5">
                Password *
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
              <p className="text-xs text-slate-400 mt-1">At least 8 characters</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>

            <p className="text-xs text-slate-400 text-center pt-2">
              Already have an account?{' '}
              <Link to="/login?redirect=/" className="text-pth-green font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
