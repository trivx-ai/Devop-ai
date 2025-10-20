import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Mail, MapPin, Phone, Send, MessageCircle, Users, Headphones } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    description: "Get in touch with our team",
    contact: "info@trivx.in",
    action: "Send Email"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    description: "Speak directly with our experts",
    contact: "+91-8130923346",
    action: "Call Now"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available 24/7",
    action: "Start Chat"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    description: "Come see us in person",
    contact: "Noida, Uttar Pradesh, India",
    action: "Get Directions"
  }
];

const supportOptions = [
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Technical Support",
    description: "Get help with technical issues, integrations, and troubleshooting."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Sales Inquiry",
    description: "Learn more about our plans, pricing, and enterprise features."
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "General Questions",
    description: "Have questions about Trivx? We&apos;re here to help with anything."
  }
];

export default function ContactPage() {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
            <TextShimmer className="inline-flex items-center justify-center">
              <span>💬 Get in Touch</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
          </div>

          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Contact Our
            <br className="hidden md:block" /> Expert Team
          </h1>

          <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Have questions about Trivx? Need help getting started? Our team is ready to help you
            <br className="hidden md:block" /> accelerate your DevOps journey with AI-powered automation.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] hover:opacity-90">
            <span>Schedule a Demo</span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Contact Methods */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
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
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                    {method.icon}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2 text-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="text-sm font-medium text-foreground mb-4">{method.contact}</p>

                <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Support Options */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <BorderBeam
                size={200}
                duration={12}
                delay={0}
                colorFrom="var(--color-one)"
                colorTo="var(--color-two)"
              />

              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground">
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Support Options */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">How can we help?</h2>

              {supportOptions.map((option) => (
                <div
                  key={option.title}
                  className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] flex-shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">{option.title}</h3>
                      <p className="text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* FAQ Link */}
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  Looking for quick answers?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Check out our FAQ section for common questions and solutions.
                </p>
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  View FAQ
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of New Delhi, our office is always open for meetings,
              demos, and collaborative discussions.
            </p>
          </div>

          <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm text-center">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <MapPin className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">Trivx Headquarters</h3>
            <p className="text-muted-foreground mb-2">Noida, Uttar Pradesh, India</p>
            <p className="text-sm text-muted-foreground mb-6">
              Office Hours: Monday - Friday, 9:00 AM - 6:00 PM IST
            </p>

            <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
              Get Directions
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
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