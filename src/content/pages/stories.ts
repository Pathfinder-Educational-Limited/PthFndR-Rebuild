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
    { value: "223", label: "young people supported" },
    { value: "95%", label: "progress to work or further education" },
    { value: "8", label: "school & organisation partners" },
  ],
};
