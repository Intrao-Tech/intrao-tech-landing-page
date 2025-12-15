import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import logoFull from "@/assets/logo-full.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/services" },
      { name: "UI/UX Design", href: "/services" },
      { name: "MVP Development", href: "/services" },
      { name: "Team Extension", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Cases", href: "/cases" },
      { name: "Insights", href: "/insights" },
      { name: "Contacts", href: "/contacts" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-dark text-dark-foreground">
      {/* CTA Section */}
      <div className="border-b border-dark-muted/20">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Have a project in mind?
                <br />
                <span className="text-primary">Let's chat</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/contacts"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90"
              >
                Contact Us
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logoFull}
                alt="Intrao Tech"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-dark-muted text-sm leading-relaxed mb-6">
              We're a web development agency helping startups and businesses launch, scale, and succeed in the digital world.
            </p>
            <a
              href="mailto:hello@intrao.tech"
              className="inline-flex items-center gap-2 text-dark-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              hello@intrao.tech
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-dark-muted hover:text-dark-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-dark-muted hover:text-dark-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-dark-muted/30 rounded-full flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-dark-muted/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-muted text-sm">
            © {currentYear} Intrao Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-dark-muted">
            <Link
              to="/privacy"
              className="hover:text-dark-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-dark-foreground transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
