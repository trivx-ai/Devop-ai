import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon, CodeIcon, RocketIcon } from "@radix-ui/react-icons";
import { FileText, Lightbulb, Play, Search, Users } from "lucide-react";
import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    description: "Quick start guides and AI setup",
    icon: <RocketIcon className="h-8 w-8" />,
    articles: [
      "Connect GitHub Repository",
      "First AI Deployment",
      "Natural Language Commands",
      "Dashboard Overview"
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation",
    icon: <CodeIcon className="h-8 w-8" />,
    articles: [
      "Authentication",
      "AI Pipeline API",
      "Deployment API",
      "Webhooks"
    ]
  },
  {
    title: "Tutorials",
    description: "Step-by-step AI DevOps guides",
    icon: <Play className="h-8 w-8" />,
    articles: [
      "AI CI/CD Pipeline Setup",
      "Multi-Cloud Deployment",
      "Self-Healing Configuration",
      "Cost Optimization Tips"
    ]
  },
  {
    title: "Best Practices",
    description: "AI automation recommendations",
    icon: <Lightbulb className="h-8 w-8" />,
    articles: [
      "Security Guidelines",
      "Performance Optimization",
      "Natural Language Tips",
      "Strategic Intelligence"
    ]
  },
  {
    title: "Integrations",
    description: "Connect with your tools",
    icon: <Users className="h-8 w-8" />,
    articles: [
      "GitHub Integration",
      "Slack Notifications",
      "AWS/Azure/GCP",
      "Database Connections"
    ]
  },
  {
    title: "Troubleshooting",
    description: "AI assistance and solutions",
    icon: <Search className="h-8 w-8" />,
    articles: [
      "Deployment Failures",
      "AI Pipeline Issues",
      "Performance Problems",
      "Error Resolution"
    ]
  }
];

const featuredGuides = [
  {
    title: "Complete AI DevOps Setup Guide",
    description: "Learn how to set up AI-powered CI/CD with natural language commands from scratch",
    readTime: "15 min read",
    difficulty: "Beginner"
  },
  {
    title: "Advanced Multi-Cloud Deployment",
    description: "Deploy to AWS, Azure, and GCP simultaneously with AI orchestration",
    readTime: "25 min read",
    difficulty: "Advanced"
  },
  {
    title: "Self-Healing Pipeline Configuration",
    description: "Set up adaptive self-healing workflows that predict and fix failures automatically",
    readTime: "20 min read",
    difficulty: "Intermediate"
  }
];

export default function DocsPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>📚 Knowledge Base</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Documentation
            <br className="hidden md:block" /> & Guides
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Everything you need to master Trivx AI's autonomous DevOps platform.
            <br className="hidden md:block" /> From quick starts to AI-powered automation configurations.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <a href="https://app.trivx.in" target="_blank" rel="noopener noreferrer">
            <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:800ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
              <span>Get Started</span>
              <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </a>
        </section>

        {/* Featured Guides */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {featuredGuides.map((guide, index) => (
              <Link key={guide.title} href="#" className="group">
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <BorderBeam
                    size={100}
                    duration={12}
                    delay={index * 2}
                    colorFrom="var(--color-one)"
                    colorTo="var(--color-two)"
                  />

                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                      {guide.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {guide.description}
                  </p>

                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Documentation Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {docSections.map((section) => (
              <div
                key={section.title}
                className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                    {section.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{section.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {section.description}
                </p>

                <ul className="space-y-2">
                  {section.articles.map((article) => (
                    <li key={article}>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <FileText className="h-3 w-3" />
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Need More Help?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community or contact support for personalized assistance with your DevOps journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Join Community
              </Button>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Contact Support
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