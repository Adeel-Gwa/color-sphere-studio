import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DistributorsSection from "@/components/DistributorsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TrustBanner from "@/components/TrustBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/BackToTopButton";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => (
  <div className="min-h-screen">
    <LoadingScreen />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DistributorsSection />
    <ServicesSection />
    <ProductsSection />
    <TrustBanner />
    <TestimonialsSection />
    <GallerySection />
    <LocationSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
