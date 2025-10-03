import { buttonVariants } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { UserAuthForm } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up | Trivx",
  description: "Sign Up for Trivx",
};

export default function SignUpPage() {
  return (
    <div className="relative flex h-screen w-screen">
      {/* Left Side - Grid Design with Content (60%) */}
      <div className="relative flex w-3/5 items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Grid />
        </div>

        <div className="relative z-10 max-w-xl px-8 text-white">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold">Welcome to Trivx</h1>
            <p className="text-xl text-gray-300">
              Transform your development workflow with AI-powered DevOps
              automation
            </p>
          </div>

          <div className="mt-8 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-sm">
              "Trivx reduced our deployment time from hours to minutes. It's a
              game-changer for our development team."
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form (40%) */}
      <div className="relative flex w-2/5 items-center justify-center bg-white dark:bg-slate-950">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          <>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
        <div className="w-full max-w-sm px-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Join Trivx
            </h1>
            <p className="text-sm text-muted-foreground">
              Start automating your DevOps workflow today
            </p>
          </div>

          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/signin"
              className="hover:text-brand underline underline-offset-4"
            >
              Already have an account? Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
