import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <>
      <SEOHead
        title="Terms of Use | Intrao Tech"
        description="Terms and conditions for using Intrao Tech's services and website."
        canonical="/terms-of-use"
      />

      <Header />

      <main>
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
                  Terms of Use
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
                    Terms and Conditions
                  </h2>
                  <p className="text-muted-foreground">Last updated January 15, 2026</p>
                </div>

                {/* Agreement Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">Agreement to Our Legal Terms</h3>
                  <p>
                    We are INTRAO TECH LTD ("Company," "we," "us," "our"), a private limited company registered in England under company number 16900600, with our registered office at 124 City Road, London, England, EC1V 2NX.
                  </p>
                  <p>
                    We operate the website{" "}
                    <a href="https://intrao.tech" className="text-primary hover:underline">
                      https://intrao.tech
                    </a>{" "}
                    (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                  </p>
                  <p>
                    Intrao Tech is a founder-led development and design studio specialising in MVP development, web and mobile application design and development, website creation, branding, UX audits, product discovery, and team extension services for startups and established businesses.
                  </p>
                  <p>
                    You can contact us by email at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>{" "}
                    or by post to our registered office at 124 City Road, London, England, EC1V 2NX.
                  </p>
                  <p>
                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and INTRAO TECH LTD, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                  </p>
                  <p>
                    Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates.
                  </p>
                  <p>
                    The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">1. Our Services</h3>
                  <p>
                    INTRAO TECH LTD provides the following services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>MVP Development:</strong> Custom and rapid minimum viable product development for startups</li>
                    <li><strong>Web Application Design & Development:</strong> Full-cycle web platform creation with UX/UI design and development</li>
                    <li><strong>Mobile Application Design & Development:</strong> iOS and Android application design and development</li>
                    <li><strong>Website Design & Development:</strong> Custom website creation, redesign, and optimisation</li>
                    <li><strong>Branding:</strong> Visual identity, brand strategy, and design systems</li>
                    <li><strong>UX Audit:</strong> Usability analysis and conversion optimisation</li>
                    <li><strong>Product Discovery:</strong> Feature mapping, user flows, and architecture planning</li>
                    <li><strong>Technical Workshop:</strong> Technology stack validation and scalability assessment</li>
                    <li><strong>Team Extension:</strong> Dedicated designers and developers for your projects</li>
                    <li><strong>No-Code Development:</strong> Rapid development using no-code and low-code platforms</li>
                    <li><strong>Blockchain Development:</strong> Smart contracts, DeFi solutions, and blockchain applications</li>
                  </ul>
                  <p>
                    The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">2. Intellectual Property Rights</h3>

                  <h4 className="font-semibold">Our intellectual property</h4>
                  <p>
                    We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                  </p>
                  <p>
                    Our Content and Marks are protected by copyright and trademark laws and treaties in the United Kingdom and around the world.
                  </p>

                  <h4 className="font-semibold mt-6">Your use of our Services</h4>
                  <p>
                    Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable licence to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>access the Services; and</li>
                    <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
                  </ul>
                  <p>solely for your personal, non-commercial use or internal business purpose.</p>

                  <h4 className="font-semibold mt-6">Client work and deliverables</h4>
                  <p>
                    For commissioned work under a separate service agreement:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Upon full payment, clients receive ownership of custom deliverables as specified in the project agreement</li>
                    <li>We retain ownership of our proprietary tools, frameworks, methodologies, and reusable components</li>
                    <li>We may retain the right to showcase completed work in our portfolio unless otherwise agreed in writing</li>
                  </ul>

                  <h4 className="font-semibold mt-6">Your submissions</h4>
                  <p>
                    By sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">3. User Representations</h3>
                  <p>
                    By using the Services, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You have the legal capacity and agree to comply with these Legal Terms</li>
                    <li>You are not a minor in the jurisdiction in which you reside</li>
                    <li>You will not access the Services through automated or non-human means, whether through a bot, script, or otherwise</li>
                    <li>You will not use the Services for any illegal or unauthorised purpose</li>
                    <li>Your use of the Services will not violate any applicable law or regulation</li>
                  </ul>
                  <p>
                    If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to refuse any and all current or future use of the Services.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">4. Purchases and Payment</h3>
                  <p>We accept the following forms of payment:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Bank Transfer (BACS for UK, SEPA for EU, SWIFT for international)</li>
                    <li>Credit/Debit Card</li>
                    <li>Wise (TransferWise)</li>
                  </ul>
                  <p>
                    All payments shall be in GBP, USD, or EUR as agreed in the project proposal. VAT will be added to the price of purchases as required by UK law. For UK-based clients, VAT at the prevailing rate will be applied.
                  </p>
                  <p>
                    <strong>Project-based work:</strong> Payment terms are specified in individual project proposals and typically include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>An upfront deposit (typically 30-50%) before work commences</li>
                    <li>Milestone payments as agreed in the project scope</li>
                    <li>Final payment upon project completion and delivery</li>
                  </ul>
                  <p>
                    <strong>Team extension/retainer:</strong> Monthly invoicing with payment due within 14 days of invoice date unless otherwise agreed.
                  </p>
                  <p>
                    We reserve the right to refuse any order or terminate services for non-payment. Late payments may incur interest at 8% above the Bank of England base rate in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">5. Cancellation and Refunds</h3>
                  <p>
                    <strong>Project cancellation:</strong> If you wish to cancel a project after work has commenced:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You will be invoiced for all work completed up to the cancellation date</li>
                    <li>Any unused portion of deposits may be refunded at our discretion, minus a reasonable administration fee</li>
                    <li>Cancellation must be provided in writing via email to info@intrao.tech</li>
                  </ul>
                  <p>
                    <strong>Our cancellation rights:</strong> We reserve the right to cancel or suspend services if:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is not received within agreed terms</li>
                    <li>Required information or feedback is not provided within reasonable timeframes</li>
                    <li>The project scope changes significantly without agreement on revised terms</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">6. Prohibited Activities</h3>
                  <p>
                    You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us</li>
                    <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive information</li>
                    <li>Circumvent, disable, or otherwise interfere with security-related features of the Services</li>
                    <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services</li>
                    <li>Use any information obtained from the Services to harass, abuse, or harm another person</li>
                    <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
                    <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's use of the Services</li>
                    <li>Engage in any automated use of the system, such as using scripts to send comments or messages</li>
                    <li>Attempt to impersonate another user or person</li>
                    <li>Interfere with, disrupt, or create an undue burden on the Services or the networks connected to the Services</li>
                    <li>Copy or adapt the Services' software, including but not limited to HTML, JavaScript, or other code</li>
                    <li>Use the Services as part of any effort to compete with us</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">7. Confidentiality</h3>
                  <p>
                    We understand that our clients share sensitive business information with us during projects. We commit to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Treating all client information as confidential unless explicitly marked as public</li>
                    <li>Not disclosing client information to third parties without prior written consent</li>
                    <li>Using client information solely for the purpose of delivering agreed services</li>
                    <li>Ensuring our team members are bound by appropriate confidentiality obligations</li>
                  </ul>
                  <p>
                    For projects requiring additional confidentiality protections, we are happy to enter into separate Non-Disclosure Agreements (NDAs).
                  </p>
                </div>

                {/* Section 8 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">8. Services Management</h3>
                  <p>
                    We reserve the right, but not the obligation, to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Monitor the Services for violations of these Legal Terms</li>
                    <li>Take appropriate legal action against anyone who violates the law or these Legal Terms</li>
                    <li>Refuse, restrict access to, or limit the availability of the Services to any person for any reason</li>
                    <li>Remove from the Services or otherwise disable files and content that are excessive in size or burdensome to our systems</li>
                    <li>Otherwise manage the Services in a manner designed to protect our rights and property</li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">9. Privacy Policy</h3>
                  <p>
                    We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United Kingdom and the European Economic Area.
                  </p>
                  <p>
                    We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. For more information, please review our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">10. Term and Termination</h3>
                  <p>
                    These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
                  </p>
                  <p>
                    If we terminate or suspend your access to the Services for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">11. Modifications and Interruptions</h3>
                  <p>
                    We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                  </p>
                  <p>
                    We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors.
                  </p>
                </div>

                {/* Section 12 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">12. Governing Law</h3>
                  <p>
                    These Legal Terms shall be governed by and construed in accordance with the laws of England and Wales. INTRAO TECH LTD and yourself irrevocably consent that the courts of England and Wales shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
                  </p>
                </div>

                {/* Section 13 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">13. Dispute Resolution</h3>
                  <p>
                    <strong>Informal negotiations:</strong> To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms, the parties agree to first attempt to negotiate any dispute informally for at least thirty (30) days before initiating any formal proceedings. Such informal negotiations commence upon written notice from one party to the other party.
                  </p>
                  <p>
                    <strong>Formal proceedings:</strong> If the parties are unable to resolve a dispute through informal negotiations, either party may commence formal proceedings in the courts of England and Wales.
                  </p>
                </div>

                {/* Section 14 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">14. Disclaimer</h3>
                  <p>
                    The website and its content are provided on an "as is" and "as available" basis for general information purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
                  </p>
                  <p>
                    For commissioned project work, the specific warranties and service levels will be set out in the relevant project agreement between us.
                  </p>
                  <p>
                    This disclaimer does not affect any statutory rights you may have as a consumer under applicable UK consumer protection legislation.
                  </p>
                </div>

                {/* Section 15 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">15. Limitations of Liability</h3>
                  <p>
                    Subject to the provisions below, our total aggregate liability to you in connection with these Legal Terms and your use of the Services, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall not exceed the greater of: (a) the total fees paid by you for the specific service giving rise to the claim in the twelve (12) months preceding the claim; or (b) £1,000.
                  </p>
                  <p>
                    We shall not be liable to you for any:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Loss of profits, revenue, business, or anticipated savings</li>
                    <li>Loss of data or data corruption</li>
                    <li>Loss of goodwill or reputation</li>
                    <li>Indirect, special, or consequential loss or damage</li>
                  </ul>
                  <p>
                    Nothing in these Legal Terms shall limit or exclude our liability for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Death or personal injury caused by our negligence</li>
                    <li>Fraud or fraudulent misrepresentation</li>
                    <li>Any other liability that cannot be limited or excluded under English law</li>
                  </ul>
                </div>

                {/* Section 16 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">16. Indemnification</h3>
                  <p>
                    You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable legal fees and expenses, made by any third party due to or arising out of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use of the Services</li>
                    <li>Breach of these Legal Terms</li>
                    <li>Any breach of your representations and warranties set forth in these Legal Terms</li>
                    <li>Your violation of the rights of a third party, including but not limited to intellectual property rights</li>
                    <li>Any harmful act toward any other user of the Services</li>
                  </ul>
                </div>

                {/* Section 17 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">17. Electronic Communications</h3>
                  <p>
                    Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing.
                  </p>
                </div>

                {/* Section 18 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">18. Miscellaneous</h3>
                  <p>
                    These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.
                  </p>
                  <p>
                    These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions.
                  </p>
                </div>

                {/* Section 19 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">19. Contact Us</h3>
                  <p>
                    In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                  </p>
                  <address className="not-italic">
                    <p className="font-semibold">INTRAO TECH LTD</p>
                    <p>124 City Road</p>
                    <p>London, England</p>
                    <p>EC1V 2NX</p>
                    <p>United Kingdom</p>
                    <p className="mt-2">Company Number: 16900600</p>
                    <p className="mt-2">Registered in England</p>
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

export default TermsOfUse;
