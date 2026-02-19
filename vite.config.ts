import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";
import prerender from "@prerenderer/rollup-plugin";
import JSDOMRenderer from "@prerenderer/renderer-jsdom";

const allRoutes = [
  "/",
  "/services",
  "/cases",
  "/about",
  "/insights",
  "/contacts",
  "/team",
  "/careers",
  "/services/web-app-design",
  "/services/mobile-app-design",
  "/services/website-design",
  "/services/website-redesign",
  "/services/branding",
  "/services/web-development",
  "/services/mobile-development",
  "/services/website-development",
  "/services/no-code-development",
  "/services/blockchain-development",
  "/services/ux-audit",
  "/services/product-discovery",
  "/services/technical-workshop",
  "/terms-of-use",
  "/privacy-policy",
  "/cookies-policy",
  "/insights/saas-mvp-cost-2026",
  "/insights/react-vs-nextjs-startups-2026",
  "/insights/saas-mvp-investors-fund",
  "/insights/startup-technical-roadmap-2026",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    Sitemap({
      hostname: "https://www.intrao.tech",
      dynamicRoutes: allRoutes,
      generateRobotsTxt: false,
    }),
    mode === "production" &&
      prerender({
        routes: allRoutes,
        renderer: new JSDOMRenderer(),
        rendererOptions: {
          renderAfterTime: 5000,
        },
        postProcess(renderedRoute) {
          renderedRoute.html = renderedRoute.html
            .replace(/http:\/\/localhost:\d+/g, "https://www.intrao.tech")
            .replace(/about:blank/g, "https://www.intrao.tech");
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
