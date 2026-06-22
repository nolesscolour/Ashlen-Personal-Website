import { useState } from "react";

function Chevron({ open }) {
  return (
    <svg className={open ? "exp-chev open" : "exp-chev"} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function ExperienceAccordion({ items }) {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));
  return (
    <div className="exp-acc">
      {items.map((e, i) => (
        <div className={open === i ? "exp-item open" : "exp-item"} key={i}>
          <button className="exp-head" onClick={() => toggle(i)} aria-expanded={open === i}>
            <span className="exp-photo">{e.photo ? <img src={e.photo} alt={e.company} /> : null}</span>
            <span className="exp-id">
              <span className="exp-co">{e.company}</span>
              <span className="exp-type">{e.type}</span>
            </span>
            <span className="exp-dates">{e.start} — {e.end}</span>
            <Chevron open={open === i} />
          </button>
          <div className="exp-detail">
            <div className="exp-detail-inner">
              {e.detail.map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}