"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader, Lock } from "lucide-react";
import { useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import TextShimmer from "@/components/magicui/text-shimmer";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};

const demoPrices = [
  {
    id: "price_1",
    name: "Free",
    description: "Perfect for individual developers exploring AI DevOps automation",
    features: [
      "1 GitHub repository connection",
      "Basic AI pipeline generation",
      "Community support",
      "5 deployments per month",
      "Shared infrastructure",
    ],
    monthlyPrice: 0,
    yearlyPrice: 0,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Starter",
    description: "Ideal for small teams building production applications",
    features: [
      "5 GitHub repositories",
      "AI-powered CI/CD automation",
      "Multi-cloud deployment support",
      "Email support",
      "50 deployments per month",
      "Basic monitoring dashboard",
    ],
    monthlyPrice: 9999,
    yearlyPrice: 99990,
    isMostPopular: false,
  },
  {
    id: "price_3",
    name: "Professional",
    description: "Advanced automation for growing teams and startups",
    features: [
      "Unlimited repositories",
      "AI self-healing pipelines",
      "AWS, Azure, GCP deployment",
      "Natural language DevOps commands",
      "Priority support",
      "Advanced monitoring & alerts",
      "Cost optimization insights",
    ],
    monthlyPrice: 49000,
    yearlyPrice: 490000,
    isMostPopular: true,
  },
  {
    id: "price_4",
    name: "Enterprise",
    description: "Full AI DevOps automation for large organizations",
    features: [
      "Everything in Professional",
      "Dedicated AI DevOps consultant",
      "Custom integrations & workflows",
      "SOC 2, GDPR compliance automation",
      "99.99% uptime SLA",
      "24/7 priority support",
      "Strategic intelligence dashboard",
      "White-label options",
    ],
    monthlyPrice: 99000,
    yearlyPrice: 990000,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>💰 Choose Your Plan</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
            Simple, Transparent
            <span className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text text-transparent">
              {" "}
              Pricing
            </span>
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choose a <strong>plan that scales</strong> with your team. From startups to enterprises, Trivx AI delivers intelligent DevOps automation at every stage.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4 relative">
          {/* Blur overlay with lock */}
          <div className="absolute inset-0 z-10 backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-2xl flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] blur-xl opacity-50"></div>
                <Lock className="relative w-16 h-16 text-foreground" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Pricing Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  We're finalizing our pricing plans. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>

          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  ₹
                  {interval === "year"
                    ? toHumanPrice(price.yearlyPrice, 0)
                    : toHumanPrice(price.monthlyPrice, 0)}
                  <span className="text-xs"> / {interval}</span>
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>Get Started</p>
                )}

                {isLoading && id === price.id && <p>Setting up...</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
