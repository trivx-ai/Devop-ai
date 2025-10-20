import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Shield, Lock, Eye, Award, FileText, Users } from "lucide-react";

const securityFeatures = [
  {
    icon: <Lock className="h-8 w-8" />,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Zero Trust Architecture",
    description: "Multi-factor authentication and identity verification for all system access"
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Continuous Monitoring",
    description: "24/7 security monitoring with real-time threat detection and response"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Access Controls",
    description: "Role-based permissions and principle of least privilege for all users"
  }
];

const certifications = [
  {
    title: "SOC 2 Type II",
    description: "Comprehensive security, availability, and confidentiality controls",
    status: "Certified"
  },
  {
    title: "ISO 27001",
    description: "International standard for information security management",
    status: "In Progress"
  },
  {
    title: "GDPR Compliant",
    description: "Full compliance with European data protection regulations",
    status: "Compliant"
  },
  {
    title: "PCI DSS",
    description: "Payment card industry security standards compliance",
    status: "Certified"
  }
];

const securityPractices = [
  {
    category: "Infrastructure Security",
    practices: [
      "Cloud infrastructure hardening with security best practices",
      "Network segmentation and firewall protection",
      "Regular security updates and patch management",
      "Automated backup and disaster recovery procedures"
    ]
  },
  {
    category: "Application Security",
    practices: [
      "Secure code development with regular security reviews",
      "Static and dynamic application security testing (SAST/DAST)",
      "Input validation and output encoding",
      "Secure API design with rate limiting and authentication"
    ]
  },
  {
    category: "Data Protection",
    practices: [
      "Data classification and handling procedures",
      "Encryption of sensitive data both in transit and at rest",
      "Data retention and secure deletion policies",
      "Privacy by design principles in all product development"
    ]
  },
  {
    category: "Operational Security",
    practices: [
      "Security incident response team and procedures",
      "Regular security audits and penetration testing",
      "Employee security training and awareness programs",
      "Vendor security assessment and management"
    ]
  }
];

export default function SecurityPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>🛡️ Enterprise Security</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Security &
            <br className="hidden md:block" /> Compliance
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Enterprise-grade security with industry-leading certifications and best practices.
            <br className="hidden md:block" /> Your data and infrastructure are protected by multiple layers of security.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>Download Security Whitepaper</span>
            <FileText className="ml-1 size-4" />
          </Button>
        </section>

        {/* Security Features */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Core Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center"
              >
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={index * 2}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
                />

                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Certifications & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center"
              >
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>

                <h3 className="font-semibold text-lg mb-2 text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                <span className={`text-xs px-3 py-1 rounded-full ${cert.status === 'Certified' || cert.status === 'Compliant'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Security Practices */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Security Practices & Controls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {securityPractices.map((section) => (
              <div
                key={section.category}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-xl mb-4 text-foreground">{section.category}</h3>
                <ul className="space-y-3">
                  {section.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] rounded-full mt-2"></div>
                      <span className="text-sm text-muted-foreground">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Incident Response */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Security Incident Response
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our dedicated security team follows a comprehensive incident response plan to
                  quickly identify, contain, and resolve any security issues.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">24/7 security operations center (SOC)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Automated threat detection and alerting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Rapid incident containment procedures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Post-incident analysis and improvements</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                  Report Security Issue
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="text-center">
                <Shield className="h-32 w-32 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Average Response Time
                </h3>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text text-transparent">
                  &lt; 15 min
                </div>
                <p className="text-muted-foreground">
                  For critical security incidents
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Security Questions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about our security practices or need to report a security issue?
              Our security team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                security@trivx.com
              </Button>
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Request Security Assessment
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