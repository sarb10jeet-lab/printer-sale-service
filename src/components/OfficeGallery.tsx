import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Printer, Monitor, CheckCircle } from "lucide-react";

const OfficeGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const officeImages = [
    {
      id: 1,
      src: "/assets/gallary/img1.png",
      title: "Modern Office Setup",
      category: "Office Environment",
      description: "Professional office environment with integrated printer solutions",
      features: ["Network Integration", "Space Efficient", "Professional Setup"]
    },
    {
      id: 2,
      src: "/assets/gallary/img2.png",
      title: "Corporate Office",
      category: "Business Setup",
      description: "Large corporate office with centralized printing infrastructure",
      features: ["High Volume Printing", "Centralized Management", "Cost Effective"]
    },
    {
      id: 3,
      src: "/assets/gallary/img3.png",
      title: "Small Business Office",
      category: "SME Setup",
      description: "Compact office setup perfect for small to medium businesses",
      features: ["Compact Design", "Easy Maintenance", "Affordable Solution"]
    },
    {
      id: 4,
      src: "/assets/gallary/img4.png",
      title: "Professional Workspace",
      category: "Office Environment",
      description: "Clean and organized workspace with efficient printing solutions",
      features: ["Clean Design", "Efficient Workflow", "Professional Look"]
    },
    {
      id: 5,
      src: "/assets/gallary/img5.png",
      title: "Enterprise Office",
      category: "Enterprise Setup",
      description: "Large enterprise office with advanced printing infrastructure",
      features: ["Scalable Solution", "Advanced Security", "Enterprise Grade"]
    }
  ];

  const officeStats = [
    { icon: Building2, label: "Offices Served", value: "500+" },
    { icon: Printer, label: "Printers Installed", value: "2000+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Monitor, label: "Years Experience", value: "15+" }
  ];

  const officeFeatures = [
    {
      title: "Professional Installation",
      description: "Expert installation and setup services for all office environments",
      icon: CheckCircle
    },
    {
      title: "Network Integration",
      description: "Seamless integration with existing office networks and systems",
      icon: CheckCircle
    },
    {
      title: "Maintenance Support",
      description: "Comprehensive maintenance and support services for optimal performance",
      icon: CheckCircle
    },
    {
      title: "Training & Support",
      description: "Staff training and ongoing support to maximize productivity",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
            Office Gallery
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {officeStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center">
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-bold text-corporate-gray mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Gallery Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {officeImages.map((image) => (
              <Card key={image.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <div className="aspect-square relative overflow-hidden bg-white">
                          <img 
                            src={image.src} 
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="space-y-4">
                        <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="text-center">
                            <h3 className="text-xl font-semibold text-corporate-gray mb-2">
                              {image.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {image.description}
                            </p>
                            <Badge 
                              variant={image.category === "Office Environment" ? "default" : "secondary"}
                              className="mb-4"
                            >
                              {image.category}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {image.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 justify-center">
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              Get Quote
                            </Button>
                            <Button size="sm" variant="outline">
                              Schedule Visit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Office Features */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-corporate-gray mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-corporate-gray">
                Transform Your Office Today
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied businesses in Mohali who have upgraded their office printing infrastructure. 
              Let us help you create a more efficient and productive workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Office Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Download Office Solutions Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;
