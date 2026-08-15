import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+880 1000-000000",
    href: "tel:+8801000000000",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "info@example.org",
    href: "mailto:info@example.org",
  },
  {
    icon: Clock3,
    title: "Office Hours",
    value: "Saturday - Thursday, 9:00 AM - 5:00 PM",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "#",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "#",
  },
];

export default function AboutContactSection() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact Information */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
            <CardContent className="p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Contact Information
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s Start a Conversation
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Whether you have a question, want to collaborate, or would
                simply like to learn more about our work, our team is here to
                help.
              </p>

              {/* Information */}
              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group flex gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                        <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold">{item.title}</p>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-primary">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social */}
              <div className="mt-9 border-t pt-7">
                <p className="text-sm font-semibold">Follow Us</p>

                <div className="mt-4 flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="p-7 sm:p-9">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Send Us a Message
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  How Can We Help?
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <form className="mt-8 space-y-6">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-11"
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>

                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+880 1XXXXXXXXX"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>

                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="h-11"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    className="min-h-[150px] resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
