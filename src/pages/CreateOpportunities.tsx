import { OfferingPage } from '../components/OfferingPage';

export default function CreateOpportunities() {
  return <OfferingPage
    seoTitle={"Host an Employer Project | PthFndR"}
    seoDescription={"Give young people a practical challenge and gain fresh perspectives, useful outputs and a chance to see emerging talent in action."}
    canonical={"https://pthfndr.org/for-organisations/create-opportunities"}
    eyebrow={"For employers"}
    headline={"Turn a useful brief into"}
    accent={"real experience."}
    subhead={"Give young people a practical challenge and gain fresh perspectives, useful outputs and a chance to see emerging talent in action."}
    atAGlance={[
      "3 hours to 2 weeks",
      "A defined output",
      "Agreed support and feedback"
    ]}
    sections={[
      {
        "heading": "Start with a small, useful project",
        "body": [
          "A micro-opportunity is a short, clearly scoped experience: from a three-hour session to a project lasting up to two weeks. We agree a realistic task, learning goals and an output with you."
        ],
        "bullets": [
          "Test a website and present usability feedback.",
          "Research a question and summarise the findings.",
          "Develop content ideas or support a defined event task.",
          "Explore a challenge together through a facilitated project."
        ]
      },
      {
        "heading": "Agree the support you need",
        "body": [
          "Share your brief with our team. We discuss participant suitability, preparation, supervision, timing, accessibility, compensation and the feedback you can provide.",
          "You can submit an opportunity through an organisation account. Where you need us to shape and manage delivery, we agree the scope and fee before work starts. Participant payments and expenses are agreed separately."
        ]
      },
      {
        "heading": "Build a relationship you can repeat",
        "body": [
          "Begin with one brief, review the outputs and feedback, and refine the project for a future cohort. You get a practical way to work with emerging talent; participants get experience they can explain and build on.",
          "Projects are arranged around participant suitability and availability. They do not require a commitment to recruit."
        ]
      }
    ]}
    cta={{
      "headline": "Discuss your first project",
      "primaryLabel": "Share a project brief",
      "primaryTo": "/contact?for=Employer+Project",
      "secondaryLabel": "Submit an opportunity",
      "secondaryTo": "/for-organisations/signup"
    }}
  />;
}
