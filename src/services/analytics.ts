import posthog from 'posthog-js';
import { getConsentStatus } from '../components/CookieConsent';

const POSTHOG_KEY = 'phc_wpiTY8uD8XHqnF5RxBrZhs2mvBVsFndkwCsBqbzqrpT8';
const POSTHOG_HOST = 'https://eu.i.posthog.com';

let initialized = false;

// Only initializes if the visitor has genuinely accepted the cookie consent banner —
// never fires automatically. Call this once, on app load.
export function initAnalytics() {
  if (initialized) return;
  if (getConsentStatus() !== 'accepted') return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // Autocapture is deliberately OFF — it can capture form field values and clicks
    // indiscriminately, a real risk given this site collects assessment answers and
    // free-text skill evidence. Only deliberate, named events (via track() below) are
    // ever sent.
    autocapture: false,
    // Page views ARE tracked automatically — this is just navigation, not sensitive.
    capture_pageview: true,
    persistence: 'localStorage+cookie',
  });

  initialized = true;
}

// Deliberate, named event tracking — the only way any data reaches PostHog beyond page
// views. Never pass raw assessment scores, free-text evidence, names, or email addresses
// as properties — only non-sensitive identifiers (e.g. an archetype name, a skill_id, a
// boolean), matching the SEO/Analytics instruction's explicit privacy requirement.
export function track(event: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture(event, properties);
}
