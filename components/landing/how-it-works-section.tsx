"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { GitBranch, Sparkles, Rocket, Shield } from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const steps = [
  { number: "01", icon: GitBranch, title: "Connect Repository", description: "Link GitHub, GitLab, or Bitbucket. AI analyzes your codebase and detects your stack instantly.", tag: "source" },
  { number: "02", icon: Sparkles, title: "AI Builds Pipeline", description: "Watch AI generate optimized CI/CD pipelines tailored to your application. Zero config files.", tag: "generate" },
  { number: "03", icon: Rocket, title: "Deploy Anywhere", description: "AWS, Azure, GCP, or custom infra — one click. Trivx provisions and scales automatically.", tag: "deploy" },
  { number: "04", icon: Shield, title: "Monitor & Heal", description: "AI watches deployments 24/7, predicts failures, and self-heals before users are impacted.", tag: "protect" },
];

const ease = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────
   CANVAS: live particle field
───────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const N = 60;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.4,
      vx: (Math.random() - 0.5) * 0.17, vy: (Math.random() - 0.5) * 0.17,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const tick = () => {
      t += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const a = (Math.sin(t + p.phase) * 0.5 + 0.5) * 0.3 + 0.04;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242,97,63,${a})`;
        ctx.fill();
      });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 88) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(242,97,63,${(1 - d / 88) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none opacity-70" />;
}

/* ─────────────────────────────────────────
   GRID BACKGROUND + horizontal scan sweep
───────────────────────────────────────── */
function SceneBackground({ isInView }: { isInView: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(242,97,63,0.06) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(242,97,63,0.06) 1px,transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.1 }}
      />
      {/* radial vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%,transparent 30%,#0c0c0c 100%)" }} />
      {/* horizontal scan line that sweeps once on enter */}
      {isInView && (
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(242,97,63,0.4),transparent)" }}
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   DATA BEAM: animated orbs traveling along connector
───────────────────────────────────────── */
function DataBeam({ isInView }: { isInView: boolean }) {
  return (
    <div className="hidden lg:block absolute top-[51px] left-[12.5%] w-[75%] h-[2px] z-0 pointer-events-none overflow-visible">
      {/* faint track */}
      <div className="absolute inset-0 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
      {/* fill animation */}
      <motion.div className="absolute inset-0 rounded-full origin-left"
        style={{ background: "linear-gradient(90deg,rgba(242,97,63,0.3),rgba(242,97,63,0.06))" }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, delay: 0.7, ease }}
      />
      {/* main traveling orb */}
      {isInView && (
        <motion.div className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 9, height: 9, background: "#f2613f", boxShadow: "0 0 18px 5px rgba(242,97,63,0.65),0 0 4px 1px rgba(255,255,255,0.3)" }}
          initial={{ left: "-1%" }}
          animate={{ left: ["-1%", "101%", "-1%"] }}
          transition={{ duration: 3.8, delay: 1.3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {/* secondary reverse orb */}
      {isInView && (
        <motion.div className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 4, height: 4, background: "#ff9d7a", boxShadow: "0 0 8px 2px rgba(242,97,63,0.5)" }}
          initial={{ left: "101%" }}
          animate={{ left: ["101%", "-1%", "101%"] }}
          transition={{ duration: 3.8, delay: 2.7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   NODE PULSE: ripple dot at each step position on connector
───────────────────────────────────────── */
function NodePulse({ isInView, index }: { isInView: boolean; index: number }) {
  const left = `calc(12.5% + ${index} * 25%)`;
  return (
    <div className="hidden lg:absolute lg:block top-[44px] pointer-events-none z-10" style={{ left }}>
      {/* ripple */}
      <motion.div className="absolute -translate-x-1/2 rounded-full border border-[#f2613f]/30"
        style={{ width: 20, height: 20, top: -4 }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={isInView ? { scale: [1, 1.9, 1], opacity: [0, 0.45, 0] } : {}}
        transition={{ duration: 2.4, delay: 1.6 + index * 0.32, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* solid dot */}
      <motion.div className="absolute -translate-x-1/2 rounded-full"
        style={{ width: 6, height: 6, top: 3, background: "#f2613f", boxShadow: "0 0 10px 3px rgba(242,97,63,0.7)" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.75 + index * 0.25, ease: "backOut" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   SPLIT TEXT: character-by-character reveal
───────────────────────────────────────── */
function SplitReveal({ text, delay = 0, className, style }: { text: string; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={className} style={style} aria-label={text}>
      {text.split("").map((ch: string, i: number) => (
        <motion.span key={i} style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: delay + i * 0.026, ease }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────
   ORBITING RING
───────────────────────────────────────── */
function OrbitRing({ speed = 12, radius = "0px", dotColor = "#f2613f", active }: { speed?: number; radius?: string; dotColor?: string; active: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{ border: "1px dashed rgba(242,97,63,0.18)", inset: radius }}
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      <motion.div className="absolute rounded-full"
        style={{ width: 5, height: 5, top: -2.5, left: "calc(50% - 2.5px)", background: dotColor, boxShadow: `0 0 8px ${dotColor}cc` }}
        animate={active ? { scale: [1, 1.6, 1] } : { scale: 1 }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   STEP CARD
───────────────────────────────────────── */
function StepCard({ step, index, isInView }: { step: typeof steps[0]; index: number; isInView: boolean }) {
  const Icon = step.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 52, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.85, delay: 0.42 + index * 0.13, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center text-center cursor-default select-none pb-5"
    >

      {/* ── ICON CIRCLE ── */}
      <div className="relative mb-8 w-[110px] h-[110px]">

        {/* Glow bloom */}
        <motion.div className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(242,97,63,0.28) 0%,transparent 70%)", filter: "blur(14px)" }}
          animate={hovered ? { scale: 1.5, opacity: 1 } : { scale: 1, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Outer orbit */}
        <OrbitRing speed={14} dotColor="#f2613f" active={hovered} />

        {/* Inner counter-orbit */}
        <motion.div className="absolute rounded-full pointer-events-none"
          style={{ inset: 10, border: "1px solid rgba(242,97,63,0.07)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        {/* Main disc */}
        <motion.div
          className="absolute rounded-full flex items-center justify-center"
          style={{ inset: 16 }}
          animate={{
            background: hovered
              ? "radial-gradient(135deg at 30% 30%,rgba(242,97,63,0.2),rgba(242,97,63,0.06))"
              : "radial-gradient(135deg at 30% 30%,rgba(242,97,63,0.1),rgba(242,97,63,0.02))",
            border: hovered ? "1px solid rgba(242,97,63,0.65)" : "1px solid rgba(242,97,63,0.18)",
            boxShadow: hovered ? "0 0 30px rgba(242,97,63,0.22),inset 0 0 14px rgba(242,97,63,0.07)" : "none",
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] font-mono tracking-[0.24em]"
              style={{ color: hovered ? "rgba(242,97,63,0.9)" : "rgba(242,97,63,0.45)", transition: "color .3s" }}>
              {step.number}
            </span>
            <motion.div
              animate={hovered ? { scale: 1.2, rotate: 8 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.35, ease: "backOut" }}
            >
              <Icon style={{
                width: 17, height: 17,
                color: hovered ? "#f2613f" : "rgba(242,97,63,0.5)",
                filter: hovered ? "drop-shadow(0 0 7px rgba(242,97,63,0.9))" : "none",
                transition: "color .3s,filter .3s",
              }} />
            </motion.div>
          </div>
        </motion.div>

        {/* Expand ping on hover enter */}
        <AnimatePresence>
          {hovered && (
            <motion.div className="absolute inset-0 rounded-full border border-[#f2613f]/35 pointer-events-none"
              initial={{ scale: 1, opacity: 0.65 }}
              animate={{ scale: 1.65, opacity: 0 }}
              exit={{}}
              transition={{ duration: 0.65, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Tag */}
      <motion.span className="text-[9px] font-mono tracking-[0.32em] uppercase mb-2.5"
        animate={{ color: hovered ? "rgba(242,97,63,0.85)" : "rgba(242,97,63,0.28)" }}
        transition={{ duration: 0.3 }}
      >
        /{step.tag}
      </motion.span>

      {/* Title */}
      <motion.h3 className="text-[14.5px] font-semibold mb-3 leading-snug"
        style={{ fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.015em" }}
        animate={{ color: hovered ? "#fff" : "rgba(255,255,255,0.72)" }}
        transition={{ duration: 0.3 }}
      >
        {step.title}
      </motion.h3>

      {/* Description */}
      <motion.p className="text-[12.5px] leading-relaxed" style={{ maxWidth: 210 }}
        animate={{ color: hovered ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.2)" }}
        transition={{ duration: 0.3 }}
      >
        {step.description}
      </motion.p>

      {/* Bottom accent line */}
      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px rounded-full"
        style={{ background: "linear-gradient(90deg,transparent,#f2613f,transparent)" }}
        animate={hovered ? { width: 88, opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.32 }}
      />

      {/* Scan sweep on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg,transparent,rgba(242,97,63,0.2),transparent)" }}
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: "105%", opacity: [0, 0.9, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "linear" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-28 sm:py-36 overflow-hidden bg-[#0c0c0c]"
      style={{ fontFamily: "'DM Sans',sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap');`}</style>

      {/* Scene layers */}
      <SceneBackground isInView={isInView} />
      <ParticleCanvas />

      {/* Breathing center glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[340px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(242,97,63,0.055) 0%,transparent 70%)", filter: "blur(50px)" }}
        animate={{ scale: [1, 1.07, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">

        {/* ── HEADER ── */}
        <div className="mb-24 sm:mb-28">
          {/* Eyebrow */}
          <motion.div className="flex items-center gap-3 mb-7"
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <motion.div className="h-px"
              style={{ background: "linear-gradient(90deg,#f2613f,transparent)" }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.55, delay: 0.28 }}
            />
            <span className="text-[9.5px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(242,97,63,0.6)", fontFamily: "'DM Mono',monospace" }}>
              How it works
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-[58px] font-light text-white leading-[1.04]"
            style={{ letterSpacing: "-0.035em", maxWidth: 560 }}>
            {isInView && <SplitReveal text="Code to cloud." delay={0.28} />}
            <br />
            <span style={{ color: "rgba(255,255,255,0.22)" }}>
              {isInView && <SplitReveal text="Four steps." delay={0.72} />}
            </span>
          </h2>
        </div>

        {/* ── STEPS ── */}
        <div className="relative">
          <DataBeam isInView={isInView} />
          <div className="hidden lg:block">
            {steps.map((_, i) => <NodePulse key={i} isInView={isInView} index={i} />)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 pt-2">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* ── FOOTER CAPTION ── */}
        <motion.div className="mt-20 flex items-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-14 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span style={{ color: "rgba(255,255,255,0.14)", fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.2em" }}>
            ZERO_CONFIG · FULLY_AUTOMATED · AI_NATIVE
          </span>
        </motion.div>
      </div>
    </section>
  );
}