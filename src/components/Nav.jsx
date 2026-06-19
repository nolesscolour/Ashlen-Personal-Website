import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const pages = [
  { to: "/work", label: "Index" },
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/writing", label: "Writing" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // lock body scroll when the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const link = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <div className={open ? "nav open" : "nav"}>
      <div className="nav-bar">
        <Link to="/" className="nav-name" onClick={() => setOpen(false)}>
          Ashlen
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="nav-toggle-icon">{open ? "\u2715" : "+"}</span>
        </button>
      </div>

      <div className="nav-panel">
        <div className="nav-panel-inner">
          <nav className="nav-links">
            {pages.map((p) => (
              <NavLink
                key={p.label}
                to={p.to}
                end={p.end}
                className={link}
                onClick={() => setOpen(false)}
              >
                {p.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-foot">
            <div className="nav-legal">
              Legal and policies © 2025 Ashlen. All rights reserved.
            </div>
            <div className="nav-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}