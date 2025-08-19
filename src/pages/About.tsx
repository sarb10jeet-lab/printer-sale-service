import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "3", label: "Major Brands", icon: Award },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const team = [
    {
      name: "Charanjeet Singh",
      role: "Founder & CEO",
      experience: "15+ years in office equipment industry",
      description: "Passionate about delivering reliable printing solutions"
    },
    {
      name: "Rohit",
      role: "Service Manager", 
      experience: "10+ years in technical services",
      description: "Expert in printer maintenance and customer support"
    },
    {
      name: "Randeep Singh",
      role: "Engineer",
      experience: "12+ years in B2B sales",
      description: "Specializes in finding the right solutions for businesses"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Total Office Solution</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your trusted partner for comprehensive printer solutions in Mohali and beyond
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2014, Total Office Solution (TOS) began with a simple mission: to provide 
                businesses in Mohali with reliable, cost-effective printing solutions. What started as 
                a small service center has grown into a comprehensive office equipment partner serving 
                hundreds of satisfied customers.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in Sharp, Ricoh, and Kyocera printers, offering sales, rentals, 
                maintenance, and toner refilling services. Our commitment to quality service and 
                customer satisfaction has made us the preferred choice for businesses across Punjab.
              </p>
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Based in Mohali, serving all of Punjab</span>
              </div>
            </div>
            <div>
              <Card className="bg-secondary border-none">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-primary rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Target className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Our Mission</h3>
                      <p className="text-sm opacity-90 mt-2">
                        Delivering reliable printing solutions with exceptional service
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center border-none bg-background">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-corporate-gray mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-card">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Consistent, dependable service you can count on for all your printing needs
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-card">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We listen, understand, and deliver solutions
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-card">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous improvement and quality in every service we provide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-none bg-background">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Partner With Us Today
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the difference that personalized service and genuine care can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
