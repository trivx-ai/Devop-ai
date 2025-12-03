"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>✨ Your AI-Powered DevOps Co-Pilot</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      <h1 className="text-foreground py-6 text-4xl font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        From Code to Cloud
        <br className="hidden md:block" /> Effortlessly
      </h1>
      <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <span className="text-foreground">
          Trivx AI is an AI-powered DevOps automation platform that lets
          developers <br />
          build, deploy, and manage applications effortlessly — transforming
          complex DevOps into an intelligent, vibe-based experience.
        </span>
      </p>
      <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg bg-[var(--color-one)] hover:bg-[#d94f2f] text-white opacity-0 ease-in-out [--animation-delay:600ms]">
        <span>Start Automating DevOps for Free</span>
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${inView ? "before:animate-image-glow" : ""
            }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          />

          <div className="relative w-full h-full rounded-[inherit]">
            <Image
              src="/hero-dark.png"
              alt="AI-powered DevOps automation platform dashboard showing CI/CD pipeline generation and multi-cloud deployment interface"
              className="hidden relative w-full h-full rounded-[inherit] object-contain dark:block"
              width={1920}
              height={1080}
              priority
            />
            <Image
              src="/hero-light.png"
              alt="Trivx AI DevOps automation platform interface with automated infrastructure provisioning and deployment workflows"
              className="block relative w-full h-full rounded-[inherit] dark:hidden"
              width={1920}
              height={1080}
              priority
            />
            {/* Black gradient from bottom to top */}
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
