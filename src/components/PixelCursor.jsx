import { useEffect, useRef } from "react";
const SIZE = 16;
const TRAIL = 50;
const STEP = 7;
const TAIL_MIN = 2;
const HUE_PER_MS = 0.12;
const LIFE = 300;
const SPARK_LIFE = 350;     // particle lifespan ms
const SPARK_CHANCE = 0.8;   // chance to spawn a spark per trail drop
const SPARK_SPREAD = 18;    // how far sparks scatter from the trail (px)
export default function PixelCursor() {
  const canvasRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const last = useRef({ x: -100, y: -100 });
  const trail = useRef([]);
  const sparks = useRef([]);
  const hue = useRef(0);
  const raf = useRef(0);
  const seen = useRef(false);
  const onTarget = useRef(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const ctx = canvas.getContext("2d");
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const moved = { current: true };
    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      onTarget.current = !!(e.target.closest && e.target.closest("a, button, [role=button], .tile, .mitem"));
      moved.current = true;
      if (!seen.current) {
        seen.current = true;
        last.current.x = e.clientX;
        last.current.y = e.clientY;
      }
    };
    let prev = performance.now();
    let dirty = true;
    const loop = (now) => {
      const dt = now - prev;
      prev = now;

      // anything to animate? if not, idle without repainting
      const busy = moved.current || trail.current.length > 0 || sparks.current.length > 0;
      if (!busy && !dirty) {
        raf.current = requestAnimationFrame(loop);
        return;
      }
      moved.current = false;
      dirty = trail.current.length > 0 || sparks.current.length > 0;

      hue.current = (hue.current + dt * HUE_PER_MS) % 360;
      const dx = pos.current.x - last.current.x;
      const dy = pos.current.y - last.current.y;
      const dist = Math.hypot(dx, dy);
      if (dist >= STEP) {
        const steps = Math.floor(dist / STEP);
        for (let i = 1; i <= steps; i++) {
          const t = (i * STEP) / dist;
          const px = last.current.x + dx * t;
          const py = last.current.y + dy * t;
          trail.current.push({ x: px, y: py, hue: hue.current, born: now });
          // occasionally scatter a tiny spark near the trail point
          if (Math.random() < SPARK_CHANCE) {
            sparks.current.push({
              x: px + (Math.random() - 0.5) * SPARK_SPREAD,
              y: py + (Math.random() - 0.5) * SPARK_SPREAD,
              s: 1 + Math.random() * 1.5,
              hue: hue.current,
              born: now,
            });
          }
        }
        last.current.x += dx * ((steps * STEP) / dist);
        last.current.y += dy * ((steps * STEP) / dist);
        while (trail.current.length > TRAIL) trail.current.shift();
      }
      while (trail.current.length && now - trail.current[0].born > LIFE) {
        trail.current.shift();
      }
      while (sparks.current.length && now - sparks.current[0].born > SPARK_LIFE) {
        sparks.current.shift();
      }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      // sparks (drawn under the main trail)
      for (let i = 0; i < sparks.current.length; i++) {
        const sp = sparks.current[i];
        const life = 1 - (now - sp.born) / SPARK_LIFE;
        if (life <= 0) continue;
        ctx.fillStyle = `hsla(${sp.hue}, 85%, 60%, ${life * 0.5})`;
        ctx.fillRect(sp.x - sp.s / 2, sp.y - sp.s / 2, sp.s, sp.s);
      }
      const n = trail.current.length;
      for (let i = 0; i < n; i++) {
        const sq = trail.current[i];
        const f = (i + 1) / n;
        const size = TAIL_MIN + (SIZE - TAIL_MIN) * f;
        const alpha = f * 0.9;
        ctx.fillStyle = `hsla(${sq.hue}, 85%, 55%, ${alpha})`;
        ctx.fillRect(sq.x - size / 2, sq.y - size / 2, size, size);
      }
      if (seen.current) {
        ctx.fillStyle = onTarget.current ? "#00ff66" : "#111111";
        ctx.fillRect(pos.current.x - SIZE / 2, pos.current.y - SIZE / 2, SIZE, SIZE);;
      }
      raf.current = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf.current);
    };
  }, []);
  return <canvas ref={canvasRef} className="pixel-cursor" aria-hidden="true" />;
}