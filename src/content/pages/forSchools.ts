export const forSchoolsContent = {
  // Hero Section
  hero: {
    headline: "Transform Your Students' Futures",
    subheading: "Give young people the skills, confidence, and real-world experience they need to succeed in work and life.",
    bodyCopy: "Your students have potential. PthFndR helps them unlock it, through proven programmes, real work experience, and the confidence to take control of their future. We are a social enterprise, not a charity, and we measure success by real outcomes: did they get hired, did they progress, are they confident about what comes next.",
    ctaButton: "Explore Our School Programmes"
  },

  // Value Proposition Section
  valueProposition: {
    sectionHeadline: "What Schools Get With PthFndR",
    cards: [
      {
        headline: "Your Students Actually Get Hired",
        copy: "95% of young people who complete PthFndR programmes progress to work or further education. We track real outcomes, not just engagement metrics."
      },
      {
        headline: "Proven Model",
        copy: "Developed by career experts and tested with 223 young people to date. Our approach builds genuine employability skills: identity clarity, practical capability, and real-world opportunity."
      },
      {
        headline: "Teacher Support",
        copy: "Your team gets comprehensive training, resources, and ongoing support. We provide facilitator guides, student materials, and regular check-ins with your dedicated partner."
      },
      {
        headline: "Flexible Integration",
        copy: "6-week intensive or 12-week extended options. Integration with existing careers provision, PSHE, or standalone. You set the pace."
      }
    ]
  },

  // Social Proof Section
  // Quotes intentionally empty — PthFndR is collecting real, consented testimonials from
  // school partners. Do not add placeholder or fabricated quotes here; populate this array
  // only when real testimonials exist. Same pattern already in use in stories.ts.
  socialProof: {
    sectionHeadline: "Schools Trust PthFndR",
    quotes: [],
    stats: [
      { value: "223", label: "young people reached to date" },
      { value: "95%", label: "progression rate to work or further education" }
    ]
  },

  // Programmes Section
  programmes: {
    sectionHeadline: "Your Programme Options",
    items: [
      {
        name: "Upskill Accelerators",
        duration: "6 weeks",
        description: "Sector-specific skill-building across Cyber, Digital Marketing, Construction, or a General track for undecided young people",
        who: "Year 12 / sixth form students, or school leavers aged 16-24",
        howItWorks: [
          "Weekly facilitated sessions (90 mins each)",
          "Self-assessment and career exploration",
          "Employer visits and networking",
          "Internship or work experience placement",
          "Portfolio building"
        ],
        outcomes: [
          "Clear understanding of career direction",
          "Practical employability skills",
          "Real employer connections",
          "Strong applications for jobs/universities"
        ],
        cost: "Custom quote based on cohort size (no cost to students)"
      },
      {
        name: "Discover Bootcamp",
        duration: "6 weeks",
        description: "Identity work first: understand who you are, what you value, and where that turns into direction, before building skills",
        who: "Year 12 / sixth form students, or school leavers aged 16-24",
        howItWorks: [
          "Weekly facilitated sessions led by PthFndR's founding team",
          "Identity and strengths work in the first weeks",
          "Practical skills and job-search strategy in later weeks",
          "Certificate and personalised reference letter on completion"
        ],
        outcomes: [
          "Clarity on direction before committing to a path",
          "Real, transferable skills",
          "A completed job-search strategy module"
        ],
        cost: "Free for the student, every time"
      },
      {
        name: "PthFndR Accelerator",
        duration: "1-2 week placement",
        description: "A taster placement for Year 12 / sixth form students to explore a career direction before committing to a longer programme",
        who: "Year 12 / sixth form students, referred by your school",
        howItWorks: [
          "Student is referred by your school",
          "Matched to a placement suited to their interests",
          "1-2 weeks of real workplace experience",
          "Guided reflection and next-step planning"
        ],
        outcomes: [
          "Real workplace experience",
          "Clarity on whether a sector is the right fit",
          "A concrete next step, whether that's Upskill Accelerators or something else"
        ],
        cost: "Free — no cost to the school or the student"
      },
      {
        name: "Micro-Opportunities",
        duration: "3-5 days",
        description: "Access to one-off meaningful work experiences throughout the year",
        who: "All young people in your school",
        howItWorks: [
          "Browse current opportunities (coding projects, event management, content creation, etc.)",
          "Apply for roles matching interests",
          "Complete with real employers",
          "Build portfolio evidence",
          "Earn recognition"
        ],
        outcomes: [
          "Real experience for CV",
          "Portfolio evidence",
          "Employer contacts",
          "Exploration of career paths"
        ],
        cost: "Free to explore, costs vary by opportunity"
      }
    ]
  },

  // Additional Sections
  difference: {
    headline: "Why PthFndR Is Different",
    copy: "Most careers programmes talk AT young people about career skills. PthFndR works WITH them to discover their identity, build real capability, and make genuine connections with employers who are hiring.\n\nWe don't explain frameworks. We deliver outcomes.\n\nWe measure success by: Did they get hired? Did they progress? Are they confident about their future?"
  },

  gettingStarted: {
    sectionHeadline: "Ready to Transform Your Students' Futures?",
    steps: [
      {
        number: 1,
        title: "Have a Conversation",
        description: "No commitment, no sales pitch. We chat about your school, your students, what matters to you. 30 mins, max.",
        isFree: true
      },
      {
        number: 2,
        title: "See a Pilot",
        description: "Run a small pilot with a group of students. See the difference firsthand. Usually 4-6 weeks.",
        isOptional: true
      },
      {
        number: 3,
        title: "Launch Your Programme",
        description: "When you're ready, launch with your full cohort. We support every step — training, resources, check-ins, results.",
        isFlexible: true
      }
    ]
  },

  faq: [
    {
      question: "How much time do teachers need to dedicate?",
      answer: "It varies by programme. Upskill Accelerators and Discover Bootcamp need a facilitator to deliver weekly sessions. Micro-Opportunities and PthFndR Accelerator placements can be integrated into existing provision or run as standalone, with lighter staff involvement."
    },
    {
      question: "Can you integrate with our existing careers provision?",
      answer: "Absolutely. It usually supplements existing PSHE or careers curriculum rather than replacing it."
    },
    {
      question: "Does this cost the school or the students anything?",
      answer: "The young person never pays, for any PthFndR programme. Upskill Accelerators and Discover Bootcamp are quoted based on cohort size for the school or organisation where applicable; PthFndR Accelerator and Micro-Opportunities are free."
    },
    {
      question: "What age groups can take part?",
      answer: "PthFndR programmes are for young people aged 16-24. PthFndR Accelerator is currently open to Year 12 / sixth form students specifically."
    }
    // ... more FAQs
  ],

  cta: {
    headline: "30 minutes to explore what's possible for your students.",
    primaryButton: "Book a Conversation",
    secondaryButton: "Download School Overview (PDF)"
  }
};
