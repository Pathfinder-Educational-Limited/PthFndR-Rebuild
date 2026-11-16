import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const groups = [
  { title: 'About PthFndR', links: [
    ['/', 'Home'], ['/about', 'Our mission'], ['/team', 'Our team'],
    ['/methodology', 'Our approach'], ['/partners', 'Our partners'],
    ['/stories', 'Impact stories'], 
  ] },
  { title: 'Programmes and opportunities', links: [
    ['/assessment', 'Free discovery assessment'],
    ['/for-young-people', 'For young people'], ['/programmes', 'All programmes'],
    ['/programmes/pthfndr-accelerator', 'PthFndR Accelerator'],
    ['/programmes/discover-bootcamp', 'Discover Bootcamp'],
    ['/programmes/upskill-accelerators', 'Upskill Accelerators'],
    ['/social-hackathons', 'Social hackathons'], ['/community', 'Community and mentorship'],
    ['/opportunities', 'Browse opportunities'],
  ] },
  { title: 'Schools and organisations', links: [
    ['/for-organisations', 'For organisations'],
    ['/youth-employability-programmes-manchester', 'Youth employability programmes in Greater Manchester'],
    ['/for-organisations/social-value', 'Social value and commissioning'],
    ['/for-organisations/create-opportunities', 'Create opportunities'],
    ['/for-organisations/partnerships', 'Organisation partnerships'],
    ['/for-schools', 'For schools'], ['/for-schools/partnerships', 'School partnerships'],
    ['/for-schools/professional-development', 'School professional development'],
  ] },
  { title: 'Our learning framework', links: [
    ['/identity', 'Identity'], ['/character', 'Character'],
    ['/competence', 'Competence'], ['/impact', 'Impact'],
  ] },
  { title: 'Contact, account and policies', links: [
    ['/contact', 'Contact us'], ['/login', 'Sign in'], ['/signup', 'Young person registration'],
    ['/for-organisations/signup', 'Organisation registration'], ['/for-schools/signup', 'School registration'],
    ['/balance', 'Balance game'],
    ['/privacy', 'Privacy policy'], ['/terms', 'Terms of service'],
    ['/balance/privacy', 'Balance privacy policy'],
  ] },
];

export default function Sitemap() {
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    heading.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <SEO title="Sitemap | PthFndR" description="Find PthFndR programmes, opportunities, information for schools and organisations, and contact details." url="https://pthfndr.org/sitemap" />
      <section aria-labelledby="sitemap-title" className="bg-pth-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 ref={heading} tabIndex={-1} id="sitemap-title" className="text-4xl sm:text-5xl font-bold text-pth-navy focus:outline-none">Sitemap</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-700">Find your way around PthFndR. Choose a page from the sections below.</p>
          <nav aria-label="Sitemap" className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group, index) => (
              <section key={group.title} aria-labelledby={`sitemap-group-${index}`}>
                <h2 id={`sitemap-group-${index}`} className="text-xl font-bold text-pth-navy-deep">{group.title}</h2>
                <ul className="mt-4 space-y-1">
                  {group.links.map(([to, label]) => (
                    <li key={to}>
                      <Link to={to} className="inline-flex min-h-11 items-center rounded px-1 py-2 text-base text-pth-navy underline underline-offset-4 hover:text-pth-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pth-navy">{label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
