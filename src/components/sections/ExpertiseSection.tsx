import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ExpertiseSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: "SaaS",
      title: "Scalable platforms for growth-focused teams",
      challenges: [
        "High churn from poor and fragmented UX",
        "Scaling product features without compromising speed",
        "Converting freemium users into paying subscribers",
      ],
      solutions: [
        "Streamlined flows to improve activation and retention",
        "Modular UX and design systems to scale features faster",
        "Clean billing and plan management UX to improve conversion",
      ],
    },
    {
      name: "E-Commerce",
      title: "High-converting shopping experiences",
      challenges: [
        "Cart abandonment and checkout friction",
        "Mobile experience not optimized",
        "Inventory and order management complexity",
      ],
      solutions: [
        "Streamlined checkout with minimal steps",
        "Mobile-first responsive design approach",
        "Intuitive admin dashboards for easy management",
      ],
    },
    {
      name: "FinTech",
      title: "Secure, compliant digital products for modern finance",
      challenges: [
        "KYC, AML, and global compliance requirements",
        "Drop-offs during complex onboarding flows",
        "Real-time integrations with payment systems",
      ],
      solutions: [
        "Frictionless onboarding and verification UX",
        "Secure UI for transactions and money movement",
        "API-driven architecture built for performance",
      ],
    },
    {
      name: "Healthcare",
      title: "HIPAA-compliant design for health tech products",
      challenges: [
        "UX complexity in health tracking and telehealth",
        "Data privacy and HIPAA compliance",
        "Building trust with patients and practitioners",
      ],
      solutions: [
        "Patient-first UX that simplifies complex workflows",
        "Secure infrastructure aligned with regulations",
        "Clean, professional UI that builds user trust",
      ],
    },
    {
      name: "EdTech",
      title: "Digital learning platforms that engage and scale",
      challenges: [
        "Low engagement in self-paced environments",
        "Accessibility compliance (ADA, WCAG)",
        "Performance under high concurrent user loads",
      ],
      solutions: [
        "Gamified UX to keep learners motivated",
        "Adaptive UI for different learning needs",
        "Cloud-based, scalable architecture",
      ],
    },
  ];

  return (
    <section className="bg-dark text-dark-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Our areas of expertise
          </h2>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {industries.map((industry, index) => (
            <button
              key={industry.name}
              onClick={() => setActiveIndustry(index)}
              className={`px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeIndustry === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-dark-muted/10 text-dark-muted hover:text-dark-foreground"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Challenges */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {industries[activeIndustry].title}
            </h3>
            <div className="mb-8">
              <p className="text-sm text-dark-muted uppercase tracking-wider mb-4">
                Challenges:
              </p>
              <ul className="space-y-4">
                {industries[activeIndustry].challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-dark-muted">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-sm text-dark-muted uppercase tracking-wider mb-4">
              How we solve them:
            </p>
            <ul className="space-y-4 mb-8">
              {industries[activeIndustry].solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-dark-foreground">{solution}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-primary font-semibold group"
            >
              View Cases
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
