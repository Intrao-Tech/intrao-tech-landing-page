import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  // Team photos with different sizes for asymmetric grid
  const teamPhotos = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop",
      alt: "Team working together",
      size: "tall", // spans 2 rows
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop",
      alt: "Team collaboration",
      size: "wide", // spans 2 columns
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
      alt: "Office work",
      size: "normal",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      alt: "Team meeting",
      size: "normal",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=500&fit=crop",
      alt: "Team discussion",
      size: "normal",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=500&fit=crop",
      alt: "Team event",
      size: "normal",
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
            Established in 2019, Intrao Tech was built with one goal—to become the leading digital product design agency for startups looking to launch, scale, and innovate. Our team of strategists, designers, developers, and product experts spans Canada, the U.S., Ukraine, Poland, Estonia, and Switzerland, bringing global expertise to every project.
          </p>
        </motion.div>

        {/* Photo Grid - Asymmetric Bento Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="row-span-2 rounded-lg overflow-hidden"
          >
            <img
              src={teamPhotos[0].src}
              alt={teamPhotos[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="row-span-2 rounded-lg overflow-hidden"
          >
            <img
              src={teamPhotos[1].src}
              alt={teamPhotos[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 row-span-2 rounded-lg overflow-hidden hidden md:block"
          >
            <img
              src={teamPhotos[2].src}
              alt={teamPhotos[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={teamPhotos[3].src}
              alt={teamPhotos[3].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={teamPhotos[4].src}
              alt={teamPhotos[4].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={teamPhotos[5].src}
              alt={teamPhotos[5].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-muted/50 rounded-lg p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="heading-3">
                50+ team members
              </h3>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-foreground font-semibold uppercase text-sm tracking-wider group mt-auto"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;