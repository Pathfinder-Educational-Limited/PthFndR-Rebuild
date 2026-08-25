import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Logo } from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const isProgrammesActive = location.pathname.startsWith('/programmes') || location.pathname.startsWith('/for-schools') || location.pathname.startsWith('/for-organisations');

  const toggleMobileDropdown = (name: string) => {
    if (openMobileDropdown === name) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(name);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProgrammesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsProgrammesOpen(false);
    }
  };

  const navLinkClass = (active: boolean) =>
    `text-sm transition-colors duration-200 py-2 relative group rounded focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 ${
      active ? 'text-pth-navy font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2B9E82] after:w-full after:scale-x-100' : 'font-medium text-pth-navy hover:text-[#5FD4D4] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2B9E82] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left'
    }`;

  const dropdownButtonClass = (active: boolean) =>
    `flex items-center gap-1 text-sm transition-colors duration-200 py-2 relative group cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2 ${
      active ? 'text-pth-navy font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2B9E82] after:w-full after:scale-x-100' : 'font-medium text-pth-navy hover:text-[#5FD4D4] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2B9E82] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          
          {/* Logo & Tagline */}
          <Logo size="md" variant="light" href="/" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Desktop main navigation">
            
            {/* Programmes Dropdown */}
            <div className="relative" ref={dropdownRef} onKeyDown={handleDropdownKeyDown}>
              <button 
                className={dropdownButtonClass(isProgrammesActive || isProgrammesOpen)}
                onClick={() => setIsProgrammesOpen(!isProgrammesOpen)}
                aria-expanded={isProgrammesOpen}
                aria-haspopup="true"
                aria-controls="programmes-menu"
              >
                Programmes <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isProgrammesOpen ? 'text-[#5DC26A] rotate-180' : 'group-hover:text-[#5DC26A] group-hover:rotate-3'}`} aria-hidden="true" />
              </button>
              
              <div 
                id="programmes-menu"
                role="menu"
                className={`absolute left-0 top-full mt-2 w-[480px] rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 transition-all duration-300 origin-top-left ${
                  isProgrammesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                <div className="p-6 grid grid-cols-2 gap-8">
                  <div className="col-span-2 space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider" id="menu-young-people">For Young People</h3>
                    <div className="space-y-1" role="group" aria-labelledby="menu-young-people">
                      <Link to="/programmes/discover-bootcamp" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">Discover Bootcamp</Link>
                      <Link to="/programmes/upskill-accelerators" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">Upskill Accelerators</Link>
                      <Link to="/programmes/pthfndr-accelerator" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">PthFndR Accelerator</Link>
                      <Link to="/opportunities" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">Micro-Opportunities</Link>
                      <Link to="/assessment" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">Free Assessment (Trapezium Profile)</Link>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider" id="menu-schools">For Schools</h3>
                    <div className="space-y-1" role="group" aria-labelledby="menu-schools">
                      <Link to="/for-schools/partnerships" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">School Partnership Programme</Link>
                      <Link to="/for-schools/professional-development" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">Professional Development</Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider" id="menu-organisations">For Organisations</h3>
                    <div className="space-y-1" role="group" aria-labelledby="menu-organisations">
                      <Link to="/for-organisations/create-opportunities" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">Create Opportunities</Link>
                      <Link to="/for-organisations/partnerships" role="menuitem" onClick={() => setIsProgrammesOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-pth-navy rounded-lg hover:bg-[#E8F8F0] hover:text-[#0C2A5C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset">Organisation Partnership</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/opportunities" className={navLinkClass(isActive('/opportunities'))}>Opportunities</Link>
            <Link to="/community" className={navLinkClass(isActive('/community'))}>Community</Link>
            <Link to="/stories" className={navLinkClass(isActive('/stories'))}>Stories</Link>
            <Link to="/contact" className={navLinkClass(isActive('/contact'))}>Contact</Link>
          </nav>

          {/* Right Side: Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/signin"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-pth-green px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#4ea858] hover:shadow-lg hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/signin"
              className="inline-flex items-center justify-center rounded-md p-2 text-pth-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2"
              aria-label="Sign In"
            >
              <User className="h-6 w-6" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-pth-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav id="mobile-menu" aria-label="Mobile main navigation" className="md:hidden border-t border-slate-200 bg-white">
          <div className="space-y-1 px-4 pb-6 pt-4">
            {/* Programmes Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('programmes')}
                aria-expanded={openMobileDropdown === 'programmes'}
                aria-controls="mobile-programmes-menu"
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-pth-navy hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset"
              >
                Programmes
                <ChevronDown className={`w-5 h-5 transition-transform ${openMobileDropdown === 'programmes' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {openMobileDropdown === 'programmes' && (
                <div id="mobile-programmes-menu" role="menu" className="pl-6 pr-3 py-4 space-y-6 bg-slate-50 rounded-lg mt-1">
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" id="mobile-menu-young">For Young People</h3>
                    <div className="space-y-1" role="group" aria-labelledby="mobile-menu-young">
                      <Link to="/programmes/discover-bootcamp" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Discover Bootcamp</Link>
                      <Link to="/programmes/upskill-accelerators" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Upskill Accelerators</Link>
                      <Link to="/programmes/pthfndr-accelerator" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>PthFndR Accelerator</Link>
                      <Link to="/opportunities" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Micro-Opportunities</Link>
                      <Link to="/assessment" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Free Assessment (Trapezium Profile)</Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" id="mobile-menu-schools">For Schools</h3>
                    <div className="space-y-1" role="group" aria-labelledby="mobile-menu-schools">
                      <Link to="/for-schools/partnerships" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>School Partnership Programme</Link>
                      <Link to="/for-schools/professional-development" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Professional Development</Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" id="mobile-menu-orgs">For Organisations</h3>
                    <div className="space-y-1" role="group" aria-labelledby="mobile-menu-orgs">
                      <Link to="/for-organisations/create-opportunities" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Create Opportunities</Link>
                      <Link to="/for-organisations/partnerships" role="menuitem" className="block rounded-md px-3 py-2 text-sm font-medium text-pth-navy hover:text-pth-green hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Organisation Partnership</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/opportunities" className="block rounded-md px-3 py-3 text-base font-medium text-pth-navy hover:bg-slate-50 hover:text-pth-green focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Opportunities</Link>
            <Link to="/community" className="block rounded-md px-3 py-3 text-base font-medium text-pth-navy hover:bg-slate-50 hover:text-pth-green focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
            <Link to="/stories" className="block rounded-md px-3 py-3 text-base font-medium text-pth-navy hover:bg-slate-50 hover:text-pth-green focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Stories</Link>
            <Link to="/contact" className="block rounded-md px-3 py-3 text-base font-medium text-pth-navy hover:bg-slate-50 hover:text-pth-green focus:outline-none focus:ring-2 focus:ring-pth-green focus:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
