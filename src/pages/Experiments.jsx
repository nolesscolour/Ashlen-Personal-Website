import { experiments } from "../data/experiments";

export default function Experiments() {
  return (
    <>
      <div className="wrap wide">
        <header className="head">
          <div>
            <div className="name">Experiments</div>
            <div className="role">Vibe-coded projects</div>
          </div>
        </header>
      </div>

      <div className="work-bar">
        <div className="work-bar-inner">
          <span className="work-bar-title">Experiments</span>
        </div>
      </div>

      <div className="work-body">
        <div className="work-grid">
          {experiments.map((x, i) => (
            <a className="work-tile" href={x.liveUrl} target="_blank" rel="noopener noreferrer" key={i}>
              {x.thumb ? (
                <img src={x.thumb} alt={x.title} className="work-cover" />
              ) : (
                <div className="work-cover work-ph">{x.title}</div>
              )}
              <div className="work-info">
                <div className="work-ttl">{x.title}</div>
                <div className="work-pills">
                  {x.tags.map((t, j) => (
                    <span className="pill" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}