import { motion } from "framer-motion";
import { Truck, Package, Home, Palette, MessageSquare } from "lucide-react";

const services = [
  { icon: Truck, title: "Free Delivery", desc: "Free delivery in Rahwali area for all orders" },
  { icon: Package, title: "Bulk Orders", desc: "Special pricing for contractors & bulk orders" },
  { icon: Home, title: "Interior & Exterior", desc: "Complete paint solutions for every surface" },
  { icon: Palette, title: "Color Matching", desc: "Advanced color matching technology" },
  { icon: MessageSquare, title: "Expert Guidance", desc: "Professional paint consultation service" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    <div className="floating-blob w-72 h-72 bg-pastel-pink -bottom-20 -right-20 animate-blob" />
    <div className="container mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-12">Our Services</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex items-start gap-4 text-left hover-lift"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
