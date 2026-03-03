"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import { Lock } from "lucide-react";
import { useState, useRef } from "react";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};

const demoPrices = [
  {
    id: "price_1",
    name: "Free",
    description: "Perfect for individual developers exploring AI DevOps",
    features: [
      "1 GitHub repository",
      "Basic AI pipeline generation",
      "Community support",
      "5 deployments/month",
      "Shared infrastructure",
    ],
    monthlyPrice: 0,
    yearlyPrice: 0,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Starter",
    description: "Ideal for small teams building production apps",
    features: [
      "5 GitHub repositories",
      "AI-powered CI/CD automation",
      "Multi-cloud deployment",
      "Email support",
      "50 deployments/month",
      "Basic monitoring",
    ],
    monthlyPrice: 9999,
    yearlyPrice: 99990,
    isMostPopular: false,
  },
  {
    id: "price_3",
    name: "Professional",
    description: "Advanced automation for growing teams",
    features: [
      "Unlimited repositories",
      "AI self-healing pipelines",
      "AWS, Azure, GCP deploy",
      "NL DevOps commands",
      "Priority support",
      "Advanced monitoring",
      "Cost optimization",
    ],
    monthlyPrice: 49000,
    yearlyPrice: 490000,
    isMostPopular: true,
  },
  {
    id: "price_4",
    name: "Enterprise",
    description: "Full AI DevOps for large organizations",
    features: [
      "Everything in Professional",
      "Dedicated AI consultant",
      "Custom integrations",
      "SOC 2 & GDPR compliance",
      "99.99% uptime SLA",
      "24/7 priority support",
      "Strategic dashboard",
      "White-label options",
    ],
    monthlyPrice: 99000,
    yearlyPrice: 990000,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden bg-[#0c0c0c]" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 neural-grid opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-xs text-white/50 font-medium">💰 Choose Your Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Flexible Pricing for Every{" "}
            <span className="gradient-text">Team Size</span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-3xl mx-auto">
            Choose an AI-powered DevOps automation plan that scales with your team.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className="text-sm text-white/50">Monthly</span>
          <Switch
            id="interval"
            onCheckedChange={(checked) => setInterval(checked ? "year" : "month")}
          />
          <span className="text-sm text-white/50">Annual</span>
          <span className="px-2.5 py-1 rounded-full bg-[#f2613f]/20 text-[#f2613f] text-[10px] font-semibold uppercase tracking-wider">
            Save 2 months
          </span>
        </motion.div>

        {/* Pricing cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Blur overlay with lock */}
          <div className="absolute inset-0 z-10 backdrop-blur-md bg-[#0c0c0c]/80 rounded-3xl flex items-center justify-center">
            <div className="flex flex-col items-center gap-5 text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#f2613f] blur-2xl opacity-30" />
                <Lock className="relative w-14 h-14 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Pricing Coming Soon</h3>
                <p className="text-white/40 max-w-md text-sm">
                  We&apos;re finalizing our pricing plans. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>

          {demoPrices.map((price, idx) => (
            <motion.div
              key={price.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 group",
                price.isMostPopular
                  ? "border-2 border-[#f2613f] shadow-[0_0_40px_rgba(242,97,63,0.15)]"
                  : "border border-white/8"
              )}
              style={{
                background: price.isMostPopular
                  ? "linear-gradient(135deg, rgba(242, 97, 63, 0.05), rgba(17, 17, 17, 0.95))"
                  : "rgba(17, 17, 17, 0.8)",
              }}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 },
              }}
            >
              {/* Popular badge */}
              {price.isMostPopular && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#f2613f] text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-xl">
                  Popular
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                {/* Plan name */}
                <h3 className="text-lg font-bold text-white mb-1">{price.name}</h3>
                <p className="text-xs text-white/40 mb-6 min-h-[32px]">{price.description}</p>

                {/* Price */}
                <motion.div
                  key={`${price.id}-${interval}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <span className="text-3xl font-bold text-white">
                    ₹{interval === "year" ? toHumanPrice(price.yearlyPrice, 0) : toHumanPrice(price.monthlyPrice, 0)}
                  </span>
                  <span className="text-xs text-white/30 ml-1">/ {interval}</span>
                </motion.div>

                {/* CTA */}
                <button
                  onClick={() => window.open("https://app.trivx.in", "_blank")}
                  className={cn(
                    "w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 mb-6",
                    price.isMostPopular
                      ? "glow-button text-white"
                      : "bg-white/5 text-white/70 border border-white/10 hover:border-[#f2613f] hover:text-white"
                  )}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="border-t border-white/5 pt-5">
                  <ul className="space-y-3">
                    {price.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-[#f2613f]" />
                        <span className="text-xs text-white/50">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}