import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-corporate-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className=" bg-gradient-primary rounded-lg flex items-center justify-center">
                <img src="/assets/logo.jpeg" alt="Total Office Solution Logo" className="w-12 rounded-md" />
              </div>
              <div className="text-xl font-bold">Total Office Solution</div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive printer solutions in Mohali and surrounding areas.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                Mohali, Punjab, India
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                +91 98765 43210
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:info@totalofficesolution.com" className="hover:text-primary transition-colors">info@totalofficesolution.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/products?brand=sharp" className="hover:text-primary transition-colors">Sharp Printers</Link></li>
              <li><Link to="/products?brand=ricoh" className="hover:text-primary transition-colors">Ricoh Printers</Link></li>
              <li><Link to="/products?brand=kyocera" className="hover:text-primary transition-colors">Kyocera Printers</Link></li>
              <li><Link to="/products?type=color" className="hover:text-primary transition-colors">Color Printers</Link></li>
              <li><Link to="/products?type=mono" className="hover:text-primary transition-colors">Monochrome Printers</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <div>
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Emergency Service</h4>
              <p className="text-sm text-gray-300">24/7 support for critical business needs</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Total Office Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;