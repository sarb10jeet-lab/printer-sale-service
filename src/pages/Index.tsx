import Navigation from "@/components/ui/navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Gallery from "@/components/Gallery";
import OfficeGallery from "@/components/OfficeGallery";
import ServicesOverview from "@/components/ServicesOverview";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Gallery />
      <OfficeGallery />
      <ServicesOverview />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
