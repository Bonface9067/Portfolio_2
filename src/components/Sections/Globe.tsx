import React, { useEffect, useRef } from 'react';
import { geoOrthographic, geoPath, geoGraticule } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import type { Topology } from 'topojson-specification';

const AFRICA = new Set([
  12, 24, 204, 72, 854, 108, 120, 140, 148, 174, 180, 178, 384, 262, 818,
  232, 231, 266, 270, 288, 324, 624, 404, 426, 430, 434, 450, 454, 466, 478, 480,
  504, 508, 516, 562, 566, 646, 678, 686, 694, 706, 710, 728, 729, 748, 834,
  768, 788, 800, 894, 716, 132,
]);
const KENYA_ID = 404;

const PHASES = [
  { dur: 5200, name: 'orbit' },
  { dur: 3800, name: 'africa', rot: [-22, -2, 0], sm: 0.55 },
  { dur: 3500, name: 'kenya',  rot: [-37,  0, 0], sm: 0.80 },
  { dur: 3800, name: 'hold',   rot: [-37,  0, 0], sm: 0.82 },
  { dur: 4200, name: 'out',    rot: [-22, -12, 0], sm: 0.40 },
] as const;

const Globe: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const STARS = Array.from({ length: 900 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.1 + 0.15,
      o: Math.random() * 0.65 + 0.2,
    }));

    const bS = () => Math.min(W, H) * 0.40;
    const proj = geoOrthographic().scale(bS()).translate([W / 2, H / 2]).clipAngle(90).rotate([0, -15, 0]);
    const pg = geoPath(proj, ctx);
    const graticule = geoGraticule()();

    let features: Feature<Geometry>[] = [];
    let kenyaFeat: Feature<Geometry> | null = null;
    let loaded = false;

    let phase = 0;
    let phaseMs = 0;
    let curRot: [number, number, number] = [0, -15, 0];
    let curSM = 0.40;
    let fromRot: [number, number, number] = [...curRot] as [number, number, number];
    let fromSM = curSM;
    let kenyaPulse = 0;
    let globePhase = 0;

    const eio = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const lp = (a: number, b: number, t: number) => a + (b - a) * t;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      const rs = proj.scale();

      for (const s of STARS) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,220,255,${s.o})`;
        ctx.fill();
      }

      const halo = ctx.createRadialGradient(cx, cy, rs * 0.85, cx, cy, rs * 1.45);
      halo.addColorStop(0, 'rgba(0,200,160,0.22)');
      halo.addColorStop(0.5, 'rgba(0,120,100,0.07)');
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, rs * 1.45, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      const ring = ctx.createRadialGradient(cx, cy, rs * 0.82, cx, cy, rs * 1.06);
      ring.addColorStop(0, 'rgba(0,200,160,0.08)');
      ring.addColorStop(1, 'rgba(0,200,160,0.28)');
      ctx.beginPath();
      ctx.arc(cx, cy, rs * 1.06, 0, Math.PI * 2);
      ctx.fillStyle = ring;
      ctx.fill();

      ctx.beginPath();
      pg({ type: 'Sphere' });
      const ocean = ctx.createRadialGradient(cx - rs * 0.25, cy - rs * 0.25, rs * 0.05, cx, cy, rs);
      ocean.addColorStop(0, '#0c1e38');
      ocean.addColorStop(1, '#020a16');
      ctx.fillStyle = ocean;
      ctx.fill();

      ctx.beginPath();
      pg(graticule);
      ctx.strokeStyle = 'rgba(0,200,160,0.065)';
      ctx.lineWidth = 0.45;
      ctx.stroke();

      if (loaded) {
        for (const f of features) {
          const id = +(f.id as number);
          const inAfrica = AFRICA.has(id);
          const isKenya = id === KENYA_ID;

          ctx.beginPath();
          pg(f);

          if (isKenya) {
            ctx.fillStyle = globePhase >= 2
              ? 'rgba(0,255,200,0.70)' : globePhase >= 1
              ? 'rgba(0,230,175,0.42)' : 'rgba(0,180,130,0.22)';
            ctx.shadowColor = globePhase >= 2 ? 'rgba(0,255,200,0.5)' : 'transparent';
            ctx.shadowBlur = globePhase >= 2 ? 8 : 0;
          } else if (inAfrica) {
            ctx.fillStyle = globePhase >= 1
              ? 'rgba(0,180,140,0.36)' : 'rgba(22,52,95,0.58)';
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = 'rgba(16,40,82,0.62)';
            ctx.shadowBlur = 0;
          }
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.strokeStyle = inAfrica ? 'rgba(0,200,160,0.20)' : 'rgba(0,150,120,0.08)';
          ctx.lineWidth = 0.32;
          ctx.stroke();
        }

        if (globePhase >= 2 && kenyaFeat) {
          const c = pg.centroid(kenyaFeat);
          if (isFinite(c[0]) && isFinite(c[1])) {
            const maxRing = 32 + (globePhase === 3 ? 14 : 0);
            for (let i = 0; i < 3; i++) {
              const p = ((kenyaPulse + i / 3) % 1);
              ctx.beginPath();
              ctx.arc(c[0], c[1], p * maxRing, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(0,255,200,${(1 - p) * 0.9})`;
              ctx.lineWidth = 2.2 * (1 - p);
              ctx.stroke();
            }
            const dotGrd = ctx.createRadialGradient(c[0], c[1], 0, c[0], c[1], 10);
            dotGrd.addColorStop(0, '#00ffc8');
            dotGrd.addColorStop(1, 'rgba(0,255,200,0)');
            ctx.beginPath();
            ctx.arc(c[0], c[1], 10, 0, Math.PI * 2);
            ctx.fillStyle = dotGrd;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(c[0], c[1], 4, 0, Math.PI * 2);
            ctx.fillStyle = '#00ffc8';
            ctx.fill();

            const ta = Math.min(1, (phaseMs - 300) / 500);
            if (ta > 0) {
              ctx.globalAlpha = ta;
              ctx.font = `600 ${Math.max(11, Math.round(rs * 0.048))}px Syne, sans-serif`;
              ctx.fillStyle = '#00ffc8';
              ctx.textAlign = 'center';
              ctx.fillText('KENYA', c[0], c[1] - 20);
              ctx.font = `400 ${Math.max(9, Math.round(rs * 0.032))}px DM Sans, sans-serif`;
              ctx.fillStyle = 'rgba(200,255,240,0.75)';
              ctx.fillText('01°N  37°E', c[0], c[1] - 8);
              ctx.globalAlpha = 1;
            }
          }
        }

        if (globePhase === 1) {
          const ta = Math.min(1, (phaseMs - 400) / 600);
          if (ta > 0) {
            ctx.globalAlpha = ta * 0.92;
            const fontSize = Math.max(14, Math.round(rs * 0.07));
            ctx.font = `700 ${fontSize}px Syne, sans-serif`;
            ctx.fillStyle = 'rgba(0,255,200,0.9)';
            ctx.textAlign = 'center';
            ctx.fillText('AFRICA', cx, cy + rs * 0.58);
            ctx.font = `400 ${Math.round(fontSize * 0.48)}px DM Sans, sans-serif`;
            ctx.fillStyle = 'rgba(180,255,240,0.6)';
            ctx.fillText('the continent', cx, cy + rs * 0.58 + fontSize * 0.75);
            ctx.globalAlpha = 1;
          }
        }
      }

      ctx.beginPath();
      pg({ type: 'Sphere' });
      ctx.strokeStyle = 'rgba(0,255,200,0.28)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      const spec = ctx.createRadialGradient(cx - rs * 0.38, cy - rs * 0.32, 0, cx, cy, rs);
      spec.addColorStop(0, 'rgba(180,230,255,0.07)');
      spec.addColorStop(0.6, 'transparent');
      ctx.beginPath();
      pg({ type: 'Sphere' });
      ctx.fillStyle = spec;
      ctx.fill();
    }

    let last = performance.now();
    let rafId = 0;
    let mounted = true;

    function loop(now: number) {
      if (!mounted) return;
      const dt = Math.min(now - last, 80);
      last = now;
      phaseMs += dt;

      const ph = PHASES[phase];
      const t = Math.min(phaseMs / ph.dur, 1);
      const et = eio(t);

      if (ph.name === 'orbit') {
        curRot[0] -= dt * 0.004;
        curRot[1] = lp(curRot[1], -15, 0.02);
        curSM = lp(curSM, 0.40, 0.04);
      } else {
        const tR = ph.rot!;
        const targetLambda = fromRot[0] + (((tR[0] - fromRot[0]) % 360 + 540) % 360 - 180);
        curRot[0] = lp(fromRot[0], targetLambda, et);
        curRot[1] = lp(fromRot[1], tR[1], et);
        curSM = lp(fromSM, ph.sm!, et);
      }

      proj.rotate([curRot[0], curRot[1], 0]).scale(Math.min(W, H) * curSM);

      globePhase = phase;
      if (phase >= 2) kenyaPulse = (kenyaPulse + dt / 1100) % 1;

      draw();

      if (t >= 1) {
        phase = (phase + 1) % PHASES.length;
        phaseMs = 0;
        fromRot = [...curRot] as [number, number, number];
        fromSM = curSM;
      }

      rafId = requestAnimationFrame(loop);
    }

    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((r) => r.json())
      .then((world: Topology) => {
        const fc = feature(world, world.objects.countries) as unknown as FeatureCollection<Geometry>;
        features = fc.features;
        kenyaFeat = features.find((f) => +(f.id as number) === KENYA_ID) || null;
        loaded = true;
      })
      .catch(() => { loaded = false; });

    rafId = requestAnimationFrame(loop);

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      proj.translate([W / 2, H / 2]);
      STARS.forEach((s) => { s.x = Math.random() * W; s.y = Math.random() * H; });
    };
    window.addEventListener('resize', onResize);

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
};

export default Globe;
