import { motion } from "framer-motion";
import { ArrowLink } from "@/components/ui/arrow-link";

const TeamSection = () => {
  // Team photos for scattered layout
  const teamPhotos = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop",
      alt: "Team working together",
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=500&fit=crop",
      alt: "Team collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop",
      alt: "Office work",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop",
      alt: "Team meeting",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=500&fit=crop",
      alt: "Team discussion",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=500&fit=crop",
      alt: "Team event",
    },
  ];

  return (
    <section data-header-theme="light" className="bg-background text-foreground py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="heading-1 mb-8">
            Meet the team driving your product's success
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded in 2019 by a team of experienced designers and developers, Intrao Tech was built with one goal—to become a trusted partner for startups and growing businesses looking to launch, scale, and innovate. Our founder-led team spans London, Canada, the U.S., Ukraine, Poland, and Estonia, bringing global expertise to every project.
          </p>
        </motion.div>

        {/* Photo Grid - Scattered Layout */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 md:col-span-4 lg:col-span-3 h-[280px] md:h-[350px] rounded-2xl overflow-hidden"
          >
            <img
              src={teamPhotos[0].src}
              alt={teamPhotos[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Empty space */}
          <div className="hidden lg:block lg:col-span-2" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-8 lg:col-span-7 h-[280px] md:h-[350px] rounded-2xl overflow-hidden"
          >
            <img
              src={teamPhotos[1].src}
              alt={teamPhotos[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-6 md:col-span-4 lg:col-span-3 h-[300px] md:h-[380px] rounded-2xl overflow-hidden"
          >
            <img
              src={teamPhotos[2].src}
              alt={teamPhotos[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-6 md:col-span-4 lg:col-span-3 h-[300px] md:h-[380px] rounded-2xl overflow-hidden"
          >
            <img
              src={teamPhotos[3].src}
              alt={teamPhotos[3].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Empty space */}
          <div className="hidden lg:block lg:col-span-2" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-6 md:col-span-4 lg:col-span-4 h-[300px] md:h-[380px] rounded-2xl overflow-hidden"
          >
            <img
              src={teamPhotos[4].src}
              alt={teamPhotos[4].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Row 3 - Two photos + Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-6 md:col-span-4 lg:col-span-4 h-[350px] md:h-[450px] rounded-2xl overflow-hidden"
          >
            <img
              src={teamPhotos[5].src}
              alt={teamPhotos[5].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="col-span-6 md:col-span-4 lg:col-span-5 h-[350px] md:h-[450px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
              alt="Team gathering"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="col-span-12 md:col-span-4 lg:col-span-3 h-[280px] md:h-[450px] bg-light rounded-2xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                6+ years of expertise
              </h3>
            </div>
            <ArrowLink to="/about" variant="dark" className="mt-auto">
              Learn More
            </ArrowLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;