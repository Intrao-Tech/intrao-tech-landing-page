import { motion } from "framer-motion";

const ClientsSection = () => {
  // Placeholder client logos - you can replace these with actual client logos
  const clients = [
    "TechStart",
    "InnovateCo",
    "DigitalFirst",
    "FutureScale",
    "CloudNine",
    "DataFlow",
    "SmartApp",
    "WebCore",
  ];

  return (
    <section className="bg-dark text-dark-foreground py-16 border-t border-dark-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-8"
        >
          <p className="text-dark-muted text-sm uppercase tracking-wider whitespace-nowrap">
            Trusted by
          </p>
          <div className="flex-1 h-px bg-dark-muted/20" />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <span className="text-2xl md:text-3xl font-bold text-dark-muted/50 hover:text-dark-foreground transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
