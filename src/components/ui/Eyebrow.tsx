import React from 'react';

// Small uppercase label with an accent rule — the editorial "kicker" above headlines.
type Tone = 'green' | 'cyan' | 'white';

const toneText: Record<Tone, string> = {
  green: 'text-pth-green',
  cyan: 'text-pth-cyan',
  white: 'text-white/70',
};
const toneRule: Record<Tone, string> = {
  green: 'bg-pth-green',
  cyan: 'bg-pth-cyan',
  white: 'bg-white/40',
};

export function Eyebrow({
  children,
  tone = 'green',
  className = '',
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase ${toneText[tone]} ${className}`}>
      <span className={`h-px w-8 ${toneRule[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
}
