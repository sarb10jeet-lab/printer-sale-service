import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Monitor } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/assets/bp-20m31-28.jpeg",
      title: "Sharp BP-20M31",
      category: "Monochrome",
      description: "High-speed monochrome multifunction printer"
    },
    {
      id: 2,
      src: "/assets/bp-30m31-35.jpeg",
      title: "Sharp BP-30M35",
      category: "Monochrome",
      description: "Production-ready monochrome printer"
    },
    {
      id: 3,
      src: "/assets/bp-50m45-55-65.jpeg",
      title: "Sharp BP-50 Series",
      category: "Monochrome",
      description: "Enterprise-grade monochrome printers"
    },
    {
      id: 4,
      src: "/assets/bp-70m45-55-65.jpeg",
      title: "Sharp BP-70 Series",
      category: "Monochrome",
      description: "High-volume monochrome printers"
    },
    {
      id: 5,
      src: "/assets/bp-70m75.jpeg",
      title: "Sharp BP-70M75",
      category: "Monochrome",
      description: "Ultra-high-speed monochrome printer"
    },
    {
      id: 6,
      src: "/assets/bp-70m90.jpeg",
      title: "Sharp BP-70M90",
      category: "Monochrome",
      description: "Maximum speed monochrome printer"
    },
    {
      id: 7,
      src: "/assets/color/bp-20c20z.jpeg",
      title: "Sharp BP-20C20Z",
      category: "Color",
      description: "Compact color multifunction printer"
    },
    {
      id: 8,
      src: "/assets/color/bp-20c25.jpeg",
      title: "Sharp BP-20C25",
      category: "Color",
      description: "Efficient color multifunction printer"
    },
    {
      id: 9,
      src: "/assets/color/bp-22c25.jpeg",
      title: "Sharp BP-22C25",
      category: "Color",
      description: "Advanced color multifunction printer"
    },
    {
      id: 10,
      src: "/assets/color/bp-30.jpeg",
      title: "Sharp BP-30",
      category: "Color",
      description: "Professional color printer"
    },
    {
      id: 11,
      src: "/assets/color/bp-30c25.jpeg",
      title: "Sharp BP-30C25",
      category: "Color",
      description: "High-performance color printer"
    },
    {
      id: 12,
      src: "/assets/color/bp-50.jpeg",
      title: "Sharp BP-50",
      category: "Color",
      description: "Enterprise color multifunction printer"
    }
  ];

  const featuredImages = [
    "/assets/sale1.png",
    "/assets/sale2.png",
    "/assets/sale3.jpg",
    "/assets/sale4.jpg"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
            Product Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of Sharp printers and multifunction devices
          </p>
        </div>

        {/* Featured Sales Images */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-semibold text-corporate-gray mb-8 text-center">
            Special Offers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredImages.map((image, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Special offer ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Main Product Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-corporate-gray mb-8 text-center">
            Our Product Range
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <div className="aspect-square relative overflow-hidden bg-white">
                          <img 
                            src={image.src} 
                            alt={image.title}
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center justify-center">
                              <Camera className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-sm text-corporate-gray truncate">
                              {image.title}
                            </h4>
                            <Badge 
                              variant={image.category === "Color" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {image.category}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="space-y-4">
                        <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-corporate-gray mb-2">
                            {image.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {image.description}
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <Badge 
                              variant={image.category === "Color" ? "default" : "secondary"}
                            >
                              {image.category} Printer
                            </Badge>
                            <Button size="sm" variant="outline">
                              Get Quote
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

        {/* Call to Action */}
        {/* <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Monitor className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-corporate-gray">
                Need Help Choosing?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experts can help you find the perfect printer solution for your business needs. 
              Contact us for personalized recommendations and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Sales Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Download Catalog
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
