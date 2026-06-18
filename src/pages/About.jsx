import Frame from "../components/Frame";
import Row from "../components/Row";
import ContactForm from "../components/ContactForm";

const experience = [
  { year: "2024", role: "Designer", org: "TII" },
  { year: "2024", role: "Founder", org: "Sadharan Studio" },
];

export default function About() {
  return (
    <>
      <Frame />
      <div className="wrap">
        <header className="head">
          <div>
            <div className="name">About</div>
            <div className="role">Ashlen</div>
          </div>
        </header>

        <section className="intro">
          <p>
            I'm a designer in Kolkata working across product and brand. I came
            up through marketing, moved into product, and now build interfaces
            and the systems around them. I write every client proposal myself,
            by hand, before anyone signs anything.
          </p>
          <p className="soft">
            Replace this with the real bio. Keep it first person, plain, no
            buzzwords.
          </p>
        </section>

        <section>
          <div className="label">
            <span>Experience</span>
          </div>
          {experience.map((e, i) => (
            <Row key={i} year={e.year} title={e.org} meta={e.role} />
          ))}
        </section>

        <section>
          <div className="label">
            <span>Aspirations</span>
          </div>
          <p style={{ fontSize: 17, letterSpacing: "-0.01em", maxWidth: "60ch" }}>
            Working toward AI creative direction — the editorial layer on top of
            generative systems. Building Sadharan as a design partner, not a
            vendor.
          </p>
        </section>

        <section className="contact">
          <div className="line" style={{ marginBottom: "clamp(28px, 4vw, 44px)" }}>
            Say hello.{" "}
            <a className="inline-link" href="mailto:hi@ashlen.studio">
              hi@ashlen.studio
            </a>
          </div>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
