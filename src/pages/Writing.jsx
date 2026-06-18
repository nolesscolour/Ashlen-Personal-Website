import Frame from "../components/Frame";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Writing() {
  return (
    <>
      <Frame />
      <div className="wrap">
        <header className="head">
          <div>
            <div className="name">Writing</div>
            <div className="role">Notes and essays</div>
          </div>
        </header>

        <section>
          <div className="label">
            <span>
              Posts
            </span>
          </div>
          {posts.map((p) => (
            <Link className="row" to={`/writing/${p.slug}`} key={p.slug}>
              <span className="yr" style={{ width: 70 }}>
                {p.date}
              </span>
              <span className="ttl">{p.title}</span>
              <span className="lead" />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
