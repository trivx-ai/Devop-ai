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
      className="relative py-20 bg-background overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:50px_50px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Workflow Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
              <TextShimmer className="inline-flex items-center justify-center">
                <span>🔄 AI Workflow Integration</span>{" "}
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </TextShimmer>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8">
              How Trivx
              <span className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text text-transparent">
                {" "}
                Orchestrates Your Workflow
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From DevOps components to multi-cloud deployment, see how Trivx
              creates an intelligent bridge between your development tools and
              cloud infrastructure.
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
