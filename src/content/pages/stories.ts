export const storiesContent = {
  hero: {
    headline: "Real People. Real Impact.",
    subheading: "The young people, schools, and employers building their futures with PthFndR.",
  },

  // Add real, consented participant stories here and the grid populates automatically.
  // Left empty deliberately — no placeholder testimonials attributed to named people.
  stories: [] as { name: string; age: number; role: string; summary: string }[],

  // Figures mirror the impact stats already published across the site.
  stats: [
    { value: "500+", label: "young people supported" },
    { value: "85%", label: "progress to employment or further study" },
    { value: "30+", label: "school & organisation partners" },
    { value: "95%", label: "of partners recommend us" },
  ],
};
