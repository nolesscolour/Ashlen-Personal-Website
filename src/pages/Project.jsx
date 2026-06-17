import { useParams, Link } from "react-router-dom";
import Frame from "../components/Frame";
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
              <Link className="inline-link" to="/">
                Back home
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

  return (
    <>
      <Frame />
      <div className="wrap">
        <header className="head" style={{ paddingBottom: 0 }}>
          <div>
            <div className="name">{proj.title}</div>
            <div className="role" style={{ fontFamily: "var(--mono)", fontSize: 13 }}>
              {proj.type} · {proj.year} · {proj.role}
            </div>
          </div>
        </header>

        {/* lead image */}
        <section style={{ paddingTop: "clamp(32px,5vw,56px)" }}>
          {proj.images[0]?.src ? (
            <img
              src={proj.images[0].src}
              alt={proj.images[0].alt || proj.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 10",
                background: "#f1f1f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "#aeaeae",
              }}
            >
              lead image
            </div>
          )}
        </section>

        {/* body */}
        <section style={{ paddingTop: 0 }}>
          {proj.body.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
                maxWidth: "62ch",
                marginBottom: "1.2em",
              }}
            >
              {para}
            </p>
          ))}
        </section>

        {/* remaining images, stacked */}
        {proj.images.slice(1).length > 0 && (
          <section style={{ paddingTop: 0 }}>
            {proj.images.slice(1).map((im, i) => (
              <img
                key={i}
                src={im.src}
                alt={im.alt || ""}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  marginBottom: 16,
                }}
              />
            ))}
          </section>
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
