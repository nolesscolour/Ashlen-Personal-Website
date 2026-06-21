import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="7" height="7" fill="currentColor" />
      <rect x="10" y="1" width="7" height="7" fill="currentColor" />
      <rect x="1" y="10" width="7" height="7" fill="currentColor" />
      <rect x="10" y="10" width="7" height="7" fill="currentColor" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="2" width="16" height="2" fill="currentColor" />
      <rect x="1" y="8" width="16" height="2" fill="currentColor" />
      <rect x="1" y="14" width="16" height="2" fill="currentColor" />
    </svg>
  );
}

export default function Work() {
  const [view, setViewRaw] = useState("grid"); // grid | list
  const setView = (v) => {
    setViewRaw(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [hover, setHover] = useState(null);  // slug of hovered list row
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef(null);

  const onMove = (e) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const hovered = projects.find((p) => p.slug === hover);

  return (
    <>
      <div className="wrap wide">
        <header className="head">
          <div>
            <div className="name">Work</div>
            <div className="role">Selected projects</div>
          </div>
        </header>
      </div>

      {/* sticky bar: section title left, view icons right */}
      <div className="work-bar">
        <div className="work-bar-inner">
          <span className="work-bar-title">Projects</span>
          <div className="work-switch">
            <button
              className={view === "grid" ? "on" : ""}
              onClick={() => setView("grid")}
              aria-label="Grid view"
            >
              <GridIcon />
            </button>
            <button
              className={view === "list" ? "on" : ""}
              onClick={() => setView("list")}
              aria-label="List view"
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>

      {/* full-bleed content */}
      <div className="work-body">
        {view === "grid" ? (
          <div className="work-grid">
            {projects.map((p) => (
              <Link className="work-tile" to={`/work/${p.slug}`} key={p.slug}>
                {p.images[0]?.src ? (
                  <img
                    src={p.images[0].src}
                    alt={p.images[0].alt || p.title}
                    className="work-cover"
                  />
                ) : (
                  <div className="work-cover work-ph">{p.title}</div>
                )}
                <div className="work-info">
                  <div className="work-ttl">{p.title}</div>
                  <div className="work-pills">
                    <span className="pill">{p.type}</span>
                    <span className="pill">{p.role}</span>
                    <span className="pill">{p.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div
            className="work-list"
            ref={wrapRef}
            onMouseMove={onMove}
          >
            <div className="work-row work-row-head">
              <span>Company</span>
              <span>Type</span>
              <span>Role</span>
              <span>Year</span>
            </div>
            {projects.map((p) => (
              <Link
                className="work-row"
                to={`/work/${p.slug}`}
                key={p.slug}
                onMouseEnter={() => setHover(p.slug)}
                onMouseLeave={() => setHover(null)}
              >
                <span className="work-row-co">{p.title}</span>
                <span className="work-row-d">{p.type}</span>
                <span className="work-row-d">{p.role}</span>
                <span className="work-row-d">{p.year}</span>
              </Link>
            ))}

            {/* hover preview floats near cursor */}
            {hovered && (
              <div
                className="work-preview"
                style={{ left: pos.x, top: pos.y }}
              >
                {hovered.images[0]?.src ? (
                  <img src={hovered.images[0].src} alt={hovered.title} />
                ) : (
                  <div className="work-preview-ph">{hovered.title}</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}