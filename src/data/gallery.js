// Two collections feed the Gallery tabs. Drop your .webp files in /public/gallery/
// and point src at them, e.g. src: "/gallery/booking-ui.webp"
// w and h are the natural pixel dimensions — they let the layout reserve space
// so images don't jump as they load. Caption is optional.

export const designs = [
  { src: "/gallery/designs/test.webp", w: 1200, h: 1500, caption: "Booking UI" },
  { src: "", w: 1600, h: 1000, caption: "Opal concept" },
  { src: "", w: 1200, h: 1200, caption: "Greenlite brand" },
  { src: "", w: 1400, h: 1050, caption: "Viewport UI" },
  { src: "", w: 1000, h: 1400, caption: "Flyer" },
  { src: "", w: 1600, h: 900, caption: "Rebrand MFM" },
  { src: "", w: 1200, h: 1500, caption: "Tini Table" },
  { src: "", w: 1400, h: 1000, caption: "Visual study" },
  { src: "", w: 1200, h: 1600, caption: "Brand exploration" },
];

export const photos = [
  { src: "/gallery/photos/diksha 1.webp", w: 1600, h: 1067, caption: "Diksha" },
  { src: "", w: 1067, h: 1600, caption: "" },
  { src: "", w: 1600, h: 1067, caption: "" },
  { src: "", w: 1200, h: 1200, caption: "" },
  { src: "", w: 1600, h: 900, caption: "" },
  { src: "", w: 1067, h: 1600, caption: "" },
];

// Home page "Craft" strip — a short curated set of glimpses (UI only)
export const craft = [
  { src: "gallery/designs/test.webp", w: 1200, h: 900, caption: "Sadharan Plate" },
  { src: "", w: 1200, h: 900, caption: "UI 02" },
  { src: "", w: 1200, h: 900, caption: "UI 03" },
  { src: "", w: 1200, h: 900, caption: "UI 04" },
  { src: "", w: 1200, h: 900, caption: "UI 05" },
  { src: "", w: 1200, h: 900, caption: "UI 06" },
  { src: "", w: 1200, h: 900, caption: "UI 07" },
];
