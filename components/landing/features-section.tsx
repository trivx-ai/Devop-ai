"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import TextShimmer from "@/components/magicui/text-shimmer";
import {
  GitBranch,
  CheckCircle,
  Github,
  Play,
  Loader2,
  Zap,
  Cloud,
  Server,
  Rocket,
  Globe,
  Database,
  Monitor,
} from "lucide-react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [pipelineStep, setPipelineStep] = useState(0);
  const [deploymentStep, setDeploymentStep] = useState(0);
  const [selectedProvider, setSelectedProvider] = useState("AWS");
  const [showPipelineToast, setShowPipelineToast] = useState(false);
  const [showDeploymentToast, setShowDeploymentToast] = useState(false);

  const pipelineSteps = [
    { icon: Github, label: "Repository Connected", status: "completed" },
    { icon: Zap, label: "AI Analyzing Codebase", status: "processing" },
    { icon: GitBranch, label: "Generating Pipeline", status: "pending" },
    { icon: Play, label: "Pipeline Ready", status: "pending" },
  ];

  const deploymentSteps = [
    { icon: Cloud, label: "Selecting Cloud Provider", status: "completed" },
    {
      icon: Server,
      label: "Provisioning Infrastructure",
      status: "processing",
    },
    { icon: Database, label: "Setting up Database", status: "pending" },
    { icon: Globe, label: "Configuring Load Balancer", status: "pending" },
    { icon: Monitor, label: "Deployment Complete", status: "pending" },
  ];

  const cloudProviders = [
    { name: "AWS", region: "us-east-1", color: "blue" },
    { name: "Azure", region: "eastus", color: "cyan" },
    { name: "GCP", region: "us-central1", color: "green" },
  ];

  useEffect(() => {
    if (isInView) {
      const pipelineInterval = setInterval(() => {
        setPipelineStep((prev) => {
          const newStep = prev < 3 ? prev + 1 : 0;

          if (newStep >= 3) {
            setShowPipelineToast(true);
            setTimeout(() => setShowPipelineToast(false), 3000);
          }

          return newStep;
        });
      }, 2000);

      const deploymentInterval = setInterval(() => {
        setDeploymentStep((prev) => {
          const newStep = prev < 4 ? prev + 1 : 0;

          if (newStep >= 4) {
            setShowDeploymentToast(true);
            setTimeout(() => setShowDeploymentToast(false), 3000);
          }

          return newStep;
        });
      }, 2500);

      return () => {
        clearInterval(pipelineInterval);
        clearInterval(deploymentInterval);
      };
    }
  }, [isInView, selectedProvider]);

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    setDeploymentStep(0);
    setShowDeploymentToast(false);
  };

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

  return (
    <section
      id="features"
      className="relative py-10 sm:py-16 md:py-20 bg-background overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="backdrop-filter-[12px] inline-flex h-6 sm:h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-2 sm:px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
              <TextShimmer className="inline-flex items-center justify-center">
                <span className="hidden sm:inline">⚡ AI-Powered Automation Features</span>
                <span className="sm:hidden">⚡ AI Features</span>{" "}
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </TextShimmer>
            </div>
            <h2 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-4 sm:py-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-none tracking-tighter text-transparent text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Automate. Optimize.
              <span className="dark:text-white text-black font-bold">
                {" "}
                Evolve.
              </span>
            </h2>
            <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl tracking-tight text-gray-400 text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-3xl mx-auto px-4">
              Trivx AI combines Vercel-like deployment ease, GitHub Actions CI/CD, Terraform automation, and SRE self-healing into one seamless AI-driven ecosystem.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {/* CI/CD Pipeline Generator */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 h-[600px] sm:h-[800px] md:h-[900px] lg:h-[1000px]">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-black dark:bg-white">
                      <GitBranch className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white dark:text-black" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent leading-tight">
                      AI-Powered CI/CD Generator
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                    Connect your GitHub repository and let AI analyze your codebase to automatically generate optimized CI/CD pipelines with zero manual configuration.
                  </p>

                  {/* Mock Pipeline Interface */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/80 border border-white/20 backdrop-blur-sm flex-1">
                    {/* Internal Toast Notification for Pipeline */}
                    {showPipelineToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-50 bg-black/80  text-black dark:text-white p-3 sm:p-4 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm"
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-black dark:text-white flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-sm sm:text-base">
                              🎉 CI/CD Pipeline Generated!
                            </div>
                            <div className="text-xs sm:text-sm text-white/90 dark:text-white/90">
                              Your pipeline is ready! Build, test, and deploy
                              workflows configured.
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-black border-b border-white/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="flex items-center space-x-1 sm:space-x-2 text-xs text-slate-400">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">my-app</span>
                          <span className="bg-slate-700/70 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                            main
                          </span>
                        </div>
                        <div className="bg-black dark:bg-white text-white dark:text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black animate-pulse"></div>
                          <span className="hidden sm:inline">Connected</span>
                        </div>
                      </div>
                    </div>

                    {/* Pipeline Generation Content */}
                    <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-6">
                      {/* Repository Info */}
                      <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-black border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Github className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="text-slate-200 font-medium text-sm sm:text-base truncate">
                              Trivx/my-react-app
                            </div>
                            <div className="text-xs text-slate-400">
                              React • TypeScript • 47 commits
                            </div>
                          </div>
                        </div>
                        <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs flex-shrink-0">
                          Repo
                        </span>
                      </div>

                      {/* AI Pipeline Generation Steps */}
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        <div className="text-slate-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                          AI Pipeline Generation
                        </div>
                        {pipelineSteps.map((step, index) => {
                          const StepIcon = step.icon;
                          const isActive = index <= pipelineStep;
                          const isProcessing = index === pipelineStep;

                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: isActive ? 1 : 0.4,
                                x: 0,
                                scale: isProcessing ? 1.02 : 1,
                              }}
                              transition={{ delay: index * 0.1 }}
                              className={`flex items-center justify-between p-2 sm:p-2.5 md:p-3 rounded-lg border transition-all duration-500 ${isActive
                                ? "bg-black/10 dark:bg-white/10 border-black/30 dark:border-white/30"
                                : "bg-white/5 border-white/10"
                                }`}
                            >
                              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                                <div
                                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isActive ? "bg-black dark:bg-white" : "bg-slate-700"
                                    }`}
                                >
                                  {isProcessing ? (
                                    <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-black animate-spin" />
                                  ) : index < pipelineStep ? (
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-black" />
                                  ) : (
                                    <StepIcon className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                                  )}
                                </div>
                                <span
                                  className={`text-xs sm:text-sm transition-colors duration-500 truncate ${isActive
                                    ? "text-black dark:text-white font-medium"
                                    : "text-slate-400"
                                    }`}
                                >
                                  {step.label}
                                </span>
                              </div>

                              {/* Status indicators */}
                              {index < pipelineStep && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="bg-black dark:bg-white text-white dark:text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs flex-shrink-0"
                                >
                                  <span className="hidden sm:inline">Complete</span>
                                  <span className="sm:hidden">✓</span>
                                </motion.span>
                              )}
                              {isProcessing && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="bg-black dark:bg-white text-white dark:text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs flex items-center space-x-1 flex-shrink-0"
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black animate-pulse"></div>
                                  <span className="hidden sm:inline">Processing</span>
                                </motion.span>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Pipeline Details */}
                      <div className="mt-3 sm:mt-4 md:mt-6 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-slate-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                          Pipeline Configuration
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400 space-y-1">
                          <div>• Build: npm install && npm run build</div>
                          <div>• Test: npm run test</div>
                          <div>• Deploy: Auto-deploy to staging</div>
                          <div className="hidden sm:block">• Notifications: Slack integration enabled</div>
                        </div>
                      </div>

                      {/* Additional Pipeline Features */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                          <div className="text-slate-300 text-xs sm:text-sm font-medium mb-1">
                            Build Time
                          </div>
                          <div className="text-slate-400 text-xs">
                            ~2.5 min
                          </div>
                        </div>
                        <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                          <div className="text-slate-300 text-xs sm:text-sm font-medium mb-1">
                            Success Rate
                          </div>
                          <div className="text-slate-400 text-xs">98.5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Deployment Automation */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 h-[600px] sm:h-[800px] md:h-[900px] lg:h-[1000px]">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-black dark:bg-white">
                      <Rocket className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white dark:text-black" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent leading-tight">
                      AI Deployment Automation
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                    Deploy to AWS, Azure, GCP, or Trivx-managed servers with one click or natural language commands. AI provisions infrastructure, manages databases, and scales automatically.
                  </p>

                  {/* Mock Deployment Interface */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/80 border border-white/20 backdrop-blur-sm flex-1">
                    {/* Internal Toast Notification for Deployment */}
                    {showDeploymentToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-50 bg-black/50  text-black dark:text-white p-3 sm:p-4 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm"
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Rocket className="w-4 h-4 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="font-semibold text-sm sm:text-base">
                              🚀 Deployment Successful on {selectedProvider}!
                            </div>
                            <div className="text-xs sm:text-sm text-white/90 break-all">
                              Application is live at{" "}
                              <a
                                href={`https://my-app-${selectedProvider.toLowerCase()}.trivx.com`}
                                className="underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                my-app-{selectedProvider.toLowerCase()}
                                .trivx.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-black border-b border-white/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="flex items-center space-x-1 sm:space-x-2 text-xs text-slate-400">
                          <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="truncate max-w-[60px] sm:max-w-none">{selectedProvider}</span>
                          <span className="bg-slate-700/70 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs truncate max-w-[80px] sm:max-w-none">
                            {
                              cloudProviders.find(
                                (p) => p.name === selectedProvider
                              )?.region
                            }
                          </span>
                        </div>
                        <div className="bg-black dark:bg-white text-white dark:text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black animate-pulse"></div>
                          <span className="hidden sm:inline">Connected</span>
                        </div>
                      </div>
                    </div>

                    {/* Deployment Content */}
                    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
                      {/* Application Info */}
                      <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                          <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="text-slate-200 font-medium text-sm sm:text-base truncate">
                              my-react-app v2.1.0
                            </div>
                            <div className="text-xs text-slate-400 hidden sm:block">
                              Production deployment • Auto-scaling enabled
                            </div>
                            <div className="text-xs text-slate-400 sm:hidden">
                              Production
                            </div>
                          </div>
                        </div>
                        <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs flex-shrink-0">
                          Deploying
                        </span>
                      </div>

                      {/* Interactive Cloud Provider Selection */}
                      <div className="space-y-2 sm:space-y-3">
                        <div className="text-slate-300 font-medium text-xs sm:text-sm">
                          Select Cloud Provider
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                          {cloudProviders.map((provider) => (
                            <button
                              key={provider.name}
                              onClick={() =>
                                handleProviderChange(provider.name)
                              }
                              className={`p-2 sm:p-3 rounded-lg border text-center transition-all duration-300 hover:scale-105 ${selectedProvider === provider.name
                                ? "bg-black/20 dark:bg-white/20 border-black/50 dark:border-white/50"
                                : "bg-white/5 border-white/10 hover:bg-white/10"
                                }`}
                            >
                              <Cloud
                                className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mx-auto mb-1 sm:mb-2 ${selectedProvider === provider.name
                                  ? "text-black dark:text-white"
                                  : "text-slate-400"
                                  }`}
                              />
                              <div
                                className={`text-xs font-medium ${selectedProvider === provider.name
                                  ? "text-black dark:text-white"
                                  : "text-slate-400"
                                  }`}
                              >
                                {provider.name}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5 sm:mt-1 hidden sm:block">
                                {provider.region}
                              </div>
                              {selectedProvider === provider.name && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="mt-1 sm:mt-2"
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black dark:bg-white rounded-full mx-auto animate-pulse"></div>
                                </motion.div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* AI Deployment Steps */}
                      <div className="space-y-2 sm:space-y-3">
                        <div className="text-slate-300 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
                          AI Deployment Progress
                        </div>
                        {deploymentSteps.map((step, index) => {
                          const StepIcon = step.icon;
                          const isActive = index <= deploymentStep;
                          const isProcessing = index === deploymentStep;

                          return (
                            <motion.div
                              key={`${selectedProvider}-${index}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: isActive ? 1 : 0.4,
                                x: 0,
                                scale: isProcessing ? 1.02 : 1,
                              }}
                              transition={{ delay: index * 0.1 }}
                              className={`flex items-center justify-between p-2.5 sm:p-3 rounded-lg border transition-all duration-500 ${isActive
                                ? "bg-black/10 dark:bg-white/10 border-black/30 dark:border-white/30"
                                : "bg-white/5 border-white/10"
                                }`}
                            >
                              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                                <div
                                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isActive ? "bg-black dark:bg-white" : "bg-slate-700"
                                    }`}
                                >
                                  {isProcessing ? (
                                    <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-black animate-spin" />
                                  ) : index < deploymentStep ? (
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-black" />
                                  ) : (
                                    <StepIcon className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                                  )}
                                </div>
                                <span
                                  className={`text-xs sm:text-sm transition-colors duration-500 truncate ${isActive
                                    ? "text-black dark:text-white font-medium"
                                    : "text-slate-400"
                                    }`}
                                >
                                  {step.label}
                                  {index === 0 && ` (${selectedProvider})`}
                                </span>
                              </div>

                              {/* Status indicators */}
                              {index < deploymentStep && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="bg-black dark:bg-white text-white dark:text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs flex-shrink-0"
                                >
                                  <span className="hidden sm:inline">Complete</span>
                                  <span className="sm:hidden">✓</span>
                                </motion.span>
                              )}
                              {isProcessing && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="bg-black dark:bg-white text-white dark:text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs flex items-center space-x-1 flex-shrink-0"
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black animate-pulse"></div>
                                  <span className="hidden sm:inline">Processing</span>
                                </motion.span>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
