import { Navigate } from 'react-router-dom';

// Stories was merged into Community.tsx (Aug 31 2026) — the standalone Stories page had
// too little content on its own (no real testimonials yet) and its "Sign up" section
// duplicated a broken, non-functional signup form. This route stays alive as a redirect
// so any existing links or search-engine indexing don't just break.
export default function Stories() {
  return <Navigate to="/community" replace />;
}
