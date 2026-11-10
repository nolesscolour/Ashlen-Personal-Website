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
      timeline: "Oct 2023 – Jun 2024",
      year: "2024",
      team: "Rakshita Asileti (PM), Vinay Prabhakaran (EM), Indrani Gostu & Ashish Rena (SE), Mishba (FE), Misbah Talat & Irfan Rafeek (DS), Cia Bernales (PPM), and the SEO team",
    },
    images: [],
    body: [
      {
        type: "image",
        src: "",
        alt: "Product List block live in an article — Vogue's Top 7 Picks",
        caption: "Product List block live inside an article",
      },
      {
        type: "text",
        id: "overview",
        label: "TL;DR",
        heading: "",
        paras: [
          "Adoption ran into the tens of thousands of articles across 10+ brands and 11 Vogue markets, and one task that used to eat 6 minutes by hand dropped to autofill plus light edits. That came from four CMS blocks I designed for the primary system behind 20+ Condé Nast brands across 70+ markets: Accordion, Table of Contents, Product List, and SEO Markers. Each moved a job that used to need an engineer, a brand-settings change, or a hand-pasted HTML anchor into the writing surface. Partway through, Table of Contents produced a pattern worth keeping, structure pulled from the article and anchors that wire themselves, and I reused it in Product List instead of building it twice.",
        ],
      },
      {
        type: "text",
        id: "four-blocks",
        label: "01",
        heading: "The shape of the work",
        paras: [
          "Let me be straight about what this was, because the tidy \"system\" label can oversell it. This wasn't one initiative with a roadmap. It was four separate blocks, each solving a specific editorial need at a different time, with other projects running in parallel the whole way.",
          "What ties them together is one move, repeated. A capability that lived somewhere editors couldn't reach (a brand setting, an engineering request, an anchor link pasted by hand) became a block they could drop in and control while writing. Accordion came first, as a smaller, self-contained piece. Then I took up the other three together. Somewhere in there, Table of Contents produced a pattern the later blocks borrowed: structure captured straight from the article, and anchors that generate themselves instead of being typed one at a time.",
          "I'm calling this a system in hindsight, not because I sat down and architected one. The real design decision was noticing the same problem turn up block after block and choosing to solve it once. Less heroic than \"I designed a system,\" and a lot more honest.",
          "Worth naming what was at stake, because it wasn't just editor comfort. These blocks sit on time-sensitive, high-traffic editorial, Met Gala nights, Black Friday, fashion weeks, where content has to be live while the moment is hot. Slow tooling there doesn't annoy an editor, it burns production time against a hard deadline on the content that pulls the most traffic and revenue. Time-to-publish was the thing quietly on the line.",
        ],
      },
      {
        type: "text",
        id: "",
        label: "",
        heading: "The four blocks, in the order they shipped",
        paras: [
          "Accordion. A collapsible block that, before this, only engineers could make, and only for specific event pages. Editors build it themselves now, anywhere it makes sense.",
          "Table of Contents. There was no ToC block at all. Editors faked one by hand-placing inline jump links. It now reads the article's headers and builds itself.",
          "Product List. Trapped inside gallery pages and gated by brand settings. Now a native block that works in any body field.",
          "SEO Markers. SEO used to be a separate team's job, set at the brand-settings level. Editors now mark content for it from the toolbar.",
        ],
      },
      {
        type: "image",
        src: "",
        alt: "Timeline strip: Accordion → ToC → Product List → SEO Markers, Oct 2023 to mid-2024",
        caption: "Shared pattern starts at Table of Contents",
      },
      {
        type: "text",
        id: "",
        label: "",
        heading: "How I worked out what to build",
        paras: [
          "None of these blocks started in Figma. They started in conversations.",
          "The foundation was talking to people closer to the work than I was. I reached out to brand managers across 16+ of the major publications, partly to understand how editors at each one actually work, the workflows and the quirks and what they fight with daily, and partly to get pointed toward the right editors to talk to. A Vogue editor and a Wired editor don't run the same way, so the people closest to the work were the ones worth hearing from.",
          "Accordion came first and was the simplest of the four, so it was scoped lightly: brainstorming with my manager, who knew it was a basic build, plus working the shape out with the Design Systems team and a quick session with Irfan. No formal workshop, it didn't need one.",
          "The other three were a bigger ask, so once Accordion was done I took them up together and kicked them off properly. My lead and I ran two Crazy 8s workshops. I framed the questions and built the structure, she helped organize and run them.",
          "The first, at the start, was deliberately broad: product heads, the AVP of Design, senior design directors, the head of product, engineering managers, and a few senior developers from the CMS teams. Wide enough to surface what actually mattered before anyone locked into a shape.",
          "The second, once we had a direction, was tighter: product managers, engineers, and brand PMs, pointed squarely at technical feasibility, so we knew what we could realistically build before designing around it.",
          "Rough sketches throughout, no prototypes. The point was never polish, it was alignment, getting the people who'd build, own, and live with these blocks to agree on a direction before a single component existed.",
        ],
      },
      {
        type: "text",
        id: "",
        label: "",
        heading: "What watching editors taught me",
        paras: [
          "Across those conversations and the testing that followed, a few findings came back that shaped all four blocks.",
          "The cost of manual work was never flat. It piled onto the heaviest content. A 25-item gift guide could eat far more time than a short list, so the blocks had to earn their keep exactly where editors were drowning, not shave seconds off the easy cases.",
          "Editors don't think in products, they think in lists. \"Vogue's Top 7 Picks\" is the object in their head and the products are its contents. Building around the list instead of the individual item is the line between a tool that matches how they work and one they fight.",
          "Editors wanted the work gone, not made tidier. The pain in the old flows was repetition, the same links and the same structure rebuilt on article after article, so the wins came from removing the manual step, not from a cleaner way to perform it. A faster form would have missed the point.",
        ],
      },
      {
        type: "text",
        id: "",
        label: "",
        heading: "",
        paras: [
          "The cleanest way through these is to follow the pattern, not the calendar. So I'll start where the pattern was born (Table of Contents), move to where it did the most good (Product List), then cover the two blocks that top and tail the run.",
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
              "Long-form articles are hard to scan, and the CMS had no built-in way to give them a contents list. Whether an article got one at all, and how it behaved, came down entirely to the editor.",
              "So editors faked it. To put a table of contents on a piece, they dropped inline jump links by hand and pointed each one at the section it belonged to. It worked, just about, and it was the same fiddly job on every single article. What editors asked for wasn't a tidier way to keep doing that. It was automation: a contents list they could generate in one action instead of stitching links across piece after piece.",
              "ToC also took the most convincing of the four. Stakeholders weren't sure they wanted it, with other projects competing for the same time, so it went through several requirements rounds before it was greenlit. It leaned hard on engineering too, since the editing suite it lived in was fragile enough that small changes could break things.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "I built a block editors insert from the toolbar, with a heading field and a body field for the list. I took the cue from how modern sites present a contents list to readers, and built the editor side to work the way you see it: what an editor builds looks close to what ships, not a generic form filled in blind. I also kept it from being a literal 1:1 of the front-end markup, because that just turns editing into a developer's job. The point was a tool an editor could use without thinking like an engineer.",
              "The decision that actually mattered was how the list gets built. The boring option was a nicer manual builder. The right one was to capture the article's structure on its own, so I built Autofill with Headers: the block reads the H2s (or tagged content) already in the article and generates the list, anchors included. Headers present, the list populates itself. Headers missing, the empty state spells out exactly what to do instead of failing silently.",
              "The rest earns its place too. Each entry jumps to its section with smooth scrolling, the block collapses so long lists don't eat the page, and it holds up across desktop, tablet, and mobile, screen readers included. I also scoped the behaviors that sit on top of it: sticky positioning, pagination, and a jump-link label selector.",
              "This is the block where the two things got solved that everything after it reused. Structure pulled from the article. Anchors generated, not typed.",
            ],
          },
          {
            type: "pair",
            left: { src: "", alt: "Old workaround — contents list faked with hand-placed inline jump links" },
            right: { src: "", alt: "New ToC block with Autofill with Headers and the anchor toggle" },
          },
          { type: "image", src: "", alt: "Populated block in context — heading \"What is being covered?\", autofilled entries, collapsible toggle", caption: "Autofill pulling real headers" },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "Live across 9+ brands including Vogue, Vanity Fair, Wired, and Glamour, with 14,000+ pieces of content using it. Those figures are from late 2023 and early 2024, so it's only grown since. The 70% satisfaction came from a formal feedback form the PM ran, backed by usability testing and time-to-create tracking. It was also my first project with a global stakeholder group, which meant a lot of front-end iteration to get one block sitting right across every brand's styling.",
            ],
          },
        ],
      },
      {
        type: "subcase",
        id: "product-list",
        title: "Product List",
        subtitle: "where the pattern paid off",
        meta: "Product Designer · Rakshita Asileti (PM), Swami Guru, Vinay Prabhakaran (EM), Indrani Gostu, Ashish Rena (SE), Mishba (FE), Irfan Rafeek (DS)",
        blocks: [
          {
            type: "text",
            heading: "The problem",
            paras: [
              "Product lists are where editorial turns into money at Condé Nast. The curated grids on Wired's gift guides and Vogue's seasonal picks, where readers scan editor reviews and buy on the spot. The reader-facing version worked fine. The editor-facing version was the problem child.",
              "There was no Product List block. The closest thing was the product slide inside gallery pages, and that's where this block's look came from. But getting products to show up at all meant a developer placing them through brand settings, or a brand-settings manager handling it during the publishing process. And if an editor wanted a list inside a normal article, they copy-pasted an HTML anchor by hand to link each product to its review further down the page, then prayed nothing drifted between the paragraphs and the grid. Brands wanted it everywhere (articles, gift guides, seasonal roundups, the odd opinion piece) and the gallery-only setup was never getting them there. The cost wasn't even, either. It spiked on the product-heavy lists, which is exactly where the new block had to help most.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "Two paths. Extend the gallery version to limp into more content types, or build a real native block inserted from the toolbar. I built the native block. It drops into any body field and ignores the content-type and brand-settings gates entirely.",
              "The structure follows how editors actually think, which is not \"product, product, product.\" They think \"Vogue's Top 7 Picks.\" The list is the thing they're making; the products are its contents. So list-level controls sit up top (heading, sticky, pagination, collapsible, reorder and batch credit) and product-level fields sit underneath (superlative, name, anchor, affiliate offer).",
              "This is where Table of Contents paid me back. The \"Jump to Editor's Review\" anchor, formerly a hand-pasted hash link and a dependable source of bugs, became a structured field with autofill and suggested targets. Populating the list works two ways: pull products straight from the product library inside the CMS, or drop them into the article first and apply the block at the top to capture all of them at once. Either way, autofill brings in names, images, and affiliate offers, and from there the editor takes over: set the list title, edit the copy on any product, drag cards to reorder, swap one out. Autofill does the heavy lifting, the editor does the shaping. And because products live in that shared library, the same loafer featured in three Vogue articles is reused instead of re-uploaded.",
              "On scope: I owned the CMS block itself, its design and the design-system work behind it. The reader-facing rendering, what shows up on the live article, I built together with Mishba, with Irfan handling design systems for that side. The thing editors touch is mine end to end; the thing readers see was a shared build.",
            ],
          },
          { type: "image", src: "", alt: "Old way — gallery-slide product setup + manual anchor-link dialog (#anchor hash field)", caption: "" },
          { type: "image", src: "", alt: "Product List block — Vogue's Top 7 Picks, Sticky and Pagination toggles, Autofill, structured Jump to Editor's Review field", caption: "" },
          {
            type: "pair",
            left: { src: "", alt: "Empty list" },
            right: { src: "", alt: "Populated list with editable product cards" },
          },
          {
            type: "text",
            heading: "The tradeoff",
            paras: [
              "Native cost more engineering up front than extending the gallery block would have. We'd weighed exactly that in the feasibility workshop before committing, so the cost was a known quantity, not a surprise. In return it killed the one-content-type ceiling and the manual anchoring in one move. Easy trade, given those were the two things brands kept complaining about.",
            ],
          },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "I timed the old way off recorded sessions: building a linked list by hand averaged 6 minutes across 27 editors, and ran longer on product-heavy lists where there were simply more cards and more anchors to wire. Those 6 minutes weren't neutral. They were 6 minutes against a Black Friday or Met Gala deadline on a 25-item guide, the exact commerce content that has to be live while the moment's hot. The block cut that down to autofill plus light editing. In use across 19,000+ articles and 10+ brands, including 11 Vogue markets, as of early 2024 and higher since. Editors called it \"like lego blocks, but digital,\" which is about the nicest thing an editor will say about a tool they didn't ask to learn.",
              "On the commercial side, I'll be straight about what I can and can't claim. The block carried real commerce and pulled its weight during peak moments like Black Friday, but the revenue numbers lived with the business, not with design, so I'm not going to put a figure on something I didn't own or measure.",
            ],
          },
          { type: "image", src: "", alt: "Reader-facing rendered list on a real published article, e.g. the Wired work-from-home gift guide", caption: "" },
        ],
      },
      {
        type: "subcase",
        id: "accordion",
        title: "Accordion",
        subtitle: "the first block, before there was a pattern",
        meta: "Product Designer · Cia Bernales (PPM), Rakshita Asileti (PM), Vinay Prabhakaran (EM), Irfan Rafeek (DS)",
        blocks: [
          {
            type: "text",
            heading: "The problem",
            paras: [
              "This one came first, before any of the autofill work existed. It's where the broader idea started: take something only engineers could make and hand it to editors. Collapsible sections existed on the sites, but engineers built them, and only for specific event pages, working from handed-over content. For major pages and long-form articles, editors couldn't make one at all, and no Accordion block existed. So this was net-new scope, and brands wanted it.",
              "The point was range. An accordion isn't just an FAQ. Editors use it for product reviews, for TLDR summaries, for tucking detail inside an article, and it can sit inside other body fields, nesting things like tables, product lists, or a ToC. I put deliberate limits on where it could go, though, since letting it nest anywhere would have clashed with the front-end design system.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "A block editors insert from the toolbar, with a heading and a body field, that collapses to keep things compact. Editors can stack accordions and nest supported blocks inside them. There's also a small behavior I added on an editor's request: select some text and an H2, and it converts that into an accordion. Slightly odd, but it's what they asked for, and it shipped.",
              "Worth saying how it got built, because it wasn't the usual designer handoff. I built the component myself in Figma's dev mode, with ChatGPT alongside, back in 2023, and handed engineering a working code file. Two days to implement, and two weeks after testing it was live across every brand that supported it.",
            ],
          },
          { type: "image", src: "", alt: "Accordion block in editor + live TLDR on a Self article", caption: "" },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "Over 3,700 articles and galleries used it within two months, and it became the default for TLDR sections. Vogue leans on it heavily, and usage has climbed well past that early figure since.",
            ],
          },
        ],
      },
      {
        type: "subcase",
        id: "seo-markers",
        title: "SEO Markers",
        subtitle: "the last block, pattern settled",
        meta: "Product Designer · Rakshita Asileti (PM), Vinay Prabhakaran (EM), Ashish Rena (SE), Indrani Gostu (SE), and the SEO team",
        blocks: [
          {
            type: "text",
            heading: "The problem",
            paras: [
              "By the time this shipped, the block model was established enough that a new one slotted in without much drama. SEO was a separate team's domain, set at the brand-settings level, which meant engineering time for classification and upkeep across every content type. I worked with that team on the concept: they built the schema, and after a few rounds I pushed it further into a direct, single-action capability editors could use themselves. What was at stake here was reach. Content that isn't structured for search surfaces poorly, and a piece readers never find might as well not have shipped, so this ran past editor convenience into whether the work got seen at all.",
              "The hard part wasn't the mechanism, it was making it feel native. In my experience, editors are used to SEO living in backend infrastructure at the site level, slow to apply and usually handled only by SEO specialists. Dropping a marking tool into the writing surface risked feeling alien, bolted onto a CMS that never had such a thing. Making it read as a first-class part of the editor, not a foreign object, was the actual design problem.",
            ],
          },
          {
            type: "text",
            heading: "What I did",
            paras: [
              "Editors apply a marker to a span of content (text, embeds, tables, accordions, anything in a body field) to flag it for FAQ schema markup, so it can surface as a rich snippet. The markers have a start and end tag that drag across the content, and they live in the editing toolbar. One deliberate action in the writing surface, instead of a classification rule maintained forever per content type. It's gated to the editors who handle SEO rather than open to everyone, and it works across all markets except the Middle East ones.",
              "This fit where search was heading anyway, toward structured, user-focused content under E-E-A-T (Experience, Expertise, Authoritativeness, Trust) and mobile-first indexing.",
            ],
          },
          { type: "image", src: "", alt: "SEO Markers in use — start and end tags dragged across content, toolbar entry point visible", caption: "" },
          {
            type: "text",
            heading: "Outcome",
            paras: [
              "Usage in the first three months was close to 43,000 across all owned-and-operated brands. I can't share the performance numbers behind it, those sat with the SEO team, but the adoption tells you editors actually reached for it.",
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
          "These didn't ship into one clean, obedient environment. Every market has its own content classification, brand styling, and language direction, right-to-left scripts included, and some had never used anchor linking until these blocks introduced the idea. The blocks had to behave across all of it. That variation, not the core build, is most of why this work stretched across the better part of a year.",
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
          "Spot the pattern sooner. The autofill-and-anchor approach only clicked into place at Table of Contents, which means Accordion, the first one, never got to use it. If I ran this again I'd treat the shared block pattern as an explicit internal standard from day one, so the earliest blocks inherited it instead of the system catching up to itself halfway through.",
          "One thing I didn't expect: editors reached for these blocks on content they were never designed for. ToC and Accordion in particular get used for all sorts of odd things, enough that it's become a running joke internally. I'd file that under adoption rather than misuse. These four are among the most-used features in the CMS, and the flexible ones get stretched. Worth designing for next time, not against.",
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
