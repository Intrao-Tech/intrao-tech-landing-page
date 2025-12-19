import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ExpertiseSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: "SaaS",
      title: "Scalable platforms for growth-focused teams",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
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
      name: "Healthcare",
      title: "HIPAA-compliant design for health tech products",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
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
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
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
    {
      name: "FinTech",
      title: "Secure, compliant digital products for modern finance",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
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
      name: "Web3",
      title: "User-friendly interfaces for blockchain products",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      challenges: [
        "Complex wallet and transaction flows",
        "Building trust in decentralized systems",
        "Onboarding non-crypto native users",
      ],
      solutions: [
        "Simplified wallet connection and management",
        "Clear transaction status and confirmations",
        "Educational UX for new users",
      ],
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
          className="mb-12"
        >
          <p className="label text-muted-foreground mb-4">
            Key Industries
          </p>
          <h2 className="heading-1">
            Our areas of expertise
          </h2>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {industries.map((industry, index) => (
            <Button
              key={industry.name}
              variant="tab"
              size="sm"
              onClick={() => setActiveIndustry(index)}
              data-active={activeIndustry === index}
              className="rounded-lg"
            >
              {industry.name}
            </Button>
          ))}
        </motion.div>

        {/* Content - Image left, content right */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={industries[activeIndustry].image}
              alt={industries[activeIndustry].name}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="heading-3 mb-10">
              {industries[activeIndustry].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div>
                <p className="label-small text-muted-foreground mb-6">
                  Challenges:
                </p>
                <ul className="space-y-4">
                  {industries[activeIndustry].challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✱</span>
                      <span className="text-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <p className="label-small text-muted-foreground mb-6">
                  How we solve them:
                </p>
                <ul className="space-y-4">
                  {industries[activeIndustry].solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✱</span>
                      <span className="text-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button asChild className="mt-10">
              <Link to="/cases">
                Explore
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;