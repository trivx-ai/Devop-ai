import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import TextShimmer from "@/components/magicui/text-shimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function UseCases() {
  const features = [
    {
      title: "AI-Powered Self-Healing",
      description:
        "Our AI continuously monitors CI/CD pipelines, predicts infrastructure failures, and automatically fixes deployment issues in real-time — ensuring maximum uptime and reliability.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Natural Language DevOps Commands",
      description:
        "Control your entire DevOps workflow with simple commands like 'Deploy my app to production' or 'Rollback the last deployment' — no complex CLI needed.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Intelligent Cost Optimization",
      description:
        "AI-driven analytics dashboard showing real-time cost-saving simulations, deployment efficiency metrics, and predictive what-if forecasts for infrastructure spending.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Multi-Cloud Deployment Freedom",
      description:
        "Deploy seamlessly to AWS, Microsoft Azure, Google Cloud Platform, or custom infrastructure with zero vendor lock-in — Trivx AI handles all cloud providers intelligently.",
      icon: <IconCloud />,
    },
    {
      title: "Proactive AI DevOps Co-Pilot",
      description:
        "A smart assistant that suggests optimized CI/CD pipelines, infrastructure configurations, and automated tests during coding — not after deployment failures.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 AI Infrastructure Monitoring",
      description:
        "Our AI agents monitor your deployments around the clock, ensuring 99.9% uptime with instant automated issue resolution and smart alerting.",
      icon: <IconHelp />,
    },
    {
      title: "Developer-First Experience",
      description:
        "Modern, intuitive UI with minimal friction — DevOps automation that feels natural and enjoyable for developers, with real-time visual feedback.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Enterprise-Grade Security & Compliance",
      description:
        "Built with SOC 2 Type II and GDPR compliance, featuring advanced security scanning, encrypted secrets management, and role-based access control (RBAC).",
      icon: <IconHeart />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Description */}
        <div className="text-center mb-16">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🚀 Unique Innovations & USPs</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
            Why Developers Choose
            <span className="text-[var(--color-one)]"> Trivx AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover powerful features that make Trivx AI the most intelligent
            AI-powered DevOps automation platform for modern development teams.
            From automated CI/CD pipelines to multi-cloud deployment and self-healing infrastructure.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <UseCase key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const UseCase = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {/* feature title */}
      <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />

      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-foreground/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
