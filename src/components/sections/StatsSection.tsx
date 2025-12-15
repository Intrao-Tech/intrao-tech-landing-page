import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatProps {
  value: string;
  suffix?: string;
  label: string;
  delay?: number;
}

const AnimatedStat = ({ value, suffix = "", label, delay = 0 }: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numValue = parseInt(value.replace(/\D/g, ""));
      const duration = 2000;
      const steps = 60;
      const increment = numValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center lg:text-left"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
        {displayValue}
        {suffix}
      </div>
      <p className="text-dark-muted text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "98", suffix: "%", label: "Customer satisfaction rate" },
    { value: "35", suffix: "%+", label: "Boost in conversions after redesign" },
    { value: "50", suffix: "+", label: "Top-tier designers and developers" },
    { value: "100", suffix: "+", label: "Projects delivered successfully" },
  ];

  return (
    <section className="bg-dark text-dark-foreground py-20 border-t border-dark-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
