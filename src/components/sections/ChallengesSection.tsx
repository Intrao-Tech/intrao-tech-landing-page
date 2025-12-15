import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      question: "Need to meet tight deadlines but don't have enough hands on deck?",
      answer:
        "Hiring in-house takes time—posting jobs, sorting resumes, and onboarding. We can get you a dedicated designer or developer ready to start tomorrow, helping you hit your deadlines without the wait.",
      cta: "Extend My Team",
      href: "/services",
    },
    {
      question: "Your product needs to scale, but your user experience is holding you back?",
      answer:
        "Seamless scaling starts with consistency. We implement design systems and optimize your UX to keep users engaged—ensuring rapid growth doesn't compromise quality.",
      cta: "Redesign My Product",
      href: "/services",
    },
    {
      question: "Have big ideas but need to launch an MVP quickly?",
      answer:
        "Our discovery process helps you focus on what matters most, and with pre-built development frameworks, we can speed up your MVP development by 50%. Launch faster without sacrificing quality.",
      cta: "Launch My MVP",
      href: "/services",
    },
  ];

  return (
    <section data-header-theme="light" className="bg-background text-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Building a startup is hard,
            <br />
            <span className="text-muted-foreground">but finding the right partner shouldn't be</span>
          </h2>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="border border-border p-8 lg:p-10 h-full flex flex-col transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                  {challenge.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
                  {challenge.answer}
                </p>
                <Link
                  to={challenge.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  {challenge.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
