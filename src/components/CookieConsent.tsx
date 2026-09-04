import { useEffect, useState } from 'react';

const CONSENT_KEY = 'pthfndr_cookie_consent';

export type ConsentStatus = 'accepted' | 'rejected' | null;

export function getConsentStatus(): ConsentStatus {
  try {
    return (localStorage.getItem(CONSENT_KEY) as ConsentStatus) ?? null;
  } catch {
    return null;
  }
}

function setConsentStatus(status: 'accepted' | 'rejected') {
  try {
    localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // If localStorage is unavailable, consent simply can't be remembered — the banner
    // will show again next visit, which is the safe default (no tracking without consent).
  }
}

// Real, required gate before Microsoft Clarity (or any non-essential cookie-based tool)
// can load — Clarity enforces mandatory consent for UK/EEA/Switzerland visitors as of
// 31 October 2025. No tracking script fires until this component records real consent.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsentStatus() === null) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (status: 'accepted' | 'rejected') => {
    setConsentStatus(status);
    setVisible(false);
    // Reload so any consent-gated script (e.g. Clarity) picks up the fresh choice
    // immediately, rather than waiting for the next page navigation.
    window.location.reload();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg"
    >
      <div className="mx-auto max-w-4xl px-4 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-sm text-slate-600 flex-1">
          We use analytics cookies to understand how people use PthFndR, so we can make the site work better. No personal data is used for advertising.{' '}
          <a href="/privacy" className="underline hover:text-pth-navy">Read our Privacy Policy</a>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handleChoice('rejected')}
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => handleChoice('accepted')}
            className="px-4 py-2 rounded-lg bg-pth-green text-white text-sm font-bold hover:bg-[#4ea858] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
