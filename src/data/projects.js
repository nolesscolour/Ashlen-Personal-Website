// Add a project = add an object here. The slug becomes the URL: /work/one-and-only
export const projects = [
  {
    slug: "one-and-only-cape-town",
    title: "One&Only Cape Town",
    type: "Web / Brand",
    year: "2025",
    role: "Design & build",
    summary:
      "Editorial restraint for a 14-property portfolio. Near-monochrome, one botanical accent, a full-page menu doubling as a resort switcher.",
    body: [
      "The brief was restraint at luxury scale. The portfolio spans fourteen properties, and the old site treated each as a separate marketing push. The redesign makes them one system with a shared editorial voice.",
      "What got cut mattered more than what stayed. No carousel, no booking-widget clutter on the landing, no testimonial wall. The full-page menu became the spine, doubling as the switcher between properties.",
    ],
    // images: array of { src, w, h, alt }
    images: [],
  },
  {
    slug: "signal",
    title: "Signal",
    type: "Product",
    year: "2025",
    role: "Product design",
    summary: "Placeholder summary for Signal.",
    body: ["Replace with the Signal write-up.", "Second paragraph."],
    images: [],
  },
  {
    slug: "seve",
    title: "SÈVE",
    type: "Identity",
    year: "2024",
    role: "Identity",
    summary: "A fictional luxury perfume identity built from first principles.",
    body: ["Naming, palette, typography, voice, product copy.", "Second paragraph."],
    images: [],
  },
  {
    slug: "yield",
    title: "Yield",
    type: "Lead site",
    year: "2024",
    role: "Design & build",
    summary: "Lead capture site wired to an agentic marketing pipeline.",
    body: ["Replace with the Yield write-up.", "Second paragraph."],
    images: [],
  },
  {
    slug: "operation-monday",
    title: "Operation Monday",
    type: "Workshop",
    year: "2024",
    role: "Facilitation design",
    summary: "A scripted, print-ready design-thinking workshop guide.",
    body: ["Replace with the Operation Monday write-up.", "Second paragraph."],
    images: [],
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);
