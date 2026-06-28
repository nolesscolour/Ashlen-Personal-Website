import { useParams, Link } from "react-router-dom";
import Frame from "../components/Frame";
import SectionRail from "../components/SectionRail";
import { projects, projectBySlug } from "../data/projects";

export default function Project() {
  const { slug } = useParams();
  const proj = projectBySlug(slug);

  if (!proj) {
    return (
      <>
        <Frame />
        <div className="wrap">
          <section className="intro">
            <p>Project not found.</p>
            <p className="soft">
              <Link className="inline-link" to="/work">
                Back to work
              </Link>
            </p>
          </section>
        </div>
      </>
    );
  }

  const idx = projects.findIndex((p) => p.slug === slug);
  const prevP = idx > 0 ? projects[idx - 1] : null;
  const nextP = idx < projects.length - 1 ? projects[idx + 1] : null;

  const isBlocks = proj.body.length > 0 && typeof proj.body[0] === "object";

  const railSections = isBlocks
    ? proj.body
        .filter((b) => b.id && (b.type === "text" || b.type === "subcase"))
        .map((b) => ({
          id: b.id,
          label: b.type === "subcase" ? b.title : b.heading || b.label,
          sub: b.type === "subcase",
        }))
    : [];

  const ph = (label) => (
    <div style={{ width: "100%", aspectRatio: "16 / 10", background: "#f1f1f1", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 11, color: "#aeaeae", padding: 16, textAlign: "center" }}>{label}</div>
  );

  const renderBlock = (b, i) => {
    if (b.type === "text") {
      return (
        <section key={i} id={b.id || undefined} style={{ paddingTop: 0, scrollMarginTop: 96 }}>
          {b.label ? <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", marginBottom: 10 }}>{b.label}</div> : null}
          {b.heading ? <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 14 }}>{b.heading}</div> : null}
          {b.paras.map((p, j) => (
            <p key={j} style={{ fontSize: 17, lineHeight: 1.5, letterSpacing: "-0.01em", marginBottom: "1.2em" }}>{p}</p>
          ))}
        </section>
      );
    }
    if (b.type === "image") {
      return (
        <section key={i} style={{ paddingTop: 0, marginBottom: 16 }}>
          {b.src ? <img src={b.src} alt={b.alt || ""} style={{ width: "100%", height: "auto", display: "block" }} /> : ph(b.alt || "image")}
          {b.caption ? <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)", marginTop: 8 }}>{b.caption}</div> : null}
        </section>
      );
    }
    if (b.type === "pair") {
      return (
        <section key={i} style={{ paddingTop: 0, marginBottom: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {b.left?.src ? <img src={b.left.src} alt={b.left.alt || ""} style={{ width: "100%", height: "auto", display: "block" }} /> : ph(b.left?.alt || "image")}
          {b.right?.src ? <img src={b.right.src} alt={b.right.alt || ""} style={{ width: "100%", height: "auto", display: "block" }} /> : ph(b.right?.alt || "image")}
        </section>
      );
    }
    if (b.type === "subcase") {
      return (
        <section key={i} id={b.id || undefined} style={{ scrollMarginTop: 96, borderTop: "1px solid var(--hair)", marginTop: 40, paddingTop: 32 }}>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em" }}>{b.title}</div>
          {b.subtitle ? <div style={{ fontSize: 18, color: "var(--ink-soft)", marginBottom: 14 }}>{b.subtitle}</div> : null}
          {b.meta ? <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", maxWidth: "62ch", marginBottom: 24 }}>{b.meta}</div> : null}
          {b.blocks.map((inner, j) => renderBlock(inner, j))}
        </section>
      );
    }
    return null;
  };

  return (
    <>
      {railSections.length > 0 && <SectionRail sections={railSections} />}
      <Frame wide={isBlocks} />
      <div className={isBlocks ? "wrap wide" : "wrap"}>
        <header className="head" style={{ paddingBottom: 0 }}>
          <div>
            <Link
              to="/work"
              className="inline-link"
              style={{ fontFamily: "var(--mono)", fontSize: 13, display: "inline-block", marginBottom: 18 }}
            >
              ← All work
            </Link>
            <div className="name">{proj.title}</div>
            {proj.subtitle ? (
              <div style={{ fontSize: 18, color: "var(--ink-soft)", maxWidth: "48ch", marginTop: 6 }}>{proj.subtitle}</div>
            ) : null}
            {proj.meta ? (
              <div style={{ borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)", marginTop: 22, paddingTop: 18, paddingBottom: 18, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)" }}>
                <div className="proj-meta-cols">
                  <div><div style={{ color: "var(--ink)" }}>ROLE</div>{proj.meta.role}</div>
                  <div><div style={{ color: "var(--ink)" }}>TIMELINE</div>{proj.meta.timeline}</div>
                  <div><div style={{ color: "var(--ink)" }}>YEAR</div>{proj.meta.year}</div>
                </div>
                <div><div style={{ color: "var(--ink)" }}>TEAM</div><span style={{ display: "block" }}>{proj.meta.team}</span></div>
              </div>
            ) : (
              <div className="role" style={{ fontFamily: "var(--mono)", fontSize: 13 }}>
                {proj.type} · {proj.year} · {proj.role}
              </div>
            )}
          </div>
        </header>

        {isBlocks ? (
          <div style={{ paddingTop: "clamp(32px,5vw,56px)" }}>
            {proj.body.map((b, i) => renderBlock(b, i))}
          </div>
        ) : (
          <>
            <section style={{ paddingTop: "clamp(32px,5vw,56px)" }}>
              {proj.images[0]?.src ? (
                <img src={proj.images[0].src} alt={proj.images[0].alt || proj.title} style={{ width: "100%", height: "auto", display: "block" }} />
              ) : (
                ph("lead image")
              )}
            </section>
            <section style={{ paddingTop: 0 }}>
              {proj.body.map((para, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.5, letterSpacing: "-0.01em", maxWidth: "62ch", marginBottom: "1.2em" }}>{para}</p>
              ))}
            </section>
            {proj.images.slice(1).length > 0 && (
              <section style={{ paddingTop: 0 }}>
                {proj.images.slice(1).map((im, i) => (
                  <img key={i} src={im.src} alt={im.alt || ""} style={{ width: "100%", height: "auto", display: "block", marginBottom: 16 }} />
                ))}
              </section>
            )}
          </>
        )}

        {/* prev / next */}
        <section style={{ paddingTop: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid var(--hair)",
              paddingTop: 20,
              fontSize: 15,
            }}
          >
            <span>
              {prevP ? (
                <Link className="inline-link" to={`/work/${prevP.slug}`}>
                  ← {prevP.title}
                </Link>
              ) : (
                <span />
              )}
            </span>
            <span>
              {nextP ? (
                <Link className="inline-link" to={`/work/${nextP.slug}`}>
                  {nextP.title} →
                </Link>
              ) : (
                <span />
              )}
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
