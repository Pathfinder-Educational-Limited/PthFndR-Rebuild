/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Assessment from './pages/Assessment';
import Character from './pages/Character';
import Competence from './pages/Competence';
import Identity from './pages/Identity';
import Impact from './pages/Impact';
import SocialHackathon from './pages/SocialHackathon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ForOrganisations from './pages/ForOrganisations';
import ForYoungPeople from './pages/ForYoungPeople';
import OrganisationDashboard from './pages/OrganisationDashboard';
import Opportunities from './pages/Opportunities';
import OpportunityDetail from './pages/OpportunityDetail';
import ParticipantFeedback from './pages/ParticipantFeedback';
import ForSchools from './pages/forSchools';
import Stories from './pages/Stories';
import PthFndRAccelerator from './pages/PthFndRAccelerator';
import DiscoverBootcamp from './pages/DiscoverBootcamp';
import UpskillAccelerators from './pages/UpskillAccelerators';
import Programmes from './pages/Programmes';
import Community from './pages/Community';
import Team from './pages/Team';
import ForSchoolsPartnerships from './pages/ForSchoolsPartnerships';
import ForSchoolsProfessionalDevelopment from './pages/ForSchoolsProfessionalDevelopment';
import CreateOpportunities from './pages/CreateOpportunities';
import OrganisationPartnership from './pages/OrganisationPartnership';
import OrganisationSignup from './pages/OrganisationSignup';
import SchoolSignup from './pages/SchoolSignup';
import NotFound from './pages/NotFound';
import AdminGuard from './components/AdminGuard';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminApplications from './pages/admin/AdminApplications';

export default function App() {
  return (
    <Router>
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
            <Route path="for-schools" element={<ForSchools />} />
            <Route path="for-schools/partnerships" element={<ForSchoolsPartnerships />} />
            <Route path="for-schools/professional-development" element={<ForSchoolsProfessionalDevelopment />} />
            <Route path="for-schools/signup" element={<SchoolSignup />} />
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
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/methodology/diagnostic" element={<Navigate to="/assessment" replace />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/diagnostic" element={<Navigate to="/assessment" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminGuard />}>
            <Route index element={<AdminDashboard />} />
            <Route path="applications" element={<AdminApplications />} />
          </Route>
        </Routes>
    </Router>
  );
}
