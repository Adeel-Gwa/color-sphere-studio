import { Paintbrush } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 py-12">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Paintbrush className="h-6 w-6 text-primary" />
            <span className="text-lg font-display font-bold text-primary-foreground">ColorCraft</span>
          </div>
          <p className="text-sm opacity-60">Your trusted partner for premium quality paints and coatings since 2009.</p>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-60">
            <a href="#home" className="block hover:opacity-100 transition-opacity">Home</a>
            <a href="#about" className="block hover:opacity-100 transition-opacity">About</a>
            <a href="#products" className="block hover:opacity-100 transition-opacity">Products</a>
            <a href="#contact" className="block hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm opacity-60">
            <p>Main GT Road, Rahwali Cantt</p>
            <p>Gujranwala, Punjab, Pakistan</p>
            <p>+92 300 1234567</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm opacity-40">
        © {new Date().getFullYear()} ColorCraft Paint Store. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
