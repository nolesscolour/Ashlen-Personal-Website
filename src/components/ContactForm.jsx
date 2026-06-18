import { useState } from "react";

// Web3Forms — paste your access key below (from web3forms.com).
const ACCESS_KEY = "5e32ba8f-e34c-416d-a185-58926d14b1be";

const SERVICES = [
  "0 to 1 Product Design",
  "Branding & Packaging",
  "UI/UX",
  "Social Media Design",
  "Photography",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  const ready =
    fields.name.trim() && fields.email.trim() && fields.message.trim();

  const track = (e) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!ready) return;
    setStatus("sending");

    const data = new FormData(e.target);
    data.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("done");
        e.target.reset();
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="cf-done">
        Thanks — your enquiry is in. I'll get back to you soon.
      </div>
    );
  }

  return (
    <form className="cf" onSubmit={onSubmit}>
      <div className="cf-grid">
        <label className="cf-field">
          <span className="cf-label">Name *</span>
          <input name="name" type="text" placeholder="Your name" required onChange={track} />
        </label>

        <label className="cf-field">
          <span className="cf-label">Email *</span>
          <input name="email" type="email" placeholder="you@email.com" required onChange={track} />
        </label>

        <label className="cf-field">
          <span className="cf-label">Phone</span>
          <input name="phone" type="tel" placeholder="Optional" />
        </label>

        <label className="cf-field">
          <span className="cf-label">Project type</span>
          <select name="project_type" defaultValue={SERVICES[0]}>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label className="cf-field cf-full">
          <span className="cf-label">Message *</span>
          <textarea
            name="message"
            rows="5"
            placeholder="A few lines about the project, the brief, the timeline."
            required
            onChange={track}
          />
        </label>
      </div>

      <button
        className={ready ? "cf-submit ready" : "cf-submit"}
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send enquiry →"}
      </button>

      {status === "error" && (
        <div className="cf-error">Something went wrong. Try again, or email hi@ashlen.studio.</div>
      )}
    </form>
  );
}