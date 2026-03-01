import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MessageCircle, Book, Headphones, Users, Search, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

const supportOptions = [
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Live Chat Support",
    description: "Get instant help from our support team via live chat",
    availability: "24/7 Available",
    responseTime: "< 2 minutes",
    action: "Start Chat"
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: "Documentation",
    description: "Comprehensive guides and API documentation",
    availability: "Always Available",
    responseTime: "Instant",
    action: "Browse Docs"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Forum",
    description: "Connect with other developers and share knowledge",
    availability: "Community Driven",
    responseTime: "Varies",
    action: "Join Forum"
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Email Support",
    description: "Detailed technical support via email",
    availability: "Mon-Fri 9AM-6PM",
    responseTime: "< 4 hours",
    action: "Send Email"
  }
];

const faqs = [
  {
    question: "How do I get started with Trivx AI?",
    answer: "Simply sign up for a free account, connect your GitHub repository, and let AI analyze your code. Follow our AI-guided setup to deploy your first application in minutes with natural language commands."
  },
  {
    question: "What platforms does Trivx AI support?",
    answer: "Trivx AI supports all major cloud providers including AWS, Azure, GCP, and Trivx-managed servers. Our AI handles infrastructure provisioning across any platform seamlessly."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a free tier with basic AI features. No credit card required. Upgrade anytime to unlock advanced self-healing, strategic intelligence, and unlimited deployments."
  },
  {
    question: "How secure is my code and data?",
    answer: "We implement enterprise-grade security with end-to-end encryption, SOC 2 compliance readiness, and regular security audits. Your code and AI models are isolated and secure."
  },
  {
    question: "Can I use natural language to deploy?",
    answer: "Absolutely! Trivx AI's natural language interface lets you deploy with commands like 'Deploy my app to production' or 'Rollback the last deployment'. AI understands and executes your intent."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 AI-assisted support, live chat, comprehensive documentation, video tutorials, and dedicated account managers for enterprise customers based in Noida, India."
  }
];

const resourceLinks = [
  {
    title: "Getting Started Guide",
    description: "Complete walkthrough for new users",
    link: "/docs/getting-started"
  },
  {
    title: "API Documentation",
    description: "Comprehensive API reference",
    link: "/api"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    link: "/tutorials"
  },
  {
    title: "Best Practices",
    description: "Expert tips and recommendations",
    link: "/docs/best-practices"
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    link: "/docs/troubleshooting"
  },
  {
    title: "Community Forum",
    description: "Connect with other developers",
    link: "/community"
  }
];

export default function SupportPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🎯 Expert Support</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="text-foreground py-6 text-4xl font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            We&apos;re Here
            <br className="hidden md:block" /> to Help You Succeed
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Get the support you need to master AI-powered DevOps automation with Trivx AI.
            <br className="hidden md:block" /> Our expert team in Noida is ready to help you every step of the way.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-primary-foreground opacity-0 ease-in-out [--animation-delay:600ms] bg-primary hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
            <span>Get Help Now</span>
            <MessageCircle className="ml-1 size-4" />
          </Button>
        </section>

        {/* Support Options */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center text-foreground">
            Choose Your Support Channel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <div
                key={option.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center"
              >
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={index * 2}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />

                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary">
                    {option.icon}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2 text-foreground">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{option.availability}</span>
                  </div>
                  <div className="text-xs font-medium text-primary">
                    Response: {option.responseTime}
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resource Links */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center text-foreground">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resourceLinks.map((resource) => (
              <Link key={resource.title} href={resource.link} className="group">
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Search Knowledge Base */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm text-center">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <Search className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Search Our Knowledge Base
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Search our comprehensive knowledge base
              with hundreds of articles, guides, and solutions.
            </p>

            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
              Search Knowledge Base
            </Button>
          </div>
        </section>

        {/* Enterprise Support CTA */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Need Enterprise Support?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get dedicated support with priority response times, dedicated account managers,
              and custom implementation assistance for your enterprise needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
                View Enterprise Plans
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
                Contact Sales
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