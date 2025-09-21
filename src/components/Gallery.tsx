import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ArrowRight, Camera, Monitor } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/assets/gallary/gallary1.jpg"
      
    },
    
    {
      id: 2,
      src: "/assets/gallary/gallary2.jpg"
      
    },
     {
      id: 3,
      src: "/assets/gallary/gallary3.jpg"
      
    },
     {
      id: 4,
      src: "/assets/gallary/gallary4.jpg"
      
    },
     {
      id: 5,
      src: "/assets/gallary/gallary5.jpg"
      
    },
     {
      id: 6,
      src: "/assets/gallary/gallary6.jpg"
      
    },
     {
      id: 7,
      src: "/assets/gallary/gallary7.jpg"
      
    },
     {
      id: 8,
      src: "/assets/gallary/gallary8.jpg"
      
    },
     {
      id: 9,
      src: "/assets/gallary/gallary9.jpg"
      
    },
     {
      id: 10,
      src: "/assets/gallary/gallary10.jpg"
      
    },
     {
      id: 11,
      src: "/assets/gallary/gallary11.jpg"
      
    },
     {
      id: 12,
      src: "/assets/gallary/gallary12.jpg"
      
    },
     {
      id: 13,
      src: "/assets/gallary/gallary13.jpg"
      
    },
     {
      id: 14,
      src: "/assets/gallary/gallary14.jpg"
      
    },
     {
      id: 15,
      src: "/assets/gallary/gallary15.jpg"
      
    },
     {
      id: 16,
      src: "/assets/gallary/gallary16.jpg"
      
    },
     {
      id: 17,
      src: "/assets/gallary/gallary17.jpg"
      
    },
     {
      id: 18,
      src: "/assets/gallary/gallary18.jpg"
      
    },
     {
      id: 19,
      src: "/assets/gallary/gallary19.jpg"
      
    },
     {
      id: 20,
      src: "/assets/gallary/gallary20.jpg"
      
    },
     {
      id: 21,
      src: "/assets/gallary/gallary21.jpg"
      
    },
     {
      id: 22,
      src: "/assets/gallary/gallary22.jpg"
      
    },
     {
      id: 23,
      src: "/assets/gallary/gallary23.jpg"
      
    },
     {
      id: 24,
      src: "/assets/gallary/gallary24.jpg"
      
    },
     {
      id: 25,
      src: "/assets/gallary/gallary25.jpg"
      
    },
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
            Explore our comprehensive range of Printers and multifunction devices
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
                           
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* <div className="flex items-center justify-center">
                              <Camera className="w-5 h-5 text-white" />
                            </div> */}
                          </div>
                        </div>
                        {/* <div className="p-4"> */}
                          {/* <div className="flex items-center justify-between mb-2"> */}
                            {/* <h4 className="font-semibold text-sm text-corporate-gray truncate">
                              {image.title}
                            </h4> */}
                            {/* <Badge 
                              variant={image.category === "Color" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {image.category}
                            </Badge> */}
                          </div>
                          {/* <p className="text-xs text-muted-foreground line-clamp-2">
                            {image.description}
                          </p> */}
                        {/* </div> */}
                      {/* </div> */}
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="space-y-4">
                        <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden">
                          <img 
                            src={image.src} 
                            // alt={image.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-corporate-gray mb-2">
                            {/* {image.title} */}
                          </h3>
                          {/* <p className="text-muted-foreground mb-4">
                            {image.description}
                          </p> */}
                          <div className="flex items-center justify-center gap-2">
                            {/* <Badge 
                              variant={image.category === "Color" ? "default" : "secondary"}
                            >
                              {image.category} Printer
                            </Badge> */}
                            {/* <Button size="sm" variant="outline">
                              Get Quote
                            </Button> */}
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
