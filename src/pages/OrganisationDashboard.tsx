import SEO from '../components/SEO';
import { 
  Briefcase, Users, MessageSquare, Settings, ChevronRight, 
  Plus, Calendar, MapPin, Search, Filter, Download, Star, CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrganisationDashboard() {
  const [activeTab, setActiveTab] = useState('opportunities');

  return (
    <>
      <SEO 
        title="Organisation Dashboard | PthFndR"
        description="Manage your opportunities, applications, and feedback."
      />

      <div className="bg-pth-cream min-h-screen pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-pth-navy">Organisation Dashboard</h1>
              <p className="text-slate-600 mt-1">Welcome back, Acme Corp Team</p>
            </div>
            <Link to="/for-organisations/create-opportunities" className="bg-pth-green text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#36b666] transition-colors flex items-center gap-2">
              <Plus size={20} />
              Post Opportunity
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sticky top-24">
                <nav className="space-y-1">
                  <button 
                    onClick={() => setActiveTab('opportunities')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'opportunities' 
                        ? 'bg-slate-50 text-pth-navy font-bold' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <Briefcase size={20} className={activeTab === 'opportunities' ? 'text-pth-green' : 'text-slate-400'} />
                    My Opportunities
                  </button>
                  <button 
                    onClick={() => setActiveTab('applications')}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'applications' 
                        ? 'bg-slate-50 text-pth-navy font-bold' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Users size={20} className={activeTab === 'applications' ? 'text-pth-green' : 'text-slate-400'} />
                      Applications
                    </div>
                    <span className="bg-pth-green text-white text-xs font-bold px-2 py-0.5 rounded-full">12</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('feedback')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'feedback' 
                        ? 'bg-slate-50 text-pth-navy font-bold' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <MessageSquare size={20} className={activeTab === 'feedback' ? 'text-pth-green' : 'text-slate-400'} />
                    Feedback & Impact
                  </button>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'settings' 
                        ? 'bg-slate-50 text-pth-navy font-bold' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-pth-navy'
                    }`}
                  >
                    <Settings size={20} className={activeTab === 'settings' ? 'text-pth-green' : 'text-slate-400'} />
                    Settings
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 space-y-6">
              
              {/* SECTION 1: My Opportunities */}
              {activeTab === 'opportunities' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-xl font-bold text-pth-navy mb-6">Active Opportunities</h2>
                    
                    <div className="space-y-4">
                      {/* Opportunity Card 1 */}
                      <div className="border border-slate-200 rounded-xl p-5 hover:border-pth-teal transition-colors">
                        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-pth-navy text-lg">Product Design Beta Testing</h3>
                              <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Open</span>
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                              <span className="flex items-center gap-1.5"><Calendar size={14} /> Posted: Oct 12, 2026</span>
                              <span className="flex items-center gap-1.5"><Calendar size={14} /> Deadline: Nov 1, 2026</span>
                              <span className="flex items-center gap-1.5"><Users size={14} /> 12 Applications</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={() => setActiveTab('applications')} className="text-sm font-bold text-pth-navy hover:text-pth-green bg-slate-50 px-4 py-2 rounded-lg transition-colors">
                              View Applications
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm pt-4 border-t border-slate-100">
                          <Link to="/opportunities/1" className="text-slate-500 hover:text-pth-navy transition-colors">View Public Page</Link>
                          <span className="text-slate-300">•</span>
                          <button className="text-slate-500 hover:text-pth-navy transition-colors">Edit</button>
                          <span className="text-slate-300">•</span>
                          <button className="text-red-500 hover:text-red-600 transition-colors">Close</button>
                        </div>
                      </div>

                      {/* Opportunity Card 2 */}
                      <div className="border border-slate-200 rounded-xl p-5 hover:border-pth-teal transition-colors">
                        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-pth-navy text-lg">Gen-Z Marketing Focus Group</h3>
                              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Closed</span>
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                              <span className="flex items-center gap-1.5"><Calendar size={14} /> Posted: Sep 1, 2026</span>
                              <span className="flex items-center gap-1.5"><Calendar size={14} /> Deadline: Sep 15, 2026</span>
                              <span className="flex items-center gap-1.5"><Users size={14} /> 45 Applications (Completed)</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={() => setActiveTab('feedback')} className="text-sm font-bold text-pth-navy hover:text-pth-green bg-slate-50 px-4 py-2 rounded-lg transition-colors">
                              View Feedback
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm pt-4 border-t border-slate-100">
                          <Link to="/opportunities/2" className="text-slate-500 hover:text-pth-navy transition-colors">View Public Page</Link>
                          <span className="text-slate-300">•</span>
                          <button className="text-slate-500 hover:text-pth-navy transition-colors">Duplicate</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 2: Applications */}
              {activeTab === 'applications' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                      <h2 className="text-xl font-bold text-pth-navy">Applications</h2>
                      <select className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pth-green">
                        <option>Product Design Beta Testing</option>
                        <option>Gen-Z Marketing Focus Group</option>
                      </select>
                    </div>

                    {/* Tabs for New / Selected */}
                    <div className="flex gap-6 border-b border-slate-200 mb-6">
                      <button className="pb-3 text-sm font-bold text-pth-navy border-b-2 border-pth-green">
                        New / Reviewing (12)
                      </button>
                      <button className="pb-3 text-sm font-medium text-slate-500 hover:text-pth-navy transition-colors">
                        Selected (0)
                      </button>
                      <button className="pb-3 text-sm font-medium text-slate-500 hover:text-pth-navy transition-colors">
                        Declined (3)
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Applicant Row 1 */}
                      <div className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 rounded-full bg-pth-teal/20 text-pth-teal flex items-center justify-center font-bold text-lg">
                            JD
                          </div>
                          <div>
                            <h4 className="font-bold text-pth-navy">Jamal Davis</h4>
                            <p className="text-sm text-slate-500">19 • London • Applied 2 days ago</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                          <button className="flex-1 sm:flex-none text-sm font-medium bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                            View Profile
                          </button>
                          <button className="flex-1 sm:flex-none text-sm font-bold bg-pth-green text-white hover:bg-[#36b666] px-4 py-2 rounded-lg transition-colors">
                            Select
                          </button>
                          <button className="flex-1 sm:flex-none text-sm font-medium border border-slate-200 hover:border-red-200 hover:text-red-600 text-slate-500 px-4 py-2 rounded-lg transition-colors">
                            Decline
                          </button>
                        </div>
                      </div>

                      {/* Applicant Row 2 */}
                      <div className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 rounded-full bg-pth-green/20 text-pth-green flex items-center justify-center font-bold text-lg">
                            SK
                          </div>
                          <div>
                            <h4 className="font-bold text-pth-navy">Sarah Khan</h4>
                            <p className="text-sm text-slate-500">21 • Manchester • Applied 3 days ago</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                          <button className="flex-1 sm:flex-none text-sm font-medium bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                            View Profile
                          </button>
                          <button className="flex-1 sm:flex-none text-sm font-bold bg-pth-green text-white hover:bg-[#36b666] px-4 py-2 rounded-lg transition-colors">
                            Select
                          </button>
                          <button className="flex-1 sm:flex-none text-sm font-medium border border-slate-200 hover:border-red-200 hover:text-red-600 text-slate-500 px-4 py-2 rounded-lg transition-colors">
                            Decline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 3: Feedback */}
              {activeTab === 'feedback' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                      <h2 className="text-xl font-bold text-pth-navy">Participant Feedback</h2>
                      <button className="bg-pth-navy text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#0C2A5C] transition-colors flex items-center gap-2">
                        <Download size={16} />
                        Export Feedback
                      </button>
                    </div>

                    <div className="mb-8 p-6 bg-pth-cream rounded-xl border border-slate-200">
                      <h3 className="font-bold text-pth-navy mb-2">Gen-Z Marketing Focus Group</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center text-[#F59E0B]">
                          <Star size={20} fill="currentColor" />
                          <Star size={20} fill="currentColor" />
                          <Star size={20} fill="currentColor" />
                          <Star size={20} fill="currentColor" />
                          <Star size={20} fill="currentColor" className="opacity-50" />
                        </div>
                        <span className="font-bold text-pth-navy text-lg">4.8 / 5.0</span>
                        <span className="text-slate-500 text-sm">(12 reviews)</span>
                      </div>
                      <div className="flex gap-4">
                        <button className="text-sm font-bold text-pth-green hover:underline">Collect more feedback</button>
                        <span className="text-slate-300">|</span>
                        <button className="text-sm font-bold text-pth-green hover:underline">Rate this experience</button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Feedback Item */}
                      <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-pth-navy text-sm">Mia T.</h4>
                            <div className="flex items-center gap-1 mt-1 text-[#F59E0B]">
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="currentColor" />
                            </div>
                          </div>
                          <span className="text-xs text-slate-400">Oct 1, 2026</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">"This was an incredible opportunity to see how a real marketing team works. The facilitators were engaging and actually listened to our ideas. I learned so much about product positioning."</p>
                        
                        <div className="pt-3 border-t border-slate-200">
                          <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Skills Confirmed</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-xs font-medium text-pth-navy">
                              <CheckCircle2 size={12} className="text-pth-green" /> Product Design
                            </span>
                            <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-xs font-medium text-pth-navy">
                              <CheckCircle2 size={12} className="text-pth-green" /> Communication
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Feedback Item */}
                      <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-pth-navy text-sm">David O.</h4>
                            <div className="flex items-center gap-1 mt-1 text-[#F59E0B]">
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="currentColor" />
                              <Star size={14} fill="none" />
                            </div>
                          </div>
                          <span className="text-xs text-slate-400">Sep 28, 2026</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">"Great experience overall. The brief was clear and we got to work on a real campaign. Would have loved a bit more time for the final presentation, but still very valuable."</p>
                        
                        <div className="pt-3 border-t border-slate-200">
                          <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Skills Confirmed</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-xs font-medium text-pth-navy">
                              <CheckCircle2 size={12} className="text-pth-green" /> Communication
                            </span>
                            <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-xs font-medium text-pth-navy">
                              <CheckCircle2 size={12} className="text-pth-green" /> Teamwork
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 4: Settings */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-xl font-bold text-pth-navy mb-6">Organisation Profile</h2>
                    
                    <form className="space-y-6 max-w-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-pth-navy mb-2">Organisation Name</label>
                          <input type="text" defaultValue="Acme Corp" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-pth-green" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-pth-navy mb-2">Website</label>
                          <input type="url" defaultValue="https://acme.example.com" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-pth-green" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-pth-navy mb-2">Organisation Description</label>
                        <textarea rows={4} defaultValue="We are a forward-thinking technology company focused on sustainable solutions." className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-pth-green resize-none"></textarea>
                      </div>

                      <div className="pt-6 border-t border-slate-100">
                        <h3 className="font-bold text-pth-navy mb-4">Team Members</h3>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-pth-navy text-white flex items-center justify-center text-xs font-bold">AJ</div>
                              <div>
                                <p className="text-sm font-bold text-pth-navy">Alex Johnson <span className="text-xs font-normal text-slate-500">(You)</span></p>
                                <p className="text-xs text-slate-500">alex@acme.example.com</p>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-pth-green bg-green-50 px-2 py-1 rounded">Admin</span>
                          </div>
                        </div>
                        <button type="button" className="text-sm font-bold text-pth-navy hover:text-pth-green flex items-center gap-1 transition-colors">
                          <Plus size={16} /> Add Team Member
                        </button>
                      </div>

                      <div className="pt-6">
                        <button type="button" className="bg-pth-navy text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#0C2A5C] transition-colors">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
