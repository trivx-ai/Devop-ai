import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function PrivacyPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🔒 Privacy Policy</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="text-foreground py-6 text-4xl font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Privacy Policy
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Last updated: October 20, 2025
          </p>
        </section>

        {/* Privacy Content */}
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
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Account Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When you create an account, we collect your name, email address, and password. For paid accounts, we also collect billing information through secure third-party payment processors.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Usage Data</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We collect information about how you use our service, including deployment logs, API usage, feature interactions, and performance metrics.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Technical Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We automatically collect certain technical information including IP addresses, browser type, device information, and operating system details.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent security incidents</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety, or that of others</li>
                    <li>With trusted service providers who assist in operating our platform</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We implement appropriate security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Encryption in transit and at rest using industry-standard protocols</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection and privacy practices</li>
                    <li>Incident response procedures for security breaches</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information for as long as your account is active or as needed to provide services. We will retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. You can request deletion of your account and associated data at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Portability of your data</li>
                    <li>Objection to processing of your information</li>
                    <li>Restriction of processing under certain circumstances</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies and similar technologies to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze site traffic and usage patterns</li>
                    <li>Improve our services and user experience</li>
                    <li>Provide targeted content and features</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You can control cookies through your browser settings, though this may affect some functionality of our service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Third-Party Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our service may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Children&apos;s Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">11. Changes to Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">12. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="mt-4 p-4 rounded-lg border border-white/20 bg-white/5">
                    <p className="text-muted-foreground">Email: privacy@trivx.com</p>
                    <p className="text-muted-foreground">Address: Noida, Uttar Pradesh, India</p>
                    <p className="text-muted-foreground">Data Protection Officer: dpo@trivx.com</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto mt-12 max-w-[60rem] px-6 md:px-8 pb-24 text-center">
          <p className="text-sm text-muted-foreground">
            This policy is effective as of October 20, 2025
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