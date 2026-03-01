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
import { Loader2, Eye, EyeOff, Mail, Lock, CheckCircle2 } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import * as z from "zod";

export const userAuthSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
});

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

type FormData = z.infer<typeof userAuthSchema>;
type SignUpData = z.infer<typeof signUpSchema>;
type OtpData = z.infer<typeof otpSchema>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "signin" | "signup";
}

export function UserAuthForm({ className, type = "signin", ...props }: UserAuthFormProps) {
  const [step, setStep] = React.useState<"auth" | "otp">("auth");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false);
  const router = useRouter();

  const isSignUp = type === "signup";

  const form = useForm<FormData | SignUpData>({
    resolver: zodResolver(isSignUp ? signUpSchema : userAuthSchema),
    defaultValues: isSignUp ? {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    } : {
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

  async function onSubmit(data: FormData | SignUpData) {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate different responses
      const success = Math.random() > 0.1; // 90% success rate for demo

      if (!success) {
        throw new Error(isSignUp ? "Account creation failed" : "Authentication failed");
      }

      setUserEmail(data.email);
      setStep("otp");

      toast.success("OTP Sent!", {
        description: `We&apos;ve sent a 6-digit verification code to ${data.email}`,
      });
    } catch (error) {
      toast.error("Something went wrong.", {
        description: isSignUp
          ? "Account creation failed. Please try again."
          : "Sign in failed. Please check your credentials.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onOtpSubmit(otpData: OtpData) {
    setIsOtpLoading(true);

    try {
      // Simulate OTP verification
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate validation
      const isValid = otpData.otp === "123456" || Math.random() > 0.3; // Accept 123456 or 70% success rate

      if (!isValid) {
        throw new Error("Invalid OTP");
      }

      toast.success(`Welcome to Trivx!`, {
        description: isSignUp
          ? "Account created successfully! Redirecting to dashboard..."
          : "Successfully signed in! Redirecting to dashboard...",
      });

      // Redirect after successful authentication
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } catch (error) {
      toast.error("Invalid OTP", {
        description: "The verification code is incorrect. Please try again.",
      });
    } finally {
      setIsOtpLoading(false);
    }
  }

  async function onSignInGithub() {
    setIsGitHubLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const success = Math.random() > 0.1; // 90% success rate

      if (!success) {
        throw new Error("GitHub authentication failed");
      }

      toast.success("GitHub Connected", {
        description: "Successfully connected to GitHub. Setting up your repositories...",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } catch {
      toast.error("GitHub Authentication Failed", {
        description: "Failed to connect with GitHub. Please try again.",
      });
    } finally {
      setIsGitHubLoading(false);
    }
  }

  async function onSignInGoogle() {
    setIsGoogleLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const success = Math.random() > 0.1; // 90% success rate

      if (!success) {
        throw new Error("Google authentication failed");
      }

      toast.success("Google Connected", {
        description: "Successfully signed in with Google. Redirecting to dashboard...",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } catch {
      toast.error("Google Authentication Failed", {
        description: "Failed to sign in with Google. Please try again.",
      });
    } finally {
      setIsGoogleLoading(false);
    }
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
      <div className={cn("relative z-20 grid gap-6", className)} {...props}>
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold">Verify Your Email</h2>
          <p className="text-sm text-muted-foreground">
            We&apos;ve sent a 6-digit verification code to{" "}
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
                        className="relative z-30 text-center text-lg tracking-widest cursor-text"
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
                className={cn(buttonVariants(), "relative z-30 cursor-pointer")}
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
            Didn&apos;t receive the code?
          </p>
          <button
            type="button"
            onClick={resendOtp}
            disabled={isOtpLoading}
            className="relative z-30 text-sm text-primary hover:underline disabled:opacity-50 cursor-pointer"
          >
            Resend OTP
          </button>
          <button
            type="button"
            onClick={() => setStep("auth")}
            className="relative z-30 block w-full text-sm text-muted-foreground hover:text-primary cursor-pointer"
          >
            ← Back to login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative z-20 grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-20 space-y-4">
          <div className="grid gap-4">
            {/* {isSignUp && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        type="text"
                        autoComplete="name"
                        disabled={isLoading || isGitHubLoading || isGoogleLoading}
                        className="relative z-30 transition-all duration-200 focus:ring-2 focus:ring-[var(--color-one)]/20 cursor-text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )} */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="your@company.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading || isGitHubLoading || isGoogleLoading}
                      className="relative z-30 transition-all duration-200 focus:ring-2 focus:ring-[var(--color-one)]/20 cursor-text"
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
                  <FormLabel className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative z-30">
                      <Input
                        id="password"
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        autoComplete={isSignUp ? "new-password" : "current-password"}
                        disabled={isLoading || isGitHubLoading || isGoogleLoading}
                        className="relative z-30 pr-10 transition-all duration-200 focus:ring-2 focus:ring-[var(--color-one)]/20 cursor-text"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-40 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        disabled={isLoading || isGitHubLoading || isGoogleLoading}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                  {isSignUp && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Password must contain at least 8 characters with uppercase, lowercase, and numbers
                    </p>
                  )}
                </FormItem>
              )}
            />

            {isSignUp && (
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative z-30">
                        <Input
                          id="confirmPassword"
                          placeholder="Confirm your password"
                          type={showConfirmPassword ? "text" : "password"}
                          autoComplete="new-password"
                          disabled={isLoading || isGitHubLoading || isGoogleLoading}
                          className="relative z-30 pr-10 transition-all duration-200 focus:ring-2 focus:ring-[var(--color-one)]/20 cursor-text"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-40 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          disabled={isLoading || isGitHubLoading || isGoogleLoading}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <button
              type="submit"
              className={cn(
                buttonVariants(),
                "relative z-30 bg-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
              )}
              disabled={isLoading || isGitHubLoading || isGoogleLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {!isLoading && <CheckCircle2 className="mr-2 h-4 w-4" />}
              {isSignUp ? "Create Account" : "Sign In"}
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

      <div className="relative z-20 grid gap-3">
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "relative z-30 overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95 hover:border-neutral-400 dark:hover:border-neutral-600 cursor-pointer"
          )}
          onClick={onSignInGithub}
          disabled={isLoading || isGitHubLoading || isGoogleLoading}
        >
          <div className="flex items-center justify-center">
            {isGitHubLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
            )}
            {isSignUp ? "Sign up with GitHub" : "Continue with GitHub"}
          </div>
          {isGitHubLoading && (
            <div className="absolute inset-0 bg-muted/50 animate-pulse" />
          )}
        </button>

        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "relative z-30 overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95 hover:border-neutral-400 dark:hover:border-neutral-600 cursor-pointer"
          )}
          onClick={onSignInGoogle}
          disabled={isLoading || isGitHubLoading || isGoogleLoading}
        >
          <div className="flex items-center justify-center">
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
            )}
            {isSignUp ? "Sign up with Google" : "Continue with Google"}
          </div>
          {isGoogleLoading && (
            <div className="absolute inset-0 bg-muted/50 animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
}
