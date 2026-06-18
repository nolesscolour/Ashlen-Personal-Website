import { useState } from "react";
import Lightbox from "../components/Lightbox";
import { designs, photos } from "../data/gallery";

export default function Gallery() {
  const [tab, setTab] = useState("designs");
  const items = tab === "designs" ? designs : photos;
  const [lb, setLb] = useState(null);
  const close = () => setLb(null);
  const prev = () => setLb((i) => (i - 1 + items.length) % items.length);
  const next = () => setLb((i) => (i + 1) % items.length);
  const switchTab = (t) => {
    setTab(t);
    setLb(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="wrap wide">
        <header className="head">
          <div>
            <div className="name">Gallery</div>
            <div className="role">Designs and photography</div>
          </div>
        </header>
      </div>

      <div className="gal-tabbar">
        <div className="gal-tabbar-inner">
          <div className="tabs">
            <button
              className={tab === "designs" ? "on" : ""}
              onClick={() => switchTab("designs")}
            >
              Designs
            </button>
            <button
              className={tab === "photos" ? "on" : ""}
              onClick={() => switchTab("photos")}
            >
              Photos
            </button>
          </div>
        </div>
      </div>

      <div className="gal-grid">
        <div className="masonry">
          {items.map((it, i) => (
            <div className="mitem" key={`${tab}-${i}`} onClick={() => setLb(i)}>
              {it.src ? (
                <img
                  src={it.src}
                  alt={it.caption || ""}
                  width={it.w}
                  height={it.h}
                  loading="lazy"
                />
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
      </div>

      <Lightbox
        items={items}
        index={lb}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}