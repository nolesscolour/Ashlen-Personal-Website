import { useEffect, useCallback } from "react";

// items: array of { src, caption }
// index: current index (number) or null when closed
// onClose, onPrev, onNext: handlers
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const open = index !== null && index !== undefined;

  const handleKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    },
    [open, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [open, handleKey]);

  useEffect(() => {
    if (!open) return;
    [index - 1, index + 1].forEach((i) => {
      const it = items[(i + items.length) % items.length];
      if (it && it.src) {
        const img = new Image();
        img.src = it.src;
      }
    });
  }, [open, index, items]);

  if (!open) return null;
  const cur = items[index];

  return (
    <div className="lb" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
        {cur.src ? (
          <img className="lb-img" src={cur.src} alt={cur.caption || ""} />
        ) : (
          <div className="lb-ph">{cur.caption || "image"}</div>
        )}
      </div>

      <div className="lb-bar" onClick={(e) => e.stopPropagation()}>
        <button
          className="lb-arrow"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >‹</button>
        {cur.caption && <span className="lb-bar-cap">{cur.caption}</span>}
        <button
          className="lb-arrow"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >›</button>
      </div>
    </div>
  );
}