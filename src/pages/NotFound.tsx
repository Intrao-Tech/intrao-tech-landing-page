import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import Header from "@/components/Header";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { ArrowLink } from "@/components/ui/arrow-link";

// Custom Behance icon (lucide-react doesn't have it)
const BehanceIcon = () => (
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
  >
    <path d="M3 12h6c1.7 0 3-1.3 3-3s-1.3-3-3-3H3v12h7c1.7 0 3-1.3 3-3s-1.3-3-3-3" />
    <path d="M15 6h6" />
    <path d="M15 17.5c0 1.4 1.1 2.5 2.5 2.5h3c1.4 0 2.5-1.1 2.5-2.5v-3c0-1.4-1.1-2.5-2.5-2.5h-3c-1.4 0-2.5 1.1-2.5 2.5v3z" />
  </svg>
);

// Custom Dribbble icon (lucide-react doesn't have it)
const DribbbleIcon = () => (
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
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

// Custom Threads icon (Meta's Threads logo)
const ThreadsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    fill="currentColor"
  >
    <path d="M186.42 123.65a63.81 63.81 0 0 0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07c-19.78-6-42.51 1.19-52.85 16.7a8 8 0 0 0 13.32 8.88c6.37-9.56 22-14.16 34.89-10.27c9.95 3 16.82 10.3 20.15 21a81.05 81.05 0 0 0-15.29-1.43c-13.92 0-26.95 3.59-36.67 10.1C94.3 127.57 88 139 88 152c0 20.58 15.86 35.52 37.71 35.52a48 48 0 0 0 34.35-14.81c6.44-6.7 14-18.36 15.61-37.1c.38.26.74.53 1.1.8C186.88 144.05 192 154.68 192 168c0 19.36-20.34 48-64 48c-26.73 0-45.48-8.65-57.34-26.44C60.93 175 56 154.26 56 128s4.93-47 14.66-61.56C82.52 48.65 101.27 40 128 40c32.93 0 54 13.25 64.53 40.52a8 8 0 1 0 14.93-5.75C194.68 41.56 167.2 24 128 24c-32 0-55.81 11.29-70.66 33.56C45.83 74.83 40 98.52 40 128s5.83 53.17 17.34 70.44C72.19 220.71 96 232 128 232c30.07 0 48.9-11.48 59.4-21.1C200.3 199.08 208 183 208 168c0-18.34-7.46-33.68-21.58-44.35m-37.89 38a31.94 31.94 0 0 1-22.82 9.9c-10.81 0-21.71-6-21.71-19.52c0-12.63 12-26.21 38.41-26.21a63.88 63.88 0 0 1 17.59 2.42c0 14.08-4 25.62-11.47 33.38Z" />
  </svg>
);

const socialLinks = [
  { icon: BehanceIcon, href: "https://www.behance.net/intraotech", label: "Behance" },
  { icon: DribbbleIcon, href: "https://dribbble.com/intrao-tech", label: "Dribbble" },
  { icon: Instagram, href: "https://www.instagram.com/intrao.tech/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/intrao-tech/", label: "LinkedIn" },
  { icon: ThreadsIcon, href: "https://www.threads.com/@intrao.tech", label: "Threads" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587337524549", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/Intrao_Tech", label: "X" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Intrao Tech"
        description="The page you're looking for doesn't exist."
        noIndex={true}
      />

      <Header />

      <main id="main-content" className="relative min-h-screen bg-dark" data-header-theme="dark">
        <section className="container mx-auto px-6 pt-40 pb-24">
          {/* Label */}
          <p className="text-dark-muted uppercase tracking-widest text-sm mb-6">
            Something went wrong
          </p>

          {/* Main Heading */}
          <h1 className="text-dark-foreground text-5xl md:text-6xl lg:text-7xl font-medium mb-8">
            Page not found
          </h1>

          {/* Email */}
          <ArrowLink
            href="mailto:info@intrao.tech"
            variant="light"
            showArrow={false}
            className="mb-8"
          >
            info@intrao.tech
          </ArrowLink>

          {/* Social Icons */}
          <div className="flex gap-3 mb-12">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline-dark"
                size="icon-md"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon />
                </a>
              </Button>
            ))}
          </div>

          {/* Go Home Button */}
          <Button asChild className="group">
            <Link to="/">
              Go Home
              <ButtonArrows />
            </Link>
          </Button>
        </section>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-wrap items-center gap-2 text-base text-dark-muted">
              <span>Intrao Tech © {new Date().getFullYear()}</span>
              <span>/</span>
              <a href="/terms-of-use" className="hover:text-dark-foreground transition-colors">
                Terms of Use
              </a>
              <span>/</span>
              <a href="/privacy-policy" className="hover:text-dark-foreground transition-colors">
                Privacy Policy
              </a>
              <span>/</span>
              <a href="/cookies-policy" className="hover:text-dark-foreground transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
