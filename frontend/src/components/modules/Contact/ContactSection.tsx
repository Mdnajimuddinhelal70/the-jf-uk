/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
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
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    key: "address",
    href: "#",
  },
  {
    icon: Phone,
    key: "phone",
    href: "tel:+447931791007",
  },
  {
    icon: Mail,
    key: "email",
    href: "mailto:lakimiah02@gmail.com",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    key: "facebook",
    href: "https://web.facebook.com/lucky.miah.35",
  },
  {
    icon: FaInstagram,
    key: "instagram",
    href: "https://www.instagram.com/lucky_miah",
  },
  {
    icon: FaLinkedinIn,
    key: "linkedin",
    href: "https://www.linkedin.com/in/lucky-miah",
  },
  {
    icon: FaTwitter,
    key: "twitter",
    href: "https://twitter.com/lucky_miah",
  },
];

export default function AboutContactSection() {
  const t = useTranslations("Contact.ContactSection");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact Information */}
          <Card className="bg-orange-200 overflow-hidden border-border/60 shadow-sm">
            <CardContent className="p-7 sm:p-9">
              {/* Eyebrow */}
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t("contactInfo.eyebrow")}
              </p>

              {/* Heading */}
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {t("contactInfo.title")}
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {t("contactInfo.description")}
              </p>

              {/* Contact Information */}
              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="group flex gap-4"
                    >
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                        <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">
                          {t(`contactInfo.items.${item.key}.title`)}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-primary">
                          {t(`contactInfo.items.${item.key}.value`)}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-9 border-t pt-7">
                <p className="text-sm font-semibold">{t("social.title")}</p>

                <div className="mt-4 flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <Link
                        key={social.key}
                        href={social.href}
                        aria-label={t(`social.${social.key}`)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          {/* Contact Form */}
          <Card className="border-border/60 bg-orange-200 shadow-sm">
            <CardContent className="p-7 sm:p-9">
              {/* Form Header */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {t("form.eyebrow")}
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {t("form.title")}
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {t("form.description")}
                </p>
              </div>

              {/* Success Message */}
              {success && (
                <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Your message has been sent successfully. Thank you for
                  contacting us.
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Form */}
              <form
                className="mt-8 space-y-6"
                onSubmit={async (event) => {
                  event.preventDefault();

                  setIsSubmitting(true);
                  setSuccess(false);
                  setError(false);

                  const form = event.currentTarget;
                  const formData = new FormData(form);

                  try {
                    const response = await fetch(
                      "https://api.web3forms.com/submit",
                      {
                        method: "POST",
                        body: formData,
                      },
                    );

                    const result = await response.json();

                    if (result.success) {
                      form.reset();
                      setSuccess(true);
                    } else {
                      setError(true);
                    }
                  } catch (err) {
                    setError(true);
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                {/* Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="a3d445ee-a3af-430f-8ffd-a46080cd5eb3"
                />

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("form.fields.name.label")}</Label>

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t("form.fields.name.placeholder")}
                      className="h-11"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t("form.fields.email.label")}
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("form.fields.email.placeholder")}
                      className="h-11"
                      required
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {t("form.fields.phone.label")}
                    </Label>

                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t("form.fields.phone.placeholder")}
                      className="h-11"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {t("form.fields.subject.label")}
                    </Label>

                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder={t("form.fields.subject.placeholder")}
                      className="h-11"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    {t("form.fields.message.label")}
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("form.fields.message.placeholder")}
                    className="min-h-[150px] resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-6 text-sm font-semibold text-white transition-all hover:bg-orange-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : t("form.submit")}

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
