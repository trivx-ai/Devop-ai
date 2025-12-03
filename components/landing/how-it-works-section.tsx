"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import TextShimmer from "@/components/magicui/text-shimmer";
import {
  GitBranch,
  Sparkles,
  Rocket,
  Shield,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: GitBranch,
    title: "Connect Your Repository",
    description:
      "Link your GitHub, GitLab, or Bitbucket repository to Trivx AI in seconds. Our AI instantly analyzes your codebase, detects your tech stack, and understands your project structure.",
    keywords: "GitHub integration, repository connection, code analysis",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Generates Your Pipeline",
    description:
      "Watch as our AI automatically creates optimized CI/CD pipelines tailored to your application. No configuration files needed — Trivx AI handles build, test, and deployment workflows intelligently.",
    keywords: "AI pipeline generation, CI/CD automation, automated workflows",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy to Any Cloud",
    description:
      "Deploy your application to AWS, Azure, GCP, or custom infrastructure with a single click. Trivx AI provisions resources, configures networking, and manages scaling automatically.",
    keywords:
      "multi-cloud deployment, AWS deployment, Azure deployment, GCP deployment",
  },
  {
    number: "04",
    icon: Shield,
    title: "Monitor & Self-Heal",
    description:
      "Relax as AI monitors your deployments 24/7, predicts potential failures, and automatically fixes issues before they impact users. Continuous optimization keeps your apps running smoothly.",
    keywords:
      "AI monitoring, self-healing infrastructure, automated incident response",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-20 md:py-24 bg-background overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:50px_50px] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1">
              <TextShimmer className="inline-flex items-center justify-center">
                <span>🚀 How Trivx AI Works</span>{" "}
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </TextShimmer>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
              From Code to Cloud in{" "}
              <span className="text-[var(--color-one)]">4 Simple Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trivx AI automates your entire DevOps workflow with intelligent AI
              that understands your code and infrastructure needs. Deploy
              production-ready applications in minutes, not days.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Connection line (except for last item) */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute left-1/2 top-full h-12 w-0.5 bg-gradient-to-b from-[var(--color-one)] to-transparent transform -translate-x-1/2 mt-6" />
                      )}

                      {/* Number badge */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[var(--color-one)] to-[#d94f2f] flex items-center justify-center shadow-lg">
                        <span className="text-2xl md:text-3xl font-bold text-white">
                          {step.number}
                        </span>
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-white dark:bg-black flex items-center justify-center border-2 border-[var(--color-one)]">
                          <step.icon className="w-6 h-6 text-[var(--color-one)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-[var(--color-one)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-one)] font-medium">
                      <span>Key capabilities</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-2 italic">
                      {step.keywords}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
