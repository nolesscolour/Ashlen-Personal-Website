import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Floater() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const toggle = (e) => {
    if (window.matchMedia("(hover: none)").matches) {
      setOpen((o) => !o);
      e.stopPropagation();
    }
  };

  const link = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div className={open ? "floater open" : "floater"} ref={ref}>
      <div className="mark" onClick={toggle}>
        A
      </div>
      <nav>
        <div>
          <NavLink to="/" className={link} end>
            Home
          </NavLink>
          <NavLink to="/gallery" className={link}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={link}>
            About
          </NavLink>
          <NavLink to="/writing" className={link}>
            Writing
          </NavLink>
        </div>
      </nav>
    </div>
  );
}