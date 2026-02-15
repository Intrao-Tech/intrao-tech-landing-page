import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Intrao Tech"
        description="Privacy policy for Intrao Tech - how we collect, store, use, and share your information."
        canonical="/privacy-policy"
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
                  Privacy Policy
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
                    Privacy Policy
                  </h2>
                  <p className="text-muted-foreground">Last updated January 15, 2026</p>
                </div>

                {/* Introduction */}
                <div className="space-y-6">
                  <p>
                    This privacy notice for INTRAO TECH LTD (company number 16900600) ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Visit our website at{" "}
                      <a href="https://intrao.tech" className="text-primary hover:underline">
                        https://intrao.tech
                      </a>
                      , or any website of ours that links to this privacy notice
                    </li>
                    <li>Engage with us for development, design, or consulting services</li>
                    <li>Submit an enquiry through our contact form</li>
                    <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                  </ul>
                  <p>
                    <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    .
                  </p>
                </div>

                {/* Summary of Key Points */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">Summary of Key Points</h3>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
                    </li>
                    <li>
                      <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
                    </li>
                    <li>
                      <strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.
                    </li>
                    <li>
                      <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
                    </li>
                    <li>
                      <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties as described in this policy.
                    </li>
                    <li>
                      <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information, including rights under the UK GDPR.
                    </li>
                  </ul>
                </div>

                {/* Section 1 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">1. What Information Do We Collect?</h3>

                  <h4 className="font-semibold">Personal information you disclose to us</h4>
                  <p className="italic text-muted-foreground">In Short: We collect personal information that you provide to us.</p>
                  <p>
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                  </p>

                  <p><strong>Information collected through our contact form:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Message content</li>
                    <li>Project budget range (optional)</li>
                  </ul>

                  <p><strong>Information collected during client engagements:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Business name and contact details</li>
                    <li>Billing and payment information</li>
                    <li>Project requirements and specifications</li>
                    <li>Communication records (emails, calls, messages)</li>
                    <li>Feedback and testimonials</li>
                  </ul>

                  <p>
                    <strong>Sensitive Information.</strong> We do not process sensitive information.
                  </p>
                  <p>
                    All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                  </p>

                  <h4 className="font-semibold mt-6">Information automatically collected</h4>
                  <p className="italic text-muted-foreground">
                    In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                  </p>
                  <p>
                    We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.
                  </p>
                  <p>The information we collect includes:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. This may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take).
                    </li>
                    <li>
                      <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. This device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                    </li>
                  </ul>
                  <p>
                    For more information about our use of cookies and similar technologies, please see our{" "}
                    <a href="/cookies-policy" className="text-primary hover:underline">
                      Cookies Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">2. How Do We Process Your Information?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
                  </p>
                  <p>
                    We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>To respond to enquiries and provide services.</strong> We process your information to respond to your contact form submissions and provide you with our development, design, and consulting services.
                    </li>
                    <li>
                      <strong>To deliver services to you.</strong> We may process your information to provide you with the requested service, including project management, communication, and delivery of work.
                    </li>
                    <li>
                      <strong>To send administrative information.</strong> We may process your information to send you details about our services, changes to our terms and policies, and other similar information.
                    </li>
                    <li>
                      <strong>To fulfil and manage your orders.</strong> We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.
                    </li>
                    <li>
                      <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
                    </li>
                    <li>
                      <strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                    </li>
                    <li>
                      <strong>To comply with legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">3. What Legal Bases Do We Rely On?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law.
                  </p>

                  <p>
                    The UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 require us to explain the valid legal bases we rely on in order to process your personal information. We may rely on the following legal bases:
                  </p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time by contacting us.
                    </li>
                    <li>
                      <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                    </li>
                    <li>
                      <strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information to:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Respond to enquiries and provide information about our services</li>
                        <li>Improve our website and services</li>
                        <li>Analyse how our Services are used</li>
                        <li>Support our marketing activities</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as tax and accounting requirements, or to respond to a court order or regulatory request.
                    </li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">4. When and With Whom Do We Share Your Information?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.
                  </p>

                  <p><strong>Third-party service providers we use:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Website Hosting:</strong> Vercel Inc. (hosting and deployment)</li>
                    <li><strong>Contact Form Processing:</strong> Web3Forms (form submission handling)</li>
                    <li><strong>Analytics:</strong> We may use analytics services to understand website usage</li>
                    <li><strong>Payment Processing:</strong> Bank transfer and payment service providers for invoicing</li>
                    <li><strong>Communication Tools:</strong> Email and messaging platforms for client communication</li>
                  </ul>

                  <p className="mt-4">We may also share your personal information in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </li>
                    <li>
                      <strong>Legal Requirements.</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                    </li>
                    <li>
                      <strong>Vital Interests and Legal Rights.</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation in which we are involved.
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">5. Do We Use Cookies?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We may use cookies and other tracking technologies to collect and store your information.
                  </p>
                  <p>
                    We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our{" "}
                    <a href="/cookies-policy" className="text-primary hover:underline">
                      Cookies Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">6. How Long Do We Keep Your Information?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.
                  </p>
                  <p>
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                  </p>
                  <p><strong>Our retention periods:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact form enquiries:</strong> 2 years from submission, or until you request deletion</li>
                    <li><strong>Client project data:</strong> 6 years after project completion (for accounting and legal purposes)</li>
                    <li><strong>Invoices and payment records:</strong> 6 years (as required by HMRC)</li>
                    <li><strong>Website analytics data:</strong> 26 months</li>
                    <li><strong>Communication records:</strong> Duration of client relationship plus 3 years</li>
                  </ul>
                  <p>
                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">7. How Do We Keep Your Information Safe?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We aim to protect your personal information through a system of organisational and technical security measures.
                  </p>
                  <p>
                    We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>HTTPS encryption on our website</li>
                    <li>Secure hosting infrastructure</li>
                    <li>Access controls limiting who can access personal data</li>
                    <li>Regular security reviews</li>
                  </ul>
                  <p>
                    However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">8. What Are Your Privacy Rights?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: Under UK data protection law, you have rights that allow you greater access to and control over your personal information.
                  </p>
                  <p>
                    Under the UK GDPR and the Data Protection Act 2018, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Right to Access.</strong> You have the right to request copies of your personal information.
                    </li>
                    <li>
                      <strong>Right to Rectification.</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
                    </li>
                    <li>
                      <strong>Right to Erasure.</strong> You have the right to request that we erase your personal information, under certain conditions.
                    </li>
                    <li>
                      <strong>Right to Restrict Processing.</strong> You have the right to request that we restrict the processing of your personal information, under certain conditions.
                    </li>
                    <li>
                      <strong>Right to Object to Processing.</strong> You have the right to object to our processing of your personal information, under certain conditions.
                    </li>
                    <li>
                      <strong>Right to Data Portability.</strong> You have the right to request that we transfer the data that we have collected to another organisation, or directly to you, under certain conditions.
                    </li>
                  </ul>
                  <p>
                    If you wish to exercise any of these rights, please contact us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    . We will respond to your request within one month.
                  </p>
                  <p>
                    If you believe we are unlawfully processing your personal information, you have the right to complain to the Information Commissioner's Office (ICO). You can contact the ICO at{" "}
                    <a href="https://ico.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      ico.org.uk
                    </a>
                    {" "}or by calling their helpline on 0303 123 1113.
                  </p>

                  <h4 className="font-semibold mt-4">Withdrawing your consent</h4>
                  <p>
                    If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent by contacting us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    .
                  </p>
                </div>

                {/* Section 9 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">9. Do We Make Updates to This Notice?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                  </p>
                  <p>
                    We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">10. How Can You Contact Us?</h3>
                  <p>
                    If you have questions or comments about this notice, you may email us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    {" "}or contact us by post at:
                  </p>
                  <address className="not-italic mt-4">
                    <p className="font-semibold">INTRAO TECH LTD</p>
                    <p>124 City Road</p>
                    <p>London, England</p>
                    <p>EC1V 2NX</p>
                    <p>United Kingdom</p>
                    <p className="mt-2">Company Number: 16900600</p>
                    <p>Registered in England</p>
                  </address>
                </div>

                {/* Section 11 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">11. How Can You Review, Update, or Delete Your Data?</h3>
                  <p>
                    Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please contact us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    .
                  </p>
                  <p>
                    We will respond to your request within one month and will verify your identity before processing your request.
                  </p>
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

export default PrivacyPolicy;
