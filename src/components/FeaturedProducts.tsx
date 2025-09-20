import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Target, Shield, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const values = [
    {
      icon: Target,
      title: "Customer-Centric Approach",
      description: "We focus on 'service beyond the sale.' Your satisfaction is our priority, and we are dedicated to ensuring that you have the best possible experience with our solutions."
    },
    {
      icon: Users,
      title: "Accountability",
      description: "Every member of our team is committed to providing timely and thorough support. If you have any inquiries or concerns, our skilled specialists will address them personally."
    },
    {
      icon: Shield,
      title: "Integrity & Honesty",
      description: "We stand by our promises. Whether you're purchasing, renting, or leasing equipment, we ensure that the solution fits your specific needs."
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Introducing Total Office Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At Total Office Solution, we are a team of seasoned technical professionals with over 35 years of experience in Office Automation, IT Services, and Software Development. Our mission is to empower modern workplaces through innovative technologies and solutions, helping businesses work smarter and more efficiently.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary mb-4">
                Our Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground text-lg leading-relaxed">
                We specialize in creating dynamic, intelligent workplace solutions, ensuring that your day-to-day office operations run smoothly. Whether you rely on desktops, laptops, projectors, interactive whiteboards, copiers, printers, or comprehensive IT services, we provide the tools and support you need to succeed.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Comprehensive Support & Partnership
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We also offer product demonstrations at your location to help you experience firsthand how our solutions can transform your workplace. If you're facing any issues with your office equipment or IT infrastructure, we're here to help.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our team is looking to partner with your organization to deepen and further boost our association in providing low cost and efficient solutions for Education, Research Institutes, Universities, Manufacturing Industries as well as for Government Organizations in our field of expertise.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;