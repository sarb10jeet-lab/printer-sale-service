import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sharp MX-3071",
      brand: "Sharp",
      type: "Color Multifunction",
      image: "/placeholder.svg",
      speed: "30 ppm",
      features: ["Scan to Email", "Mobile Printing", "Cloud Connect"],
      popular: true
    },
    {
      id: 2,
      name: "Ricoh MP C3004ex",
      brand: "Ricoh",
      type: "Color Multifunction", 
      image: "/placeholder.svg",
      speed: "30 ppm",
      features: ["Smart Operation Panel", "Security Features", "Energy Efficient"],
      popular: false
    },
    {
      id: 3,
      name: "Kyocera ECOSYS P3260dn",
      brand: "Kyocera",
      type: "Monochrome Printer",
      image: "/placeholder.svg", 
      speed: "62 ppm",
      features: ["Long Life Components", "Network Ready", "Duplex Printing"],
      popular: true
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular printer solutions trusted by businesses across Mohali
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="relative">
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{product.brand}</Badge>
                  <span className="text-sm text-muted-foreground">{product.type}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-primary">Speed:</span>
                    <span className="text-corporate-gray">{product.speed}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold text-primary block">Key Features:</span>
                    {product.features.map((feature, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Get Quote
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;