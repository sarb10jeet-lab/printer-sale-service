import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Calendar, Wrench, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Sales",
      description: "New and refurbished printers from top brands",
      features: ["Sharp", "Ricoh", "Kyocera", "Warranty included"],
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Rentals", 
      description: "Flexible rental options for short and long-term needs",
      features: ["Daily rentals", "Monthly plans", "Maintenance included", "Flexible terms"],
      color: "text-green-600"
    },
    {
      icon: Wrench,
      title: "Service & Repair",
      description: "Professional maintenance and repair services",
      features: ["Quick response", "Certified technicians", "Genuine parts", "Preventive maintenance"],
      color: "text-orange-600"
    },
    {
      icon: Droplets,
      title: "Toner Refilling",
      description: "Cost-effective toner refilling and cartridge services",
      features: ["Original quality", "50% cost savings", "Quick turnaround", "Eco-friendly"],
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive printer solutions to keep your business running smoothly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/services">
              Learn More About Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;