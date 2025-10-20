import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Book, Clock, Play, User, Star } from "lucide-react";
import Link from "next/link";

const tutorials = [
  {
    title: "Getting Started with Trivx",
    description: "A comprehensive guide to setting up your first deployment pipeline",
    duration: "15 min",
    difficulty: "Beginner",
    category: "Getting Started",
    author: "Trivx Team",
    rating: 4.9,
    students: "2.5k",
    lessons: 8,
    image: "/tutorial-1.jpg"
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Learn how to create automated CI/CD pipelines with zero-downtime deployments",
    duration: "25 min",
    difficulty: "Intermediate",
    category: "Automation",
    author: "Dev Expert",
    rating: 4.8,
    students: "1.8k",
    lessons: 12,
    image: "/tutorial-2.jpg"
  },
  {
    title: "Docker Container Management",
    description: "Master container deployment and orchestration with Trivx platform",
    duration: "20 min",
    difficulty: "Intermediate",
    category: "Containers",
    author: "Docker Pro",
    rating: 4.7,
    students: "1.2k",
    lessons: 10,
    image: "/tutorial-3.jpg"
  },
  {
    title: "Kubernetes Integration",
    description: "Deploy and scale applications on Kubernetes clusters efficiently",
    duration: "35 min",
    difficulty: "Advanced",
    category: "Orchestration",
    author: "K8s Master",
    rating: 4.9,
    students: "980",
    lessons: 15,
    image: "/tutorial-4.jpg"
  },
  {
    title: "Multi-Environment Setup",
    description: "Configure development, staging, and production environments",
    duration: "18 min",
    difficulty: "Beginner",
    category: "Configuration",
    author: "Trivx Team",
    rating: 4.6,
    students: "1.5k",
    lessons: 9,
    image: "/tutorial-5.jpg"
  },
  {
    title: "Advanced Security & Compliance",
    description: "Implement security best practices and compliance requirements",
    duration: "30 min",
    difficulty: "Advanced",
    category: "Security",
    author: "Security Expert",
    rating: 4.8,
    students: "750",
    lessons: 13,
    image: "/tutorial-6.jpg"
  }
];

const categories = [
  "All Tutorials",
  "Getting Started",
  "Automation",
  "Containers",
  "Orchestration",
  "Configuration",
  "Security"
];

const learningPaths = [
  {
    title: "DevOps Fundamentals",
    description: "Start your DevOps journey with essential concepts and practices",
    tutorials: 5,
    duration: "2 hours",
    level: "Beginner"
  },
  {
    title: "Container Mastery",
    description: "Become an expert in containerization and orchestration",
    tutorials: 8,
    duration: "4 hours",
    level: "Intermediate"
  },
  {
    title: "Production Ready",
    description: "Advanced techniques for enterprise-grade deployments",
    tutorials: 6,
    duration: "3 hours",
    level: "Advanced"
  }
];

export default function TutorialsPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>📖 Learn & Master</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Master DevOps
            <br className="hidden md:block" /> with Expert Tutorials
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Learn from industry experts and master modern DevOps practices with hands-on tutorials.
            <br className="hidden md:block" /> From beginner guides to advanced techniques, we&apos;ve got you covered.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>Start Learning</span>
            <Play className="ml-1 size-4" />
          </Button>
        </section>

        {/* Learning Paths */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Structured Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {learningPaths.map((path, index) => (
              <div
                key={path.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={index * 2}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />

                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${path.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      path.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                    }`}>
                    {path.level}
                  </span>
                  <span className="text-xs text-muted-foreground">{path.duration}</span>
                </div>

                <h3 className="font-semibold text-lg mb-3 text-foreground">{path.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{path.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{path.tutorials} tutorials</span>
                  <span>{path.duration}</span>
                </div>

                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                  Start Path
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Tutorials" ? "default" : "outline"}
                className={category === "All Tutorials"
                  ? "bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90"
                  : "border-white/20 hover:bg-white/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tutorials.map((tutorial, index) => (
              <Link key={tutorial.title} href="#" className="group">
                <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <BorderBeam
                    size={100}
                    duration={12}
                    delay={index * 1}
                    colorFrom="var(--color-one)"
                    colorTo="var(--color-two)"
                  />

                  {/* Tutorial Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[var(--color-one)]/20 to-[var(--color-two)]/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white/70" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                        }`}>
                        {tutorial.difficulty}
                      </span>
                      <span className="text-xs text-muted-foreground">{tutorial.category}</span>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Book className="h-3 w-3" />
                        <span>{tutorial.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{tutorial.students}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-foreground">{tutorial.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">By {tutorial.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Ready to Level Up Your DevOps Skills?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already mastering DevOps with our expert-led tutorials.
              Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Browse All Tutorials
              </Button>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Get Full Access
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