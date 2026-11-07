import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Events", href: "/events" },
];

const supportLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/lucky.miah.35",
    icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/lucky_miah",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lucky_miah",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucky-miah",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#092f27] text-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-[450px] rounded-full border border-white/[0.04]" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-[300px] rounded-full border border-white/[0.05]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-emerald-500/[0.06] blur-3xl" />

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        {/* Top Message */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-200">
              <Heart className="size-3.5 fill-current" />
              Together for a better tomorrow
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Every act of kindness
              <span className="block text-emerald-300">
                creates a lasting impact.
              </span>
            </h2>
          </div>

          <Link
            href="/donate"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#092f27]"
          >
            Support Our Mission
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Footer Columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1789405196/Foundation_logo_jovtfz.jpg"
                  alt="The Jannath Foundation UK"
                  width={60}
                  height={60}
                  className="size-full rounded-lg object-contain"
                />
              </div>

              <div>
                <span className="block text-lg font-bold tracking-tight text-white">
                  The Jannath Foundation
                </span>
                <span className="mt-1 block text-[10px] font-bold tracking-[0.25em] text-emerald-300">
                  UNITED KINGDOM
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-emerald-50/65">
              Together, we can bring hope, support those in need, and build a
              better future.
            </p>

            <p className="mt-3 text-sm leading-7 text-emerald-50/65">
              একসাথে আমরা আশা ছড়িয়ে দিতে, অসহায় মানুষের পাশে দাঁড়াতে এবং একটি
              সুন্দর ভবিষ্যৎ গড়তে পারি।
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-0.5 w-9 rounded-full bg-emerald-400" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-emerald-50/65 transition-colors duration-200 hover:text-emerald-300"
                  >
                    <span className="size-1 rounded-full bg-emerald-400/50 transition-all group-hover:bg-emerald-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-white">
              Get Involved
            </h3>

            <div className="mt-3 h-0.5 w-9 rounded-full bg-emerald-400" />

            <ul className="mt-6 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-emerald-50/65 transition-colors duration-200 hover:text-emerald-300"
                  >
                    <span className="size-1 rounded-full bg-emerald-400/50 transition-all group-hover:bg-emerald-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <Heart className="size-5 text-emerald-300" />
              <p className="mt-3 text-sm font-semibold text-white">
                Your kindness matters.
              </p>
              <p className="mt-1 text-xs leading-5 text-emerald-50/55">
                Be part of a journey that brings hope to others.
              </p>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-white">
              Stay Connected
            </h3>

            <div className="mt-3 h-0.5 w-9 rounded-full bg-emerald-400" />

            <p className="mt-6 text-sm leading-7 text-emerald-50/65">
              Get the latest updates about our campaigns, projects, and
              community initiatives.
            </p>

            {/* Newsletter UI */}
            <div className="mt-5 flex h-12 items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] transition-colors focus-within:border-emerald-400/60">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-emerald-50/40"
              />

              <button
                type="button"
                aria-label="Newsletter subscription coming soon"
                title="Newsletter subscription coming soon"
                className="mr-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white transition-colors hover:bg-emerald-400"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                  <MapPin className="size-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Our Location
                  </p>
                  <p className="mt-1 text-sm text-emerald-50/60">
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                  <Phone className="size-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Phone Number
                  </p>
                  <Link
                    href="tel:+447931791007"
                    className="mt-1 block text-sm text-emerald-50/60 transition-colors hover:text-emerald-300"
                  >
                    +44 7931 791007
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                  <Mail className="size-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white">
                    Email Address
                  </p>
                  <Link
                    href="mailto:lakimiah02@gmail.com"
                    className="mt-1 block break-all text-sm text-emerald-50/60 transition-colors hover:text-emerald-300"
                  >
                    lakimiah02@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/10">
        <div className="container mx-auto flex flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-center text-xs leading-6 text-emerald-50/45 lg:text-left">
            © {currentYear} The Jannath Foundation UK. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-xs text-emerald-50/50 transition-colors hover:text-emerald-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-emerald-50/50 transition-colors hover:text-emerald-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs text-emerald-50/50 transition-colors hover:text-emerald-300"
            >
              Contact
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
