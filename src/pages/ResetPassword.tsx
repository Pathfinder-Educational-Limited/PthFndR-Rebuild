import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Logo } from '../components/Logo';
import { getSupabaseClient } from '../services/supabaseClient';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Supabase's recovery link places the session tokens in the URL hash (#access_token=...).
    // The client library automatically picks these up and establishes a session when it
    // initializes — we just need to wait for that to happen before showing the form.
    const supabase = getSupabaseClient();
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setReady(true);
      } else {
        setError('This password reset link is invalid or has expired. Please request a new one.');
        setReady(true);
      }
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const supabase = getSupabaseClient();
      const { error: updateError } = await supabase.auth.updateUser({ password });

      if (updateError) {
        setError(updateError.message);
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Reset password error:', err);
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Reset Password | PthFndR" description="Set a new password for your account." />
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-pth-navy-deep overflow-hidden">
        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="bg-white py-10 px-6 shadow-2xl sm:rounded-3xl sm:px-12 border border-slate-100">
            <div className="flex justify-center mb-8">
              <Logo size="md" variant="light" />
            </div>
            <h2 className="text-center text-2xl font-heading font-bold leading-9 tracking-tight text-pth-navy mb-8">
              Set a new password
            </h2>

            {!ready && <p className="text-center text-slate-500">Checking your link...</p>}

            {ready && success && (
              <p className="text-center text-pth-green font-semibold">
                Password updated. Redirecting to sign in...
              </p>
            )}

            {ready && !success && (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-700">
                    New password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-xl border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-pth-cyan sm:text-sm sm:leading-6 px-4"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-slate-700">
                    Confirm new password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full rounded-xl border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-pth-cyan sm:text-sm sm:leading-6 px-4"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-xl bg-pth-gradient px-4 py-3 text-sm font-bold leading-6 text-pth-navy shadow-sm hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update password'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
