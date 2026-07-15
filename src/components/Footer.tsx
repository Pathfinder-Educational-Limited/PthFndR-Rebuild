import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Facebook, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { PHONE_TEL_HREF, PHONE_WHATSAPP_HREF, CONTACT_EMAIL } from '../constants/contact';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#0C2A5C] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 border-b border-white/10 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('about')}
              aria-expanded={openSection === 'about'}
              aria-controls="footer-about-list"
              className="flex w-full items-center justify-between md:cursor-default focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0"
            >
              <h3 className="text-sm font-semibold text-[#40D478] uppercase tracking-wider md:mb-4">About</h3>
              <ChevronDown className={`w-5 h-5 text-white/50 transition-transform md:hidden ${openSection === 'about' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <ul id="footer-about-list" className={`space-y-1 md:space-y-3 mt-4 md:mt-0 ${openSection === 'about' ? 'block' : 'hidden md:block'}`}>
              <li><Link to="/about" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Our Mission</Link></li>
              <li><Link to="/team" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Our Team</Link></li>
              <li><Link to="/stories" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Impact Stories</Link></li>
            </ul>
          </div>

          <div className="col-span-1 border-b border-white/10 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('programmes')}
              aria-expanded={openSection === 'programmes'}
              aria-controls="footer-programmes-list"
              className="flex w-full items-center justify-between md:cursor-default focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0"
            >
              <h3 className="text-sm font-semibold text-[#40D478] uppercase tracking-wider md:mb-4">Programmes</h3>
              <ChevronDown className={`w-5 h-5 text-white/50 transition-transform md:hidden ${openSection === 'programmes' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <ul id="footer-programmes-list" className={`space-y-1 md:space-y-3 mt-4 md:mt-0 ${openSection === 'programmes' ? 'block' : 'hidden md:block'}`}>
              <li><Link to="/programmes/discovery" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Discovery Path</Link></li>
              <li><Link to="/programmes/accelerator" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Career Accelerator</Link></li>
              <li><Link to="/programmes/mentorship" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Mentorship</Link></li>
            </ul>
          </div>

          <div className="col-span-1 border-b border-white/10 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('opportunities')}
              aria-expanded={openSection === 'opportunities'}
              aria-controls="footer-opportunities-list"
              className="flex w-full items-center justify-between md:cursor-default focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0"
            >
              <h3 className="text-sm font-semibold text-[#40D478] uppercase tracking-wider md:mb-4">Opportunities</h3>
              <ChevronDown className={`w-5 h-5 text-white/50 transition-transform md:hidden ${openSection === 'opportunities' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <ul id="footer-opportunities-list" className={`space-y-1 md:space-y-3 mt-4 md:mt-0 ${openSection === 'opportunities' ? 'block' : 'hidden md:block'}`}>
              <li><Link to="/opportunities" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Browse Opportunities</Link></li>
              <li><Link to="/for-organisations" className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">Create Opportunities</Link></li>
            </ul>
          </div>

          <div className="col-span-1 pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('contact')}
              aria-expanded={openSection === 'contact'}
              aria-controls="footer-contact-info"
              className="flex w-full items-center justify-between md:cursor-default focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0"
            >
              <h3 className="text-sm font-semibold text-[#40D478] uppercase tracking-wider md:mb-4">Contact</h3>
              <ChevronDown className={`w-5 h-5 text-white/50 transition-transform md:hidden ${openSection === 'contact' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <div id="footer-contact-info" className={`mt-4 md:mt-0 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
              <ul className="space-y-1 md:space-y-3 mb-6">
                <li><a href={`mailto:${CONTACT_EMAIL}`} className="block py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">{CONTACT_EMAIL}</a></li>
                <li>
                  <a href={PHONE_TEL_HREF} aria-label="Call PthFndR" className="inline-flex items-center gap-2 py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">
                    <Phone size={16} aria-hidden="true" /> Call us
                  </a>
                </li>
                <li>
                  <a href={PHONE_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="Chat with PthFndR on WhatsApp" className="inline-flex items-center gap-2 py-3 md:py-0 text-sm text-slate-300 hover:text-[#40D478] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-2 -mx-2 md:px-0 md:mx-0">
                    <MessageCircle size={16} aria-hidden="true" /> WhatsApp us
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 pb-4 md:pb-0">
                <a href="https://www.linkedin.com/company/pthfndrconnect" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="p-3 -ml-3 md:p-0 md:ml-0 text-slate-400 hover:text-[#40D478] transition-all duration-300 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded">
                  <Linkedin size={24} className="md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/pthfndrconnect" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="p-3 md:p-0 text-slate-400 hover:text-[#40D478] transition-all duration-300 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded">
                  <Instagram size={24} className="md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/pthfndrconnect" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="p-3 md:p-0 text-slate-400 hover:text-[#40D478] transition-all duration-300 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded">
                  <Facebook size={24} className="md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a href="https://x.com/PthFndRconnect" target="_blank" rel="noopener noreferrer" aria-label="Visit our X (Twitter) page" className="p-3 md:p-0 text-slate-400 hover:text-[#40D478] transition-all duration-300 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded">
                  <Twitter size={24} className="md:w-5 md:h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Pathfinder Educational Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-1 -mx-1">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 focus:ring-offset-[#0C2A5C] rounded px-1 -mx-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
