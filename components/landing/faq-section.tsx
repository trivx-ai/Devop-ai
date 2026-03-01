"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import TextShimmer from "@/components/magicui/text-shimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const faqs = [
  {
    question: "How does Trivx AI automate CI/CD pipelines?",
    answer:
      "Trivx AI uses advanced machine learning algorithms to analyze your codebase, detect your tech stack, dependencies, and project structure. It then automatically generates optimized CI/CD pipelines tailored to your application, including build scripts, testing workflows, and deployment configurations — all without manual intervention.",
  },
  {
    question: "Can Trivx AI deploy to AWS, Azure, and GCP?",
    answer:
      "Yes, Trivx AI supports multi-cloud deployment across AWS, Microsoft Azure, Google Cloud Platform, and custom servers. Our AI automatically provisions infrastructure, configures networking, manages databases, and sets up load balancers on your chosen cloud provider with intelligent resource optimization.",
  },
  {
    question: "What is an AI DevOps platform?",
    answer:
      "An AI DevOps platform like Trivx AI uses artificial intelligence to automate the entire DevOps lifecycle — from code analysis and CI/CD pipeline generation to infrastructure provisioning, deployment, monitoring, and self-healing. It eliminates manual DevOps tasks and enables developers to focus on writing code while AI handles operations.",
  },
  {
    question: "How does Trivx AI reduce deployment failures?",
    answer:
      "Trivx AI employs predictive analytics and real-time monitoring to identify potential issues before deployment. Our self-healing capabilities automatically detect failures, rollback problematic changes, and fix infrastructure issues. The platform learns from each deployment to continuously improve success rates and reduce downtime.",
  },
  {
    question: "Does Trivx AI support Kubernetes and container orchestration?",
    answer:
      "Absolutely. Trivx AI provides automated Kubernetes deployment with intelligent container orchestration. Our AI generates Dockerfiles, manages container registries, creates Kubernetes manifests, configures pods and services, and handles scaling — making containerization effortless for developers.",
  },
  {
    question: "What programming languages and frameworks does Trivx AI support?",
    answer:
      "Trivx AI supports all major programming languages including JavaScript/TypeScript (Node.js, React, Next.js), Python (Django, Flask), Java (Spring Boot), Go, Ruby, PHP, and .NET. Our AI automatically detects your framework and configures the optimal deployment pipeline accordingly.",
  },
  {
    question: "How secure is Trivx AI for production deployments?",
    answer:
      "Trivx AI is built with enterprise-grade security. We provide SOC 2 Type II compliance, GDPR readiness, encrypted data transmission, secret management, vulnerability scanning, and role-based access control (RBAC). All deployments follow security best practices with automated compliance checks.",
  },
  {
    question: "Can I use natural language to control DevOps operations?",
    answer:
      "Yes! Trivx AI features a natural language interface that allows you to control DevOps operations using simple commands like 'Deploy my app to production', 'Rollback the last deployment', or 'Scale up my infrastructure'. Our AI understands context and executes complex DevOps workflows automatically.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section
        id="faq"
        className="relative py-16 sm:py-20 md:py-24 bg-background"
        ref={ref}
      >
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1">
                <TextShimmer className="inline-flex items-center justify-center">
                  <span>❓ Frequently Asked Questions</span>{" "}
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </TextShimmer>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
                Everything You Need to Know About{" "}
                <span className="text-[var(--color-one)]">Trivx AI</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our AI-powered DevOps
                automation platform, features, and how we help teams deploy
                faster.
              </p>
            </motion.div>

            {/* FAQ Items */}
            <motion.div variants={containerVariants} className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="group"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div
                    className={cn(
                      "border border-white/10 rounded-2xl overflow-hidden transition-all duration-300",
                      openIndex === index
                        ? "bg-white/5 shadow-lg"
                        : "bg-white/5 hover:bg-white/10"
                    )}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <h3
                        className="text-base sm:text-lg font-semibold text-foreground group-hover:text-[var(--color-one)] transition-colors"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                          openIndex === index && "rotate-180"
                        )}
                      />
                    </button>

                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-5 text-muted-foreground leading-relaxed"
                        itemProp="acceptedAnswer"
                        itemScope
                        itemType="https://schema.org/Answer"
                      >
                        <p itemProp="text">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-12 text-center p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you get started with AI-powered DevOps
                automation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-white hover:text-[#f2613f] text-white rounded-lg font-semibold transition-all duration-300 ease-in-out"
              >
                Contact Us
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
