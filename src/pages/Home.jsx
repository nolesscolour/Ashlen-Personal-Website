import { useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import Row from "../components/Row";
import Strip from "../components/Strip";
import Lightbox from "../components/Lightbox";
import { projects } from "../data/projects";
import { craft } from "../data/gallery";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [lb, setLb] = useState(null);
  const close = () => setLb(null);
  const prev = () => setLb((i) => (i - 1 + craft.length) % craft.length);
  const next = () => setLb((i) => (i + 1) % craft.length);

  return (
    <>
      <Frame />
      <div className="wrap">
        <header className="head">
          <div>
            <div className="name">Ashlen</div>
            <div className="role">Designer</div>
          </div>
        </header>

        <section className="intro">
          <p>
            I design interfaces and the systems around them, with the occasional
            brand. I care about restraint, hierarchy, and the small decisions
            most people scroll past. If you're building something and want a
            design partner, reach out at{" "}
            <a href="mailto:hi@ashlen.studio">hi@ashlen.studio</a>.
          </p>
          <p className="soft">
            Based in Kolkata, working remotely. Background in marketing and
            product.
          </p>
        </section>
      </div>

      <section className="set set-wide">
        <div className="set-inner">
          <div className="label">
            <span>
              Craft
            </span>
            <Link className="view-all" to="/gallery">
              View all
            </Link>
          </div>
          <Strip items={craft} onOpen={(i) => setLb(i)} />
        </div>
      </section>

      <div className="wrap">
        <section className="index">
          <div className="label">
            <span>
              Projects
            </span>
          </div>
          {projects.map((p) => (
            <Row
              key={p.slug}
              year={p.year}
              title={p.title}
              meta={p.type}
              to={`/work/${p.slug}`}
            />
          ))}
        </section>

        <section className="contact">
          <div className="line" style={{ marginBottom: "clamp(28px, 4vw, 44px)" }}>
            Let's build something for the world.{" "}
            <a className="inline-link" href="mailto:hi@ashlen.studio">
              hi@ashlen.studio
            </a>
          </div>
          <ContactForm />
        </section>
      </div>

      <Lightbox
        items={craft}
        index={lb}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
