import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: "video",
      author: "Craig Tortolani",
      role: "CPO at Dekryption Labs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    },
    {
      type: "quote",
      quote:
        "Not only is the team extremely communicative, their work is exceptional. I have never worked with a team so talented while also being competitively priced and communicative.",
      author: "Alex Friedman",
      role: "CEO at Open Path",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      type: "video",
      author: "KlickEx Team",
      role: "",
      avatar: "",
      isCompany: true,
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section data-header-theme="light" className="bg-background text-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="label text-muted-foreground mb-4">
              What our clients say
            </p>
            <h2 className="heading-1">
              5.0 is our average
              <br />
              on clutch & designrush
            </h2>
          </motion.div>

          {/* Rating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {/* Clutch Badge */}
            <div className="bg-muted/50 rounded-2xl p-6 flex flex-col items-center min-w-[120px]">
              <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center mb-3">
                <span className="text-dark-foreground font-bold text-lg">C</span>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-semibold">5.0</span>
            </div>

            {/* DesignRush Badge */}
            <div className="bg-muted/50 rounded-2xl p-6 flex flex-col items-center min-w-[120px]">
              <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center mb-3">
                <span className="text-dark-foreground font-bold text-lg">D</span>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.9</span>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-muted/50 rounded-2xl overflow-hidden ${
                testimonial.type === "video" ? "" : "p-8"
              }`}
            >
              {testimonial.type === "video" ? (
                <div className="flex flex-col h-full">
                  {/* Author Header */}
                  <div className="flex items-center gap-3 p-6">
                    {testimonial.isCompany ? (
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">K</span>
                      </div>
                    ) : (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      {testimonial.role && (
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Video Thumbnail */}
                  <div className="relative flex-1 min-h-[250px] group cursor-pointer">
                    <img
                      src={testimonial.videoThumbnail}
                      alt="Video testimonial"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-dark/80 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-dark-foreground fill-dark-foreground ml-1" />
                      </div>
                    </div>
                    {/* Play Button Always Visible */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-dark/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-4 h-4 text-dark-foreground fill-dark-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full min-h-[350px]">
                  {/* Author Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <p className="text-foreground text-lg leading-relaxed flex-1">
                    {testimonial.quote}
                  </p>
                  
                  {/* Quote Mark */}
                  <div className="mt-8">
                    <span className="text-6xl text-muted-foreground/30 font-serif leading-none">"</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;