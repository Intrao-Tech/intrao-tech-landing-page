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
    <section className="relative z-20 bg-background text-foreground py-20 overflow-hidden rounded-t-[60px] -mt-24">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">
            Product Design and Development Agency
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our featured client wins
          </h2>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 mb-8">
        <div className="h-px bg-border" />
      </div>

      {/* Client Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-background py-16 px-8 hover:bg-muted/50 transition-colors duration-300"
            >
              <span className="text-xl md:text-2xl font-bold text-foreground">
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
