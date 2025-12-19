import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import logoFull from "@/assets/logo.svg";
import logoFullDark from "@/assets/logo-dark.svg";
import { useHeaderTheme } from "@/contexts/HeaderThemeContext";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyExpanded, setIsMobileCompanyExpanded] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>("DESIGN");
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const location = useLocation();
  const { theme } = useHeaderTheme();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsMobileCompanyExpanded(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesExpanded(false);
    setActiveServiceCategory("DESIGN");
  }, [location]);

  const navLinks = [
    { name: "Services", href: "#", hasDropdown: true, dropdownType: "services" },
    { name: "Cases", href: "/cases" },
    { name: "Company", href: "#", hasDropdown: true, dropdownType: "company" },
    { name: "Insights", href: "/insights" },
    { name: "Contacts", href: "/contacts" },
  ];

  const companyLinks = [
    { name: "About us", href: "/about" },
    { name: "Team and Advisors", href: "/team" },
    { name: "Careers", href: "/careers" },
  ];

  const serviceCategories = [
    {
      name: "DESIGN",
      items: [
        { name: "Web app design", href: "/services/web-app-design" },
        { name: "Mobile app design", href: "/services/mobile-app-design" },
        { name: "Website design", href: "/services/website-design" },
        { name: "Website redesign", href: "/services/website-redesign" },
        { name: "Branding", href: "/services/branding" },
      ],
    },
    {
      name: "DEVELOPMENT",
      items: [
        { name: "Web development", href: "/services/web-development" },
        { name: "Mobile development", href: "/services/mobile-development" },
        { name: "Website development", href: "/services/website-development" },
        { name: "No-code development", href: "/services/no-code-development" },
        { name: "Blockchain development", href: "/services/blockchain-development" },
      ],
    },
    {
      name: "RESEARCH",
      items: [
        { name: "UX audit", href: "/services/ux-audit" },
        { name: "Product discovery", href: "/services/product-discovery" },
        { name: "Technical workshop", href: "/services/technical-workshop" },
      ],
    },
  ];

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
    setIsCompanyDropdownOpen(false);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current);
      companyTimeoutRef.current = null;
    }
    setIsCompanyDropdownOpen(true);
    setIsServicesDropdownOpen(false);
  };

  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color] duration-300 ${
          isScrolled
            ? isLight
              ? "bg-background py-4"
              : "bg-dark py-4"
            : isLight
              ? "bg-background py-6"
              : "bg-dark py-6"
        } ${
          (isServicesDropdownOpen || isCompanyDropdownOpen)
            ? isLight
              ? "border-b border-light-border"
              : "border-b border-dark-muted/20"
            : ""
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                src={isLight ? logoFullDark : logoFull}
                alt="Intrao Tech"
                className="h-8 w-auto object-contain transition-opacity duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isServicesActive = link.dropdownType === "services" &&
                (location.pathname.startsWith("/services/") || isServicesDropdownOpen);
              const isCompanyActive = link.dropdownType === "company" &&
                ["/about", "/team", "/careers"].includes(location.pathname);
              const isDropdownOpen = link.dropdownType === "services"
                ? isServicesDropdownOpen
                : link.dropdownType === "company"
                  ? isCompanyDropdownOpen
                  : false;

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.dropdownType === "services") {
                      handleServicesMouseEnter();
                    } else if (link.dropdownType === "company") {
                      handleCompanyMouseEnter();
                    }
                  }}
                  onMouseLeave={() => {
                    if (link.dropdownType === "services") {
                      handleServicesMouseLeave();
                    } else if (link.dropdownType === "company") {
                      handleCompanyMouseLeave();
                    }
                  }}
                >
                  {link.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                        isServicesActive || isCompanyActive
                          ? "text-primary"
                          : isLight
                            ? "text-foreground hover:text-primary"
                            : "text-dark-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                        location.pathname === link.href
                          ? "text-primary"
                          : isLight
                            ? "text-foreground hover:text-primary"
                            : "text-dark-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Button
              asChild
              variant={isLight ? "outline-light" : "outline-dark"}
              className="group"
            >
              <Link to="/contacts">
                Get in Touch
                <ButtonArrows />
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-50 p-2 transition-colors duration-300 ${
              isLight
                ? "text-foreground"
                : "text-dark-foreground"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <motion.span
                className={`absolute block h-0.5 w-5 rounded-full ${isLight ? 'bg-foreground' : 'bg-dark-foreground'}`}
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 0 : -4,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`absolute block h-0.5 w-5 rounded-full ${isLight ? 'bg-foreground' : 'bg-dark-foreground'}`}
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Services Dropdown */}
      <AnimatePresence>
        {isServicesDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 z-[45] hidden lg:block"
            style={{ top: isScrolled ? "76px" : "92px" }}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <div className={`${isLight ? "bg-light" : "bg-dark"}`}>
              <div className="container mx-auto">
                <div className="flex max-w-4xl">
                  {/* Left: Categories */}
                  <div className="flex flex-col gap-2 pt-10 pb-4 pr-8 w-[240px] shrink-0">
                    {serviceCategories.map((category) => (
                      <button
                        key={category.name}
                        onMouseEnter={() => setActiveServiceCategory(category.name)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                          activeServiceCategory === category.name
                            ? isLight
                              ? "text-foreground"
                              : "text-dark-foreground"
                            : isLight
                              ? "text-muted-foreground hover:text-foreground"
                              : "text-dark-muted hover:text-dark-foreground"
                        }`}
                      >
                        {category.name}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>

                  {/* Vertical Divider */}
                  <div className={`w-px ${isLight ? "bg-light-border" : "bg-dark-muted/20"}`} />

                  {/* Right: Sub-items */}
                  <div className="flex flex-col gap-3 pt-10 pb-4 pl-8">
                    {serviceCategories
                      .find((cat) => cat.name === activeServiceCategory)
                      ?.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`text-xl font-medium transition-colors duration-300 ${
                            location.pathname === item.href
                              ? "text-primary"
                              : isLight
                                ? "text-foreground hover:text-primary"
                                : "text-dark-foreground hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className={`h-px ${isLight ? "bg-light-border" : "bg-dark-muted/20"}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Company Dropdown */}
      <AnimatePresence>
        {isCompanyDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 z-[45] hidden lg:block"
            style={{ top: isScrolled ? "76px" : "92px" }}
            onMouseEnter={handleCompanyMouseEnter}
            onMouseLeave={handleCompanyMouseLeave}
          >
            <div className={`${isLight ? "bg-light" : "bg-dark"}`}>
              <div className="container mx-auto">
                <div className="flex">
                  {/* Left: CTA Block */}
                  <div className="pt-10 pb-4 pr-8 w-[280px] shrink-0">
                    <div className={`rounded-xl p-6 h-full flex flex-col ${
                      isLight ? "bg-light/50 border border-light-border" : "bg-dark-muted/20"
                    }`}>
                      <h3 className={`text-2xl md:text-3xl font-bold leading-tight mb-auto ${
                        isLight ? "text-foreground" : "text-dark-foreground"
                      }`}>
                        Ready to bring your idea to life?
                      </h3>
                      <Button asChild className="mt-8 group">
                        <Link to="/contacts">
                          Let's Talk
                          <ButtonArrows />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className={`w-px ${isLight ? "bg-light-border" : "bg-dark-muted/20"}`} />

                  {/* Right: Navigation Links */}
                  <div className="flex flex-col gap-4 pt-10 pb-4 pl-8">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`text-xl font-medium transition-colors duration-300 ${
                          location.pathname === link.href
                            ? "text-primary"
                            : isLight
                              ? "text-foreground hover:text-primary"
                              : "text-dark-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`h-px ${isLight ? "bg-light-border" : "bg-dark-muted/20"}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 pt-24 lg:hidden overflow-y-auto overscroll-contain ${
              isLight ? "bg-background" : "bg-dark"
            }`}
          >
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.hasDropdown ? (
                      link.dropdownType === "services" ? (
                        <div>
                          <button
                            onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                            className={`flex items-center gap-2 text-2xl font-semibold uppercase tracking-wider transition-colors duration-300 ${
                              location.pathname.startsWith("/services/")
                                ? "text-primary"
                                : isLight
                                  ? "text-foreground hover:text-primary"
                                  : "text-dark-foreground hover:text-primary"
                            }`}
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isMobileServicesExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isMobileServicesExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-4 pl-4 pt-4">
                                  {serviceCategories.map((category) => (
                                    <div key={category.name}>
                                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                                        isLight ? "text-muted-foreground" : "text-dark-muted"
                                      }`}>
                                        {category.name}
                                      </span>
                                      <div className="flex flex-col gap-2 mt-2">
                                        {category.items.map((item) => (
                                          <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`text-lg font-medium transition-colors duration-300 ${
                                              location.pathname === item.href
                                                ? "text-primary"
                                                : isLight
                                                  ? "text-foreground hover:text-primary"
                                                  : "text-dark-foreground hover:text-primary"
                                            }`}
                                          >
                                            {item.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={() => setIsMobileCompanyExpanded(!isMobileCompanyExpanded)}
                            className={`flex items-center gap-2 text-2xl font-semibold uppercase tracking-wider transition-colors duration-300 ${
                              ["/about", "/team", "/careers"].includes(location.pathname)
                                ? "text-primary"
                                : isLight
                                  ? "text-foreground hover:text-primary"
                                  : "text-dark-foreground hover:text-primary"
                            }`}
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isMobileCompanyExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isMobileCompanyExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-3 pl-4 pt-4">
                                  {companyLinks.map((subLink) => (
                                    <Link
                                      key={subLink.name}
                                      to={subLink.href}
                                      className={`text-lg font-medium transition-colors duration-300 ${
                                        location.pathname === subLink.href
                                          ? "text-primary"
                                          : isLight
                                            ? "text-muted-foreground hover:text-primary"
                                            : "text-dark-muted hover:text-primary"
                                      }`}
                                    >
                                      {subLink.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    ) : (
                      <Link
                        to={link.href}
                        className={`text-2xl font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          location.pathname === link.href
                            ? "text-primary"
                            : isLight
                              ? "text-foreground hover:text-primary"
                              : "text-dark-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  className="mt-6"
                >
                  <Button asChild size="lg" className="group">
                  <Link to="/contacts">
                    Get in Touch
                    <ButtonArrows />
                  </Link>
                </Button>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
