import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    timeline: "Day 1",
    description:
      "90-minute call with our founders to understand your goals, users, and constraints. You receive a scoped proposal within 24 hours.",
  },
  {
    number: "02",
    title: "Design sprint",
    timeline: "Weeks 1–2",
    description:
      "Wireframes and high-fidelity mockups delivered in Figma, with two feedback rounds built into the schedule.",
  },
  {
    number: "03",
    title: "Development sprint",
    timeline: "Weeks 2–8",
    description:
      "Built in React, Next.js, or no-code tools depending on your needs. Weekly demos keep you in the loop at every stage.",
  },
  {
    number: "04",
    title: "Launch and iterate",
    timeline: "Post-launch",
    description:
      "QA, deployment, and launch support included. First post-launch iteration ensures you ship with confidence.",
  },
];

const HomepageProcessSection = () => {
  return (
    <section data-header-theme="light" className="bg-background text-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <p className="label text-muted-foreground mb-4">How we work</p>
          <h2 className="heading-2 max-w-4xl">
            From first call to live product in four steps
          </h2>
        </motion.div>

        {/* Steps - Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line (desktop only, not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-px bg-border" />
              )}

              {/* Step Number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold text-primary">{step.number}</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {step.timeline}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageProcessSection;
