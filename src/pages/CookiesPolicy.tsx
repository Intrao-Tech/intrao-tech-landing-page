import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiesPolicy = () => {
  return (
    <>
      <SEOHead
        title="Cookies Policy | Intrao Tech"
        description="Cookie policy for Intrao Tech - how we use cookies and how you can control them."
        canonical="/cookies-policy"
      />

      <Header />

      <main id="main-content">
        <section data-header-theme="light" className="bg-background min-h-screen pt-32 pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Left: Sticky Title */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground">
                  Cookies Policy
                </h1>
              </motion.div>

              {/* Right: Scrolling Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12 text-foreground"
              >
                {/* Header */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                    Cookies Policy
                  </h2>
                  <p className="text-muted-foreground">Last updated January 15, 2026</p>
                </div>

                {/* Introduction */}
                <div className="space-y-6">
                  <p>
                    This Cookie Policy explains what cookies are and how INTRAO TECH LTD (company number 16900600) ("we", "us", or "our") uses them on our website{" "}
                    <a href="https://intrao.tech" className="text-primary hover:underline">
                      https://intrao.tech
                    </a>
                    . You should read this policy to understand what cookies are, how we use them, the types of cookies we use, and how you can control your cookie preferences.
                  </p>
                  <p>
                    For further information on how we use, store, and keep your personal data secure, see our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p>
                    Your consent applies to the following domain: intrao.tech
                  </p>
                </div>

                {/* What are cookies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">What Are Cookies?</h3>
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and improve the user experience.
                  </p>
                  <p>
                    Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
                  </p>
                </div>

                {/* How do we use cookies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">How Do We Use Cookies?</h3>
                  <p>
                    We use cookies for several purposes. Some cookies are necessary for technical reasons for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
                  </p>
                  <p>
                    The specific types of first-party and third-party cookies served through our website and the purposes they perform are described below.
                  </p>
                </div>

                {/* Types of cookies */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">Types of Cookies We Use</h3>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Essential Cookies</h4>
                    <p>
                      These cookies are strictly necessary to provide you with services available through our website and to use some of its features. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border">
                        <thead className="bg-muted">
                          <tr>
                            <th className="text-left p-3 border-b border-border">Cookie</th>
                            <th className="text-left p-3 border-b border-border">Purpose</th>
                            <th className="text-left p-3 border-b border-border">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border-b border-border font-mono text-xs">__vercel_live_token</td>
                            <td className="p-3 border-b border-border">Vercel hosting authentication</td>
                            <td className="p-3 border-b border-border">Session</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Performance and Analytics Cookies</h4>
                    <p>
                      These cookies collect information about how visitors use our website, such as which pages visitors go to most often. We use this information to improve our website and provide a better user experience. All information these cookies collect is aggregated and therefore anonymous.
                    </p>
                    <p className="text-muted-foreground italic">
                      Note: We currently do not use analytics cookies on our website. If we implement analytics in the future, we will update this policy and seek your consent where required.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Functional Cookies</h4>
                    <p>
                      These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                    <p className="text-muted-foreground italic">
                      Note: We currently do not use functional cookies that require consent.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Marketing and Advertising Cookies</h4>
                    <p>
                      These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                    </p>
                    <p className="text-muted-foreground italic">
                      Note: We currently do not use marketing or advertising cookies on our website.
                    </p>
                  </div>
                </div>

                {/* Third-party services */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Third-Party Services</h3>
                  <p>
                    Our website uses the following third-party services that may set cookies or collect data:
                  </p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Vercel (Website Hosting)</strong>
                      <p className="text-muted-foreground mt-1">
                        Our website is hosted on Vercel. Vercel may set essential cookies for security and performance purposes. For more information, see{" "}
                        <a href="https://vercel.com/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          Vercel's Privacy Policy
                        </a>
                        .
                      </p>
                    </li>
                    <li>
                      <strong>Web3Forms (Contact Form)</strong>
                      <p className="text-muted-foreground mt-1">
                        We use Web3Forms to process contact form submissions. Web3Forms does not set cookies on your device. For more information, see{" "}
                        <a href="https://web3forms.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          Web3Forms Privacy Policy
                        </a>
                        .
                      </p>
                    </li>
                  </ul>
                </div>

                {/* How to control cookies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">How Can You Control Cookies?</h3>
                  <p>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings.
                  </p>
                  <p>
                    Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
                    <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      www.allaboutcookies.org
                    </a>
                    .
                  </p>

                  <h4 className="font-semibold mt-6">Browser-specific instructions:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Safari
                      </a>
                    </li>
                    <li>
                      <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>

                  <p className="mt-4">
                    Please note that if you choose to block cookies, you may not be able to use the full functionality of our website.
                  </p>
                </div>

                {/* Do Not Track */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Do Not Track Signals</h3>
                  <p>
                    Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your online activity tracked. Because there is no uniform standard for DNT signals, our website does not currently respond to DNT browser signals. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Cookie Policy.
                  </p>
                </div>

                {/* Updates */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Updates to This Policy</h3>
                  <p>
                    We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                  <p>
                    The date at the top of this Cookie Policy indicates when it was last updated.
                  </p>
                </div>

                {/* UK GDPR Compliance */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">UK GDPR and PECR Compliance</h3>
                  <p>
                    We comply with the UK General Data Protection Regulation (UK GDPR) and the Privacy and Electronic Communications Regulations (PECR) regarding the use of cookies.
                  </p>
                  <p>
                    Under PECR, we are required to obtain your consent before placing any cookies on your device that are not strictly necessary for the operation of our website. As noted above, we currently only use essential cookies that do not require consent.
                  </p>
                  <p>
                    If we introduce non-essential cookies in the future (such as analytics or marketing cookies), we will implement a cookie consent mechanism to obtain your explicit consent before setting those cookies.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Your Rights</h3>
                  <p>
                    Under UK data protection law, you have rights in relation to your personal data, including the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate personal data</li>
                    <li>Request erasure of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p>
                    For more information about your rights, please see our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Contact Us</h3>
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <address className="not-italic mt-4">
                    <p className="font-semibold">INTRAO TECH LTD</p>
                    <p>124 City Road</p>
                    <p>London, England</p>
                    <p>EC1V 2NX</p>
                    <p>United Kingdom</p>
                    <p className="mt-2">Company Number: 16900600</p>
                    <p>Registered in England</p>
                    <p className="mt-2">
                      Email:{" "}
                      <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                        info@intrao.tech
                      </a>
                    </p>
                  </address>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CookiesPolicy;
