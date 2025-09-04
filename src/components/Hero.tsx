import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../public/assets/slider-printer.jpg";

const Hero = () => {
  return (
    <section style={{ backgroundImage: `url(${heroImage})` }} className="relative bg-cover bg-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Complete Printer Solutions for Your
              <span className="text-yellow-300"> Business</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Sales, Rentals, Service & Toner Refilling for Sharp, Ricoh, and Kyocera printers. 
              Serving Mohali and surrounding areas with professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" variant="secondary" className="shadow-button">
                <Link to="/products">
                  View Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white  hover:bg-white text-primary">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Shield className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Authorized Service</h3>
                <p className="text-sm opacity-80">Certified technicians for all major brands</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Zap className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                <p className="text-sm opacity-80">Same-day service and support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Users className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Trusted Partner</h3>
                <p className="text-sm opacity-80">500+ satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;