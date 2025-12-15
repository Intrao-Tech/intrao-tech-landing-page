import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      title: "Design that meets regulation",
      subtitle: "GDPR-certified expertise",
      description:
        "We've gained GDPR certifications and industry recognition, delivering hundreds of products in Healthcare, SaaS, FinTech, and EdTech — where compliance and UX go hand in hand.",
    },
    {
      title: "Design that lasts beyond trends",
      subtitle: "We don't chase fads",
      description:
        "Our work looks sharp today and stays usable tomorrow — designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.",
    },
    {
      title: "Design that's developer-ready",
      subtitle: "We design for implementation",
      description:
        "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team and stay involved until everything's live.",
    },
    {
      title: "Local presence. Global delivery",
      subtitle: "Work directly with the doers",
      description:
        "Collaborate with UX strategists globally, while our senior design and development teams deliver fast, consistent results. We integrate into your tools and workflow, working as part of your team.",
    },
  ];

  return (
    <section className="bg-dark text-dark-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your success is our priority
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="border border-dark-muted/30 p-8 lg:p-10 h-full transition-all duration-500 hover:border-primary/50">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-primary text-sm mt-1">{reason.subtitle}</p>
                  </div>
                </div>
                <p className="text-dark-muted leading-relaxed pl-10">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
