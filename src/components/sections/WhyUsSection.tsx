import { motion } from "framer-motion";

const WhyUsSection = () => {
  const reasons = [
    {
      label: "Design that meets regulation",
      title: "HIPAA- and GDPR-certified expertise for Healthcare and beyond.",
      description:
        "Since 2019, we've gained HIPAA and GDPR certifications and industry recognition, delivering hundreds of products in Healthcare, SaaS, FinTech, and EdTech — where compliance and UX go hand in hand.",
    },
    {
      label: "Design that lasts beyond trends",
      title: "We don't chase fads. We build digital products that stay relevant.",
      description:
        "Our work looks sharp today and stays usable tomorrow — designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.",
    },
    {
      label: "Design that's developer-ready",
      title: "We design for implementation, not handoff.",
      description:
        "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team and stay involved until everything's live.",
    },
    {
      label: "Local presence. Global delivery",
      title: "Work directly with the doers — not a chain of account managers.",
      description:
        "Collaborate with UX strategists globally, while our senior design and development teams deliver fast, consistent results. We integrate into your tools and workflow, working as part of your team.",
    },
  ];

  return (
    <section data-header-theme="light" className="bg-background text-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label text-muted-foreground mb-4">
            Why choose us?
          </p>
          <h2 className="heading-1">
            Your success is our priority
          </h2>
        </motion.div>

        {/* Reasons Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-muted/50 rounded-lg p-8 lg:p-12 flex flex-col"
            >
              <p className="label-small text-muted-foreground mb-6">
                {reason.label}
              </p>
              <h3 className="heading-3 mb-8">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mt-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;