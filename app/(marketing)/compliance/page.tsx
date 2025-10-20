import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { CheckCircle, FileText, Globe, Shield } from "lucide-react";

export default function CompliancePage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>✅ Compliance Ready</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Enterprise
            <br className="hidden md:block" /> Compliance
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Meet regulatory requirements with confidence using our compliant DevOps platform.
            <br className="hidden md:block" /> Built for enterprises with strict governance and audit requirements.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>Download Compliance Report</span>
            <FileText className="ml-1 size-4" />
          </Button>
        </section>

        {/* Compliance Standards */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Compliance Standards We Meet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "SOC 2 Type II",
                description: "System and Organization Controls for security, availability, and confidentiality",
                status: "Certified",
                details: "Annual audit by independent third-party assessors"
              },
              {
                title: "GDPR",
                description: "General Data Protection Regulation compliance for EU data protection",
                status: "Compliant",
                details: "Privacy by design and data subject rights protection"
              },
              {
                title: "HIPAA",
                description: "Health Insurance Portability and Accountability Act for healthcare data",
                status: "Ready",
                details: "Business Associate Agreement (BAA) available"
              },
              {
                title: "PCI DSS",
                description: "Payment Card Industry Data Security Standard for payment data",
                status: "Certified",
                details: "Level 1 service provider compliance"
              },
              {
                title: "ISO 27001",
                description: "International standard for information security management systems",
                status: "In Progress",
                details: "Certification expected Q2 2025"
              },
              {
                title: "FedRAMP",
                description: "Federal Risk and Authorization Management Program for US government",
                status: "Planned",
                details: "Assessment planned for 2025"
              }
            ].map((standard) => (
              <div
                key={standard.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={Math.random() * 5}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />

                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg text-foreground">{standard.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${standard.status === 'Certified' || standard.status === 'Compliant'
                      ? 'bg-green-500/20 text-green-400'
                      : standard.status === 'Ready'
                        ? 'bg-blue-500/20 text-blue-400'
                        : standard.status === 'In Progress'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-500/20 text-gray-400'
                    }`}>
                    {standard.status}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{standard.description}</p>
                <p className="text-xs text-muted-foreground">{standard.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Features */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Built-in Compliance Features
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Shield className="h-6 w-6" />,
                      title: "Data Encryption",
                      description: "End-to-end encryption for all data in transit and at rest"
                    },
                    {
                      icon: <FileText className="h-6 w-6" />,
                      title: "Audit Logging",
                      description: "Comprehensive audit trails for all system activities and changes"
                    },
                    {
                      icon: <CheckCircle className="h-6 w-6" />,
                      title: "Access Controls",
                      description: "Role-based access controls with multi-factor authentication"
                    },
                    {
                      icon: <Globe className="h-6 w-6" />,
                      title: "Data Residency",
                      description: "Control where your data is stored and processed globally"
                    }
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Compliance Support
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-lg border border-white/20 bg-white/5">
                    <h3 className="font-semibold mb-2 text-foreground">Documentation Package</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive documentation including security policies, procedures, and audit reports
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/20 bg-white/5">
                    <h3 className="font-semibold mb-2 text-foreground">Compliance Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time visibility into compliance status and control effectiveness
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/20 bg-white/5">
                    <h3 className="font-semibold mb-2 text-foreground">Expert Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to compliance experts to help with audit preparation and requirements
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                  Schedule Compliance Consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Specific */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Industry-Specific Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                industry: "Healthcare",
                standards: ["HIPAA", "HITECH", "FDA CFR Part 11"],
                description: "Secure handling of protected health information and medical device regulations"
              },
              {
                industry: "Financial Services",
                standards: ["PCI DSS", "SOX", "Basel III"],
                description: "Payment security and financial regulatory compliance requirements"
              },
              {
                industry: "Government",
                standards: ["FedRAMP", "FISMA", "NIST"],
                description: "Federal security requirements and government authorization standards"
              }
            ].map((sector) => (
              <div
                key={sector.industry}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center"
              >
                <h3 className="font-semibold text-xl mb-4 text-foreground">{sector.industry}</h3>
                <div className="space-y-2 mb-4">
                  {sector.standards.map((standard) => (
                    <span
                      key={standard}
                      className="inline-block text-xs px-3 py-1 rounded-full bg-primary/20 text-primary mr-2 mb-1"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Need Custom Compliance?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have specific regulatory requirements? Our team can work with you to ensure
              Trivx meets your organization&apos;s unique compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Download Compliance Guide
              </Button>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Talk to Compliance Expert
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
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