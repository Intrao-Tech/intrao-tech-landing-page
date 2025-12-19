import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const ChallengesSection = () => {
  const challenges = [
    {
      question: "Need to meet tight deadlines but don't have enough hands on deck?",
      answer:
        "Hiring in-house takes time—posting jobs, sorting resumes, and onboarding. We can get you a dedicated designer or developer ready to start tomorrow, helping you hit your deadlines without the wait.",
      cta: "Extend My Team",
      href: "/services",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop",
    },
    {
      question: "Your product needs to scale, but your user experience is holding you back?",
      answer:
        "As a digital product design agency, we know seamless scaling starts with consistency. We implement design systems and optimize your UX to keep users engaged—ensuring rapid growth doesn't compromise quality.",
      cta: "Redesign My Product",
      href: "/services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    },
    {
      question: "Have big ideas but need to launch an MVP quickly?",
      answer:
        "Our discovery process helps you focus on what matters most, and with pre-built development frameworks, we can speed up your MVP development by 50%. Launch faster without sacrificing quality.",
      cta: "Launch My MVP",
      href: "/services",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    },
  ];

  return (
    <section data-header-theme="light" className="bg-background text-foreground">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-16 lg:py-24"
      >
        <h2 className="heading-1 max-w-4xl">
          Building a startup is hard, but finding the right partner shouldn't be
        </h2>
      </motion.div>

      {/* Stacking Cards Container */}
      <div className="relative">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="sticky bg-background border-t border-border"
            style={{
              top: `${index * 24}px`,
              zIndex: index + 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="container mx-auto px-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_380px] gap-8 lg:gap-12 py-12 lg:py-16 min-h-[60vh] lg:min-h-[70vh] items-start lg:items-center">
                {/* Question - Left Column */}
                <div className="lg:pr-4">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {challenge.question}
                  </p>
                </div>

                {/* Answer + CTA - Center Column */}
                <div className="flex flex-col justify-center">
                  <p className="text-quote text-foreground mb-8 lg:mb-12">
                    {challenge.answer}
                  </p>
                  <Button asChild className="group w-fit">
                    <Link to={challenge.href}>
                      {challenge.cta}
                      <ButtonArrows />
                    </Link>
                  </Button>
                </div>

                {/* Video/Image Placeholder - Right Column */}
                <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-muted order-first lg:order-last">
                  <img
                    src={challenge.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <button className="absolute bottom-4 left-4 flex items-center gap-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/90 group">
                    <span className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Play className="w-4 h-4 fill-current" />
                    </span>
                    <span className="pr-2">Watch video</span>
                  </button>
                  {/* Caption overlay */}
                  <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm">
                    {index === 0 && "the right fit."}
                    {index === 1 && "and touch points."}
                    {index === 2 && "your vision."}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Bottom spacer to allow last card to scroll fully */}
      <div className="h-24 lg:h-32" />
    </section>
  );
};

export default ChallengesSection;
