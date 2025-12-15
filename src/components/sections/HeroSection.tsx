import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StatsSection from "./StatsSection";

const HeroSection = () => {
  return (
    <div className="relative h-[200vh]">
      {/* Sticky Hero Container - stays fixed while scrolling */}
      <div className="sticky top-0 h-screen">
        <section className="relative h-full bg-dark text-dark-foreground flex flex-col overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 flex-1 flex flex-col justify-center">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-8"
            >
              Web Development Agency
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-12 max-w-5xl"
            >
              Empowering businesses to{" "}
              <span className="text-primary">launch</span>, scale, and{" "}
              <span className="text-primary">succeed</span> faster
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contacts"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-6 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/cases"
                className="group inline-flex items-center justify-center gap-3 border border-dark-muted text-dark-foreground px-10 py-6 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-dark-foreground hover:text-dark"
              >
                View Our Cases
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Hero Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-20 lg:mt-32 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
            >
              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                  From MVP to market domination – your reliable partner in UI/UX design and web development
                </h3>
              </div>
              
              {/* Scroll Indicator */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-dark-muted uppercase tracking-wider">Scroll</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-10 border border-dark-muted rounded-full flex items-start justify-center p-2"
                >
                  <div className="w-1 h-2 bg-dark-foreground rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats at bottom of hero */}
          <StatsSection />
        </section>
      </div>
    </div>
  );
};

export default HeroSection;