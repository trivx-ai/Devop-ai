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
      title: "Adaptive Self-Healing",
      description:
        "AI monitors pipelines, predicts failures, and auto-fixes infrastructure or deployment issues in real time.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Natural Language DevOps",
      description:
        "Operate DevOps with simple commands like 'Deploy my app to production' or 'Rollback the last deployment'.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Strategic Intelligence Dashboard",
      description:
        "AI-driven analytics showing cost-saving simulations, deployment efficiency, and what-if forecasts.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Multi-Cloud Deployment",
      description:
        "Seamlessly deploy to AWS, Azure, GCP, or Trivx-managed infrastructure with zero vendor lock-in.",
      icon: <IconCloud />,
    },
    {
      title: "Developer Co-Pilot",
      description:
        "A proactive assistant that suggests pipelines, infrastructure, and tests during coding, not after.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 AI Monitoring",
      description:
        "Our AI agents monitor your deployments 24/7, ensuring 100% uptime and instant issue resolution.",
      icon: <IconHelp />,
    },
    {
      title: "Vibe-Based Experience",
      description:
        "Futuristic UI with minimal friction — DevOps that feels natural, fun, and modern for developers.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Built with compliance and security in mind — SOC 2, GDPR ready with advanced security scanning.",
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
            Why Choose
            <span className="text-[var(--color-one)]"> Trivx AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the unique innovations that make Trivx AI the most
            intelligent DevOps automation platform for modern development teams.
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
      <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-gradient-to-r group-hover/feature:from-[var(--color-one)] group-hover/feature:to-[var(--color-two)] transition-all duration-200 origin-center" />

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
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-gradient-to-r group-hover/feature:from-[var(--color-one)] group-hover/feature:to-[var(--color-two)] transition-all duration-200 origin-center" />
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
