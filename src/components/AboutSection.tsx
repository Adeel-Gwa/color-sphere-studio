import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-store.jpg";

const highlights = [
  "State-of-the-art paint solutions",
  "100% original & authentic products",
  "Professional color consultation",
  "Trusted by homeowners & contractors",
];

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="floating-blob w-96 h-96 bg-pastel-peach -top-40 -left-40 animate-blob" />
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={aboutImg} alt="Our paint store" loading="lazy" width={800} height={600} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-5 hidden md:block">
            <p className="text-3xl font-display font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Your Trusted Partner in <span className="text-gradient">Premium Paints</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            With over 15 years of experience, we provide the finest selection of paints and coatings from world-renowned brands. Our commitment to quality and customer satisfaction sets us apart.
          </p>
          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
