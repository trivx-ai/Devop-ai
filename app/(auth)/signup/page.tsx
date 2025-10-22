import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { BorderBeam } from "@/components/magicui/border-beam";
import Particles from "@/components/magicui/particles";
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
    <>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-background">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8 z-50 border-white/20 hover:bg-white/10"
          )}
        >
          <>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>

        <div className="relative mx-auto flex w-full max-w-md flex-col justify-center gap-4 sm:gap-6 p-4 sm:p-8 z-10">
          <div className="relative rounded-xl border border-white/10 bg-black/5 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
              className="pointer-events-none"
            />

            <div className="relative z-20 flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent">
                  Join Trivx
                </h1>
                <p className="text-sm text-muted-foreground">
                  Create your account to start automating your DevOps workflow
                </p>
              </div>

              <UserAuthForm type="signup" />

              <p className="relative z-30 text-center text-sm text-muted-foreground">
                <Link
                  href="/login"
                  className="hover:text-primary underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Already have an account? Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

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
