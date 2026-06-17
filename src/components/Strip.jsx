// Horizontal peek strip. Clicking a tile calls onOpen(index) if provided.
export default function Strip({ items, onOpen }) {
  return (
    <div className="strip">
      {items.map((it, i) => (
        <div className="tile" key={i} onClick={() => onOpen && onOpen(i)}>
          {it.src ? (
            <img src={it.src} alt={it.caption || ""} loading="lazy" />
          ) : (
            <div className="ph">{it.caption || `UI ${i + 1}`}</div>
          )}
        </div>
      ))}
    </div>
  );
}
