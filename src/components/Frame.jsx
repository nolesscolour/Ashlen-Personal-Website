export default function Frame({ wide = false }) {
  return (
    <div className={wide ? "frame wide" : "frame"} aria-hidden="true">
      <div className="col" />
    </div>
  );
}
