import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

const cards = [
  { icon: Award, title: "Official Paint Distributor", desc: "Authorized distributor of world-class paint brands with verified partnerships and genuine products." },
  { icon: ShieldCheck, title: "Premium Quality Paint Systems", desc: "Complete range of high-performance paint systems for every residential and commercial application." },
  { icon: BadgeCheck, title: "Certified & Authorized Sellers", desc: "Fully certified and manufacturer-authorized sellers guaranteeing authentic products and warranties." },
];

const DistributorsSection = () => (
  <section className="section-padding bg-secondary/50 relative overflow-hidden">
    <div className="floating-blob w-80 h-80 bg-primary/10 top-10 right-10 animate-blob" />
    <div className="container mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Partners</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Official Distributors</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">Proudly partnered with leading paint manufacturers to bring you the best in quality and innovation.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 hover-lift group cursor-default"
          >
            <div className="w-16 h-16 rounded-2xl gradient-sky flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <card.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DistributorsSection;
