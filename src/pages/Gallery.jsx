import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import { designs, photos } from "../data/gallery";
import { experiments } from "../data/experiments";

const isLive = (url) => typeof url === "string" && /^https?:\/\//.test(url);

// placeholders show while developing; production only shows real links
const shownExperiments = import.meta.env.DEV
  ? experiments
  : experiments.filter((x) => isLive(x.liveUrl));

const TABS = [
  { id: "design", label: "Design" },
  ...(shownExperiments.length ? [{ id: "experiments", label: "AI Experiments" }] : []),
  { id: "photo", label: "Photo" },
];

export default function Gallery() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const fromHash = (hash || "").replace("#", "");
  const tab = TABS.some((t) => t.id === fromHash) ? fromHash : "design";
  const items = tab === "photo" ? photos : designs;

  const [lb, setLb] = useState(null);
  const close = () => setLb(null);
  const prev = () => setLb((i) => (i - 1 + items.length) % items.length);
  const next = () => setLb((i) => (i + 1) % items.length);

  // a tab change from anywhere (click, pasted URL) closes the lightbox
  useEffect(() => {
    setLb(null);
  }, [tab]);

  const switchTab = (id) => {
    if (id === tab) return;
    navigate(`/gallery#${id}`, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="wrap wide">
        <header className="head">
          <div>
            <div className="name">Gallery</div>
            <div className="role">Design, experiments and photography</div>
          </div>
        </header>
      </div>

      <div className="gal-tabbar">
        <div className="gal-tabbar-inner">
          <div className="tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={tab === t.id ? "on" : ""}
                aria-pressed={tab === t.id}
                onClick={() => switchTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="gal-grid">
        {tab === "experiments" ? (
          <div className="work-grid">
            {shownExperiments.map((x, i) => {
              const live = isLive(x.liveUrl);
              const inner = (
                <>
                  {x.thumb ? (
                    <img src={x.thumb} alt={x.title} className="work-cover" loading="lazy" />
                  ) : (
                    <div className="work-cover work-ph">{x.title}</div>
                  )}
                  <div className="work-info">
                    <div className="work-ttl">{x.title}</div>
                    <div className="work-pills">
                      {live && <span className="pill pill-live">Live ↗</span>}
                      {(x.tags || []).map((t, j) => (
                        <span className="pill" key={j}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );
              return live ? (
                <a
                  className="work-tile"
                  href={x.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${x.title}-${i}`}
                >
                  {inner}
                </a>
              ) : (
                <div className="work-tile" key={`${x.title}-${i}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="masonry">
            {items.map((it, i) => (
              <div className="mitem" key={`${tab}-${i}`} onClick={() => setLb(i)}>
                {it.src ? (
                  <img src={it.src} alt={it.caption || ""} width={it.w} height={it.h} loading="lazy" />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: `${it.w} / ${it.h}`,
                      background: "#f1f1f1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "#aeaeae",
                    }}
                  >
                    {it.caption || `${tab} ${i + 1}`}
                  </div>
                )}
                {it.caption && <div className="cap">{it.caption}</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {tab !== "experiments" && (
        <Lightbox items={items} index={lb} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}