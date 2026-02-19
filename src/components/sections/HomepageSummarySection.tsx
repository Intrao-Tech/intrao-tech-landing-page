import { motion } from "framer-motion";
import { Check } from "lucide-react";

const takeaways = [
  {
    title: "One partner, design through deployment.",
    description: "No handoffs between agencies — one team owns your project from wireframe to production launch.",
  },
  {
    title: "Founded by operators, not account managers.",
    description: "You talk directly to the co-founders who have built 100+ products across FinTech, SaaS, Healthcare, and Web3.",
  },
  {
    title: "Built for speed without bureaucracy.",
    description: "Pre-built frameworks and a lean three-founder structure reduce Minimum Viable Product (MVP) timelines by weeks.",
  },
  {
    title: "Sector-tested across FinTech, SaaS, Healthcare, and Web3.",
    description: "Industry-specific experience means fewer learning curves and faster delivery for your vertical.",
  },
  {
    title: "98% client satisfaction, verified on Clutch.",
    description: "Our track record is public — check our reviews on independent third-party platforms.",
  },
];

const HomepageSummarySection = () => {
  return (
    <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label text-dark-muted mb-4">Why Intrao Tech</p>
          <h2 className="heading-2 max-w-4xl">
            Five reasons founders choose us over traditional agencies
          </h2>
        </motion.div>

        {/* Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {takeaways.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomepageSummarySection;
