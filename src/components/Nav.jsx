import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Desktop strip. "Ashlen" goes home.
const pages = [
  { to: "/work", label: "Work", num: "01" },
  { to: "/gallery", label: "Gallery", num: "02" },
  { to: "/about", label: "About", num: "03" },
];

// Mobile sheet also lists Home.
const mobilePages = [{ to: "/", label: "Home", end: true }, ...pages];

// Dummy links: swap in your real profile URLs.
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
];

const EMAIL = "hi@ashlen.studio";
const RESUME = "/resume.pdf";
const MOBILE_QUERY = "(max-width: 760px)";

const readProgress = () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  return max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0;
};

export default function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const dFillRef = useRef(null);
  const barRef = useRef(null);
  const fillRef = useRef(null);
  const hideTimer = useRef(0);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);
  const connectRef = useRef(null);
  const connectBtnRef = useRef(null);
  const firstConnectRef = useRef(null);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  const paintProgress = () => {
    const pct = readProgress() + "%";
    if (dFillRef.current) dFillRef.current.style.width = pct;
    if (fillRef.current) fillRef.current.style.width = pct;
  };

  // scroll progress: desktop bar always tracks, mobile bar flashes then hides
  useEffect(() => {
    const onScroll = () => {
      paintProgress();
      if (barRef.current && !menuOpenRef.current) barRef.current.classList.add("show");
      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        if (barRef.current) barRef.current.classList.remove("show");
      }, 1500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(hideTimer.current);
    };
  }, []);

  // any navigation (links, back button) closes everything and resets progress
  useEffect(() => {
    setMenuOpen(false);
    setConnectOpen(false);
    const id = requestAnimationFrame(paintProgress);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // crossing the breakpoint closes both, so a locked body can't leak to desktop
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => {
      setMenuOpen(false);
      setConnectOpen(false);
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  // mobile sheet: scroll lock, hide progress, keep closed links out of tab order
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen && barRef.current) barRef.current.classList.remove("show");
    if (panelRef.current) panelRef.current.inert = !menuOpen;
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // desktop dropdown: focus first item on open, close on outside click
  useEffect(() => {
    if (!connectOpen) return;
    if (firstConnectRef.current) firstConnectRef.current.focus();
    const onDown = (e) => {
      if (connectRef.current && !connectRef.current.contains(e.target)) {
        setConnectOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [connectOpen]);

  // Escape closes whichever is open and returns focus to its button
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (connectOpen) {
        setConnectOpen(false);
        if (connectBtnRef.current) connectBtnRef.current.focus();
      }
      if (menuOpen) {
        setMenuOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [connectOpen, menuOpen]);

  const dLink = ({ isActive }) => (isActive ? "dnav-link active" : "dnav-link");
  const mLink = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
  const year = new Date().getFullYear();

  return (
    <>
      {/* ---------- desktop strip ---------- */}
      <header className="dnav">
        <div className="dnav-inner">
          <Link to="/" className="dnav-name">
            Ashlen Singh
          </Link>

          <nav className="dnav-links" aria-label="Primary">
            {pages.map((p) => (
              <NavLink key={p.to} to={p.to} className={dLink}>
                <span className="dnav-num">{p.num}</span>
                {p.label}
              </NavLink>
            ))}
          </nav>

          <div className="dnav-actions">
            <a className="dnav-btn dnav-btn-solid" href={RESUME} target="_blank" rel="noopener">
              Résumé
              <span aria-hidden="true">↗</span>
            </a>

            <div
              className="dnav-connect"
              ref={connectRef}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setConnectOpen(false);
              }}
            >
              <button
                ref={connectBtnRef}
                type="button"
                className="dnav-btn"
                aria-expanded={connectOpen}
                aria-controls="dnav-connect-menu"
                onClick={() => setConnectOpen((o) => !o)}
              >
                Connect
                <span className="dnav-plus" aria-hidden="true">+</span>
              </button>

              {connectOpen && (
                <ul id="dnav-connect-menu" className="dnav-menu">
                  {socials.map((s, i) => (
                    <li key={s.label}>
                      <a
                        ref={i === 0 ? firstConnectRef : undefined}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setConnectOpen(false)}
                      >
                        {s.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href={`mailto:${EMAIL}`} onClick={() => setConnectOpen(false)}>
                      Email
                      <span aria-hidden="true">→</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <span className="dnav-progress" ref={dFillRef} aria-hidden="true" />
      </header>

      {/* ---------- mobile bar + sheet (unchanged look) ---------- */}
      <div className={menuOpen ? "nav open" : "nav"}>
        <div className="nav-bar">
          <div className="nav-inner">
            <div className="nav-row">
              <Link to="/" className="nav-name" onClick={() => setMenuOpen(false)}>
                Ashlen
              </Link>
              <button
                ref={toggleRef}
                type="button"
                className="nav-toggle"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="nav-panel"
              >
                <span>{menuOpen ? "Close" : "Menu"}</span>
                <span className="nav-toggle-icon" aria-hidden="true">+</span>
              </button>
            </div>
            <div className="nav-progress" ref={barRef}>
              <span className="nav-progress-fill" ref={fillRef} />
            </div>
          </div>
        </div>

        <div className="nav-panel" id="nav-panel" ref={panelRef}>
          <div className="nav-panel-inner">
            <nav className="nav-links" aria-label="Primary">
              {mobilePages.map((p) => (
                <NavLink
                  key={p.to}
                  to={p.to}
                  end={p.end}
                  className={mLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {p.label}
                </NavLink>
              ))}
            </nav>

            <div className="nav-foot">
              <div className="nav-legal">© {year} Ashlen. All rights reserved.</div>
              <div className="nav-socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
                <a href={`mailto:${EMAIL}`}>Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}