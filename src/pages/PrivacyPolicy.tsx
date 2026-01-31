import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Intrao Tech</title>
        <meta
          name="description"
          content="Privacy policy for Intrao Tech - how we collect, store, use, and share your information."
        />
      </Helmet>

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
                  <p className="text-muted-foreground">Last updated December 21, 2024</p>
                </div>

                {/* Introduction */}
                <div className="space-y-6">
                  <p>
                    This privacy notice for Intrao Tech ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Visit our website at{" "}
                      <a href="https://intrao.tech" className="text-primary hover:underline">
                        https://intrao.tech
                      </a>
                      , or any website of ours that links to this privacy notice
                    </li>
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
                  <p>
                    This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                  </p>
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
                      <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
                    </li>
                    <li>
                      <strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties.
                    </li>
                    <li>
                      <strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                    </li>
                    <li>
                      <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                    </li>
                    <li>
                      <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
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
                  <p>
                    <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>names</li>
                    <li>phone numbers</li>
                    <li>email addresses</li>
                    <li>job titles</li>
                    <li>usernames</li>
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
                    We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                  </p>
                  <p>
                    Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice:{" "}
                    <a href="/cookies-policy" className="text-primary hover:underline">
                      Cookies Policy
                    </a>
                    .
                  </p>
                  <p>The information we collect includes:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                    </li>
                    <li>
                      <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                    </li>
                    <li>
                      <strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                    </li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">2. How Do We Process Your Information?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                  </p>
                  <p>
                    We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.
                    </li>
                    <li>
                      <strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                    </li>
                    <li>
                      <strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                    </li>
                    <li>
                      <strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
                    </li>
                    <li>
                      <strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.
                    </li>
                    <li>
                      <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
                    </li>
                    <li>
                      <strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.
                    </li>
                    <li>
                      <strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more. For more information see our{" "}
                      <a href="/cookies-policy" className="text-primary hover:underline">
                        Cookie Notice
                      </a>
                      .
                    </li>
                    <li>
                      <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
                    </li>
                    <li>
                      <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                    </li>
                    <li>
                      <strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">3. What Legal Bases Do We Rely On to Process Your Information?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
                  </p>

                  <h4 className="font-semibold mt-4">If you are located in the EU or UK, this section applies to you.</h4>
                  <p>
                    The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.
                    </li>
                    <li>
                      <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                    </li>
                    <li>
                      <strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Send users information about special offers and discounts on our products and services</li>
                        <li>Develop and display personalized and relevant advertising content for our users</li>
                        <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
                        <li>Support our marketing activities</li>
                        <li>Understand how our users use our products and services so we can improve user experience</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                    </li>
                    <li>
                      <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                    </li>
                  </ul>

                  <h4 className="font-semibold mt-6">If you are located in Canada, this section applies to you.</h4>
                  <p>
                    We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
                  </p>
                  <p>
                    In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                    <li>For investigations and fraud detection and prevention</li>
                    <li>For business transactions provided certain conditions are met</li>
                    <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                    <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                    <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                    <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                    <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                    <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                    <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                    <li>If the information is publicly available and is specified by the regulations</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">4. When and With Whom Do We Share Your Personal Information?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.
                  </p>
                  <p>
                    <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. The categories of third parties we may share personal information with are as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Website Hosting Service Providers</li>
                    <li>Social Networks</li>
                    <li>Sales & Marketing Tools</li>
                    <li>Retargeting Platforms</li>
                    <li>Product Engineering & Design Tools</li>
                    <li>Performance Monitoring Tools</li>
                    <li>Finance & Accounting Tools</li>
                    <li>Data Storage Service Providers</li>
                    <li>Data Analytics Services</li>
                    <li>Communication & Collaboration Tools</li>
                    <li>Affiliate Marketing Programs</li>
                  </ul>
                  <p>We also may need to share your personal information in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </li>
                    <li>
                      <strong>When we use Google Analytics.</strong> We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Google Display Network Impressions Reporting, Google Analytics Demographics and Interests Reporting and Remarketing with Google Analytics. To opt out of being tracked by Google Analytics across the Services, visit{" "}
                      <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        https://tools.google.com/dlpage/gaoptout
                      </a>
                      . You can opt out of Google Analytics Advertising Features through Ads Settings and Ad Settings for mobile apps. Other opt out means include{" "}
                      <a href="http://optout.networkadvertising.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        http://optout.networkadvertising.org/
                      </a>
                      {" "}and{" "}
                      <a href="http://www.networkadvertising.org/mobile-choice" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        http://www.networkadvertising.org/mobile-choice
                      </a>
                      . For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.
                    </li>
                    <li>
                      <strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                    </li>
                    <li>
                      <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">5. Do We Use Cookies and Other Tracking Technologies?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We may use cookies and other tracking technologies to collect and store your information.
                  </p>
                  <p>
                    We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our{" "}
                    <a href="/cookies-policy" className="text-primary hover:underline">
                      Cookie Notice
                    </a>
                    .
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">6. How Long Do We Keep Your Information?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                  </p>
                  <p>
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.
                  </p>
                  <p>
                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">7. How Do We Keep Your Information Safe?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: We aim to protect your personal information through a system of organizational and technical security measures.
                  </p>
                  <p>
                    We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">8. What Are Your Privacy Rights?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
                  </p>
                  <p>
                    In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                  </p>
                  <p>
                    We will consider and act upon any request in accordance with applicable data protection laws.
                  </p>
                  <p>
                    If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
                  </p>
                  <p>
                    If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
                  </p>

                  <h4 className="font-semibold mt-4">Withdrawing your consent</h4>
                  <p>
                    If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                  </p>
                  <p>
                    However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                  </p>

                  <h4 className="font-semibold mt-4">Opting out of marketing and promotional communications</h4>
                  <p>
                    You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                  </p>

                  <h4 className="font-semibold mt-4">Cookies and similar technologies</h4>
                  <p>
                    Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our{" "}
                    <a href="/cookies-policy" className="text-primary hover:underline">
                      Cookie Notice
                    </a>
                    .
                  </p>
                  <p>
                    If you have questions or comments about your privacy rights, you may email us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    .
                  </p>
                </div>

                {/* Section 9 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">9. Controls for Do-Not-Track Features</h3>
                  <p>
                    Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">10. Do United States Residents Have Specific Privacy Rights?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: If you are a resident of Virginia, Utah, Connecticut, Colorado or California, you are granted specific rights regarding access to your personal information.
                  </p>

                  <h4 className="font-semibold mt-4">What categories of personal information do we collect?</h4>
                  <p>We have collected the following categories of personal information in the past twelve (12) months:</p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm mt-4">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 pr-4 font-semibold">Category</th>
                          <th className="text-left py-3 pr-4 font-semibold">Examples</th>
                          <th className="text-left py-3 font-semibold">Collected</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">A. Identifiers</td>
                          <td className="py-3 pr-4">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                          <td className="py-3">YES</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">B. Personal information (California Customer Records)</td>
                          <td className="py-3 pr-4">Name, contact information, education, employment, employment history, and financial information</td>
                          <td className="py-3">YES</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">C. Protected classification characteristics</td>
                          <td className="py-3 pr-4">Gender and date of birth</td>
                          <td className="py-3">YES</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">D. Commercial information</td>
                          <td className="py-3 pr-4">Transaction information, purchase history, financial details, and payment information</td>
                          <td className="py-3">YES</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">E. Biometric information</td>
                          <td className="py-3 pr-4">Fingerprints and voiceprints</td>
                          <td className="py-3">NO</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">F. Internet or similar network activity</td>
                          <td className="py-3 pr-4">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                          <td className="py-3">YES</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">G. Geolocation data</td>
                          <td className="py-3 pr-4">Device location</td>
                          <td className="py-3">NO</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                          <td className="py-3 pr-4">Images and audio, video or call recordings created in connection with our business activities</td>
                          <td className="py-3">NO</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">I. Professional or employment-related information</td>
                          <td className="py-3 pr-4">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                          <td className="py-3">YES</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">J. Education Information</td>
                          <td className="py-3 pr-4">Student records and directory information</td>
                          <td className="py-3">NO</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">K. Inferences drawn from collected personal information</td>
                          <td className="py-3 pr-4">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                          <td className="py-3">NO</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4">L. Sensitive personal Information</td>
                          <td className="py-3 pr-4"></td>
                          <td className="py-3">NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4">We will use and retain the collected personal information as needed to provide the Services or for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Category A – As long as the user has an account with us</li>
                    <li>Category B – As long as the user has an account with us</li>
                    <li>Category C – As long as the user has an account with us</li>
                    <li>Category D – As long as the user has an account with us</li>
                    <li>Category F – As long as the user has an account with us</li>
                    <li>Category I – As long as the user has an account with us</li>
                  </ul>

                  <p className="mt-4">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Receiving help through our customer support channels;</li>
                    <li>Participation in customer surveys or contests; and</li>
                    <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                  </ul>

                  <h4 className="font-semibold mt-6">How do we use and share your personal information?</h4>
                  <p>Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</p>
                  <p>We collect and share your personal information through:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Targeting cookies/Marketing cookies</li>
                    <li>Social media cookies</li>
                    <li>Beacons/Pixels/Tags</li>
                  </ul>

                  <h4 className="font-semibold mt-6">Will your information be shared with anyone else?</h4>
                  <p>
                    We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                  </p>
                  <p>
                    We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                  </p>
                  <p>
                    We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
                  </p>
                  <p>
                    The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                  </p>

                  <h4 className="font-semibold mt-6">California Residents</h4>
                  <p>
                    California Civil Code Section 1798.83, also known as the "Shine The Light" law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                  </p>
                  <p>
                    If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                  </p>

                  <h4 className="font-semibold mt-6">CCPA Privacy Notice</h4>
                  <p>This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.</p>
                  <p>The California Code of Regulations defines a "residents" as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li>
                    <li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
                  </ul>
                  <p>All other individuals are defined as "non-residents."</p>
                  <p>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>

                  <h4 className="font-semibold mt-4">Your rights with respect to your personal data</h4>
                  <p><strong>Right to request deletion of the data — Request to delete</strong></p>
                  <p>
                    You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
                  </p>

                  <p className="mt-4"><strong>Right to be informed — Request to know</strong></p>
                  <p>Depending on the circumstances, you have a right to know:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>whether we collect and use your personal information;</li>
                    <li>the categories of personal information that we collect;</li>
                    <li>the purposes for which the collected personal information is used;</li>
                    <li>whether we sell or share personal information to third parties;</li>
                    <li>the categories of personal information that we sold, shared, or disclosed for a business purpose;</li>
                    <li>the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;</li>
                    <li>the business or commercial purpose for collecting, selling, or sharing personal information; and</li>
                    <li>the specific pieces of personal information we collected about you.</li>
                  </ul>
                  <p>
                    In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
                  </p>

                  <p className="mt-4"><strong>Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</strong></p>
                  <p>We will not discriminate against you if you exercise your privacy rights.</p>

                  <p className="mt-4"><strong>Right to Limit Use and Disclosure of Sensitive Personal Information</strong></p>
                  <p>We do not process consumer's sensitive personal information.</p>

                  <h4 className="font-semibold mt-6">Verification process</h4>
                  <p>
                    Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
                  </p>
                  <p>
                    We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
                  </p>

                  <h4 className="font-semibold mt-6">Other privacy rights</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may object to the processing of your personal information.</li>
                    <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
                    <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
                    <li>You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
                  </ul>
                  <p>
                    To exercise these rights, you can contact us by submitting a data subject access request, by visiting{" "}
                    <a href="/contacts" className="text-primary hover:underline">
                      our contact page
                    </a>
                    , or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
                  </p>

                  <h4 className="font-semibold mt-6">Colorado Residents</h4>
                  <p>
                    This section applies only to Colorado residents. Under the Colorado Privacy Act (CPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to be informed whether or not we are processing your personal data</li>
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccuracies in your personal data</li>
                    <li>Right to request deletion of your personal data</li>
                    <li>Right to obtain a copy of the personal data you previously shared with us</li>
                    <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                  </ul>
                  <p>
                    To submit a request to exercise these rights described above, please email{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    {" "}or submit a data subject access request.
                  </p>
                  <p>
                    If we decline to take action regarding your request and you wish to appeal our decision, please email us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    . Within forty-five (45) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.
                  </p>

                  <h4 className="font-semibold mt-6">Connecticut Residents</h4>
                  <p>
                    This section applies only to Connecticut residents. Under the Connecticut Data Privacy Act (CTDPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to be informed whether or not we are processing your personal data</li>
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccuracies in your personal data</li>
                    <li>Right to request deletion of your personal data</li>
                    <li>Right to obtain a copy of the personal data you previously shared with us</li>
                    <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                  </ul>
                  <p>
                    To submit a request to exercise these rights described above, please email{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    {" "}or submit a data subject access request.
                  </p>
                  <p>
                    If we decline to take action regarding your request and you wish to appeal our decision, please email us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    . Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.
                  </p>

                  <h4 className="font-semibold mt-6">Utah Residents</h4>
                  <p>
                    This section applies only to Utah residents. Under the Utah Consumer Privacy Act (UCPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to be informed whether or not we are processing your personal data</li>
                    <li>Right to access your personal data</li>
                    <li>Right to request deletion of your personal data</li>
                    <li>Right to obtain a copy of the personal data you previously shared with us</li>
                    <li>Right to opt out of the processing of your personal data if it is used for targeted advertising or the sale of personal data</li>
                  </ul>
                  <p>
                    To submit a request to exercise these rights described above, please email{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    {" "}or submit a data subject access request.
                  </p>

                  <h4 className="font-semibold mt-6">Virginia Residents</h4>
                  <p>Under the Virginia Consumer Data Protection Act (VCDPA):</p>
                  <p>
                    "Consumer" means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.
                  </p>
                  <p>
                    "Personal data" means any information that is linked or reasonably linkable to an identified or identifiable natural person. "Personal data" does not include de-identified data or publicly available information.
                  </p>
                  <p>
                    "Sale of personal data" means the exchange of personal data for monetary consideration.
                  </p>
                  <p>
                    If this definition of "consumer" applies to you, we must adhere to certain rights and obligations regarding your personal data.
                  </p>

                  <p className="mt-4"><strong>Your rights with respect to your personal data</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to be informed whether or not we are processing your personal data</li>
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccuracies in your personal data</li>
                    <li>Right to request deletion of your personal data</li>
                    <li>Right to obtain a copy of the personal data you previously shared with us</li>
                    <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                  </ul>

                  <p className="mt-4"><strong>Exercise your rights provided under the Virginia VCDPA</strong></p>
                  <p>
                    You may contact us by email at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    {" "}or submit a data subject access request.
                  </p>
                  <p>
                    If you are using an authorized agent to exercise your rights, we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
                  </p>

                  <p className="mt-4"><strong>Verification process</strong></p>
                  <p>
                    We may request that you provide additional information reasonably necessary to verify you and your consumer's request. If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request.
                  </p>
                  <p>
                    Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.
                  </p>

                  <p className="mt-4"><strong>Right to appeal</strong></p>
                  <p>
                    If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    . Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may contact the Attorney General to submit a complaint.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">11. Do Other Regions Have Specific Privacy Rights?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: You may have additional rights based on the country you reside in.
                  </p>

                  <h4 className="font-semibold mt-4">Australia and New Zealand</h4>
                  <p>
                    We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).
                  </p>
                  <p>
                    This privacy notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.
                  </p>
                  <p>If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>offer you the products or services that you want</li>
                    <li>respond to or help with your requests</li>
                  </ul>
                  <p>
                    At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
                  </p>
                  <p>
                    If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.
                  </p>

                  <h4 className="font-semibold mt-6">Republic of South Africa</h4>
                  <p>
                    At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
                  </p>
                  <p>
                    If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:
                  </p>
                  <address className="not-italic mt-2">
                    <p className="font-semibold">The Information Regulator (South Africa)</p>
                    <p>General enquiries: enquiries@inforegulator.org.za</p>
                    <p>Complaints (complete POPIA/PAIA form 5): PAIAComplaints@inforegulator.org.za & POPIAComplaints@inforegulator.org.za</p>
                  </address>
                </div>

                {/* Section 12 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">12. Do We Make Updates to This Notice?</h3>
                  <p className="italic text-muted-foreground">
                    In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                  </p>
                  <p>
                    We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                  </p>
                </div>

                {/* Section 13 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">13. How Can You Contact Us About This Notice?</h3>
                  <p>
                    If you have questions or comments about this notice, you may email us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
                    </a>
                    {" "}or contact us by post at:
                  </p>
                  <address className="not-italic mt-4">
                    <p className="font-semibold">Intrao Tech</p>
                    <p>123 Tech Avenue, Suite 500</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                  </address>
                </div>

                {/* Section 14 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">14. How Can You Review, Update, or Delete the Data We Collect From You?</h3>
                  <p>
                    Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a{" "}
                    <a href="/contacts" className="text-primary hover:underline">
                      data subject access request
                    </a>
                    .
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
