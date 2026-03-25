import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DistributorsSection from "@/components/DistributorsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TrustBanner from "@/components/TrustBanner";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DistributorsSection />
    <ServicesSection />
    <ProductsSection />
    <TrustBanner />
    <GallerySection />
    <LocationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
