import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import showreelVideo from "@/assets/tinyvid_optimized_showreel_2.mp4";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

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
      className="text-center py-8 lg:py-12"
    >
      <div className="heading-1 text-dark-foreground mb-3">
        {displayValue}
        {suffix}
      </div>
      <p className="label text-dark-muted">{label}</p>
    </motion.div>
  );
};

const ParallaxHeroSection = () => {
  const stats = [
    { value: "98", suffix: "%", label: "Customer satisfaction rate" },
    { value: "35", suffix: "%+", label: "Boost in conversions after redesign" },
    { value: "50", suffix: "+", label: "Top-tier designers and developers" },
    { value: "100", suffix: "+", label: "Projects delivered successfully" },
  ];

  return (
    <section data-header-theme="dark" className="relative bg-dark text-dark-foreground">
      {/* Hero Block - Full Width */}
      <div className="container mx-auto px-6 pt-32 lg:pt-40 pb-16">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label text-dark-muted mb-8"
        >
          Product Design and Development Agency
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-1 mb-12 max-w-5xl"
        >
          Empowering startups to launch, scale, and succeed faster
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild className="group">
            <Link to="/contacts">
              Let's Talk
              <ButtonArrows />
            </Link>
          </Button>
          <Button asChild variant="outline-dark" className="group">
            <Link to="/cases">
              View Our Cases
              <ButtonArrows />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Parallax Section - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Sticky Video */}
        <div className="relative h-[50vh] lg:h-auto lg:sticky lg:top-0 lg:self-start p-4 lg:p-6">
          <div className="w-full h-full lg:h-[calc(100vh-48px)] rounded-xl overflow-hidden">
            <video
              src={showreelVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Scrolling Content */}
        <div className="relative">
          {/* Description Block */}
          <div className="px-6 lg:px-12 xl:px-20 pt-20 lg:pt-32 pb-12 lg:pb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-quote"
            >
              From MVP to market domination – your reliable partner in UI/UX design and development
            </motion.h2>
          </div>

          {/* Stats Block */}
          <div className="px-6 lg:px-12 xl:px-20 pt-8 lg:pt-12 pb-20 lg:pb-32">
            {/* Stats Header */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label text-dark-muted mb-12"
            >
              Intrao Tech in Numbers
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 border-t border-dark-muted/20">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`${
                    index % 2 === 0 ? "border-r" : ""
                  } ${
                    index < 2 ? "border-b" : ""
                  } border-dark-muted/20`}
                >
                  <AnimatedStat
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={index * 0.1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHeroSection;
