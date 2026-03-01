"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import TextShimmer from "@/components/magicui/text-shimmer";
import {
  GitBranch,
  Cloud,
  Shield,
  BarChart3,
  RefreshCw,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const cardData = [
  {
    icon: BarChart3,
    label: "Monitoring",
    title: "Real-time Insights",
    description: "Track deployments, pipeline health, and system metrics with live AI-driven analytics.",
  },
  {
    icon: LayoutDashboard,
    label: "Overview",
    title: "Unified Dashboard",
    description: "Centralized control plane for all your pipelines, clouds, and infrastructure at a glance.",
  },
  {
    icon: GitBranch,
    label: "Automation",
    title: "AI-Powered CI/CD",
    description:
      "Connect your GitHub repo and let Trivx AI generate optimized, production-ready pipelines instantly — zero manual config. Automatic testing, building, and deployment with intelligent rollback on failure.",
  },
  {
    icon: Cloud,
    label: "Infrastructure",
    title: "Deploy Multi-Cloud",
    description:
      "One click deployment to AWS, Azure, or GCP with AI-provisioned infrastructure. Auto-scaling, load balancing, and cost optimization handled for you — in any region, any time.",
  },
  {
    icon: RefreshCw,
    label: "Reliability",
    title: "AI Self-Healing",
    description: "Detect failures, auto-rollback changes, and restore systems before users notice any downtime.",
  },
  {
    icon: Shield,
    label: "Protection",
    title: "Enterprise Security",
    description: "SOC 2 compliant. End-to-end encrypted pipelines with zero-trust access controls.",
  },
];

const gridClasses: string[] = [
  "",
  "",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-2",
  "",
  "lg:col-start-4 lg:row-start-3",
];

const GLOW_COLOR = "242, 97, 63";

interface CardDatum {
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
}

interface BentoCardProps {
  card: CardDatum;
  className?: string;
  index: number;
  isLarge?: boolean;
}

function BentoCard({ card, className, index, isLarge }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const particlesRef = useRef<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([]);
  const [particles, setParticles] = useState<typeof particlesRef.current>([]);
  const animFrameRef = useRef<number | null>(null);
  const hoveredRef = useRef(false);

  const spawnParticles = useCallback(() => {
    if (!cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    particlesRef.current = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
    }));
    setParticles([...particlesRef.current]);
  }, []);

  const animateParticles = useCallback(() => {
    if (!hoveredRef.current) return;
    particlesRef.current = particlesRef.current.map((p) => {
      const w = cardRef.current?.clientWidth ?? 300;
      const h = cardRef.current?.clientHeight ?? 200;
      let { vx, vy } = p;
      if (p.x <= 0 || p.x >= w) vx = -vx;
      if (p.y <= 0 || p.y >= h) vy = -vy;
      return { ...p, x: p.x + vx, y: p.y + vy, vx, vy };
    });
    setParticles([...particlesRef.current]);
    animFrameRef.current = requestAnimationFrame(animateParticles);
  }, []);

  const handleMouseEnter = useCallback(() => {
    hoveredRef.current = true;
    spawnParticles();
    animFrameRef.current = requestAnimationFrame(animateParticles);
  }, [spawnParticles, animateParticles]);

  const handleMouseLeave = useCallback(() => {
    hoveredRef.current = false;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setGlow((g) => ({ ...g, opacity: 0 }));
    setTilt({ rotateX: 0, rotateY: 0 });
    setParticles([]);
    particlesRef.current = [];
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
    setTilt({ rotateX: ((y - cy) / cy) * -8, rotateY: ((x - cx) / cx) * 8 });
  }, []);

  useEffect(() => {
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, []);

  const Icon = card.icon;

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] cursor-default select-none",
        isLarge ? "min-h-[320px]" : "min-h-[200px]",
        "flex flex-col justify-between p-6",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      style={{
        transformPerspective: 1000,
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Inner ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, rgba(${GLOW_COLOR}, 0.10), transparent 65%)`,
        }}
      />

      {/* Border glow via mask */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          padding: "1px",
          background: `radial-gradient(280px circle at ${glow.x}% ${glow.y}%, rgba(${GLOW_COLOR}, 0.75), transparent 60%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none absolute rounded-full z-50"
          style={{
            width: 4,
            height: 4,
            left: p.x,
            top: p.y,
            background: `rgba(${GLOW_COLOR}, 0.9)`,
            boxShadow: `0 0 6px rgba(${GLOW_COLOR}, 0.5)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Header */}
      <div className="relative flex items-center justify-between z-10">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-[var(--color-one)]/20 text-[var(--color-one)] bg-[var(--color-one)]/10">
          {card.label}
        </span>
        <div className="p-2 rounded-xl bg-[var(--color-one)]/10 border border-[var(--color-one)]/20 group-hover:bg-[var(--color-one)]/20 transition-all duration-300">
          <Icon className="h-4 w-4 text-[var(--color-one)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-4">
        <h3
          className={cn(
            "font-semibold text-foreground leading-tight mb-2",
            isLarge ? "text-2xl sm:text-3xl" : "text-lg"
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground leading-relaxed",
            isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm line-clamp-3"
          )}
        >
          {card.description}
        </p>
        {isLarge && (
          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--color-one)] group-hover:gap-3 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="relative py-10 sm:py-16 md:py-20 bg-background overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] opacity-10 dark:opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="backdrop-filter-[12px] inline-flex h-6 sm:h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-2 sm:px-3 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span className="hidden sm:inline">⚡ AI-Powered Automation Features</span>
              <span className="sm:hidden">⚡ AI Features</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <motion.h2
            className="text-foreground py-4 sm:py-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-none tracking-tighter text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Automate CI/CD. Deploy Multi-Cloud.
            <span className="text-[var(--color-one)] font-bold"> Self-Heal.</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl tracking-tight text-muted-foreground text-balance max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trivx AI automates your entire DevOps workflow — from GitHub repository analysis to production
            deployment. Generate pipelines instantly, provision cloud infrastructure, and enable AI-powered
            self-healing for maximum uptime.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cardData.map((card, index) => (
            <BentoCard
              key={index}
              card={card}
              index={index}
              isLarge={index === 2 || index === 3}
              className={gridClasses[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
