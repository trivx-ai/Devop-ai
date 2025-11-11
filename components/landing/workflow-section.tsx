"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import TextShimmer from "@/components/magicui/text-shimmer";
import { FeaturesFlow } from "./features-flow";

export default function WorkflowSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const workflowSteps = [
    {
      icon: "🔧",
      title: "DevOps Integration",
      description:
        "CI/CD pipelines and deployment automation components connect seamlessly with your GitHub repositories.",
      color: "bg-blue-500/10",
    },
    {
      icon: "🔗",
      title: "GitHub Connectivity",
      description:
        "GitHub serves as the central hub, connecting your code repositories with the Trivx intelligent platform.",
      color: "bg-gray-500/10",
    },
    {
      icon: "🤖",
      title: "AI Orchestration",
      description:
        "Trivx analyzes, optimizes, and orchestrates deployments across multiple cloud providers and services.",
      color: "bg-purple-500/10",
    },
    {
      icon: "☁️",
      title: "Multi-Cloud Deployment",
      description:
        "Automated deployment to AWS, Azure, GCP, with database management and LLM integrations for enhanced capabilities.",
      color: "bg-green-500/10",
    },
  ];

  return (
    <section
      id="workflow"
      className="relative py-10 sm:py-16 md:py-20 lg:py-24 bg-background overflow-hidden"
      ref={ref}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Workflow Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="backdrop-filter-[12px] inline-flex h-6 sm:h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-2 sm:px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
              <TextShimmer className="inline-flex items-center justify-center">
                <span className="text-xs sm:text-sm">🔄 AI Workflow Integration</span>{" "}
                <ArrowRightIcon className="ml-1 size-2 sm:size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </TextShimmer>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 mt-6 sm:mt-8 leading-tight">
              DevOps, Reimagined
              <span className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text text-transparent">
                {" "}
                by AI
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              From connecting your GitHub repository to multi-cloud deployment, Trivx AI creates an intelligent bridge between your development workflow and cloud infrastructure — all automated by AI.
            </p>
          </motion.div>

          {/* Features Flow Component */}
          <motion.div variants={itemVariants}>
            <FeaturesFlow />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
