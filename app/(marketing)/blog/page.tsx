import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Calendar, Clock, User, Search } from "lucide-react";
import Link from "next/link";

const featuredPost = {
  title: "The Future of DevOps: AI-Powered Automation in 2025",
  excerpt: "Discover how artificial intelligence is revolutionizing DevOps practices and what it means for development teams worldwide.",
  author: "Trivx Team",
  date: "October 15, 2025",
  readTime: "8 min read",
  category: "AI & DevOps",
  image: "/blog-featured.jpg"
};

const blogPosts = [
  {
    title: "10 Best Practices for CI/CD Pipeline Security",
    excerpt: "Learn essential security measures to protect your continuous integration and deployment pipelines from common vulnerabilities.",
    author: "Security Expert",
    date: "October 12, 2025",
    readTime: "6 min read",
    category: "Security",
    tags: ["Security", "CI/CD", "Best Practices"]
  },
  {
    title: "Kubernetes vs Docker: Understanding Container Orchestration",
    excerpt: "A comprehensive comparison between Kubernetes and Docker, helping you choose the right containerization solution.",
    author: "DevOps Engineer",
    date: "October 10, 2025",
    readTime: "10 min read",
    category: "Containers",
    tags: ["Kubernetes", "Docker", "Containers"]
  },
  {
    title: "Monitoring and Observability in Microservices Architecture",
    excerpt: "Essential strategies for monitoring distributed systems and maintaining observability in complex microservices environments.",
    author: "Platform Engineer",
    date: "October 8, 2025",
    readTime: "12 min read",
    category: "Monitoring",
    tags: ["Monitoring", "Microservices", "Observability"]
  },
  {
    title: "Infrastructure as Code: Terraform vs AWS CloudFormation",
    excerpt: "Compare two popular IaC tools and learn when to use each for your cloud infrastructure management needs.",
    author: "Cloud Architect",
    date: "October 5, 2025",
    readTime: "9 min read",
    category: "Infrastructure",
    tags: ["Terraform", "AWS", "IaC"]
  },
  {
    title: "GitOps: The Next Evolution of DevOps Workflows",
    excerpt: "Explore GitOps principles and how they&apos;re transforming the way teams manage deployments and infrastructure.",
    author: "GitOps Expert",
    date: "October 3, 2025",
    readTime: "7 min read",
    category: "GitOps",
    tags: ["GitOps", "Git", "Workflows"]
  },
  {
    title: "Performance Testing in CI/CD: Tools and Strategies",
    excerpt: "Integrate performance testing into your CI/CD pipeline with the right tools and methodologies for optimal results.",
    author: "QA Engineer",
    date: "October 1, 2025",
    readTime: "11 min read",
    category: "Testing",
    tags: ["Performance", "Testing", "CI/CD"]
  }
];

const categories = [
  "All Posts",
  "AI & DevOps",
  "Security",
  "Containers",
  "Monitoring",
  "Infrastructure",
  "GitOps",
  "Testing"
];

const popularTags = [
  "DevOps", "CI/CD", "Docker", "Kubernetes", "AWS", "Security",
  "Monitoring", "Terraform", "Git", "Automation"
];

export default function BlogPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>✍️ Insights & Updates</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            DevOps Insights
            <br className="hidden md:block" /> & Best Practices
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Stay updated with the latest DevOps trends, best practices, and expert insights.
            <br className="hidden md:block" /> Learn from industry leaders and level up your automation game.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:800ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>Subscribe to Newsletter</span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Featured Post */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Featured Article
          </h2>
          <Link href="#" className="group block">
            <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
              <BorderBeam
                size={200}
                duration={12}
                delay={0}
                colorFrom="var(--color-one)"
                colorTo="var(--color-two)"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Image Placeholder */}
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[var(--color-one)]/30 to-[var(--color-two)]/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-white/80 text-sm">Featured Article</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{featuredPost.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Category Filter */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                className={category === "All Posts"
                  ? "bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90"
                  : "border-white/20 hover:bg-white/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Link key={post.title} href="#" className="group block">
                  <article className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-white/10 text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Tags */}
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Link
                      key={tag}
                      href="#"
                      className="text-xs px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-muted-foreground hover:text-primary"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={2}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />

                <h3 className="font-semibold text-lg mb-4 text-foreground">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest DevOps insights and tutorials delivered to your inbox.
                </p>

                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground text-sm"
                  />
                  <Button className="w-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link key={post.title} href="#" className="block group">
                      <div className="border-b border-white/10 pb-3 last:border-b-0">
                        <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Load More */}
        <section className="relative mx-auto mt-16 max-w-[80rem] px-6 md:px-8 pb-24 text-center">
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            Load More Posts
          </Button>
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