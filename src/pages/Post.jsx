import { useParams, Link } from "react-router-dom";
import Frame from "../components/Frame";
import { postBySlug } from "../data/posts";

export default function Post() {
  const { slug } = useParams();
  const post = postBySlug(slug);

  if (!post) {
    return (
      <>
        <Frame />
        <div className="wrap">
          <section className="intro">
            <p>Post not found.</p>
            <p className="soft">
              <Link className="inline-link" to="/writing">
                Back to writing
              </Link>
            </p>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <Frame />
      <div className="wrap">
        <header className="head" style={{ paddingBottom: 0 }}>
          <div>
            <div className="name">{post.title}</div>
            <div
              className="role"
              style={{ fontFamily: "var(--mono)", fontSize: 13 }}
            >
              {post.date}
            </div>
          </div>
        </header>

        <section style={{ paddingTop: "clamp(32px,5vw,56px)" }}>
          {post.body.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                letterSpacing: "-0.011em",
                maxWidth: "64ch",
                marginBottom: "1.3em",
              }}
            >
              {para}
            </p>
          ))}
        </section>
      </div>
    </>
  );
}
