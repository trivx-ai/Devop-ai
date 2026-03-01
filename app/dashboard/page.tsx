import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard | Trivx",
  description: "Trivx Dashboard - Manage your DevOps workflow",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>

          {/* Welcome Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome to Trivx!
            </h1>
            <p className="text-muted-foreground">
              You have successfully signed in. Your dashboard is being prepared.
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">
              Dashboard Coming Soon
            </span>
          </div>

          {/* Description */}
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Your Trivx dashboard is currently under development. Soon you&apos;ll be able to:
            </p>
            <ul className="text-left space-y-2 max-w-sm mx-auto">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-one)]" />
                Connect your GitHub repositories
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-one)]" />
                Set up CI/CD pipelines
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-one)]" />
                Deploy to multiple cloud providers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-one)]" />
                Monitor your applications with AI
              </li>
            </ul>
          </div>

          {/* Back to Home Button */}
          <Button asChild className="bg-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-200">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}