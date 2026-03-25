import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner, Gujranwala",
    text: "ColorCraft ne meri poori renovations ka kaam aasan kar diya. Paint quality behtareen hai aur color matching bilkul perfect thi. Highly recommended!",
    stars: 5,
  },
  {
    name: "Fatima Bibi",
    role: "Interior Designer, Lahore",
    text: "Main apne clients ke liye sirf ColorCraft se paint leti hoon. Unke premium paints ki finish aur durability market mein sabse best hai.",
    stars: 5,
  },
  {
    name: "Muhammad Usman",
    role: "Contractor, Rahwali",
    text: "Bulk orders ke liye best prices aur free delivery — isse behtar kya ho sakta hai? Hamesha original products milte hain. 10 saal se yahan se hi paint le raha hoon.",
    stars: 5,
  },
  {
    name: "Sana Malik",
    role: "Homeowner, Wazirabad",
    text: "Staff bohat cooperative hai. Meray ghar ke liye perfect color suggest kiya aur result kamaal ka tha. Thank you ColorCraft!",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/30 relative overflow-hidden">
    <div className="floating-blob w-72 h-72 bg-pastel-pink -top-20 left-10 animate-blob" />
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">
          Happy Customers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          What Our Customers Say
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-card p-6 hover-lift flex flex-col"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, s) => (
                <Star
                  key={s}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              "{t.text}"
            </p>
            <div>
              <p className="font-bold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
