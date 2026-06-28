import { useEffect, useRef } from "react";

export default function SectionRail({ sections }) {
  const rootRef = useRef(null);
  const itemRefs = useRef({});
  const pillRefs = useRef({});
  const activeId = useRef(sections[0]?.id || "");

  const setActive = (id) => {
    if (id === activeId.current) return;
    const prev = itemRefs.current[activeId.current];
    if (prev) {
      prev.classList.remove("on");
      const pp = pillRefs.current[activeId.current];
      if (pp && !prev.matches(":hover")) pp.style.display = "none";
    }
    activeId.current = id;
    const next = itemRefs.current[id];
    if (next) {
      next.classList.add("on");
      const np = pillRefs.current[id];
      if (np) { np.textContent = sections.find((s) => s.id === id)?.label || ""; np.className = "secrail-pill act"; np.style.display = ""; }
    }
  };

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onEnter = (s) => {
    const p = pillRefs.current[s.id];
    if (p) { p.textContent = s.label; p.className = "secrail-pill hov"; p.style.display = ""; }
  };
  const onLeave = (s) => {
    const p = pillRefs.current[s.id];
    if (!p) return;
    if (s.id === activeId.current) { p.className = "secrail-pill act"; p.style.display = ""; }
    else { p.style.display = "none"; }
  };

  return (
    <div className="secrail" ref={rootRef}>
      {sections.map((s) => (
        <button
          key={s.id}
          ref={(el) => (itemRefs.current[s.id] = el)}
          className={`secrail-item${s.id === activeId.current ? " on" : ""}${s.sub ? " sub" : ""}`}
          onMouseEnter={() => onEnter(s)}
          onMouseLeave={() => onLeave(s)}
          onClick={() => jump(s.id)}
          aria-label={s.label}
        >
          <span
            ref={(el) => (pillRefs.current[s.id] = el)}
            className={`secrail-pill${s.id === activeId.current ? " act" : ""}`}
            style={{ display: s.id === activeId.current ? "" : "none" }}
          >
            {s.id === activeId.current ? s.label : ""}
          </span>
          <span className="secrail-tick" />
        </button>
      ))}
    </div>
  );
}