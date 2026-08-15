import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How can I contact the foundation?",
    answer:
      "You can contact us through the contact form on this page, by email, or by phone during our office hours.",
  },
  {
    question: "How can I support the foundation?",
    answer:
      "You can support our mission by making a contribution, volunteering your time, or getting involved with our community initiatives.",
  },
  {
    question: "Can I volunteer with the foundation?",
    answer:
      "Yes. We welcome people who are interested in contributing their time, skills, and experience to our initiatives.",
  },
  {
    question: "Can organizations collaborate with us?",
    answer:
      "Absolutely. We are open to meaningful partnerships and collaborations that align with our mission and create positive community impact.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              Quick Help
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Find quick answers to some of the questions we receive most often.
              If you still need help, feel free to reach out to us.
            </p>
          </div>

          {/* FAQ */}
          <div className="divide-y rounded-2xl border bg-card px-5">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <div className="pb-5 pr-8 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
