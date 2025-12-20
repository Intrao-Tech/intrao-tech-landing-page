import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom Behance icon (lucide-react doesn't have it)
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12h6c1.7 0 3-1.3 3-3s-1.3-3-3-3H3v12h7c1.7 0 3-1.3 3-3s-1.3-3-3-3" />
    <path d="M15 6h6" />
    <path d="M15 17.5c0 1.4 1.1 2.5 2.5 2.5h3c1.4 0 2.5-1.1 2.5-2.5v-3c0-1.4-1.1-2.5-2.5-2.5h-3c-1.4 0-2.5 1.1-2.5 2.5v3z" />
  </svg>
);

// Custom Dribbble icon (lucide-react doesn't have it)
const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

const Footer = () => {
  const pageLinks = [
    { name: "Services", href: "/services" },
    { name: "Cases", href: "/cases" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
    { name: "Contacts", href: "/contacts" },
  ];

  const socialLinks = [
    { icon: BehanceIcon, href: "#", label: "Behance" },
    { icon: DribbbleIcon, href: "#", label: "Dribbble" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X" },
  ];

  const legalLinks = [
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookies Policy", href: "/cookies" },
  ];

  const allServices = [
    { name: "UX Design Audit", href: "/services/ux-audit" },
    { name: "Mobile App Development", href: "/services/mobile-development" },
    { name: "Custom MVP Development", href: "/services/web-development" },
    { name: "Product Redesign", href: "/services/website-redesign" },
    { name: "Web App Design", href: "/services/web-app-design" },
    { name: "Technical Workshop", href: "/services/product-discovery" },
    { name: "Blockchain Development", href: "/services/blockchain-development" },
    { name: "Website Design Services", href: "/services/website-design" },
    { name: "Dedicated Team", href: "/services/web-development" },
    { name: "No-Code Development", href: "/services/no-code-development" },
    { name: "Rapid MVP Development", href: "/services/web-development" },
    { name: "Branding", href: "/services/branding" },
    { name: "Website Redesign", href: "/services/website-redesign" },
    { name: "Team Extension", href: "/services/web-development" },
    { name: "Product Discovery", href: "/services/product-discovery" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Design Prototype", href: "/services/web-app-design" },
    { name: "UX/UI Design", href: "/services/mobile-app-design" },
    { name: "Product Design", href: "/services/web-app-design" },
    { name: "AI Chatbot Development", href: "/services/blockchain-development" },
  ];

  return (
    <footer className="bg-background text-foreground pt-20 md:pt-28 lg:pt-32">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Page Links */}
          <div>
            <nav className="flex flex-col space-y-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl font-medium text-foreground hover:underline transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <div className="grid grid-cols-4 gap-3 max-w-[300px]">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="icon-light"
                  size="icon-lg"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Empty column for balance */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Legal Bar */}
      <div>
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wider">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center gap-2">
                  <Link
                    to={link.href}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && <span>/</span>}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              INTRAO TECH © 2025
            </p>
          </div>
        </div>
      </div>

      {/* All Services Accordion */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="services" className="border-b-0">
              <AccordionTrigger className="py-6 hover:no-underline">
                <span className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl font-medium">All services</span>
                  <span className="text-xl md:text-2xl text-muted-foreground">{allServices.length}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 pb-8">
                  {allServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="group flex items-center gap-2 text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <span className="underline underline-offset-4">{service.name}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
