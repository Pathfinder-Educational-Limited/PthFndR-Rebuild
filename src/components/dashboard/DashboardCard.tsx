import { type ReactNode, type ElementType } from 'react';

interface DashboardCardProps {
  title?: string;
  icon?: ElementType;
  accentColor?: string;
  children: ReactNode;
  className?: string;
}

// Shared card primitive for the PthFndR dashboard family (Phase 1B). Consistent
// spacing/radius/border matching OrganisationDashboard.tsx and AdminEvidence.tsx. The
// optional icon + accentColor props add real visual richness (matching the reference SaaS
// image's card density) without introducing anything structural — no sidebar nav, no
// gamification, just card polish.
export function DashboardCard({ title, icon: Icon, accentColor = 'text-pth-navy', children, className = '' }: DashboardCardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {Icon && (
            <div className={`w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center ${accentColor}`}>
              <Icon size={15} />
            </div>
          )}
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
}
