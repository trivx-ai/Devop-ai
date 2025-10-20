import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Globe, Rocket, Users, Zap, Target } from "lucide-react";

const stats = [
  { number: "10K+", label: "Deployments" },
  { number: "500+", label: "Companies" },
  { number: "99.9%", label: "Uptime" },
  { number: "50+", label: "Integrations" }
];

const values = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Innovation First",
    description: "We constantly push the boundaries of what&apos;s possible in DevOps automation."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Developer Focus",
    description: "Built by developers, for developers. We understand your challenges."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Scale",
    description: "Supporting teams worldwide with enterprise-grade reliability."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Speed & Efficiency",
    description: "Reduce deployment times from hours to minutes with intelligent automation."
  }
];

const timeline = [
  {
    year: "2023",
    title: "Founded",
    description: "Trivx was founded with the vision to revolutionize DevOps automation using AI."
  },
  {
    year: "2024",
    title: "First Release",
    description: "Launched our MVP with core CI/CD features and gained first 100 customers."
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Introduced AI-powered pipeline optimization and intelligent deployment strategies."
  },
  {
    year: "2025",
    title: "Enterprise Ready",
    description: "Scaled to support enterprise customers with advanced security and compliance features."
  }
];

export default function AboutPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🏢 About Trivx</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Revolutionizing
            <br className="hidden md:block" /> DevOps Automation
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            We&apos;re building the future of DevOps with AI-powered automation that helps teams
            <br className="hidden md:block" /> deploy faster, scale efficiently, and focus on what matters most.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>Join Our Mission</span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Stats Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Trivx, we believe that DevOps should be accessible, intelligent, and effortless.
                Our mission is to democratize advanced deployment technologies and make them available
                to development teams of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We&apos;re not just building tools; we&apos;re crafting experiences that empower developers
                to focus on creating amazing products while we handle the complexity of modern infrastructure.
              </p>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <BorderBeam
                  size={200}
                  duration={12}
                  delay={0}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />
                <Target className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4 text-center">Vision 2030</h3>
                <p className="text-center text-muted-foreground">
                  To become the world&apos;s most trusted AI-powered DevOps platform,
                  enabling millions of developers to ship software with unprecedented speed and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={index * 2}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                </div>

                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-one)] to-[var(--color-two)]"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex-row gap-8`}
                >
                  <div className="md:w-1/2 w-full">
                    <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <div className="text-sm text-primary font-bold mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] rounded-full border-4 border-background"></div>

                  <div className="md:w-1/2 w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who want to shape the future of DevOps.
              Explore our open positions and become part of the Trivx family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                View Careers
              </Button>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Contact Us
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