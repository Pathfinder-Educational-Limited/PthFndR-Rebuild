import { OfferingPage } from '../components/OfferingPage';

export function CohortProgramme({ canonical = "https://pthfndr.org/for-organisations/partnerships" }: { canonical?: string }) {
  return <OfferingPage
    seoTitle={"Managed Employability Programmes | PthFndR"}
    seoDescription={"A managed employability programme connecting guided development with short employer projects, practical work evidence and a clear next step."}
    canonical={canonical}
    eyebrow={"For colleges, schools, youth providers & commissioners"}
    headline={"Real experience for"}
    accent={"your next cohort."}
    subhead={"A managed employability programme connecting guided development with short employer projects, practical work evidence and a clear next step."}
    atAGlance={[
      "Ages 16–24",
      "Agreed cohort and delivery period",
      "Quoted to your scope"
    ]}
    sections={[
      {
        "eyebrow": "The programme",
        "heading": "From starting point to work evidence",
        "body": [
          "Commission a managed micro-opportunity programme for a cohort aged 16–24. We agree the group size, delivery period, project scope and reporting requirements before you book."
        ],
        "bullets": [
          "Discover: starting-point assessment, strengths and interests, and individual learning goals.",
          "Develop: facilitated preparation, practical resources and supported skills practice.",
          "Deploy: short employer projects selected for the cohort’s interests and readiness, subject to host availability.",
          "Reflect: participant work examples, host feedback and next-step planning."
        ]
      },
      {
        "eyebrow": "What you buy",
        "heading": "A defined delivery package",
        "bullets": [
          "Programme planning and coordination with a named PthFndR contact.",
          "Agreed facilitated sessions and learner materials.",
          "Employer brief development and project coordination.",
          "An outcomes report covering agreed measures such as participation, completion, work produced and learner reflection."
        ],
        "body": [
          "Delivery may combine in-person sessions, online preparation and practical project work. Your proposal sets out responsibilities, supervision, accessibility arrangements and any participant payments or expenses."
        ]
      },
      {
        "eyebrow": "Investment",
        "heading": "A scoped programme fee",
        "body": [
          "We quote for the cohort size, facilitation, employer coordination and reporting you need. The proposal makes clear what is included, any additional costs and how learner places are funded.",
          "Start with a defined pilot, review the evidence together, then decide whether to repeat or extend. Employment and placement availability are not guaranteed."
        ]
      }
    ]}
    cta={{
      "headline": "Plan a programme for your cohort",
      "primaryLabel": "Request a programme proposal",
      "primaryTo": "/contact?for=Micro-Opportunity+Programme",
      "secondaryLabel": "Explore employer projects",
      "secondaryTo": "/for-organisations/create-opportunities"
    }}
  />;
}

export default function OrganisationPartnership() {
  return <CohortProgramme />;
}
