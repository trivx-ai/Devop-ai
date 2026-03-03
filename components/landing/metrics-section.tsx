"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  decimals?: number;
  duration?: number;
  delay?: number;
}

function AnimatedCounter({ end, suffix, label, decimals = 0, duration = 2, delay = 0 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const delayMs = delay * 1000;

    const timer = setTimeout(() => {
      const animate = () => {
        const elapsed = Date.now() - startTime - delayMs;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(eased * end);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setValue(end);
          setIsDone(true);
        }
      };
      requestAnimationFrame(animate);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [isInView, end, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="relative text-center group"
    >
      <div className="relative inline-block">
        <span
          className={`text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight transition-all duration-500 ${isDone ? "animate-glow-pulse" : ""
            }`}
          style={{
            textShadow: isDone ? "0 0 30px rgba(242, 97, 63, 0.4)" : "none",
          }}
        >
          {decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString()}
          <span className="text-[#f2613f]">{suffix}</span>
        </span>
      </div>
      <p className="mt-3 text-sm sm:text-base text-white/40 font-medium">{label}</p>
    </motion.div>
  );
}

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const metrics = [
    { end: 99.99, suffix: "%", label: "Uptime Guarantee", decimals: 2, delay: 0 },
    { end: 10, suffix: "x", label: "Faster Deployments", decimals: 0, delay: 0.15 },
    { end: 500, suffix: "+", label: "Teams Onboarded", decimals: 0, delay: 0.3 },
    { end: 2.3, suffix: "M", label: "Pipelines Generated", decimals: 1, delay: 0.45 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#0c0c0c]"
    >
      {/* Background light streak animation */}
      <div className="light-streak" />

      {/* Curved subtle light animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[1px] top-1/3 -left-[200px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(242, 97, 63, 0.15), transparent)",
            transformOrigin: "center",
          }}
          animate={{
            x: [0, 1200, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[1px] bottom-1/3 -right-[200px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(242, 97, 63, 0.1), transparent)",
          }}
          animate={{
            x: [0, -800, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-xs text-white/50 font-medium">
              📊 Platform Metrics
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Built for <span className="gradient-text">Scale & Reliability</span>
          </h2>
          <p className="text-base text-white/40 max-w-2xl mx-auto">
            Numbers that speak for themselves. Trivx AI powers mission-critical infrastructure
            for teams worldwide.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {metrics.map((metric, i) => (
            <AnimatedCounter key={i} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
