"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

type FormData = z.infer<typeof userAuthSchema>;
type OtpData = z.infer<typeof otpSchema>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [step, setStep] = React.useState<"auth" | "otp">("auth");
  const [userEmail, setUserEmail] = React.useState<string>("");

  const form = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const otpForm = useForm<OtpData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isOtpLoading, setIsOtpLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const signInResult = { ok: true };
    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast.error("Something went wrong.", {
        description: "Your sign in request failed. Please try again.",
      });
    }

    setUserEmail(data.email);
    setStep("otp");
    return toast.success("OTP Sent!", {
      description: "We've sent a 6-digit verification code to your email.",
    });
  }

  async function onOtpSubmit(data: OtpData) {
    setIsOtpLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const otpResult = { ok: true };
    setIsOtpLoading(false);

    if (!otpResult?.ok) {
      return toast.error("Invalid OTP", {
        description: "The verification code is incorrect. Please try again.",
      });
    }

    return toast.success("Welcome to Trivx", {
      description: "Successfully logged in! Redirecting to your dashboard...",
    });
  }

  async function onSignInGithub() {
    setIsGitHubLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsGitHubLoading(false);
    toast.success("GitHub Connected", {
      description:
        "Successfully connected to GitHub. Setting up your repositories...",
    });
  }

  async function onSignInGoogle() {
    setIsGoogleLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsGoogleLoading(false);
    toast.success("Google Connected", {
      description:
        "Successfully signed in with Google. Redirecting to dashboard...",
    });
  }

  const resendOtp = async () => {
    setIsOtpLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsOtpLoading(false);
    toast.success("OTP Resent", {
      description: "A new verification code has been sent to your email.",
    });
  };

  if (step === "otp") {
    return (
      <div className={cn("grid gap-6", className)} {...props}>
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold">Verify Your Email</h2>
          <p className="text-sm text-muted-foreground">
            We've sent a 6-digit verification code to{" "}
            <span className="font-medium">{userEmail}</span>
          </p>
        </div>

        <Form {...otpForm}>
          <form onSubmit={otpForm.handleSubmit(onOtpSubmit)}>
            <div className="grid gap-4">
              <FormField
                control={otpForm.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input
                        id="otp"
                        placeholder="Enter 6-digit code"
                        type="text"
                        maxLength={6}
                        className="text-center text-lg tracking-widest"
                        disabled={isOtpLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                className={cn(buttonVariants())}
                disabled={isOtpLoading}
              >
                {isOtpLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Verify & Continue
              </button>
            </div>
          </form>
        </Form>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Didn't receive the code?
          </p>
          <button
            type="button"
            onClick={resendOtp}
            disabled={isOtpLoading}
            className="text-sm text-primary hover:underline disabled:opacity-50"
          >
            Resend OTP
          </button>
          <button
            type="button"
            onClick={() => setStep("auth")}
            className="block w-full text-sm text-muted-foreground hover:text-primary"
          >
            ← Back to login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="your@company.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading || isGitHubLoading || isGoogleLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      placeholder="Enter your password"
                      type="password"
                      autoComplete="current-password"
                      disabled={isLoading || isGitHubLoading || isGoogleLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className={cn(buttonVariants())}
              disabled={isLoading || isGitHubLoading || isGoogleLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </button>
          </div>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid gap-3">
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            onSignInGithub();
          }}
          disabled={isLoading || isGitHubLoading || isGoogleLoading}
        >
          {isGitHubLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
          )}{" "}
          Connect with GitHub
        </button>

        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            onSignInGoogle();
          }}
          disabled={isLoading || isGitHubLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          )}{" "}
          Connect with Google
        </button>
      </div>
    </div>
  );
}
