// Add a post = add an object here. slug becomes /writing/editing-as-the-whole-job
export const posts = [
  {
    slug: "editing-as-the-whole-job",
    title: "On editing as the whole job",
    date: "2025 · 06",
    body: [
      "Placeholder. When production is free, the work shifts to selection and refusal.",
      "Replace with the real essay.",
    ],
  },
  {
    slug: "agents-and-web-design",
    title: "What agents do to web design",
    date: "2025 · 04",
    body: ["Placeholder.", "Replace with the real essay."],
  },
  {
    slug: "gold-silver-patience",
    title: "Gold, silver, and patience",
    date: "2025 · 02",
    body: ["Placeholder.", "Replace with the real essay."],
  },
];

export const postBySlug = (slug) => posts.find((p) => p.slug === slug);
