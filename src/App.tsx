/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import CookieConsent from './components/CookieConsent';
import { initAnalytics } from './services/analytics';
import Home from './pages/Home';
import AdminGuard from './components/AdminGuard';

const About = lazy(() => import('./pages/About'));
const Methodology = lazy(() => import('./pages/Methodology'));
const Partners = lazy(() => import('./pages/Partners'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const YoungPersonDashboard = lazy(() => import('./pages/YoungPersonDashboard'));
const Assessment = lazy(() => import('./pages/Assessment'));
const Character = lazy(() => import('./pages/Character'));
const Competence = lazy(() => import('./pages/Competence'));
const Identity = lazy(() => import('./pages/Identity'));
const Impact = lazy(() => import('./pages/Impact'));
const SocialHackathon = lazy(() => import('./pages/SocialHackathon'));
const SocialValue = lazy(() => import('./pages/SocialValue'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const ForOrganisations = lazy(() => import('./pages/ForOrganisations'));
const ForYoungPeople = lazy(() => import('./pages/ForYoungPeople'));
const OrganisationDashboard = lazy(() => import('./pages/OrganisationDashboard'));
const Opportunities = lazy(() => import('./pages/Opportunities'));
const OpportunityDetail = lazy(() => import('./pages/OpportunityDetail'));
const ParticipantFeedback = lazy(() => import('./pages/ParticipantFeedback'));
const ForSchools = lazy(() => import('./pages/forSchools'));
const Stories = lazy(() => import('./pages/Stories'));
const PthFndRAccelerator = lazy(() => import('./pages/PthFndRAccelerator'));
const DiscoverBootcamp = lazy(() => import('./pages/DiscoverBootcamp'));
const UpskillAccelerators = lazy(() => import('./pages/UpskillAccelerators'));
const Programmes = lazy(() => import('./pages/Programmes'));
const Community = lazy(() => import('./pages/Community'));
const Team = lazy(() => import('./pages/Team'));
const ForSchoolsPartnerships = lazy(() => import('./pages/ForSchoolsPartnerships'));
const ForSchoolsProfessionalDevelopment = lazy(() => import('./pages/ForSchoolsProfessionalDevelopment'));
const CreateOpportunities = lazy(() => import('./pages/CreateOpportunities'));
const OrganisationPartnership = lazy(() => import('./pages/OrganisationPartnership'));
const OrganisationSignup = lazy(() => import('./pages/OrganisationSignup'));
const SchoolSignup = lazy(() => import('./pages/SchoolSignup'));
const SchoolDashboard = lazy(() => import('./pages/SchoolDashboard'));
const YoungPersonSignup = lazy(() => import('./pages/YoungPersonSignup'));
const PostOpportunity = lazy(() => import('./pages/PostOpportunity'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminApplications = lazy(() => import('./pages/admin/AdminApplications'));
const AdminOpportunities = lazy(() => import('./pages/admin/AdminOpportunities'));
const AdminEvidence = lazy(() => import('./pages/admin/AdminEvidence'));
const Passport = lazy(() => import('./pages/Passport'));

function RouteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pth-cream">
      <p className="text-slate-400 text-sm">Loading...</p>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <Router>
      <CookieConsent />
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="methodology" element={<Methodology />} />
            <Route path="partners" element={<Partners />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Login />} />
            <Route path="identity" element={<Identity />} />
            <Route path="character" element={<Character />} />
            <Route path="competence" element={<Competence />} />
            <Route path="impact" element={<Impact />} />
            <Route path="social-hackathons" element={<SocialHackathon />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="for-young-people" element={<ForYoungPeople />} />
            <Route path="for-organisations" element={<ForOrganisations />} />
            <Route path="for-organisations/create-opportunities" element={<CreateOpportunities />} />
            <Route path="for-organisations/partnerships" element={<OrganisationPartnership />} />
            <Route path="for-organisations/signup" element={<OrganisationSignup />} />
            <Route path="for-organisations/post-opportunity" element={<PostOpportunity />} />
            <Route path="for-organisations/social-value" element={<SocialValue />} />
            <Route path="for-schools" element={<ForSchools />} />
            <Route path="for-schools/partnerships" element={<ForSchoolsPartnerships />} />
            <Route path="for-schools/professional-development" element={<ForSchoolsProfessionalDevelopment />} />
            <Route path="for-schools/signup" element={<SchoolSignup />} />
            <Route path="school/dashboard" element={<SchoolDashboard />} />
            <Route path="stories" element={<Stories />} />
            <Route path="community" element={<Community />} />
            <Route path="team" element={<Team />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="programmes/pthfndr-accelerator" element={<PthFndRAccelerator />} />
            <Route path="programmes/discover-bootcamp" element={<DiscoverBootcamp />} />
            <Route path="programmes/upskill-accelerators" element={<UpskillAccelerators />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="opportunities/:id" element={<OpportunityDetail />} />
            <Route path="opportunities/:id/feedback" element={<ParticipantFeedback />} />
            <Route path="organisation/dashboard" element={<OrganisationDashboard />} />
            <Route path="passport" element={<Passport />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="signup" element={<YoungPersonSignup />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/dashboard" element={<YoungPersonDashboard />} />
          <Route path="/methodology/diagnostic" element={<Navigate to="/assessment" replace />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/diagnostic" element={<Navigate to="/assessment" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminGuard />}>
            <Route index element={<AdminDashboard />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="opportunities" element={<AdminOpportunities />} />
            <Route path="evidence" element={<AdminEvidence />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
