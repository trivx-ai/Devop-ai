import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Calendar, Clock, User, Search } from "lucide-react";
import Link from "next/link";

const featuredPost = {
  title: "The Future of DevOps: How AI is Making Deployment Effortless",
  excerpt: "Discover how Trivx AI is revolutionizing DevOps with natural language commands, self-healing pipelines, and intelligent automation.",
  author: "Yash Rana",
  date: "November 10, 2025",
  readTime: "8 min read",
  category: "AI & DevOps",
  image: "/blog-featured.jpg"
};

const blogPosts = [
  {
    title: "Building AI-Powered CI/CD Pipelines: A Complete Guide",
    excerpt: "Learn how Trivx AI analyzes your codebase and automatically generates optimized CI/CD pipelines with zero manual configuration.",
    author: "Trivx Team",
    date: "November 8, 2025",
    readTime: "10 min read",
    category: "CI/CD",
    tags: ["AI", "CI/CD", "Automation"]
  },
  {
    title: "Natural Language DevOps: Deploy with Simple Commands",
    excerpt: "Explore how you can deploy applications using commands like 'Deploy my app to production' with Trivx AI's natural language interface.",
    author: "Aditya",
    date: "November 5, 2025",
    readTime: "7 min read",
    category: "Innovation",
    tags: ["Natural Language", "AI", "DevOps"]
  },
  {
    title: "Multi-Cloud Deployment Made Simple with AI Automation",
    excerpt: "Deploy to AWS, Azure, or GCP seamlessly. Learn how Trivx AI handles infrastructure provisioning across multiple cloud providers.",
    author: "Yash Rana",
    date: "November 2, 2025",
    readTime: "12 min read",
    category: "Cloud",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP"]
  },
  {
    title: "Self-Healing Pipelines: The Future of Reliable Deployments",
    excerpt: "Discover how AI predicts failures and auto-fixes infrastructure issues before they impact your deployments.",
    author: "Trivx Team",
    date: "October 30, 2025",
    readTime: "9 min read",
    category: "Reliability",
    tags: ["Self-Healing", "AI", "Monitoring"]
  },
  {
    title: "Strategic Intelligence Dashboard: Cost Optimization with AI",
    excerpt: "Learn how Trivx AI's Strategic Intelligence Dashboard helps you simulate costs, optimize deployments, and make data-driven decisions.",
    author: "Aditya",
    date: "October 27, 2025",
    readTime: "8 min read",
    category: "Analytics",
    tags: ["Cost Optimization", "Analytics", "Intelligence"]
  },
  {
    title: "From Code to Cloud in Minutes: A Developer's Journey with Trivx",
    excerpt: "Follow a real developer's experience deploying a full-stack application using Trivx AI's effortless automation platform.",
    author: "Guest Author",
    date: "October 24, 2025",
    readTime: "11 min read",
    category: "Case Study",
    tags: ["Tutorial", "Deployment", "Developer Experience"]
  }
];

const categories = [
  "All Posts",
  "AI & DevOps",
  "CI/CD",
  "Innovation",
  "Cloud",
  "Reliability",
  "Analytics",
  "Case Study"
];

const popularTags = [
  "AI", "DevOps", "Automation", "CI/CD", "Multi-Cloud", "AWS",
  "Natural Language", "Self-Healing", "Cost Optimization", "Deployment"
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

          <h1 className="text-foreground py-6 text-4xl font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Trivx AI Blog
            <br className="hidden md:block" /> Insights & Tutorials
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Learn about AI-powered DevOps automation, deployment strategies, and developer productivity.
            <br className="hidden md:block" /> Get expert insights from the team building the future of autonomous DevOps.
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

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-primary-foreground opacity-0 ease-in-out [--animation-delay:800ms] bg-primary hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
            <span>Subscribe to Newsletter</span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Featured Post */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
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
                <div className="aspect-video lg:aspect-auto bg-primary/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-white/80 text-sm">Featured Article</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground font-medium">
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
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out"

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
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
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
          <Button className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
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