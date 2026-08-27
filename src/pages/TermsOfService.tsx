import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | PthFndR"
        description="Terms of Service for Pathfinder Educational Limited (PthFndR). Our terms for using our website and services."
      />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-heading font-extrabold tracking-tight text-pth-navy sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Last updated: March 8, 2026
            </p>
          </motion.div>

          <div className="mt-16 space-y-12 text-base leading-7 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">1. Acceptance of Terms</h2>
              <p className="mt-4">
                By accessing or using the PthFndR website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">2. Description of Service</h2>
              <p className="mt-4">
                PthFndR provides educational tools, diagnostic assessments (including the Trapezium Model™), and consulting services focused on human capital development and economic contribution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">3. User Conduct</h2>
              <p className="mt-4">
                You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use and enjoyment of this site by, any third party. Prohibited behavior includes harassing or causing distress to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">4. Intellectual Property</h2>
              <p className="mt-4">
                All content on this site, including but not limited to text, graphics, logos, icons, images, and the Trapezium Model™, Ginosko-Sterizo™, and EmployaLingua™ frameworks, is the property of Pathfinder Educational Limited or its content suppliers and is protected by UK and international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">5. Limitation of Liability</h2>
              <p className="mt-4">
                PthFndR will not be liable for any damages arising from the use of, or inability to use, our services. This includes direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">6. Governing Law</h2>
              <p className="mt-4">
                These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">7. Changes to Terms</h2>
              <p className="mt-4">
                We reserve the right to modify these Terms of Service at any time. Your continued use of the service following any changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-pth-navy">8. Contact Information</h2>
              <p className="mt-4">
                Questions about the Terms of Service should be sent to us at hello@pthfndr.org.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
