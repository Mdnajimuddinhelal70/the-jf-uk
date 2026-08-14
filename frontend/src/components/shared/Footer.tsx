import { ArrowRight, Heart, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/mission" },
  { label: "Projects", href: "/projects" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Events", href: "/events" },
];

const supportLinks = [
  { label: "Become a Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Latest News", href: "/news" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Heart className="h-5 w-5 fill-current" />
              </div>

              <div>
                <span className="block text-lg font-bold tracking-tight">
                  Your Foundation
                </span>

                <span className="block text-xs text-muted-foreground">
                  Creating positive change
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              We are committed to empowering communities, supporting meaningful
              initiatives, and creating lasting positive change through
              compassion, collaboration, and action.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-sm font-semibold">Get Involved</h3>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-sm font-semibold">Stay Connected</h3>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Get the latest updates about our campaigns, projects, and
              community initiatives.
            </p>

            {/* Newsletter */}
            <form className="mt-5">
              <div className="flex overflow-hidden rounded-full border bg-background focus-within:border-primary">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
                />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />

                <a
                  href="tel:+8801000000000"
                  className="transition-colors hover:text-primary"
                >
                  +880 1000-000000
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />

                <a
                  href="mailto:info@example.org"
                  className="transition-colors hover:text-primary"
                >
                  info@example.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-center text-xs text-muted-foreground lg:text-left">
            © {new Date().getFullYear()} Your Foundation. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
