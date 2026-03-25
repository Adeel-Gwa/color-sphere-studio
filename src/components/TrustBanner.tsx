import { motion } from "framer-motion";

const TrustBanner = () => (
  <section className="relative overflow-hidden gradient-trust py-16 md:py-20">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute w-40 h-40 rounded-full bg-primary-foreground/20 -top-10 left-20 animate-float" />
      <div className="absolute w-60 h-60 rounded-full bg-primary-foreground/10 bottom-0 right-10 animate-float" style={{ animationDelay: "3s" }} />
    </div>
    <div className="container mx-auto text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight"
      >
        Original • Authentic • Guaranteed
        <br />
        <span className="opacity-80 text-2xl md:text-3xl">100% Quality</span>
      </motion.h2>
    </div>
  </section>
);

export default TrustBanner;
