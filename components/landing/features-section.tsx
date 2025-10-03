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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
              <TextShimmer className="inline-flex items-center justify-center">
                <span>⚡ AI-Powered Automation Features</span>{" "}
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </TextShimmer>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
              Build for
              <span className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text text-transparent">
                {" "}
                DevOps Intelligence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build, test and deploy AI agents with a powerful visual interface
              designed for technical teams
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* CI/CD Pipeline Generator */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 transition-all duration-500 hover:border-border h-[1000px]">
                <div className="p-8 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                      <GitBranch className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      AI-Powered CI/CD Generator
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Watch AI analyze your GitHub repository and automatically
                    generate optimized CI/CD pipelines in real-time.
                  </p>

                  {/* Mock Pipeline Interface */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex-1">
                    {/* Internal Toast Notification for Pipeline */}
                    {showPipelineToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute top-4 left-4 right-4 z-50 bg-green-600 text-white p-4 rounded-lg border border-green-500 shadow-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-200" />
                          <div>
                            <div className="font-semibold">
                              🎉 CI/CD Pipeline Generated!
                            </div>
                            <div className="text-sm text-green-100">
                              Your pipeline is ready! Build, test, and deploy
                              workflows configured.
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <Github className="w-4 h-4" />
                          <span>my-app</span>
                          <span className="bg-slate-700 px-2 py-1 rounded">
                            main
                          </span>
                        </div>
                        <div className="bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                          <span>Connected</span>
                        </div>
                      </div>
                    </div>

                    {/* Pipeline Generation Content */}
                    <div className="p-6 space-y-6">
                      {/* Repository Info */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                        <div className="flex items-center space-x-3">
                          <Github className="w-5 h-5 text-slate-400" />
                          <div>
                            <div className="text-slate-200 font-medium">
                              Trivx/my-react-app
                            </div>
                            <div className="text-xs text-slate-400">
                              React • TypeScript • 47 commits
                            </div>
                          </div>
                        </div>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                          Repository
                        </span>
                      </div>

                      {/* AI Pipeline Generation Steps */}
                      <div className="space-y-4">
                        <div className="text-slate-300 font-medium mb-3">
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
                              className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-500 ${
                                isActive
                                  ? "bg-blue-500/10 border-blue-500/30"
                                  : "bg-slate-800/30 border-slate-700"
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                                    isActive ? "bg-blue-500" : "bg-slate-700"
                                  }`}
                                >
                                  {isProcessing ? (
                                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                                  ) : index < pipelineStep ? (
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  ) : (
                                    <StepIcon className="w-4 h-4 text-slate-400" />
                                  )}
                                </div>
                                <span
                                  className={`transition-colors duration-500 ${
                                    isActive
                                      ? "text-blue-300"
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
                                  className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                                >
                                  Complete
                                </motion.span>
                              )}
                              {isProcessing && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="bg-blue-600 text-white px-2 py-1 rounded text-xs flex items-center space-x-1"
                                >
                                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                                  <span>Processing</span>
                                </motion.span>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Pipeline Details */}
                      <div className="mt-6 p-4 rounded-lg bg-slate-800/30 border border-slate-700">
                        <div className="text-slate-300 font-medium mb-3">
                          Pipeline Configuration
                        </div>
                        <div className="text-xs text-slate-400 space-y-1">
                          <div>• Build: npm install && npm run build</div>
                          <div>• Test: npm run test</div>
                          <div>• Deploy: Auto-deploy to staging</div>
                          <div>• Notifications: Slack integration enabled</div>
                        </div>
                      </div>

                      {/* Additional Pipeline Features */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                          <div className="text-slate-300 text-sm font-medium mb-1">
                            Build Time
                          </div>
                          <div className="text-slate-400 text-xs">
                            ~2.5 minutes
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                          <div className="text-slate-300 text-sm font-medium mb-1">
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
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 transition-all duration-500 hover:border-border h-[1000px]">
                <div className="p-8 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500">
                      <Rocket className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      AI Deployment Automation
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Watch AI automatically deploy your application to cloud
                    providers with intelligent infrastructure provisioning and
                    scaling.
                  </p>

                  {/* Mock Deployment Interface */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex-1">
                    {/* Internal Toast Notification for Deployment */}
                    {showDeploymentToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute top-4 left-4 right-4 z-50 bg-green-600 text-white p-4 rounded-lg border border-green-500 shadow-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <Rocket className="w-6 h-6 text-green-200" />
                          <div>
                            <div className="font-semibold">
                              🚀 Deployment Successful on {selectedProvider}!
                            </div>
                            <div className="text-sm text-green-100">
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
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <Cloud className="w-4 h-4" />
                          <span>{selectedProvider}</span>
                          <span className="bg-slate-700 px-2 py-1 rounded">
                            {
                              cloudProviders.find(
                                (p) => p.name === selectedProvider
                              )?.region
                            }
                          </span>
                        </div>
                        <div className="bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                          <span>Connected</span>
                        </div>
                      </div>
                    </div>

                    {/* Deployment Content */}
                    <div className="p-6 space-y-6">
                      {/* Application Info */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                        <div className="flex items-center space-x-3">
                          <Rocket className="w-5 h-5 text-slate-400" />
                          <div>
                            <div className="text-slate-200 font-medium">
                              my-react-app v2.1.0
                            </div>
                            <div className="text-xs text-slate-400">
                              Production deployment • Auto-scaling enabled
                            </div>
                          </div>
                        </div>
                        <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                          Deploying
                        </span>
                      </div>

                      {/* Interactive Cloud Provider Selection */}
                      <div className="space-y-3">
                        <div className="text-slate-300 font-medium text-sm">
                          Select Cloud Provider
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {cloudProviders.map((provider) => (
                            <button
                              key={provider.name}
                              onClick={() =>
                                handleProviderChange(provider.name)
                              }
                              className={`p-3 rounded-lg border text-center transition-all duration-300 hover:scale-105 ${
                                selectedProvider === provider.name
                                  ? `bg-${provider.color}-500/20 border-${provider.color}-500/50`
                                  : "bg-slate-800/30 border-slate-700 hover:bg-slate-700/50"
                              }`}
                            >
                              <Cloud
                                className={`w-5 h-5 mx-auto mb-2 ${
                                  selectedProvider === provider.name
                                    ? `text-${provider.color}-400`
                                    : "text-slate-400"
                                }`}
                              />
                              <div
                                className={`text-xs font-medium ${
                                  selectedProvider === provider.name
                                    ? `text-${provider.color}-300`
                                    : "text-slate-400"
                                }`}
                              >
                                {provider.name}
                              </div>
                              <div className="text-xs text-slate-500 mt-1">
                                {provider.region}
                              </div>
                              {selectedProvider === provider.name && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="mt-2"
                                >
                                  <div className="w-2 h-2 bg-green-400 rounded-full mx-auto animate-pulse"></div>
                                </motion.div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* AI Deployment Steps */}
                      <div className="space-y-3">
                        <div className="text-slate-300 font-medium mb-3">
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
                              className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-500 ${
                                isActive
                                  ? "bg-purple-500/10 border-purple-500/30"
                                  : "bg-slate-800/30 border-slate-700"
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                                    isActive ? "bg-purple-500" : "bg-slate-700"
                                  }`}
                                >
                                  {isProcessing ? (
                                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                                  ) : index < deploymentStep ? (
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  ) : (
                                    <StepIcon className="w-4 h-4 text-slate-400" />
                                  )}
                                </div>
                                <span
                                  className={`text-sm transition-colors duration-500 ${
                                    isActive
                                      ? "text-purple-300"
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
                                  className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                                >
                                  Complete
                                </motion.span>
                              )}
                              {isProcessing && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="bg-purple-600 text-white px-2 py-1 rounded text-xs flex items-center space-x-1"
                                >
                                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                                  <span>Processing</span>
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
