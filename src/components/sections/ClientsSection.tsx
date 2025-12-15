import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Client {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
  country: string;
  countryFlag: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Airportr",
    logo: "airportr",
    description: "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    category: "LOGISTICS",
    country: "UK",
    countryFlag: "🇬🇧",
  },
  {
    id: 2,
    name: "Nomupay",
    logo: "nomupay.",
    description: "Leading payment infrastructure powering financial services across emerging markets.",
    category: "FINTECH",
    country: "UK",
    countryFlag: "🇬🇧",
  },
  {
    id: 3,
    name: "OneText",
    logo: "OneText",
    description: "Revolutionary SMS commerce platform helping DTC brands drive conversions.",
    category: "E-COMMERCE",
    country: "USA",
    countryFlag: "🇺🇸",
  },
  {
    id: 4,
    name: "SHAGA",
    logo: "S·H·A·G·A",
    description: "Decentralized gaming infrastructure enabling next-gen blockchain experiences.",
    category: "WEB3",
    country: "Global",
    countryFlag: "🌐",
  },
  {
    id: 5,
    name: "CloudNine",
    logo: "CloudNine",
    description: "Enterprise cloud solutions streamlining operations for Fortune 500 companies.",
    category: "CLOUD",
    country: "USA",
    countryFlag: "🇺🇸",
  },
  {
    id: 6,
    name: "DataFlow",
    logo: "DataFlow",
    description: "AI-powered analytics platform transforming raw data into actionable insights.",
    category: "AI/ML",
    country: "Germany",
    countryFlag: "🇩🇪",
  },
  {
    id: 7,
    name: "SmartApp",
    logo: "SmartApp",
    description: "Mobile-first solutions revolutionizing user engagement and retention.",
    category: "MOBILE",
    country: "Singapore",
    countryFlag: "🇸🇬",
  },
  {
    id: 8,
    name: "WebCore",
    logo: "WebCore",
    description: "Headless CMS and web infrastructure for modern digital experiences.",
    category: "SAAS",
    country: "Netherlands",
    countryFlag: "🇳🇱",
  },
];

interface ClientCardProps {
  client: Client;
  index: number;
}

const ClientCard = ({ client, index }: ClientCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Border logic: remove left border on first column, right border on last column
  // Mobile: 2 columns (first: even indices, last: odd indices)
  // Desktop: 4 columns (first: 0,4, last: 3,7)
  const isFirstColMobile = index % 2 === 0;
  const isLastColMobile = index % 2 === 1;
  const isFirstColDesktop = index % 4 === 0;
  const isLastColDesktop = index % 4 === 3;

  const borderClasses = `
    border-y border-border
    ${isFirstColMobile ? "" : "border-l"} ${isLastColMobile ? "" : "border-r"}
    ${isFirstColDesktop ? "md:border-l-0" : "md:border-l"}
    ${isLastColDesktop ? "md:border-r-0" : "md:border-r"}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative bg-background cursor-pointer ${borderClasses}`}
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default State - Logo centered */}
      <div className="flex items-center justify-center py-20 md:py-24 px-8 min-h-[240px] md:min-h-[300px]">
        <motion.span
          className="text-xl md:text-2xl font-bold text-foreground"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {client.logo}
        </motion.span>
      </div>

      {/* Hover Overlay Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-3 bg-dark rounded-2xl p-5 md:p-8 flex flex-col justify-between"
            initial={{
              opacity: 0,
              y: 40,
              rotateX: -20,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              rotateX: -20,
              scale: 0.9,
            }}
            transition={{
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Title and Description */}
            <div>
              <h3 className="text-base md:text-lg font-bold text-dark-foreground mb-2">
                {client.name}
              </h3>
              <p className="text-xs md:text-sm text-dark-muted leading-relaxed line-clamp-3">
                {client.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2 md:px-3 py-1 bg-white/10 rounded text-[10px] md:text-xs text-dark-foreground uppercase tracking-wider font-medium">
                {client.category}
              </span>
              <span className="px-2 md:px-3 py-1 bg-white/10 rounded text-[10px] md:text-xs text-dark-foreground flex items-center gap-1">
                <span>{client.countryFlag}</span>
                <span>{client.country}</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ClientsSection = () => {
  return (
    <section data-header-theme="light" className="relative z-10 bg-background text-foreground py-20 overflow-hidden rounded-t-[60px] -mt-16">
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

      {/* Client Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {clients.map((client, index) => (
            <ClientCard key={client.id} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
