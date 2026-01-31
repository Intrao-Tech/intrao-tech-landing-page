import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiesPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookies Policy | Intrao Tech</title>
        <meta
          name="description"
          content="Cookie policy for Intrao Tech - how we use cookies and how you can control them."
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
                  <p className="text-muted-foreground">Last updated December 21, 2024</p>
                </div>

                {/* Introduction */}
                <div className="space-y-6">
                  <p>
                    This Cookie Policy explains what cookies are and how Intrao Tech uses them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use (i.e. the information we collect using cookies) and how that information is used and how to control the cookie preferences. For further information on how we use, store and keep your personal data secure, see our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p>
                    You can at any time change or withdraw your consent from the Cookie Declaration on our website.
                  </p>
                  <p>
                    Learn more about who we are, how you can contact us and how we process personal data in our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p>
                    Your consent applies to the following domains: intrao.tech
                  </p>
                </div>

                {/* What are cookies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">What are cookies?</h3>
                  <p>
                    Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
                  </p>
                </div>

                {/* How do we use cookies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">How do we use cookies?</h3>
                  <p>
                    As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
                  </p>
                  <p>
                    The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
                  </p>
                </div>

                {/* What types of cookies */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase">What types of cookies do we use?</h3>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Essential</h4>
                    <p>
                      Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information. For example, these cookies allow you to log-in to your account and add products to your basket and checkout securely.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Statistics</h4>
                    <p>
                      These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit etc. These data help us understand and analyze how well the website performs and where it needs improvement.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Functional</h4>
                    <p>
                      These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing contents on the website on social media platforms.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Preferences</h4>
                    <p>
                      These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website.
                    </p>
                  </div>
                </div>

                {/* How to control */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">How can I control the cookie preferences?</h3>
                  <p>
                    Should you decide to change your preferences later through your browsing session, you can click on the "Privacy & Cookie Policy" tab at the bottom of your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely.
                  </p>
                  <p>
                    In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more out more on how to manage and delete cookies, visit{" "}
                    <a href="https://wikipedia.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      wikipedia.org
                    </a>
                    ,{" "}
                    <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      www.allaboutcookies.org
                    </a>
                    .
                  </p>
                </div>

                {/* Privacy Policy for Intrao Tech */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Privacy Policy for Intrao Tech</h3>
                  <p>
                    At Intrao Tech, accessible from{" "}
                    <a href="https://intrao.tech" className="text-primary hover:underline">
                      https://intrao.tech
                    </a>
                    , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types of information that is collected and recorded by Intrao Tech and how we use it.
                  </p>
                  <p>
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to{" "}
                    <a href="/contacts" className="text-primary hover:underline">
                      contact us
                    </a>
                    .
                  </p>
                </div>

                {/* GDPR */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">General Data Protection Regulation (GDPR)</h3>
                  <p>We are a Data Controller of your information.</p>
                  <p>
                    Intrao Tech's legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Intrao Tech needs to perform a contract with you.</li>
                    <li>You have given Intrao Tech permission to do so.</li>
                    <li>Processing your personal information is in Intrao Tech's legitimate interests.</li>
                    <li>Intrao Tech needs to comply with the law.</li>
                  </ul>
                  <p>
                    Intrao Tech will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                  </p>
                  <p>
                    If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please{" "}
                    <a href="/contacts" className="text-primary hover:underline">
                      contact us
                    </a>
                    .
                  </p>
                  <p>In certain circumstances, you have the following data protection rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to access, update or to delete the information we have on you.</li>
                    <li>The right of rectification.</li>
                    <li>The right to object.</li>
                    <li>The right of restriction.</li>
                    <li>The right to data portability.</li>
                    <li>The right to withdraw consent.</li>
                  </ul>
                </div>

                {/* Log Files */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Log Files</h3>
                  <p>
                    Intrao Tech follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages and, possibly, the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                  </p>
                </div>

                {/* Cookies and Web Beacons */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Cookies and Web Beacons</h3>
                  <p>
                    Like any other website, Intrao Tech uses "cookies". Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. Cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing web page content based on visitors' browser type and/or other information.
                  </p>
                </div>

                {/* Privacy Policies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Privacy Policies</h3>
                  <p>
                    You may consult this list to find the Privacy Policy for each of the advertising partners of Intrao Tech.
                  </p>
                  <p>
                    Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Intrao Tech, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                  </p>
                  <p>
                    Note that Intrao Tech has no access to, or control over, cookies used by third-party advertisers.
                  </p>
                </div>

                {/* Third Party Privacy Policies */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Third Party Privacy Policies</h3>
                  <p>
                    Intrao Tech's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                  </p>
                  <p>
                    You can choose to disable cookies through your individual browser options. For detailed information about cookie management with specific web browsers, please visit your browser's respective website.
                  </p>
                </div>

                {/* Children's Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Children's Information</h3>
                  <p>
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                  </p>
                  <p>
                    Intrao Tech does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to{" "}
                    <a href="/contacts" className="text-primary hover:underline">
                      contact us
                    </a>
                    {" "}immediately and we will do our best efforts to promptly remove such information from our records.
                  </p>
                </div>

                {/* Online Privacy Policy Only */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Online Privacy Policy Only</h3>
                  <p>
                    Our Privacy Policy applies only to the online activities of Intrao Tech and is valid for visitors to our website with regard to the information that they shared and/or collected via Intrao Tech. This policy is not applicable to any information collected offline or via channels other than this website.
                  </p>
                </div>

                {/* Consent */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Consent</h3>
                  <p>
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">Contact Us</h3>
                  <p>
                    If you have any questions about this Cookies Policy, please{" "}
                    <a href="/contacts" className="text-primary hover:underline">
                      contact us
                    </a>
                    {" "}or email us at{" "}
                    <a href="mailto:info@intrao.tech" className="text-primary hover:underline">
                      info@intrao.tech
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

export default CookiesPolicy;
