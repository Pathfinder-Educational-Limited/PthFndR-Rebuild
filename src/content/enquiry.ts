const roles = ['young_person', 'educator', 'institution', 'employer', 'applicant'];
const aliases: Record<string, string> = {
  'Micro-Opportunity Programme': 'youth-employability-pilot',
  'Employer Project': 'employer-project',
  'Social Value Commissioning': 'social-value-commissioning',
};
export function enquiryContext(params: URLSearchParams) {
  const requestedRole = params.get('role') || '';
  const rawInterest = params.get('for') || '';
  const interest = aliases[rawInterest] || rawInterest;
  const role = roles.includes(requestedRole) ? requestedRole
    : interest === 'youth-employability-pilot' || interest === 'social-value-commissioning' ? 'institution'
    : interest === 'employer-project' ? 'employer' : '';
  return { role, interest };
}
