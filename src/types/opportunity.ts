export interface Opportunity {
  id: string;
  title: string;
  organisationName: string;
  organisationSlug?: string;
  category: string;
  duration: string;
  location: string;
  reward?: string;
  skillsDeveloped: string[];
  whatYoullDo: string;
  whatYoullLearn: string[];
  whyThisMatters?: string;
  requirements: string[];
  applyBy?: string;
  closed?: boolean;
  eventDate?: string;
}
