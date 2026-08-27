import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | PthFndR"
        description="Privacy Policy for Pathfinder Educational Limited (PthFndR). How we handle your data securely and transparently."
      />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-heading font-extrabold tracking-tight text-pth-navy sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Last updated: March 8, 2026
            </p>
          </motion.div>

          <div className="mt-16 space-y-12 text-base leading-7 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">1. Introduction</h2>
              <p className="mt-4">
                Pathfinder Educational Limited ("PthFndR", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including the Trapezium Model™ diagnostic tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">2. Information We Collect</h2>
              <p className="mt-4">
                We collect information that you provide directly to us, such as when you create an account, complete a diagnostic assessment, or contact us for support. This may include:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number).</li>
                <li>Professional or educational background.</li>
                <li>Responses to diagnostic assessments and surveys.</li>
                <li>Account credentials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">3. How We Use Your Information</h2>
              <p className="mt-4">
                We use the information we collect to:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Generate personalized insights and reports based on your assessments.</li>
                <li>Communicate with you about our services, updates, and partnerships.</li>
                <li>Comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">4. Data Sharing and Disclosure</h2>
              <p className="mt-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Service providers who perform services on our behalf.</li>
                <li>Institutional partners (e.g., Local Authorities, FE Colleges) if you are using our services through their programs, subject to specific data sharing agreements.</li>
                <li>Legal authorities when required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">5. Data Security</h2>
              <p className="mt-4">
                We implement appropriate technical and organizational measures to protect your data. As an organization based in the Digital Security Hub (DiSH), we prioritize security and follow industry best practices to safeguard your information against unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">6. Your Rights</h2>
              <p className="mt-4">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at hello@pthfndr.org.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">7. Contact Us</h2>
              <p className="mt-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2 font-medium text-pth-navy">
                Pathfinder Educational Limited<br />
                Heron House, Digital Security Hub (DiSH)<br />
                47 Lloyd Street, Manchester, M2 5LE<br />
                Email: hello@pthfndr.org
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
