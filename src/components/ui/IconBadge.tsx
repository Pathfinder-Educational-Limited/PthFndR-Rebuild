import type { LucideIcon } from 'lucide-react';

type IconBadgeColor = 'navy' | 'teal' | 'green' | 'amber';
type IconBadgeSize = 'sm' | 'md' | 'lg';

const colorClasses: Record<IconBadgeColor, string> = {
  navy: 'bg-pth-navy/10 text-pth-navy',
  teal: 'bg-pth-teal/10 text-pth-teal',
  green: 'bg-pth-green/10 text-pth-green',
  amber: 'bg-pth-amber/10 text-pth-amber',
};

const sizeClasses: Record<IconBadgeSize, { box: string; icon: number }> = {
  sm: { box: 'w-10 h-10 rounded-xl', icon: 20 },
  md: { box: 'w-14 h-14 rounded-2xl', icon: 28 },
  lg: { box: 'w-16 h-16 rounded-2xl', icon: 32 },
};

interface IconBadgeProps {
  icon: LucideIcon;
  color?: IconBadgeColor;
  size?: IconBadgeSize;
  className?: string;
}

/**
 * A rounded, softly-tinted background behind a lucide icon — the badge pattern already used
 * inline in a few places across the site (e.g. Assessment.tsx's result icons). Use this
 * instead of repeating the pattern by hand so sizing and color stay consistent everywhere.
 *
 * Amber is a sparing accent color per the brand system — reach for navy, teal, or green as
 * the default; only use amber where the surrounding design already calls for a highlight.
 */
export function IconBadge({ icon: Icon, color = 'teal', size = 'md', className = '' }: IconBadgeProps) {
  const { box, icon } = sizeClasses[size];
  return (
    <div className={`inline-flex items-center justify-center ${box} ${colorClasses[color]} ${className}`}>
      <Icon size={icon} strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}
