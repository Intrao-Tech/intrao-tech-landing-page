import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type HeaderTheme = "dark" | "light";

interface HeaderThemeContextType {
  theme: HeaderTheme;
  setTheme: (theme: HeaderTheme) => void;
}

const HeaderThemeContext = createContext<HeaderThemeContextType | undefined>(undefined);

export const useHeaderTheme = () => {
  const context = useContext(HeaderThemeContext);
  if (!context) {
    throw new Error("useHeaderTheme must be used within a HeaderThemeProvider");
  }
  return context;
};

interface HeaderThemeProviderProps {
  children: ReactNode;
}

export const HeaderThemeProvider = ({ children }: HeaderThemeProviderProps) => {
  const [theme, setTheme] = useState<HeaderTheme>("dark");
  const location = useLocation();

  useEffect(() => {
    // Reset theme on route change
    setTheme("dark");
  }, [location.pathname]);

  useEffect(() => {
    const updateTheme = () => {
      const sections = document.querySelectorAll("[data-header-theme]");
      const headerHeight = 80; // Approximate header height

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Check if section is at the top of the viewport (behind header)
        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
          const sectionTheme = section.getAttribute("data-header-theme");
          if (sectionTheme === "light" || sectionTheme === "dark") {
            setTheme(sectionTheme);
          }
          break;
        }
      }
    };

    // Initial check
    updateTheme();

    // Update on scroll
    window.addEventListener("scroll", updateTheme, { passive: true });

    return () => window.removeEventListener("scroll", updateTheme);
  }, [location.pathname]);

  return (
    <HeaderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  );
};
