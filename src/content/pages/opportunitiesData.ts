import { Opportunity } from '../../types/opportunity';

// ============================================================================
// TEMPORARY launch-day stopgap (Aug 27 2026). No backend endpoint
// (/api/opportunities/:id) exists yet — see OpportunityDetail.tsx's own
// comment for the full explanation. Every listing below is real and
// verified, not fabricated. Do NOT add a new listing here without the same
// verification discipline — confirm task, duration, location, and reward
// with the founder before adding anything, same as these two were built.
// Replace this whole file with a real Supabase-backed fetch once
// /api/opportunities/:id exists — do not let this become permanent.
// ============================================================================

export const opportunities: Opportunity[] = [
  {
    id: 'employalingua-ux-review-01',
    title: 'EmployaLingua Website Review',
    organisationName: 'PthFndR',
    category: 'UX & Content Review',
    duration: '1 day',
    location: 'Heron House, Manchester (in-person)',
    reward: '£20-30 voucher',
    skillsDeveloped: [
      'UX & usability testing',
      'Structured written feedback',
      'Attention to detail',
      'Content review',
    ],
    whatYoullDo:
      "Spend a day testing EmployaLingua, a real PthFndR-adjacent platform, and produce structured, specific feedback on what works, what doesn't, and what's unclear. Past sessions have covered navigation, content accuracy, repetition, and site structure.",
    whatYoullLearn: [
      'How to run a structured usability review of a real, live website',
      "How to write feedback that's specific and actionable rather than vague",
      'The difference between a bug, a content issue, and a structural decision that needs someone else\u2019s input',
    ],
    whyThisMatters:
      "This isn't a simulated exercise. Real feedback from sessions like this has directly shaped real fixes on a live PthFndR-adjacent platform.",
    requirements: [
      'No prior UX experience required',
      'Aged 16-24',
      'Based in or able to travel to Manchester for the day',
    ],
  },
  {
    id: 'wholeness-index-placement-01',
    title: 'Wholeness Index Placement',
    organisationName: 'PthFndR',
    category: 'Placement',
    duration: '3 days',
    location: 'Heron House, Manchester (in-person)',
    reward: 'Voluntary (unpaid)',
    skillsDeveloped: [
      'Leadership development frameworks',
      'Behavioural psychology in practice',
      'Data analysis and interpretation',
      'Working with a real assessment platform',
    ],
    whatYoullDo:
      "Spend three days with the team behind Wholeness Index, a real leadership development platform, getting hands-on exposure to how it works and how it's used to support people's growth.",
    whatYoullLearn: [
      'How a leadership development framework gets built and applied in practice',
      'How behavioural data gets collected, structured, and interpreted',
      "What it actually looks like to work on a live assessment platform, not a classroom simulation",
    ],
    whyThisMatters:
      'Genuinely useful for anyone curious about behavioural psychology, data science, or how leadership development actually helps people grow, not just the theory of it.',
    requirements: [
      'Aged 16-24',
      'Genuine interest in behavioural psychology, data science, or leadership development',
      'Based in or able to travel to Manchester for the three days',
      'Unpaid — this is a voluntary placement',
    ],
  },
];
