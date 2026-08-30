export const headerContent = {
  logo: {
    text: "PthFndR",
    tagline: "WHERE POTENTIAL BECOMES IMPACT",
    homeLink: "/"
  },

  navigation: {
    mainLinks: [
      { label: "Programmes", href: "/programmes", hasDropdown: true },
      { label: "Opportunities", href: "/opportunities" },
      { label: "Stories", href: "/stories" },
      { label: "Contact", href: "/contact" }
    ],
    
    programmesDropdown: {
      sections: [
        {
          title: "For Young People",
          links: [
            { label: "Micro-Opportunities", href: "/opportunities" },
            { label: "Free Assessment", href: "/assessment" }
          ]
        },
        {
          title: "For Schools",
          links: [
            { label: "School Partnership Programme", href: "/for-schools" },
            { label: "Professional Development", href: "/for-schools#pd" }
          ]
        },
        {
          title: "For Organisations",
          links: [
            { label: "Create Opportunities", href: "/for-organisations#create" },
            { label: "Organisation Partnership", href: "/for-organisations" }
          ]
        }
      ]
    }
  },

  cta: {
    label: "Sign In",
    href: "/signin",
    variant: "primary" // Green button
  }
};