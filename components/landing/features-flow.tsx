"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import Image from "next/image";
import trivxLogo from "../../public/trivx.png";
import {
  GitBranch,
  Cloud,
  Server,
  Database,
  Github,
  Zap,
  Rocket,
  Brain,
  Code,
} from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-2xl border-2 bg-card shadow-lg transition-all duration-300 hover:scale-105",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-xs font-medium text-muted-foreground text-center max-w-[80px]">
          {label}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function FeaturesFlow({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Left side - DevOps Components
  const cicdRef = useRef<HTMLDivElement>(null);
  const deploymentRef = useRef<HTMLDivElement>(null);

  // Center - GitHub
  const githubRef = useRef<HTMLDivElement>(null);

  // Center-Right - DevOpAI
  const devopaiRef = useRef<HTMLDivElement>(null);

  // Right side - Services
  const awsRef = useRef<HTMLDivElement>(null);
  const azureRef = useRef<HTMLDivElement>(null);
  const gcpRef = useRef<HTMLDivElement>(null);
  const mongoRef = useRef<HTMLDivElement>(null);
  const llmRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[600px] w-full items-center justify-center overflow-hidden p-10 bg-gradient-to-br from-background via-card/30 to-background rounded-3xl border border-border/50",
        className
      )}
      ref={containerRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] opacity-5" />

      {/* Workflow Layout */}
      <div className="flex w-full max-w-6xl items-center justify-between gap-16">
        {/* Left Side - DevOps Components */}
        <div className="flex flex-col gap-8">
          <Circle
            ref={cicdRef}
            className="bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50"
            label="CI/CD Pipeline"
          >
            <GitBranch className="h-8 w-8 text-blue-600" />
          </Circle>

          <Circle
            ref={deploymentRef}
            className="bg-purple-500/10 border-purple-500/30 hover:border-purple-500/50"
            label="Deployment Automation"
          >
            <Rocket className="h-8 w-8 text-purple-600" />
          </Circle>
        </div>

        {/* Center Left - GitHub */}
        <div className="flex flex-col items-center">
          <Circle
            ref={githubRef}
            className="size-20 bg-gray-900/10 border-gray-600/30 hover:border-gray-600/50"
            label="GitHub"
          >
            <Github className="h-10 w-10 text-gray-700 dark:text-gray-300" />
          </Circle>
          <div className="mt-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full border border-green-300 dark:border-green-700">
            Connected
          </div>
        </div>

        {/* Center Right - DevOpAI */}
        <div className="flex flex-col items-center">
          <Circle
            ref={devopaiRef}
            className="size-24 bg-gradient-to-br from-[var(--color-one)]/20 to-[var(--color-two)]/20 border-[var(--color-one)]/40 shadow-xl hover:shadow-2xl"
            label="Trivx"
          >
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[var(--color-one)] to-[var(--color-two)] rounded-xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </Circle>
        </div>

        {/* Right Side - Services */}
        <div className="grid grid-cols-2 gap-4">
          <Circle
            ref={awsRef}
            className="bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50"
            label="AWS"
          >
            <Cloud className="h-6 w-6 text-orange-600" />
          </Circle>

          <Circle
            ref={azureRef}
            className="bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50"
            label="Azure"
          >
            <Server className="h-6 w-6 text-blue-600" />
          </Circle>

          <Circle
            ref={gcpRef}
            className="bg-green-500/10 border-green-500/30 hover:border-green-500/50"
            label="GCP"
          >
            <Database className="h-6 w-6 text-green-600" />
          </Circle>

          <Circle
            ref={mongoRef}
            className="bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500/50"
            label="MongoDB"
          >
            <Database className="h-6 w-6 text-emerald-600" />
          </Circle>

          <div className="col-span-2 flex justify-center">
            <Circle
              ref={llmRef}
              className="bg-violet-500/10 border-violet-500/30 hover:border-violet-500/50"
              label="LLMs & AI"
            >
              <Brain className="h-6 w-6 text-violet-600" />
            </Circle>
          </div>
        </div>
      </div>

      {/* Animated Beams - DevOps to GitHub */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cicdRef}
        toRef={githubRef}
        duration={2}
        curvature={-30}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={deploymentRef}
        toRef={githubRef}
        duration={2}
        curvature={30}
      />

      {/* Animated Beam - GitHub to DevOpAI */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={githubRef}
        toRef={devopaiRef}
        duration={2.5}
        curvature={0}
      />

      {/* Animated Beams - DevOpAI to Services */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={devopaiRef}
        toRef={awsRef}
        duration={3}
        curvature={-40}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={devopaiRef}
        toRef={azureRef}
        duration={3}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={devopaiRef}
        toRef={gcpRef}
        duration={3}
        curvature={20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={devopaiRef}
        toRef={mongoRef}
        duration={3}
        curvature={40}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={devopaiRef}
        toRef={llmRef}
        duration={3}
        curvature={0}
      />

      {/* Workflow Description */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
          <Code className="h-3 w-3" />
          <span>DevOps Components</span>
          <div className="w-4 border-t border-border"></div>
          <Github className="h-3 w-3" />
          <span>GitHub</span>
          <div className="w-4 border-t border-border"></div>
          <Image
            className="h-3 w-3"
            src={trivxLogo}
            width={18}
            height={18}
            alt="Trivx"
          />
          <span>Trivx</span>
          <div className="w-4 border-t border-border"></div>
          <Cloud className="h-3 w-3" />
          <span>Cloud Services</span>
        </div>
      </div>
    </div>
  );
}
