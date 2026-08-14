import {
  FolderKanban,
  HeartHandshake,
  MapPinned,
  UsersRound,
} from "lucide-react";

const statistics = [
  {
    value: "50+",
    label: "Projects Completed",
    description: "Meaningful initiatives completed across communities.",
    icon: FolderKanban,
  },
  {
    value: "10K+",
    label: "People Supported",
    description: "People reached through our programs and initiatives.",
    icon: UsersRound,
  },
  {
    value: "25+",
    label: "Communities Reached",
    description: "Communities positively impacted by our work.",
    icon: MapPinned,
  },
  {
    value: "500+",
    label: "Active Volunteers",
    description: "People contributing their time, skills, and passion.",
    icon: HeartHandshake,
  },
];

export default function ImpactStatistics() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Impact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Making a Difference That{" "}
            <span className="text-primary">Matters</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Our work is measured by the people we support, communities we reach,
            and positive change we create together.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid overflow-hidden rounded-3xl border bg-card/50 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group relative p-7 text-center transition-colors duration-300 hover:bg-muted/50 sm:p-8 ${
                  index !== 0 ? "border-t sm:border-t-0 sm:border-l" : ""
                } ${index === 2 ? "lg:border-l" : ""}`}
              >
                {/* Icon */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>

                {/* Number */}
                <div className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="mt-2 font-semibold">{stat.label}</h3>

                {/* Description */}
                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-muted-foreground">
                  {stat.description}
                </p>

                {/* Bottom indicator */}
                <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
