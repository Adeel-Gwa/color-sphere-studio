import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Find Us</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">Visit Our Store</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card overflow-hidden max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-sky flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">ColorCraft Paint Store</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Main GT Road, Rahwali Cantt,<br />
              Gujranwala, Punjab, Pakistan
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Hours:</strong> Mon – Sat: 9:00 AM – 8:00 PM
            </p>
          </div>
          <div className="h-64 md:h-auto min-h-[300px] bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27102.97717!2d74.1!3d32.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2s!4v1"
              className="w-full h-full border-0"
              loading="lazy"
              title="Store Location"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LocationSection;
