import { BookOpen, HeartHandshake, Landmark } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FounderAbout() {
  const t = useTranslations("FounderAboutPage.About");

  return (
    <section className="relative overflow-hidden bg-base-200/40 py-20 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {t("aboutBadge")}
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">
            {t("aboutTitle")}{" "}
            <span className="text-primary">{t("aboutTitleHighlight")}</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-base-content/70 sm:text-lg">
            {t("aboutDescription")}
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Education & Madrasa */}
            <div className="group rounded-3xl border border-base-content/10 bg-base-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-content">
                <BookOpen className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-base-content">
                {t("educationTitle")}
              </h3>

              <p className="mt-3 text-sm leading-7 text-base-content/65 sm:text-base">
                {t("educationDescription")}
              </p>
            </div>

            {/* Leadership */}
            <div className="group rounded-3xl border border-base-content/10 bg-base-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-content">
                <Landmark className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-base-content">
                {t("leadershipTitle")}
              </h3>

              <p className="mt-3 text-sm leading-7 text-base-content/65 sm:text-base">
                {t("leadershipDescription")}
              </p>
            </div>

            {/* Humanitarian Service */}
            <div className="group rounded-3xl border border-base-content/10 bg-base-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-content">
                <HeartHandshake className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-base-content">
                {t("serviceTitle")}
              </h3>

              <p className="mt-3 text-sm leading-7 text-base-content/65 sm:text-base">
                {t("founderMessage")}
              </p>
            </div>
          </div>

          {/* Founder Story */}
          <div className="mt-8 rounded-3xl border border-base-content/10 bg-base-100 p-7 shadow-sm sm:p-9 lg:p-10">
            <div className="max-w-4xl">
              <div className="mt-6 space-y-5 text-base leading-8 text-base-content/70">
                <p>{t("paragraph2")}</p>

                <p>{t("paragraph3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
