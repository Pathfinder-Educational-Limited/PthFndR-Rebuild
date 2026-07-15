// Decorative dual-triangle motif echoing the PthFndR logo icon.
// Uses currentColor — set colour + opacity via the parent's text classes.
export function TriangleMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <polygon points="20,16 20,104 78,60" stroke="currentColor" strokeWidth="2.5" />
      <polygon points="54,16 54,104 112,60" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
