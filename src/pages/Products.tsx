import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Download, FileText } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const navigate = useNavigate();

  const products = {
    sharp: {
      color: [
        {
          name: "Sharp MX-3071",
          speed: "30 ppm",
          features: ["Scan to Email", "Mobile Printing", "Cloud Connect"],
          description: "High-performance color multifunction printer",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "4 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "75,000 pages"
          },
          brochureUrl: "/brochures/sharp-mx-3071.pdf"
        },
        {
          name: "Sharp MX-4071",
          speed: "40 ppm", 
          features: ["Advanced Security", "Touch Screen", "Wireless"],
          description: "Professional color printing solution",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "6 GB RAM",
            storage: "500 GB SSD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "NFC"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid"],
            monthlyVolume: "100,000 pages"
          },
          brochureUrl: "/brochures/sharp-mx-4071.pdf"
        }
      ],
      mono: [
        {
          name: "Sharp MX-M315N",
          speed: "31 ppm",
          features: ["Network Ready", "Duplex Printing", "Energy Efficient"],
          description: "Reliable monochrome multifunction printer",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "2 GB RAM",
            storage: "160 GB HDD",
            connectivity: ["USB 2.0", "Ethernet"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "50,000 pages"
          },
          brochureUrl: "/brochures/sharp-mx-m315n.pdf"
        }
      ]
    },
    ricoh: {
      color: [
        {
          name: "Ricoh MP C3004ex",
          speed: "30 ppm",
          features: ["Smart Operation Panel", "Security Features", "Energy Efficient"],
          description: "Versatile color multifunction printer",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "4 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "80,000 pages"
          },
          brochureUrl: "/brochures/ricoh-mp-c3004ex.pdf"
        },
        {
          name: "Ricoh MP C5504ex",
          speed: "55 ppm",
          features: ["High Volume", "Advanced Finishing", "Cloud Integration"],
          description: "High-speed color production printer",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "8 GB RAM",
            storage: "1 TB SSD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A1"],
            monthlyVolume: "150,000 pages"
          },
          brochureUrl: "/brochures/ricoh-mp-c5504ex.pdf"
        }
      ],
      mono: [
        {
          name: "Ricoh MP 3554",
          speed: "35 ppm",
          features: ["Mobile Support", "Security Features", "Workflow"],
          description: "Efficient monochrome multifunction printer",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "3 GB RAM",
            storage: "250 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "60,000 pages"
          },
          brochureUrl: "/brochures/ricoh-mp-3554.pdf"
        }
      ]
    },
    kyocera: {
      color: [
        {
          name: "Kyocera ECOSYS MA4500ifx",
          speed: "45 ppm",
          features: ["Long Life Components", "Mobile Print", "Secure Print"],
          description: "Eco-friendly color multifunction printer",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "5 GB RAM",
            storage: "400 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "90,000 pages"
          },
          brochureUrl: "/brochures/kyocera-ecosys-ma4500ifx.pdf"
        }
      ],
      mono: [
        {
          name: "Kyocera ECOSYS P3260dn",
          speed: "62 ppm",
          features: ["Long Life Components", "Network Ready", "Duplex Printing"],
          description: "High-speed monochrome printer",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "2 GB RAM",
            storage: "160 GB HDD",
            connectivity: ["USB 2.0", "Ethernet"],
            paperSizes: ["A4", "A5", "Legal"],
            monthlyVolume: "40,000 pages"
          },
          brochureUrl: "/brochures/kyocera-ecosys-p3260dn.pdf"
        },
        {
          name: "Kyocera ECOSYS M3860idn",
          speed: "60 ppm",
          features: ["Advanced Scanning", "Mobile Support", "Energy Efficient"],
          description: "Professional monochrome multifunction printer",
          detailedSpecs: {
            resolution: "1200 x 1200 dpi",
            memory: "4 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "70,000 pages"
          },
          brochureUrl: "/brochures/kyocera-ecosys-m3860idn.pdf"
        }
      ]
    }
  };

  const handleDownloadBrochure = (brochureUrl: string, productName: string) => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = `${productName.replace(/\s+/g, '-').toLowerCase()}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openProductDetails = (product: any, brand: string, type: string) => {
    setSelectedProduct({ ...product, brand, type });
    setIsDetailsOpen(true);
  };

  const renderProducts = (brand: keyof typeof products) => {
    const brandProducts = products[brand];
    const colorProducts = selectedCategory === "all" || selectedCategory === "color" ? brandProducts.color : [];
    const monoProducts = selectedCategory === "all" || selectedCategory === "mono" ? brandProducts.mono : [];
    
    return (
      <div className="space-y-8">
        {colorProducts.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-corporate-gray">Color Printers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {colorProducts.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  brand={brand} 
                  type="Color" 
                  onEnquire={() => navigate('/contact')}
                  onDetails={() => openProductDetails(product, brand, "Color")}
                  onDownloadBrochure={() => handleDownloadBrochure(product.brochureUrl, product.name)}
                />
              ))}
            </div>
          </div>
        )}
        
        {monoProducts.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-corporate-gray">Monochrome Printers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {monoProducts.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  brand={brand} 
                  type="Monochrome" 
                  onEnquire={() => navigate('/contact')}
                  onDetails={() => openProductDetails(product, brand, "Monochrome")}
                  onDownloadBrochure={() => handleDownloadBrochure(product.brochureUrl, product.name)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore our comprehensive range of printers from leading brands
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              All Products
            </Button>
            <Button 
              variant={selectedCategory === "color" ? "default" : "outline"}
              onClick={() => setSelectedCategory("color")}
            >
              Color Printers
            </Button>
            <Button 
              variant={selectedCategory === "mono" ? "default" : "outline"}
              onClick={() => setSelectedCategory("mono")}
            >
              Monochrome Printers
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="sharp" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sharp">Sharp</TabsTrigger>
              <TabsTrigger value="ricoh">Ricoh</TabsTrigger>
              <TabsTrigger value="kyocera">Kyocera</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sharp">
              {renderProducts("sharp")}
            </TabsContent>
            
            <TabsContent value="ricoh">
              {renderProducts("ricoh")}
            </TabsContent>
            
            <TabsContent value="kyocera">
              {renderProducts("kyocera")}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      
      {/* Product Details Modal */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProduct?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-6xl font-bold text-muted-foreground capitalize">
                      {selectedProduct.brand}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="capitalize">{selectedProduct.brand}</Badge>
                    <Badge variant={selectedProduct.type === "Color" ? "default" : "secondary"}>
                      {selectedProduct.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-1">
                      {selectedProduct.features?.map((feature: string, index: number) => (
                        <li key={index} className="text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Specifications</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Speed:</span>
                      <span>{selectedProduct.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Resolution:</span>
                      <span>{selectedProduct.detailedSpecs?.resolution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Memory:</span>
                      <span>{selectedProduct.detailedSpecs?.memory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Storage:</span>
                      <span>{selectedProduct.detailedSpecs?.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Monthly Volume:</span>
                      <span>{selectedProduct.detailedSpecs?.monthlyVolume}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Connectivity & Paper</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium block mb-1">Connectivity:</span>
                      <div className="space-y-1">
                        {selectedProduct.detailedSpecs?.connectivity?.map((conn: string, index: number) => (
                          <div key={index} className="text-muted-foreground">• {conn}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium block mb-1">Paper Sizes:</span>
                      <div className="space-y-1">
                        {selectedProduct.detailedSpecs?.paperSizes?.map((size: string, index: number) => (
                          <div key={index} className="text-muted-foreground">• {size}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 border-t">
                <Button onClick={() => navigate('/contact')} className="flex-1">
                  Enquire Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleDownloadBrochure(selectedProduct.brochureUrl, selectedProduct.name)}
                  className="flex-1 gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ProductCard = ({ 
  product, 
  brand, 
  type, 
  onEnquire, 
  onDetails, 
  onDownloadBrochure 
}: { 
  product: any, 
  brand: string, 
  type: string,
  onEnquire: () => void,
  onDetails: () => void,
  onDownloadBrochure: () => void
}) => {
  return (
    <Card className="hover:shadow-card transition-shadow duration-300">
      <CardHeader>
        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
          <div className="text-4xl font-bold text-muted-foreground capitalize">{brand}</div>
        </div>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="capitalize">{brand}</Badge>
          <Badge variant={type === "Color" ? "default" : "secondary"}>{type}</Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-primary">Speed:</span>
            <span className="text-corporate-gray">{product.speed}</span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-primary block text-sm">Features:</span>
            {product.features.map((feature: string, index: number) => (
              <div key={index} className="text-xs text-muted-foreground">
                • {feature}
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex gap-2">
            <Button size="sm" className="flex-1" onClick={onEnquire}>
              Enquire Now
            </Button>
            <Button size="sm" variant="outline" className="flex-1" onClick={onDetails}>
              Details
            </Button>
          </div>
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-full gap-2" 
            onClick={onDownloadBrochure}
          >
            <FileText className="w-4 h-4" />
            Download Brochure
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Products;