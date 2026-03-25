import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Ahmed Raza", role: "Homeowner, Gujranwala", text: "ColorCraft ne meri poori renovations ka kaam aasan kar diya. Paint quality behtareen hai aur color matching bilkul perfect thi. Highly recommended!", stars: 5 },
  { name: "Fatima Bibi", role: "Interior Designer, Lahore", text: "Main apne clients ke liye sirf ColorCraft se paint leti hoon. Unke premium paints ki finish aur durability market mein sabse best hai.", stars: 5 },
  { name: "Muhammad Usman", role: "Contractor, Rahwali", text: "Bulk orders ke liye best prices aur free delivery — isse behtar kya ho sakta hai? Hamesha original products milte hain. 10 saal se yahan se hi paint le raha hoon.", stars: 5 },
  { name: "Sana Malik", role: "Homeowner, Wazirabad", text: "Staff bohat cooperative hai. Meray ghar ke liye perfect color suggest kiya aur result kamaal ka tha. Thank you ColorCraft!", stars: 5 },
  { name: "Bilal Hussain", role: "Builder, Gujrat", text: "Mera poora construction project ColorCraft ke paints se complete hua. Quality aur price dono mein best deal mili. Ab kisi aur se paint nahi leta.", stars: 5 },
  { name: "Ayesha Noor", role: "Homeowner, Sialkot", text: "Ghar ki interior painting ke liye yahan se Nippon paints liye. Colors itne vibrant hain ke sab log poochte hain kahan se liye!", stars: 5 },
  { name: "Tariq Mehmood", role: "Painter, Cantt Area", text: "Professional painter hoon aur 15 saal se ColorCraft se hi saman leta hoon. Original products, sahi rates — yahi baat hai.", stars: 5 },
  { name: "Hina Shahzadi", role: "Architect, Islamabad", text: "Mere residential projects ke liye ColorCraft se better koi option nahi. Premium brands ki full range available hai aur staff expert hai.", stars: 4 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 640 ? 2 : 1;
  const maxIndex = testimonials.length - visibleCount;

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="floating-blob w-72 h-72 bg-pastel-pink -top-20 left-10 animate-blob" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Happy Customers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">What Our Customers Say</h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="glass-card p-6 hover-lift flex flex-col h-full">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">"{t.text}"</p>
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-border"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
