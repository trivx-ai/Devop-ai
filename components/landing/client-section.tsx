"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import TextShimmer from "@/components/magicui/text-shimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ClientSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    {
      name: "Google",
      logo: "https://cdn.magicui.design/companies/Google.svg",
      description: "Streamlined their multi-cloud deployments",
    },
    {
      name: "Microsoft",
      logo: "https://cdn.magicui.design/companies/Microsoft.svg",
      description: "Reduced deployment time by 80%",
    },
    {
      name: "GitHub",
      logo: "https://cdn.magicui.design/companies/GitHub.svg",
      description: "Automated CI/CD for 10M+ repositories",
    },
    {
      name: "AWS",
      logo: "https://cdn.magicui.design/companies/Amazon.svg",
      description: "Optimized cloud resource utilization",
    },
  ];

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="clients"
      className="relative overflow-hidden py-20"
      ref={ref}
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
              Trusted by the best companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trivx is the choice of all the fortune 500 companies.
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-card/80">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-8 w-auto max-w-[120px] dark:brightness-0 dark:invert"
                      />
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Join thousands of teams already using Trivx</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-primary"
              >
                →
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
