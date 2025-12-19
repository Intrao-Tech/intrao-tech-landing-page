import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const budgetOptions = [
    "up to $10k",
    "$10-$20k",
    "$20-$50k",
    "$50-$100k",
    ">$100k",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "", budget: "" });
  };

  return (
    <section id="contact-form" data-header-theme="dark" className="relative z-10 bg-dark text-dark-foreground py-24 lg:py-32">
      {/* Top curve */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <path
            className="fill-dark"
            d="M0,120 L0,120 C360,120 360,40 720,40 C1080,40 1080,120 1440,120 L1440,120 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-8">
              Have a project in mind?
              <br />
              <span className="text-primary">Let's chat</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-dark-muted mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent border-b border-dark-muted/30 py-4 text-dark-foreground placeholder:text-dark-muted focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="text-sm text-dark-muted mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent border-b border-dark-muted/30 py-4 text-dark-foreground placeholder:text-dark-muted focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="text-sm text-dark-muted mb-2 block">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full bg-transparent border-b border-dark-muted/30 py-4 text-dark-foreground placeholder:text-dark-muted focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <div>
                <label className="text-sm text-dark-muted mb-4 block">
                  Your budget for this project?
                </label>
                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: option })}
                      className={`px-6 py-3 rounded-lg text-sm transition-all duration-300 ${
                        formData.budget === option
                          ? "bg-primary text-primary-foreground"
                          : "border border-dark-muted/30 text-dark-muted hover:text-dark-foreground hover:border-dark-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" size="lg" className="group mt-4">
                Submit
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-12"
          >
            <div className="border border-dark-muted/30 p-8 lg:p-10 h-full">
              <h3 className="heading-4 mb-8 text-dark-foreground">
                Have a project to discuss?
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                      alt="Account Executive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Account Executive</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button asChild variant="icon-circle" size="icon" className="h-8 w-8">
                        <a href="#">
                          <Linkedin />
                        </a>
                      </Button>
                    </div>
                    <a
                      href="mailto:hello@intrao.tech"
                      className="inline-flex items-center gap-2 text-primary mt-3"
                    >
                      <Mail className="w-4 h-4" />
                      hello@intrao.tech
                    </a>
                  </div>
                </div>

                <div className="border-t border-dark-muted/30 pt-8">
                  <h4 className="label text-dark-muted mb-4">
                    Have a partnership in mind?
                  </h4>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-dark-muted/20 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-foreground">Co-Founder</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button asChild variant="icon-circle" size="icon" className="h-8 w-8 border-dark-muted/30 text-dark-muted">
                          <a href="#">
                            <Linkedin />
                          </a>
                        </Button>
                      </div>
                      <a
                        href="mailto:partner@intrao.tech"
                        className="inline-flex items-center gap-2 text-primary mt-3"
                      >
                        <Mail className="w-4 h-4" />
                        partner@intrao.tech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full translate-y-full pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <path
            className="fill-dark"
            d="M0,0 L0,0 C360,0 360,80 720,80 C1080,80 1080,0 1440,0 L1440,0 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default ContactFormSection;
