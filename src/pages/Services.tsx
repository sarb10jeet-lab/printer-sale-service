import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Calendar, Wrench, Droplets, CheckCircle, Clock, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import sale1 from "../../public/assets/sale1.png";
import sale2 from "../../public/assets/sale2.png";
import sale3 from "../../public/assets/sale3.jpg";
import sale4 from "../../public/assets/sale4.jpg";
const Services = () => {
  const services = [
    {
      icon: sale1,
      title: "Printer Sales",
      description: "New and certified refurbished printers from leading brands",
      features: [
        "Sharp, Ricoh, and Kyocera authorized dealer",
        "New and refurbished machines available", 
        "Comprehensive warranty coverage",
        "Free installation and setup",
        "Competitive pricing and financing options"
      ],
      benefits: [
        "Latest technology and features",
        "Genuine products with warranty",
        "Expert guidance for right selection",
        "Post-sale support included"
      ]
    },
    {
      icon: sale2,
      title: "Printer Rentals",
      description: "Flexible rental solutions for temporary and long-term needs",
      features: [
        "Daily, weekly, monthly rental plans",
        "Short-term event rentals available",
        "Maintenance included in rental cost",
        "Upgrade options during rental period",
        "Emergency replacement guarantee"
      ],
      benefits: [
        "No upfront investment required",
        "Flexible terms and conditions", 
        "All maintenance costs covered",
        "Latest models available for rent"
      ]
    },
    {
      icon: sale3,
      title: "Service & Repair",
      description: "Professional maintenance and repair services by certified technicians",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Genuine spare parts only",
        "Certified and trained technicians",
        "24/7 support for critical needs"
      ],
      benefits: [
        "Minimize downtime and costs",
        "Extend equipment lifespan",
        "Maintain optimal performance",
        "Priority service for contracts"
      ]
    },
    {
      icon: sale4,
      title: "Toner Refilling",
      description: "Eco-friendly and cost-effective toner refilling services",
      features: [
        "Compatible with all major brands",
        "High-quality toner materials",
        "Same-day refilling service",
        "Cartridge cleaning and maintenance",
        "Pickup and delivery available"
      ],
      benefits: [
        "Up to 50% cost savings",
        "Environmentally responsible",
        "Quick turnaround time",
        "Maintains print quality"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Same-day service and 24/7 support for emergencies"
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Certified technicians with genuine parts and warranty"
    },
    {
      icon: Award,
      title: "Trusted Partner",
      description: "500+ satisfied customers and 10+ years of experience"
    },
    {
      icon: CheckCircle,
      title: "Complete Solutions",
      description: "End-to-end services from sales to maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive printer solutions to keep your business running smoothly
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      {/* <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                        <img src={Icon} alt={service.title} className="w-full h-full object-contain text-white" />
                      </div> */}
                      <h2 className="text-3xl font-bold text-corporate-gray">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-corporate-gray">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-corporate-gray">Key Benefits:</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild size="lg">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="bg-secondary border-none">
                      <CardContent className="p-8">
                        <div className="aspect-square  rounded-lg flex items-center justify-center">
                          {/* <Icon className="w-24 h-24 text-white" /> */}
                          <img src={Icon} alt={service.title} className="w-full h-full object-contain text-white" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
              Why Choose Total Office Solution?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service and building long-term partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center border-none bg-background">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today for a free consultation and quote tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;