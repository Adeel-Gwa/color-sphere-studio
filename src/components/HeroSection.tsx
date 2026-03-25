import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroStore from "@/assets/hero-store.jpg";
import heroPaints from "@/assets/hero-paints.jpg";
import heroFinishes from "@/assets/hero-finishes.jpg";

const slides = [heroStore, heroPaints, heroFinishes];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt="Paint store showcase"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating blobs */}
      <div className="floating-blob w-72 h-72 bg-primary/20 top-20 right-20 animate-blob" />
      <div className="floating-blob w-96 h-96 bg-pastel-pink top-40 -right-20 animate-blob" style={{ animationDelay: "2s" }} />
      <div className="floating-blob w-64 h-64 bg-pastel-blue bottom-20 left-10 animate-blob" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="container mx-auto relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Premium Paint Solutions
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Color Your World with{" "}
            <span className="text-gradient">Premium Quality</span>{" "}
            Paints
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Official Distributor • 100% Original Products • Trusted Quality
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#products">Explore Products</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Contact Now</a>
            </Button>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-10 bg-primary" : "w-4 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
