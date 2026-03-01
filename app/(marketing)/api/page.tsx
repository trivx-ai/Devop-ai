import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon, CodeIcon, CopyIcon } from "@radix-ui/react-icons";
import { Code, Database, Key, Zap } from "lucide-react";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/deployments",
    description: "List all deployments",
    response: "Array of deployment objects"
  },
  {
    method: "POST",
    path: "/api/v1/deployments",
    description: "Create a new deployment",
    response: "Deployment object"
  },
  {
    method: "GET",
    path: "/api/v1/pipelines",
    description: "List all CI/CD pipelines",
    response: "Array of pipeline objects"
  },
  {
    method: "POST",
    path: "/api/v1/pipelines/{id}/trigger",
    description: "Trigger a pipeline execution",
    response: "Execution object"
  }
];

const sdks = [
  {
    name: "Node.js",
    description: "Official JavaScript/TypeScript SDK",
    icon: <Code className="h-6 w-6" />,
    installCommand: "npm install @trivx/sdk"
  },
  {
    name: "Python",
    description: "Official Python SDK",
    icon: <Database className="h-6 w-6" />,
    installCommand: "pip install trivx-sdk"
  },
  {
    name: "Go",
    description: "Official Go SDK",
    icon: <Zap className="h-6 w-6" />,
    installCommand: "go get github.com/trivx/go-sdk"
  }
];

const codeExample = `import { TrivxClient } from '@trivx/sdk';

const client = new TrivxClient({
  apiKey: 'your-api-key'
});

// Create a deployment
const deployment = await client.deployments.create({
  name: 'my-app',
  image: 'my-app:latest',
  environment: 'production'
});

// Trigger a pipeline
await client.pipelines.trigger('pipeline-id');`;

export default function APIPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🚀 Developer API</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="text-foreground py-6 text-4xl font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Powerful API
            <br className="hidden md:block" /> for Developers
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Build custom integrations and automate your DevOps workflows with our comprehensive API.
            <br className="hidden md:block" /> RESTful endpoints with full CRUD operations and real-time webhooks.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-primary-foreground opacity-0 ease-in-out [--animation-delay:600ms] bg-primary hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
            <span>Get API Key</span>
            <Key className="ml-1 size-4" />
          </Button>
        </section>

        {/* Code Example */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            Quick Start Example
          </h2>
          <div className="relative rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CodeIcon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">example.js</span>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400">{codeExample}</code>
            </pre>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            Core Endpoints
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {endpoints.map((endpoint) => (
              <div
                key={`${endpoint.method}-${endpoint.path}`}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${endpoint.method === 'GET'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-green-500/20 text-green-400'
                    }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {endpoint.description}
                </p>

                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Returns:</span> {endpoint.response}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SDKs Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            Official SDKs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {sdks.map((sdk, index) => (
              <div
                key={sdk.name}
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
                    {sdk.icon}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2 text-foreground">{sdk.name}</h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {sdk.description}
                </p>

                <code className="text-xs bg-black/50 px-3 py-2 rounded border border-white/10 text-green-400">
                  {sdk.installCommand}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            API Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "RESTful Design",
                description: "Clean, predictable REST API following industry standards"
              },
              {
                title: "Rate Limiting",
                description: "Built-in rate limiting to ensure fair usage and stability"
              },
              {
                title: "Webhooks",
                description: "Real-time notifications for deployment and pipeline events"
              },
              {
                title: "Authentication",
                description: "Secure API key-based authentication with role-based access"
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center"
              >
                <h3 className="font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Build?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get your API key and start integrating Trivx into your applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
                View Full Docs
              </Button>
              <a href="https://app.trivx.in" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out">
                  Get Started Free
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </a>
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