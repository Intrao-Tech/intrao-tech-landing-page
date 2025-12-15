import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Not only is the team extremely communicative, their work is exceptional. I have never worked with a team so talented while also being competitively priced and communicative.",
      author: "Sarah Chen",
      role: "CEO, TechStart",
      rating: 5,
    },
    {
      quote:
        "The quality of the designs is fantastic. Intrao Tech works at speed and is extremely punctual with timelines. They deliver top-notch outcomes with exceptional designs.",
      author: "Michael Brooks",
      role: "Founder, DataSync",
      rating: 5,
    },
    {
      quote:
        "Intrao Tech's ability to translate concepts and rough design mock-ups into high-fidelity assets was very impressive. They maintained simple elegance in the design aesthetic very well.",
      author: "Emma Watson",
      role: "Product Lead, PayFlow",
      rating: 5,
    },
  ];

  return (
    <section className="bg-background text-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            5.0 is our average rating
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="border border-border p-8 h-full flex flex-col transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
