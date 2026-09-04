import { type ReactNode } from 'react';

interface DashboardCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

// Shared card primitive for the PthFndR dashboard family (Phase 1B). Deliberately simple —
// consistent spacing/radius/border matching the existing OrganisationDashboard.tsx and
// AdminEvidence.tsx card treatment, so this reads as part of the same system rather than a
// new convention. Future Admin/Passport redesigns can reuse this, per the Gate C instruction
// to establish shared foundations — but this component does not itself implement those.
export function DashboardCard({ title, children, className = '' }: DashboardCardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 ${className}`}>
      {title && (
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{title}</h2>
      )}
      {children}
    </div>
  );
}
