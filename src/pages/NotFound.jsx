import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const INK = "#111111";
const COLORS = ["#E5484D", "#F76808", "#FFB224", "#30A46C", "#0091FF", "#8E4EC6"];

export default function NotFound() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = 1, W = 0, H = 0, raf = 0;
    let cx = 0, cy = 0;
    let bodies = [];
    const COUNT = reduced ? 70 : 240;
    const CORE_R = 26;
    const SWALLOW_R = CORE_R + 8;
    const G = 16000;

    let coreScale = 1;
    let coreTarget = 1;
    let pulse = 0;

    const rand = (a, b) => a + Math.random() * (b - a);
    const pick = (arr) => arr[(Math.random() * arr.length) | 0];
    const SHAPES = ["dot", "circle", "square", "tri", "line"];

    const makeShape = (x, y, vx, vy) => {
      const type = pick(SHAPES);
      return {
        x, y, vx, vy, type,
        baseSize: type === "line" ? rand(10, 26) : rand(4, 13),
        rot: rand(0, Math.PI * 2),
        spin: rand(-2.5, 2.5),
        alpha: 0,
        fadingIn: true,
        r0: Math.hypot(cx - x, cy - y),
        filled: Math.random() < 0.5,
        color: Math.random() < 0.55 ? pick(COLORS) : INK,
      };
    };

    const spawn = () => {
      const ang = rand(0, Math.PI * 2);
      const rad = rand(Math.min(W, H) * 0.45, Math.max(W, H) * 0.95);
      const x = cx + Math.cos(ang) * rad;
      const y = cy + Math.sin(ang) * rad;
      const tx = -Math.sin(ang);
      const ty = Math.cos(ang);
      const tang = rand(30, 70);
      return makeShape(x, y, tx * tang, ty * tang);
    };

    const resize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      bodies = Array.from({ length: COUNT }, spawn);
    };

    const burst = () => {
      coreScale = 0.55;
      coreTarget = 1;
      pulse = 1;
      for (const b of bodies) {
        const ang = Math.atan2(b.y - cy, b.x - cx) + rand(-0.3, 0.3);
        const sp = rand(180, 340);
        b.vx = Math.cos(ang) * sp;
        b.vy = Math.sin(ang) * sp;
        b.alpha = 1;
        b.fadingIn = false;
      }
      
    };

    const onPointer = (e) => {
      const r = canvas.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      const d = Math.hypot(px - cx, py - cy);
      if (d <= CORE_R * coreScale + 16) burst();
    };

    const drawShape = (b, size, stretch) => {
      ctx.save();
      ctx.translate(b.x, b.y);
      const dirAng = Math.atan2(cy - b.y, cx - b.x);
      ctx.rotate(dirAng);
      ctx.scale(Math.max(0.1, 1 - stretch * 0.8), 1 + stretch * 1.6);
      ctx.rotate(b.rot - dirAng);

      ctx.globalAlpha = b.alpha;
      ctx.strokeStyle = b.color;
      ctx.fillStyle = b.color;
      ctx.lineWidth = 1.1;

      const s = size;
      if (b.type === "dot") {
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0.5, s * 0.4), 0, Math.PI * 2);
        ctx.fill();
      } else if (b.type === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        b.filled ? ctx.fill() : ctx.stroke();
      } else if (b.type === "square") {
        b.filled ? ctx.fillRect(-s, -s, s * 2, s * 2)
                 : ctx.strokeRect(-s, -s, s * 2, s * 2);
      } else if (b.type === "tri") {
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s, s);
        ctx.lineTo(-s, s);
        ctx.closePath();
        b.filled ? ctx.fill() : ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(-s, 0);
        ctx.lineTo(s, 0);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawCore = () => {
      const r = CORE_R * coreScale;
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "rgba(0,0,0,0.9)";
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r - 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    let last = 0;
    const frame = (now) => {
      if (!last) last = now;
      let dt = (now - last) / 1000;
      last = now;
      if (dt > 0.05) dt = 0.05;

      coreScale += (coreTarget - coreScale) * Math.min(1, dt * 6);
      if (pulse > 0) pulse = Math.max(0, pulse - dt * 1.5);

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];

        if (b.fadingIn) {
          b.alpha += dt * 2.4;
          if (b.alpha >= 1) { b.alpha = 1; b.fadingIn = false; }
        }

        const dx = cx - b.x;
        const dy = cy - b.y;
        const dist = Math.hypot(dx, dy) || 0.0001;

        const f = G / dist;
        b.vx += (dx / dist) * f * dt;
        b.vy += (dy / dist) * f * dt;
        b.vx *= 0.995;
        b.vy *= 0.995;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.rot += b.spin * dt;

        const tNorm = Math.max(0, Math.min(1, (dist - CORE_R) / (b.r0 - CORE_R)));
        let size = b.baseSize * (0.2 + 0.8 * tNorm);
        const stretch = dist < 150 ? (1 - dist / 150) : 0;

        if (dist < SWALLOW_R) {
          const fade = Math.max(0, (dist - CORE_R) / (SWALLOW_R - CORE_R));
          b.alpha = Math.min(b.alpha, fade);
          size *= fade;
        }

        if (dist <= CORE_R || b.alpha <= 0.01) {
          bodies[i] = spawn();
          continue;
        }

        drawShape(b, size, stretch);
      }

      drawCore();

      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointerdown", onPointer);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <div style={wrap}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <canvas ref={canvasRef} style={canvasStyle} />

      <div style={top}>
        <span style={{ fontWeight: 500 }}>404</span>
      </div>

      <div style={center}>
        <div style={line}>This page fell into a black hole.</div>
        <Link to="/" style={back}>← back home</Link>
      </div>
    </div>
  );
}

const wrap = {
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100dvh",
  background: "#FFFFFF",
  overflow: "hidden",
  userSelect: "none",
  fontFamily: "'DM Sans', system-ui, sans-serif",
  color: INK,
};
const canvasStyle = {
  position: "absolute", inset: 0, width: "100%", height: "100%",
  cursor: "pointer",
};
const top = {
  position: "absolute", top: 30, left: 40,
  fontSize: 14, zIndex: 2,
};
const center = {
  position: "absolute", left: 0, right: 0, bottom: 56,
  textAlign: "center", zIndex: 2,
};
const line = {
  fontSize: 15, fontWeight: 500, marginBottom: 14,
};
const back = {
  fontFamily: "'DM Mono', monospace", fontSize: 13,
  color: INK, borderBottom: `1px solid ${INK}`, paddingBottom: 2,
  textDecoration: "none",
};