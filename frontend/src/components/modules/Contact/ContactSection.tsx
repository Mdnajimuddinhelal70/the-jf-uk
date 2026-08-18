import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
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

const contactInfo = [
  {
    icon: MapPin,
    key: "address",
    href: "#",
  },
  {
    icon: Phone,
    key: "phone",
    href: "tel:+8801000000000",
  },
  {
    icon: Mail,
    key: "email",
    href: "mailto:info@example.org",
  },
  {
    icon: Clock3,
    key: "hours",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    key: "facebook",
    href: "#",
  },
  {
    icon: FaInstagram,
    key: "instagram",
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    key: "linkedin",
    href: "#",
  },
  {
    icon: FaTwitter,
    key: "twitter",
    href: "#",
  },
];

export default function AboutContactSection() {
  const t = useTranslations("Contact.ContactSection");

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact Information */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
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
                    <a
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
                    </a>
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
                      <a
                        key={social.key}
                        href={social.href}
                        aria-label={t(`social.${social.key}`)}
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

              {/* Form */}
              <form className="mt-8 space-y-6">
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
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md sm:w-auto"
                >
                  {t("form.submit")}

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
