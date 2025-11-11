import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Code, Database, Globe, Monitor, Package, Settings, Zap } from "lucide-react";

const integrations = [
  {
    name: "GitHub",
    description: "AI-powered repository analysis and automated CI/CD generation",
    icon: <GitHubLogoIcon className="h-8 w-8" />,
    category: "Version Control",
    status: "Available"
  },
  {
    name: "Docker",
    description: "Intelligent container management and deployment automation",
    icon: <Package className="h-8 w-8" />,
    category: "Containers",
    status: "Available"
  },
  {
    name: "Kubernetes",
    description: "AI orchestration and auto-scaling for containerized apps",
    icon: <Settings className="h-8 w-8" />,
    category: "Orchestration",
    status: "Available"
  },
  {
    name: "AWS",
    description: "Deploy and manage resources on AWS with AI optimization",
    icon: <Globe className="h-8 w-8" />,
    category: "Cloud Provider",
    status: "Available"
  },
  {
    name: "Azure",
    description: "Microsoft Azure integration with intelligent deployment",
    icon: <Monitor className="h-8 w-8" />,
    category: "Cloud Provider",
    status: "Available"
  },
  {
    name: "GCP",
    description: "Google Cloud Platform with AI infrastructure provisioning",
    icon: <Database className="h-8 w-8" />,
    category: "Cloud Provider",
    status: "Available"
  },
  {
    name: "Slack",
    description: "Real-time deployment notifications and AI alerts",
    icon: <Code className="h-8 w-8" />,
    category: "Communication",
    status: "Available"
  },
  {
    name: "Terraform",
    description: "Infrastructure as Code with AI-powered optimization",
    icon: <Zap className="h-8 w-8" />,
    category: "Infrastructure",
    status: "Available"
  }
];

export default function IntegrationsPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🔗 Connect Everything</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Seamless Integrations
            <br className="hidden md:block" /> for Modern DevOps
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Connect your favorite tools and services to Trivx AI for a unified, AI-powered DevOps experience.
            <br className="hidden md:block" /> From version control to multi-cloud providers, intelligent automation everywhere.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>Explore Integrations</span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Integrations Grid */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={index * 2}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{integration.name}</h3>
                    <span className="text-xs text-muted-foreground">{integration.category}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {integration.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${integration.status === 'Available'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                    {integration.status}
                  </span>

                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Don&apos;t see your integration?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re constantly adding new integrations. Request a custom integration or build your own using our API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Request Integration
              </Button>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                View API Docs
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <Particles
          className="absolute inset-0 -z-10"
          quantity={50}
          ease={70}
          size={0.05}
          staticity={40}
          color={"#ffffff"}
        />
      </div>
    </>
  );
}