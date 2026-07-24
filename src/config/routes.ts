// Single source of truth for internal route paths.
//
// NOTE: as of this update, these constants are not yet imported anywhere else in the
// codebase — every <Link>/<Route> currently hardcodes its path as a string literal.
// That's how `/for-young-people` ended up defined here and linked from the homepage
// with no matching <Route> in App.tsx (now fixed). Recommend a follow-up pass to
// replace hardcoded path strings across src/components and src/pages with these
// constants, so App.tsx and this file can't drift apart again.
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  METHODOLOGY: '/methodology',
  PARTNERS: '/partners',
  INSIGHTS: '/insights',
  INSIGHT_ARTICLE: (id: string) => `/insights/${id}`,
  IMPACT_REPORT: '/impact-report',
  CONTACT: '/contact',
  LOGIN: '/login',
  SIGN_IN: '/signin',
  IDENTITY: '/identity',
  CHARACTER: '/character',
  COMPETENCE: '/competence',
  IMPACT: '/impact',
  SOCIAL_HACKATHONS: '/social-hackathons',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  TEAM: '/team',
  STORIES: '/stories',
  COMMUNITY: '/community',

  FOR_YOUNG_PEOPLE: '/for-young-people',
  PROGRAMMES_CAREER_ACCELERATORS: '/programmes/career-accelerators',

  FOR_SCHOOLS: '/for-schools',
  FOR_SCHOOLS_PARTNERSHIPS: '/for-schools/partnerships',
  FOR_SCHOOLS_PROFESSIONAL_DEVELOPMENT: '/for-schools/professional-development',

  FOR_ORGANISATIONS: '/for-organisations',
  FOR_ORGANISATIONS_CREATE_OPPORTUNITIES: '/for-organisations/create-opportunities',
  FOR_ORGANISATIONS_PARTNERSHIPS: '/for-organisations/partnerships',
  ORGANISATION_DASHBOARD: '/organisation/dashboard',

  OPPORTUNITIES: '/opportunities',
  OPPORTUNITY_DETAIL: (id: string) => `/opportunities/${id}`,
  OPPORTUNITY_FEEDBACK: (id: string) => `/opportunities/${id}/feedback`,

  ASSESSMENT: '/assessment',
  DASHBOARD: '/dashboard',
};
