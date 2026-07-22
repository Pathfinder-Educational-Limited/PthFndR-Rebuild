export const careerAcceleratorsContent = {
  hero: {
    headline: "Get Hired. Build Skills. Own Your Future.",
    subheading: "A 6-week intensive programme that transforms how young people think about work, what they can do, and where they're going.",
    bodyCopy: "Career Accelerators isn't a course. It's a transformation. Young people come in uncertain about their future. They leave with clear direction, practical skills, real employer contacts, and often with a job or university offer in hand.",
    ctaButton: "Choose Your Track"
  },

  tracks: [
    {
      id: 1,
      name: "Cyber Security",
      icon: "🔐",
      description: "Master cybersecurity fundamentals and advance your career in this high-demand field.",
      skills: [
        "Network security basics",
        "Threat analysis and response",
        "Security compliance frameworks",
        "Penetration testing intro",
        "Security architecture principles"
      ],
      employers: "Leading tech companies, financial institutions, government agencies",
      salaryRange: "£28,000 - £45,000 starting",
      duration: "6 weeks",
      cohorts: ["January 2026", "April 2026", "July 2026"],
      highlights: [
        "Industry-recognized certifications",
        "Real-world security challenges",
        "Mentorship from security professionals"
      ]
    },
    {
      id: 2,
      name: "Product Design",
      icon: "🎨",
      description: "Design products that users love. Learn UX/UI principles and design thinking methodology.",
      skills: [
        "User research and empathy mapping",
        "Wireframing and prototyping",
        "UI/UX design principles",
        "Design tools (Figma, Adobe XD)",
        "Usability testing and iteration"
      ],
      employers: "Tech startups, design agencies, Fortune 500 product teams",
      salaryRange: "£26,000 - £42,000 starting",
      duration: "6 weeks",
      cohorts: ["January 2026", "April 2026", "July 2026"],
      highlights: [
        "Build a portfolio-ready design project",
        "Work with real product feedback",
        "Design tool certification included"
      ]
    },
    {
      id: 3,
      name: "Software Development",
      icon: "💻",
      description: "Become a full-stack developer. Learn modern languages and build production-ready applications.",
      skills: [
        "Full-stack web development",
        "Frontend: React/Vue, CSS, JavaScript",
        "Backend: Node.js, databases, APIs",
        "Version control and Git workflow",
        "Agile development practices"
      ],
      employers: "Tech companies, digital agencies, software startups, in-house development teams",
      salaryRange: "£28,000 - £50,000 starting",
      duration: "6 weeks",
      cohorts: ["January 2026", "April 2026", "July 2026"],
      highlights: [
        "Build a live portfolio project",
        "GitHub contributions and visibility",
        "Tech interview preparation"
      ]
    },
    {
      id: 4,
      name: "General",
      icon: "🚀",
      description: "Explore career options and build transferable skills across industries.",
      skills: [
        "Self-discovery and career planning",
        "Professional communication",
        "Leadership and teamwork",
        "Problem-solving frameworks",
        "Industry-agnostic hard skills"
      ],
      employers: "All industries, roles across all sectors",
      salaryRange: "Entry-level across all industries",
      duration: "6 weeks",
      cohorts: ["January 2026", "April 2026", "July 2026"],
      highlights: [
        "Flexible skill development",
        "Career exploration across industries",
        "Mentor matching with your interests"
      ]
    }
  ],

  programmeStructure: {
    headline: "What's Included in Every Track",
    subtitle: "6-week Intensive Programme",
    phases: [
      {
        weeks: "1-2",
        title: "Know Yourself & Get Skilled",
        activities: [
          "Self-discovery and strengths assessment",
          "Career goal setting workshop",
          "Track-specific skills introduction",
          "Employer panel discussions",
          "Professional branding setup"
        ],
        outcome: "Clear career direction with foundational skills"
      },
      {
        weeks: "3-4",
        title: "Build & Create",
        activities: [
          "Hands-on project work",
          "Track-specific deep dives",
          "Peer collaboration and feedback",
          "Guest expert workshops",
          "Portfolio/CV development"
        ],
        outcome: "Portfolio-ready project and polished application materials"
      },
      {
        weeks: "5-6",
        title: "Land Opportunity & Launch",
        activities: [
          "Job search strategy and interview prep",
          "Networking events with employers",
          "Internship/job placement matching",
          "Final project presentations",
          "Graduation and alumni onboarding"
        ],
        outcome: "Job or internship offer, and entry into alumni network"
      }
    ],
    postProgramme: "Alumni network access, ongoing mentorship (6 months), advanced opportunities, continued employer introductions"
  },

  outcomes: {
    headline: "Real Results",
    mainOutcome: "85% of participants progress to employment, internship, or further study with clarity on direction",
    keyMetrics: [
      { metric: "95%", description: "report increased confidence in their chosen field" },
      { metric: "90%", description: "build professional network (5+ employer contacts)" },
      { metric: "100%", description: "complete portfolio/CV and interview prep" },
      { metric: "80%", description: "secure placement/internship during programme" },
      { metric: "70%", description: "maintain contact with employers post-programme" }
    ]
  },

  successStories: [
    {
      name: "Alex",
      age: 21,
      track: "Software Development",
      role: "Junior Developer",
      company: "Tech Startup",
      quote: "I had some coding basics but no direction. The Accelerator gave me structure, projects to build, and connections. Now I'm shipping code at a real startup.",
      context: "now building features for 50+ users"
    },
    {
      name: "Priya",
      age: 20,
      track: "Product Design",
      role: "UX Designer",
      company: "Design Agency",
      quote: "I loved design but didn't know how to turn it into a career. Six weeks in an Accelerator transformed my portfolio and confidence. Got the job at my dream agency.",
      context: "leading design for 3+ client projects"
    },
    {
      name: "Jordan",
      age: 19,
      track: "Cyber Security",
      role: "Security Analyst",
      company: "Financial Services",
      quote: "Cyber seemed intimidating at first. The mentors broke it down, I built real skills, and now I'm working on actual security challenges at a major bank.",
      context: "completing first security audit independently"
    }
  ],

  programmeDetails: {
    duration: "6 weeks (intensive)",
    timeCommitment: {
      groupSessions: "2-3 hours per week",
      assignments: "3-5 hours per week",
      total: "~30 hours over 6 weeks"
    },
    format: "In-person (preferred) or hybrid options available",
    locations: ["London", "Manchester", "Remote"],
    nextCohorts: [
      { season: "Spring", start: "Jan 10", end: "Feb 28", track: "All Tracks" },
      { season: "Summer", start: "Apr 5", end: "May 23", track: "All Tracks" },
      { season: "Autumn", start: "Jul 12", end: "Aug 30", track: "All Tracks" }
    ]
  },

  faq: [
    {
      question: "Which track should I choose?",
      answer: "Choose based on your interests and career goals. Tech roles? Software Development or Cyber. Creative? Product Design. Exploring options? General track offers flexibility. Take our career assessment to get personalized recommendations."
    },
    {
      question: "Do I need prior experience?",
      answer: "No. We accept beginners to intermediate level for all tracks. We'll assess your level at the start and customize the experience. Motivation and commitment matter more than prior experience."
    },
    {
      question: "What if I already have a job?",
      answer: "Many participants work part-time during the accelerator. We offer flexible scheduling and can discuss arrangements with you personally."
    },
    {
      question: "Is there a cost?",
      answer: "Career Accelerators are free for eligible young people (16-25). Employer sponsorship and bursary options available for some programs."
    },
    {
      question: "What if I'm unsure about my career path?",
      answer: "Our career coaches work with you 1-on-1. Take our Diagnostic Assessment (Trapezium Profile) first to clarify your direction, or start with the General track for exploration."
    },
    {
      question: "Do you help with job placement?",
      answer: "Yes. We have partnerships with 100+ employers and actively match participants with internships and jobs. Your success is our success."
    }
  ],

  cta: {
    headline: "Ready to Own Your Future?",
    subtitle: "Spots are limited. Cohorts fill up 2-3 weeks before start date.",
    primaryButton: "Choose Your Track",
    secondaryButton: "Take Career Assessment First"
  }
};
