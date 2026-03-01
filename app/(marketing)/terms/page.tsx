import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function TermsPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>📋 Legal Terms</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="text-foreground py-6 text-4xl font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Terms of Service
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Last updated: October 20, 2025
          </p>
        </section>

        {/* Terms Content */}
        <section className="relative mx-auto mt-24 max-w-[60rem] px-6 md:px-8">
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Trivx (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Trivx is an AI-powered DevOps automation platform that provides:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Continuous Integration and Continuous Deployment (CI/CD) pipelines</li>
                    <li>Infrastructure as Code (IaC) management</li>
                    <li>Container orchestration and deployment automation</li>
                    <li>Monitoring and observability tools</li>
                    <li>Integration with various cloud providers and development tools</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Accounts and Registration</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To access certain features of the Service, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept all responsibility for all activities that occur under your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Acceptable Use Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to use the Service to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on the intellectual property rights of others</li>
                    <li>Upload malicious code or attempt to gain unauthorized access to systems</li>
                    <li>Use the service for cryptocurrency mining or other resource-intensive activities</li>
                    <li>Interfere with or disrupt the integrity or performance of the Service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data and Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using the Service, you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Service and its original content, features, and functionality are owned by Trivx and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Service Availability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to maintain high availability of our Service but cannot guarantee 100% uptime. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time with or without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Payment and Billing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For paid services:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Payments are processed securely through third-party payment processors</li>
                    <li>Subscriptions are billed in advance on a recurring basis</li>
                    <li>No refunds are provided for partial months of service</li>
                    <li>We reserve the right to change our pricing with 30 days notice</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Trivx, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">11. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">12. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-4 rounded-lg border border-white/20 bg-white/5">
                    <p className="text-muted-foreground">Email: legal@trivx.com</p>
                    <p className="text-muted-foreground">Address: Noida, Uttar Pradesh, India</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto mt-12 max-w-[60rem] px-6 md:px-8 pb-24 text-center">
          <p className="text-sm text-muted-foreground">
            These terms are effective as of October 20, 2025
          </p>
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