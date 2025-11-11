import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MapPin, Clock, Briefcase, Users, Heart, Coffee } from "lucide-react";


const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Noida, Uttar Pradesh, India",
    type: "Full-time",
    experience: "4+ years",
    description: "Build the next generation of AI-powered DevOps platform with React, Node.js, and cloud technologies."
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Noida, India / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop AI models for self-healing pipelines, natural language DevOps, and intelligent automation."
  },
  {
    title: "DevOps Platform Engineer",
    department: "Engineering",
    location: "Noida, Uttar Pradesh, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Design and implement multi-cloud infrastructure orchestration and deployment automation systems."
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create the vibe-based developer experience with futuristic UI and intuitive workflows."
  },
  {
    title: "Developer Advocate",
    department: "Developer Relations",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Engage with developer communities, create content, and help developers succeed with Trivx AI."
  },
  {
    title: "Technical Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    experience: "2+ years",
    description: "Create comprehensive documentation, tutorials, blogs, and guides for AI-powered DevOps."
  }
];

const benefits = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Flexible Schedule",
    description: "Work-life balance with flexible hours and unlimited PTO policy"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Remote-First Culture",
    description: "Work from anywhere with occasional team gatherings and offsites"
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Growth & Learning",
    description: "Learning budget, conference attendance, and skill development opportunities"
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries with AI to solve complex DevOps problems. Experiment, learn, and innovate fearlessly."
  },
  {
    title: "Developer Obsession",
    description: "Our customers are developers. We build for their needs with empathy, understanding their workflows and pain points."
  },
  {
    title: "Transparency & Trust",
    description: "Open communication, honest feedback, and transparent decision-making. Everyone has a voice at Trivx AI."
  },
  {
    title: "Vibe-Based Culture",
    description: "Work should be fun, modern, and fulfilling. We embrace a futuristic, developer-friendly vibe in everything we do."
  }
];

export default function CareersPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🚀 Join Our Mission</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Build the Future
            <br className="hidden md:block" /> of DevOps with Us
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Join our team in Noida, India (or work remotely) and help us build the AI-powered DevOps platform
            <br className="hidden md:block" /> that&apos;s transforming how developers deploy, monitor, and scale applications worldwide.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>View Open Positions</span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Company Values */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

                <h3 className="font-semibold text-lg mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Why Join Trivx?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                    {benefit.icon}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Open Positions
          </h2>
          <div className="space-y-6 mb-16">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="font-semibold text-xl mb-2 text-foreground">{position.title}</h3>
                    <p className="text-muted-foreground mb-4">{position.description}</p>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="text-sm text-muted-foreground mb-2">Experience Required</div>
                    <div className="font-medium text-foreground">{position.experience}</div>
                  </div>

                  <div className="text-center lg:text-right">
                    <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diversity & Culture */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                Diversity & Inclusion
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe diverse teams build better products. At Trivx AI, we&apos;re committed to creating an
                inclusive environment where everyone can thrive, regardless of background, identity, or experience.
                Based in India&apos;s tech hub (Noida), we welcome talent from all over the world.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We&apos;re an equal opportunity employer. We encourage applications from underrepresented groups
                and are happy to make reasonable accommodations. Whether you&apos;re a recent graduate or seasoned
                professional, if you&apos;re passionate about AI and DevOps, we want to hear from you.
              </p>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Learn About Our Culture
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
                <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Startup Culture</h3>
                <p className="text-center text-muted-foreground">
                  We&apos;re a small, agile team based in Noida where every team member makes a real impact.
                  Work directly with founders, shape product direction, and see your work used by developers globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Hiring Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { step: "1", title: "Application", description: "Submit your application and resume through our careers page" },
              { step: "2", title: "Screen", description: "Initial screening call with our talent team to discuss your background" },
              { step: "3", title: "Interviews", description: "Technical and cultural fit interviews with team members" },
              { step: "4", title: "Offer", description: "Reference checks and final offer discussion" }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Don&apos;t See a Perfect Fit?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent. Send us your resume and let us know
              how you&apos;d like to contribute to the future of DevOps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Send Resume
              </Button>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                View All Positions
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