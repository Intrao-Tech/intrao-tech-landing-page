import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-dark text-dark-foreground flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
