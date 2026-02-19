import { useParams, Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  generateArticleSchema,
  generateFAQSchema,
  generatePersonSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { getArticleBySlug } from "@/data/articles";
import type { ContentBlock } from "@/data/articles";
import NotFound from "@/pages/NotFound";

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          {block.text}
        </h2>
      ) : (
        <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol className="list-decimal list-inside space-y-3 mb-6 text-muted-foreground text-lg">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground text-lg">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
          <p className="text-lg italic text-foreground">{block.text}</p>
          {block.attribution && (
            <cite className="text-sm text-muted-foreground mt-2 block">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );
    case "stat":
      return (
        <div className="bg-muted/30 rounded-lg p-8 my-8 text-center">
          <p className="text-4xl font-bold text-primary mb-2">{block.value}</p>
          <p className="text-muted-foreground">{block.label}</p>
        </div>
      );
    case "callout":
      return (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-foreground text-lg leading-relaxed">
            {block.text}
          </p>
        </div>
      );
    case "key-takeaways":
      return (
        <div className="bg-muted/30 border border-border rounded-lg p-8 my-12">
          <h3 className="text-xl font-bold mb-6">Key Takeaways</h3>
          <ul className="space-y-4">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground">
                <span className="text-primary font-bold shrink-0">
                  {i + 1}.
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  const structuredData = [
    generateArticleSchema({
      headline: article.title,
      description: article.metaDescription,
      url: `/insights/${article.slug}`,
      datePublished: article.dateISO,
      author: {
        name: article.author.name,
        jobTitle: article.author.role,
        sameAs: [article.author.linkedIn],
      },
    }),
    generateFAQSchema(article.faqs),
    generatePersonSchema({
      name: article.author.name,
      jobTitle: article.author.role,
      sameAs: [article.author.linkedIn],
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Insights", url: "/insights" },
      { name: article.title, url: `/insights/${article.slug}` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`/insights/${article.slug}`}
        ogType="article"
        structuredData={structuredData}
      />

      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground pt-32 pb-16"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary rounded-lg">
                {article.category}
              </span>
              <span className="text-dark-muted text-sm">{article.date}</span>
              <span className="text-dark-muted text-sm">
                {article.readTime}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8"
            >
              {article.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-sm font-semibold">
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold">{article.author.name}</p>
                <p className="text-dark-muted text-sm">
                  {article.author.role}, {article.author.company}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Summary Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground py-16"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-speakable="summary"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium">
                {article.summary}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground pb-16"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {article.content.map((block, i) => (
                <ContentBlockRenderer key={i} block={block} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        {article.faqs.length > 0 && (
          <section
            data-header-theme="light"
            className="bg-background text-foreground py-16 border-t border-border"
            data-speakable="faq"
          >
            <div className="container mx-auto px-6 max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-8"
              >
                Frequently Asked Questions
              </motion.h2>

              <Accordion type="single" collapsible className="w-full">
                {article.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* Author Bio Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground py-16 border-t border-border"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-muted/30 border border-border rounded-lg p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center text-lg font-bold shrink-0">
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">
                  {article.author.name}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {article.author.role} at {article.author.company}
                </p>
                <a
                  href={article.author.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground py-24"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to build your product?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Intrao Tech helps startups go from idea to launch with
              founder-led execution. Let's discuss your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="group">
                <Link to="/contacts">
                  Get in Touch
                  <ButtonArrows />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ArticlePage;
