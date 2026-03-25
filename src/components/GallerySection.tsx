import { motion } from "framer-motion";
import galleryColors from "@/assets/gallery-colors.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryWood from "@/assets/gallery-wood.jpg";
import heroStore from "@/assets/hero-store.jpg";
import aboutStore from "@/assets/about-store.jpg";

const images = [
  { src: heroStore, alt: "Our Paint Store", span: "md:col-span-2 md:row-span-2" },
  { src: galleryColors, alt: "Color Palettes", span: "" },
  { src: galleryInterior, alt: "Interior Design", span: "" },
  { src: galleryExterior, alt: "Exterior Projects", span: "md:col-span-2" },
  { src: galleryWood, alt: "Wood Coatings", span: "" },
  { src: aboutStore, alt: "Customer Service", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding relative overflow-hidden">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">Gallery</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl overflow-hidden group ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
