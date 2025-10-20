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
  Rocket,
  Brain,
  Code,
} from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; size?: 'sm' | 'md' | 'lg' }
>(({ className, children, label, size = 'md' }, ref) => {
  const sizeClasses = {
    sm: "size-10 sm:size-12 md:size-14",
    md: "size-12 sm:size-14 md:size-16",
    lg: "size-16 sm:size-18 md:size-20"
  };

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-xl sm:rounded-2xl border-2 bg-card shadow-lg transition-all duration-300 hover:scale-105",
          sizeClasses[size],
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-xs font-medium text-muted-foreground text-center max-w-[60px] sm:max-w-[80px] leading-tight">
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
        "relative flex h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-background via-card/30 to-background rounded-2xl sm:rounded-3xl border border-border/50",
        className
      )}
      ref={containerRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:20px_20px] sm:bg-[size:25px_25px] md:bg-[size:30px_30px] opacity-5" />

      {/* Workflow Layout */}
      <div className="flex w-full max-w-6xl items-center justify-between gap-4 sm:gap-8 md:gap-12 lg:gap-16">
        {/* Left Side - DevOps Components */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <Circle
            ref={cicdRef}
            className="bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50"
            label="CI/CD Pipeline"
            size="sm"
          >
            <GitBranch className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600" />
          </Circle>

          <Circle
            ref={deploymentRef}
            className="bg-purple-500/10 border-purple-500/30 hover:border-purple-500/50"
            label="Deployment Automation"
            size="sm"
          >
            <Rocket className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-600" />
          </Circle>
        </div>

        {/* Center Left - GitHub */}
        <div className="flex flex-col items-center">
          <Circle
            ref={githubRef}
            className="bg-gray-900/10 border-gray-600/30 hover:border-gray-600/50"
            label="GitHub"
            size="lg"
          >
            <Github className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-gray-700 dark:text-gray-300" />
          </Circle>
          <div className="mt-1 sm:mt-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full border border-green-300 dark:border-green-700">
            <span className="hidden sm:inline">Connected</span>
            <span className="sm:hidden">✓</span>
          </div>
        </div>

        {/* Center Right - Trivx AI */}
        <div className="flex flex-col items-center">
          <Circle
            ref={devopaiRef}
            className="bg-gradient-to-br from-[var(--color-one)]/10 to-[var(--color-two)]/10 border-[var(--color-one)]/30 hover:border-[var(--color-one)]/50"
            label="Trivx AI"
            size="lg"
          >
            <Image
              src={trivxLogo}
              alt="Trivx"
              className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12"
              width={48}
              height={48}
            />
          </Circle>
          <div className="mt-1 sm:mt-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[var(--color-one)]/20 to-[var(--color-two)]/20 text-[var(--color-one)] dark:text-[var(--color-two)] text-xs rounded-full border border-[var(--color-one)]/30">
            <span className="hidden sm:inline">Active</span>
            <span className="sm:hidden">⚡</span>
          </div>
        </div>

        {/* Right Side - Services */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          <Circle
            ref={awsRef}
            className="bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50"
            label="AWS"
            size="sm"
          >
            <Cloud className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-orange-600" />
          </Circle>

          <Circle
            ref={azureRef}
            className="bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50"
            label="Azure"
            size="sm"
          >
            <Server className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-blue-600" />
          </Circle>

          <Circle
            ref={gcpRef}
            className="bg-green-500/10 border-green-500/30 hover:border-green-500/50"
            label="GCP"
            size="sm"
          >
            <Database className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-green-600" />
          </Circle>

          <Circle
            ref={mongoRef}
            className="bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500/50"
            label="MongoDB"
            size="sm"
          >
            <Database className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-emerald-600" />
          </Circle>

          <div className="col-span-2 flex justify-center mt-2 sm:mt-3 md:mt-4">
            <Circle
              ref={llmRef}
              className="bg-violet-500/10 border-violet-500/30 hover:border-violet-500/50"
              label="LLMs & AI"
              size="md"
            >
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-violet-600" />
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
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs text-muted-foreground bg-card/90 backdrop-blur-sm px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border/50 max-w-fit mx-auto">
          <div className="flex items-center gap-1 sm:gap-2">
            <Code className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
            <span className="text-xs sm:text-sm">DevOps</span>
          </div>
          <div className="w-2 sm:w-4 border-t border-border hidden sm:block"></div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Github className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
            <span className="text-xs sm:text-sm hidden sm:inline">GitHub</span>
          </div>
          <div className="w-2 sm:w-4 border-t border-border hidden sm:block"></div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0"
              src={trivxLogo}
              width={18}
              height={18}
              alt="Trivx"
            />
            <span className="text-xs sm:text-sm">Trivx</span>
          </div>
          <div className="w-2 sm:w-4 border-t border-border hidden sm:block"></div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Cloud className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
            <span className="text-xs sm:text-sm">Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
}
