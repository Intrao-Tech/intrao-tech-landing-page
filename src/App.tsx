import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { HeaderThemeProvider } from "@/contexts/HeaderThemeContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Cases from "./pages/Cases";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Contacts from "./pages/Contacts";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import WebAppDesign from "./pages/services/WebAppDesign";
import MobileAppDesign from "./pages/services/MobileAppDesign";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import WebsiteRedesign from "./pages/services/WebsiteRedesign";
import Branding from "./pages/services/Branding";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import NoCodeDevelopment from "./pages/services/NoCodeDevelopment";
import BlockchainDevelopment from "./pages/services/BlockchainDevelopment";
import UXAudit from "./pages/services/UXAudit";
import ProductDiscovery from "./pages/services/ProductDiscovery";
import TechnicalWorkshop from "./pages/services/TechnicalWorkshop";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import ArticlePage from "./pages/insights/ArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <HeaderThemeProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/about" element={<About />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<ArticlePage />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/team" element={<Team />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/services/web-app-design" element={<WebAppDesign />} />
              <Route path="/services/mobile-app-design" element={<MobileAppDesign />} />
              <Route path="/services/website-design" element={<WebsiteDesign />} />
              <Route path="/services/website-redesign" element={<WebsiteRedesign />} />
              <Route path="/services/branding" element={<Branding />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/mobile-development" element={<MobileDevelopment />} />
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services/no-code-development" element={<NoCodeDevelopment />} />
              <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
              <Route path="/services/ux-audit" element={<UXAudit />} />
              <Route path="/services/product-discovery" element={<ProductDiscovery />} />
              <Route path="/services/technical-workshop" element={<TechnicalWorkshop />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HeaderThemeProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
