import { useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';
import { getSupabaseClient, getUserRole } from '../services/supabaseClient';

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError('Incorrect email or password.');
        setLoading(false);
        return;
      }

      // Link any anonymous assessment result taken before this account existed or before
      // email confirmation completed. Genuinely optional — never blocks sign-in.
      try {
        const storedResultId = localStorage.getItem('pthfndr_assessment_result_id');
        if (storedResultId) {
          const { data: sessionData } = await supabase.auth.getSession();
          const userId = sessionData.session?.user.id;
          if (userId) {
            await supabase
              .from('assessment_result')
              .update({ young_person_id: userId })
              .eq('id', storedResultId)
              .is('young_person_id', null);
          }
          localStorage.removeItem('pthfndr_assessment_result_id');
        }
      } catch (linkErr) {
        console.warn('Failed to link assessment result on sign-in:', linkErr);
      }

      const redirectParam = searchParams.get('redirect');
      if (redirectParam) {
        navigate(redirectParam);
        return;
      }

      const role = await getUserRole();
      const dashboardPath = role === 'admin' ? '/admin' : role === 'school' ? '/school/dashboard' : role === 'organisation' ? '/organisation/dashboard' : role === 'young_person' ? '/dashboard' : '/';
      navigate(dashboardPath);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Login error:', err);
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Enter your email address first, then click "Forgot password?"');
      return;
    }
    setError(null);
    const supabase = getSupabaseClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (resetError) {
      setError(resetError.message);
      return;
    }
    setResetSent(true);
  };

  return (
    <>
      <SEO
        title="Sign In | PthFndR"
        description="Sign in to your PthFndR account."
      />
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-pth-navy-deep overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-pth-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-pth-lime/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
        >
          <div className="bg-white py-10 px-6 shadow-2xl sm:rounded-3xl sm:px-12 border border-slate-100">
            <div className="flex justify-center mb-8">
              <Logo size="md" variant="light" />
            </div>
            <h2 className="text-center text-2xl font-heading font-bold leading-9 tracking-tight text-pth-navy mb-8">
              Sign in to your account
            </h2>

            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
                {error}
              </div>
            )}

            {resetSent && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3">
                Check your email for a password reset link.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-700">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-xl border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pth-cyan sm:text-sm sm:leading-6 px-4 transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-700">
                    Password
                  </label>
                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="font-semibold text-pth-cyan hover:text-pth-primary-blue transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-xl border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pth-cyan sm:text-sm sm:leading-6 px-4 transition-shadow"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-xl bg-pth-gradient px-4 py-3 text-sm font-bold leading-6 text-pth-navy shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pth-cyan transition-all disabled:opacity-50"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Not a member?{' '}
              <a href="/for-organisations/signup" className="font-semibold leading-6 text-pth-cyan hover:text-pth-primary-blue transition-colors">
                Sign up as an organisation
              </a>
              {' · '}
              <a href="/for-schools/signup" className="font-semibold leading-6 text-pth-cyan hover:text-pth-primary-blue transition-colors">
                as a school
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
