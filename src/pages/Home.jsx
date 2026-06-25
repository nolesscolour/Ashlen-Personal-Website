import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import Row from "../components/Row";
import Strip from "../components/Strip";
import Lightbox from "../components/Lightbox";
import { projects } from "../data/projects";
import { craft } from "../data/gallery";
import ContactForm from "../components/ContactForm";
import ExperienceAccordion from "../components/ExperienceAccordion";

const experience = [
  { company: "Condé Nast", type: "Publishing", start: "Jan 2024", end: "Present", photo: "", detail: ["Placeholder line one about the role and what it involved.", "Placeholder line two covering scope, team, and what shipped.", "Placeholder line three with an outcome or highlight.", "Placeholder line four, optional."] },
  { company: "Ecole Intuit Lab", type: "Design School", start: "Mar 2023", end: "Dec 2023", photo: "", detail: ["Placeholder line one about the role and what it involved.", "Placeholder line two covering scope, team, and what shipped.", "Placeholder line three with an outcome or highlight."] },
  { company: "Konnect Box", type: "Agency", start: "Jun 2022", end: "Feb 2023", photo: "", detail: ["Placeholder line one about the role and what it involved.", "Placeholder line two covering scope, team, and what shipped.", "Placeholder line three with an outcome or highlight."] },
  { company: "Curiosify", type: "Startup", start: "Apr 2021", end: "May 2022", photo: "", detail: ["Placeholder line one about the role and what it involved.", "Placeholder line two covering scope, team, and what shipped.", "Placeholder line three with an outcome or highlight."] },
  { company: "Alliance Française", type: "Cultural", start: "Jan 2020", end: "Mar 2021", photo: "", detail: ["Placeholder line one about the role and what it involved.", "Placeholder line two covering scope, team, and what shipped.", "Placeholder line three with an outcome or highlight."] },
];

const heroGifs = ["/brand/Herogif.GIF", "/brand/Herogif2.GIF"];

export default function Home() {
  const [lb, setLb] = useState(null);
  const [gif, setGif] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setGif((g) => (g + 1) % heroGifs.length), 5000);
    return () => clearInterval(id);
  }, []);
  const close = () => setLb(null);
  const prev = () => setLb((i) => (i - 1 + craft.length) % craft.length);
  const next = () => setLb((i) => (i + 1) % craft.length);

  return (
    <>
      <Frame />
      <div className="wrap">
        <section className="hero-card">
          <div className="hero-visual">
            {heroGifs.map((src, i) => (
              <img key={i} src={src} alt="" className="hero-gif" style={{ opacity: gif === i ? 1 : 0 }} />
            ))}
          </div>
          <div className="hero-info">
            <div className="hero-head">
              <div className="name">Ashlen</div>
              <div className="role">Designer</div>
            </div>
            <p className="hero-bio">
              I help early teams shape a first product, from naming it to shipping it.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="/resume.pdf" target="_blank" rel="noopener">
                Download résumé
              </a>
              <a className="btn btn-outline" href="mailto:hi@ashlen.studio">
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="set set-wide">
        <div className="set-inner">
          <div className="label">
            <span>Craft</span>
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
            <span>Projects</span>
            <Link className="view-all" to="/work">View more</Link>
          </div>
          <div className="home-projects">
            {projects.slice(0, 3).map((p) => (
              <Link className="work-tile" to={`/work/${p.slug}`} key={p.slug}>
                {p.images[0]?.src ? (
                  <img src={p.images[0].src} alt={p.images[0].alt || p.title} className="work-cover" />
                ) : (
                  <div className="work-cover work-ph">{p.title}</div>
                )}
                <div className="work-info">
                  <div className="work-ttl">{p.title}</div>
                  <div className="work-pills">
                    <span className="pill">{p.type}</span>
                    <span className="pill">{p.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* experience */}
        <section className="index">
          <div className="label">
            <span>Experience</span>
          </div>
          <ExperienceAccordion items={experience} />
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