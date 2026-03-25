import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Interior Paints", "Exterior Paints", "Wood Coatings", "Decorative Finishes"];

const productData: Record<string, { name: string; color: string }[]> = {
  "Interior Paints": [
    { name: "Silk Emulsion", color: "bg-sky-200" },
    { name: "Matt Finish", color: "bg-slate-200" },
    { name: "Premium Velvet", color: "bg-rose-200" },
    { name: "Economy Plus", color: "bg-amber-100" },
  ],
  "Exterior Paints": [
    { name: "Weather Shield", color: "bg-blue-300" },
    { name: "UV Protect Pro", color: "bg-orange-200" },
    { name: "All-Season Guard", color: "bg-green-200" },
    { name: "Damp Proof Coat", color: "bg-teal-200" },
  ],
  "Wood Coatings": [
    { name: "Teak Finish", color: "bg-amber-300" },
    { name: "Clear Varnish", color: "bg-yellow-100" },
    { name: "Wood Stain Dark", color: "bg-amber-700" },
    { name: "Anti-Termite Coat", color: "bg-lime-200" },
  ],
  "Decorative Finishes": [
    { name: "Metallic Gold", color: "bg-yellow-300" },
    { name: "Pearl Shimmer", color: "bg-pink-100" },
    { name: "Textured Stone", color: "bg-stone-300" },
    { name: "Glitter Effect", color: "bg-purple-200" },
  ],
};

const ProductsSection = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="products" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="floating-blob w-80 h-80 bg-pastel-blue -top-20 left-10 animate-blob" />
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">Products Showcase</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "gradient-sky text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {productData[active].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover-lift group"
              >
                {/* 3D paint bucket */}
                <div className="relative w-24 h-24 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                  <div className={`w-20 h-20 rounded-2xl ${product.color} mx-auto shadow-lg`} />
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-22 h-3 rounded-t-lg ${product.color} opacity-70`} />
                </div>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Premium Quality</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
