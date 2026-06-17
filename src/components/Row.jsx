import { Link } from "react-router-dom";

// A single list row with the dotted leader. `to` makes it a link.
export default function Row({ year, title, meta, to }) {
  const inner = (
    <>
      <span className="yr">{year}</span>
      <span className="ttl">{title}</span>
      <span className="lead" />
      <span className="meta">{meta}</span>
    </>
  );
  return to ? (
    <Link className="row" to={to}>
      {inner}
    </Link>
  ) : (
    <div className="row">{inner}</div>
  );
}
