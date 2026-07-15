import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';

export default function Login() {
  return (
    <>
      <SEO 
        title="Sign In | PthFndR" 
        description="Access the PthFndR portal for dignity-infused learning."
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

            <form className="space-y-6" action="#" method="POST">
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
                    <a href="#" className="font-semibold text-pth-cyan hover:text-pth-primary-blue transition-colors">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-xl border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pth-cyan sm:text-sm sm:leading-6 px-4 transition-shadow"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-xl bg-pth-gradient px-4 py-3 text-sm font-bold leading-6 text-pth-navy shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pth-cyan transition-all"
                >
                  Sign in
                </button>
              </div>
            </form>
            
            <p className="mt-8 text-center text-sm text-slate-500">
              Not a member?{' '}
              <a href="/contact" className="font-semibold leading-6 text-pth-cyan hover:text-pth-primary-blue transition-colors">
                Contact us to enroll
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
