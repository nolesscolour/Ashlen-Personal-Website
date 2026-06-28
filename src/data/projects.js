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
  {
    slug: "conde-nast-block-system",
    title: "Condé Nast Editorial Block System",
    type: "Product Design",
    year: "2024",
    role: "IC",
    summary:
      "Four CMS blocks that pried editorial control out of brand settings and engineering queues and handed it to the people writing the articles.",
    subtitle:
      "Four CMS blocks that pried editorial control out of brand settings and engineering queues.",
    meta: {
      role: "Product Designer (IC)",
      timeline: "~6–8 wks each",
      year: "2024",
      team: "Rakshita Asileti (PM), Vinay Prabhakaran (EM), Indrani Gostu & Ashish Rena (SE), Mishba (FE), Misbah Talat & Irfan Rafeek (DS), Cia Bernales (PPM)",
    },
    images: [],
    body: [
      {
        type: "image",
        src: "",
        alt: "Product Grid block live in an article — Vogue's Top 7 Picks",
        caption: "Product Grid block live inside an article",
      },
      {
        type: "text",
        id: "overview",
        label: "TL;DR",
        heading: "",
        paras: [
          "Four blocks for the primary CMS behind 20+ Condé Nast brands across 70+ markets: Accordion, Table of Contents, Product Grid, SEO Markers. Each one took a job that used to need an engineer, a brand-settings change, or a hand-pasted HTML anchor, and moved it into the writing surface. Partway through, Table of Contents coughed up a pattern worth keeping (structure pulled from the article, anchors that wire themselves) and I reused it in Product Grid instead of building it twice. Adopted across 19,000+ articles and 10+ brands, including 11 Vogue markets.",
        ],
      },
      {
        type: "text",
        id: "four-blocks",
        label: "01",
        heading: "The shape of the work",
        paras: [
          "Let me be straight about what this was, because the tidy \"system\" label can oversell it. This wasn't one initiative with a roadmap. It was four separate blocks, each solving a specific editorial need at a different time, with other projects running in parallel the whole way. Every one was a full 6 to 8 week effort once you count usability testing, bug reports, audit, QA, and the production merge nobody puts on a portfolio but everybody loses two weeks to.",
          "What ties them together is one move, repeated. A capability that lived somewhere editors couldn't reach (a brand setting, an engineering request, an anchor link pasted by hand) became a block they could drop in and control while writing. Accordion was first. SEO Markers was last. Somewhere in the middle, Table of Contents produced a pattern the later blocks borrowed: structure captured straight from the article, and anchors that generate themselves instead of being typed one at a time.",
          "I'm calling this a system in hindsight, not because I sat down and architected one. The real design decision was noticing the same problem turn up block after block and choosing to solve it once. Less heroic than \"I designed a system,\" and a lot more honest.",
        ],
      },
      {
        type: "text",
        id: "",
        label: "",
        heading: "The four blocks, in the order they shipped",
        paras: [
          "Accordion. A collapsible block that, before this, only brand engineers could make. Editors build it themselves now.",
          "Table of Contents. Editors used to hand-build the list and hand-link every anchor. It reads the article's headers and fills itself in.",
          "Product Grid. Stuck inside gallery pages and gated by brand settings. Now a native block that works in any body field.",
          "SEO Markers. SEO classification used to be an engineering job set per content type. Editors now mark content for it from the toolbar.",
        ],
      },
      {
        type: "image",
        src: "",
        alt: "Timeline strip: Accordion → ToC → Product Grid → SEO Markers",
        caption: "Shared pattern starts at Table of Contents",
      },
      {
        type: "text",
        id: "",
        label: "",
        heading: "",
        paras: [
          "The cleanest way through these is to follow the pattern, not the calendar. So I'll start where the pattern was born (Table of Contents), move to where it did the most good (Product Grid), then cover the two blocks that top and tail the run.",
        ],
      },
      {
        type: "subcase",
        id: "toc",
        title: "Table of Contents",
        subtitle: "where the pattern started",
        meta: "Product Designer · Rakshita Asileti (PM), Misbah Talat (DS), Vinay Prabhakaran (EM), Indrani Gostu (SE)",
        blocks: [
          {
            type: "text",
            heading: "The problem",
            paras: [
              "Long articles are hard to scan, and the CMS gave editors no consistent way to structure them. Sections were formatted differently from one article to the next, and the front-end navigation that depended on that structure quietly broke whenever it wasn't there.",
              "The existing fix was pure manual labor. Editors built the table of contents by hand: assemble a sidebar list that mirrors the article, then link each item to a jump anchor buried in the content. Every entry was a manual link. Nothing kept the list in sync with the article it was supposed to describe, so the moment a heading changed, the contents started lying.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "I built a block editors insert from the toolbar, with a heading field and a body field that holds the list. The decision that actually mattered was how the list gets built. The boring option was a nicer manual builder. The right one was to capture the article's structure on its own, so I built Autofill with Headers: the block reads the H2s (or tagged content) already in the article and generates the list, anchors included. Headers present, the list populates itself. Headers missing, the empty state spells out exactly what to do instead of failing silently.",
              "The rest earns its place too. Each entry jumps to its section with smooth scrolling, the block collapses so long lists don't eat the page, and it holds up across desktop, tablet, and mobile, screen readers included. I also scoped the behaviors that sit on top of it: sticky positioning, pagination, and a jump-link label selector.",
              "This is the block where the two things got solved that everything after it reused. Structure pulled from the article. Anchors generated, not typed.",
            ],
          },
          {
            type: "pair",
            left: { src: "", alt: "Old hand-built sidebar list" },
            right: { src: "", alt: "New block with Autofill with Headers" },
          },
          { type: "image", src: "", alt: "Populated block in context", caption: "Autofill pulling real headers" },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "Live across 9+ brands including Vogue, Vanity Fair, Wired, and Glamour, with 14,000+ pieces of content using it. In follow-up, 70% of editors said they were satisfied with it. It was also my first project with a global stakeholder group, which mainly taught me how many opinions a single scroll animation attracts across six time zones, and how much front-end iteration it takes to sit right across every brand's styling.",
            ],
          },
        ],
      },
      {
        type: "subcase",
        id: "product-grid",
        title: "Product Grid",
        subtitle: "where the pattern paid off",
        meta: "Product Designer · Rakshita Asileti (PM), Swami Guru, Vinay Prabhakaran (EM), Indrani Gostu, Ashish Rena (SE), Mishba (FE), Irfan Rafeek (DS)",
        blocks: [
          {
            type: "text",
            heading: "The problem",
            paras: [
              "Product grids are where editorial turns into money at Condé Nast. The curated grids on Wired's gift guides and Vogue's seasonal picks, where readers scan editor reviews and buy on the spot. The reader-facing version worked fine. The editor-facing version was the problem child.",
              "The grid only existed inside gallery content, built as a gallery slide, and brand settings decided which brands were even allowed near it. Getting products to show up at all meant a developer laying them out through brand settings, or a brand-settings manager handling it during the publishing process. And if an editor wanted the grid inside a normal article, they copy-pasted an HTML anchor by hand to link each product to its review further down the page, then prayed nothing drifted between the paragraphs and the grid. Brands wanted it everywhere (articles, gift guides, seasonal roundups, the odd opinion piece) and the gallery-only version was never getting them there.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "Two paths. Extend the gallery version to limp into more content types, or rebuild it as a native block inserted from the toolbar. I took the rebuild. It drops into any body field and ignores the content-type and brand-settings gates entirely.",
              "The structure follows how editors actually think, which is not \"product, product, product.\" They think \"Vogue's Top 7 Picks.\" The list is the thing they're making; the products are its contents. So list-level controls sit up top (heading, sticky, pagination, collapsible, reorder and batch credit) and product-level fields sit underneath (superlative, name, anchor, affiliate offer).",
              "This is where Table of Contents paid me back. The \"Jump to Editor's Review\" anchor, formerly a hand-pasted hash link and a dependable source of bugs, became a structured field with autofill and suggested targets. Populating the grid works two ways: pull products straight from the product library inside the CMS, or drop them into the article first and apply the grid at the top to capture all of them at once. Either way Autofill Products brings in names, images, and affiliate offers in one action, and because products live in that shared library, the same loafer featured in three Vogue articles is reused instead of re-uploaded. None of that autofill-and-anchor behavior was reinvented here. It was lifted from ToC and pointed at products.",
            ],
          },
          { type: "image", src: "", alt: "Old way — gallery slide + manual anchor dialog", caption: "" },
          { type: "image", src: "", alt: "Product Grid block — Vogue's Top 7 Picks", caption: "" },
          {
            type: "pair",
            left: { src: "", alt: "Empty grid" },
            right: { src: "", alt: "Populated grid after one click" },
          },
          {
            type: "text",
            heading: "The tradeoff",
            paras: [
              "Native cost more engineering up front than extending the gallery block would have. In return it killed the one-content-type ceiling and the manual anchoring in one move. Easy trade, given those were the two things brands kept complaining about.",
            ],
          },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "Timed in testing, the manual build ran 4 to 7 minutes on average, the sort of task an editor would start, leave for coffee, and come back to. For product-heavy lists, editors put it at 10 to 20 minutes, since a 25-item gift guide is a lot of anchors. The block collapses that to a single pass. Adopted across 19,000+ articles and 10+ brands, including 11 Vogue markets. Editors called it \"like lego blocks, but digital,\" which is about the nicest thing an editor will say about a tool they didn't ask to learn. The same block renders as the curated grids readers see on the live sites.",
            ],
          },
          { type: "image", src: "", alt: "Reader-facing rendered grid on a live Wired gift guide", caption: "" },
        ],
      },
      {
        type: "subcase",
        id: "accordion",
        title: "Accordion",
        subtitle: "the first block, before there was a pattern",
        meta: "Product Designer · Cia Bernales (PPM), Rakshita Asileti (PM), Vinay Prabhakaran (EM)",
        blocks: [
          {
            type: "text",
            heading: "The problem",
            paras: [
              "This one came first, before any of the clever autofill business existed. It's where the broader idea started: take something only engineers could make and hand it to editors. Collapsible sections were already on the sites, but brand engineers and brand owners built them, mostly for product pages that needed extra detail tucked away. A new requirement wanted editors to make them directly, without filing a ticket and waiting.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "A block editors insert from the toolbar, with a heading and a body field, that collapses to keep things compact. Editors can stack a list of accordions and nest supported blocks inside them, including details, tables, and product grids. The behaviors that came later (anchors, drag to reorder, a floating action bar, sticky activation) are all live now.",
            ],
          },
          { type: "image", src: "", alt: "Accordion block in editor + live TLDR on a Self article", caption: "" },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "Over 3,700 articles and galleries used it within two months, and it quietly became the default for TLDR sections inside articles.",
            ],
          },
        ],
      },
      {
        type: "subcase",
        id: "seo-markers",
        title: "SEO Markers",
        subtitle: "the last block, pattern settled",
        meta: "Product Designer · Rakshita Asileti (PM), Vinay Prabhakaran (EM), Ashish Rena (SE), Indrani Gostu (SE)",
        blocks: [
          {
            type: "text",
            heading: "The problem",
            paras: [
              "By the time this shipped, the block model was established enough that a new one slotted in without much drama. SEO lived at the brand-settings level, which meant engineering time for classification, rule-setting, and ongoing upkeep across every content type, style, block, and story type. All that complexity watered down how well it worked, and it didn't match where Google was heading anyway, toward structured, user-focused content under E-E-A-T and mobile-first indexing.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "Keep tuning the brand-settings machine, or give editors a one-time mechanism they control. I went with the latter. Editors apply a marker to any content (text, embeds, tables, accordions, whatever sits in a body field) to flag it for FAQ schema markup so it can surface in rich snippets. The markers have a start and end tag that drag across a span of content, and they live in the editing toolbar. One deliberate action in the writing surface, instead of a classification rule maintained forever per content type.",
            ],
          },
          { type: "image", src: "", alt: "SEO Markers — start/end tags dragged across content", caption: "" },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "I can't share the performance numbers, but usage in the first three months was close to 43,000 across all owned-and-operated brands.",
            ],
          },
        ],
      },
      {
        type: "text",
        id: "markets",
        label: "",
        heading: "The part nobody screenshots: 70+ markets",
        paras: [
          "These didn't ship into one clean, obedient environment. Every market has its own content classification, brand styling, and language direction, right-to-left scripts included, and some had never used anchor linking until these blocks introduced the idea. The blocks had to behave across all of it. That variation, not the core build, is most of why each one ran 6 to 8 weeks of testing and iteration.",
        ],
      },
      {
        type: "image",
        src: "",
        alt: "Same block across LTR / RTL / different brand styling",
        caption: "",
      },
      {
        type: "text",
        id: "reflections",
        label: "",
        heading: "What I'd do differently",
        paras: [
          "Spot the pattern sooner. The autofill-and-anchor approach only clicked into place at the second block, which means Accordion, the first one, never got to use it. If I ran this again I'd treat the shared block pattern as an explicit internal standard from day one, so the earliest blocks inherited it instead of the system catching up to itself halfway through.",
        ],
      },
      {
        type: "text",
        id: "",
        label: "",
        heading: "What this taught me",
        paras: [
          "Editorial tooling is less forgiving than reader-facing UI, and in a sneakier way. A block has to survive dozens of markets, stay future-proof, and still be obvious enough that an editor on deadline grabs it without a tutorial. The thread across all four was catching the same problem again and again, editors hand-assembling structure and links, then building it once so the next block could inherit it instead of starting from scratch. That reuse mattered more than any single block did.",
        ],
      },
    ],
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);
