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
      src: "/assets/gallary/img1.png"
      
    },
    {
      id: 2,
      src: "/assets/gallary/img2.png"
     
    },
    {
      id: 3,
      src: "/assets/gallary/img3.png"
    },
    {
      id: 4,
      src: "/assets/gallary/img4.png",
      title: "Professional Workspace"
    },
    {
      id: 5,
      src: "/assets/gallary/img5.png"
    },
     {
      id: 6,
      src: "/assets/gallary/img6.png"
    },
     {
      id: 7,
      src: "/assets/gallary/img7.png"
    },
     {
      id: 8,
      src: "/assets/gallary/img8.png"
    },
     {
      id: 9,
      src: "/assets/gallary/img9.png"
    },
     {
      id: 10,
      src: "/assets/gallary/img10.png"
    },
      {
      id: 11,
      src: "/assets/gallary/img11.png"
    },
      {
      id: 12,
      src: "/assets/gallary/img12.png"
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

        {/* Office Gallery Grid - Masonry Layout */}
<div className="mb-16">
  <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
    {officeImages.map((image) => (
      <div key={image.id} className="break-inside-avoid">
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto rounded-lg shadow hover:shadow-xl transition-all duration-300"
              />
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-6xl p-0 bg-transparent border-0 shadow-none">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={image.src}
                alt={image.title}
                className="max-h-[90vh] w-auto object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
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
        {/* <div className="text-center">
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
        </div> */}
      </div>
    </section>
  );
};

export default OfficeGallery;
