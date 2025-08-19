import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, Search, File, HardDrive } from "lucide-react";

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const drivers = [
    {
      name: "Sharp MX-3071 Driver",
      model: "MX-3071",
      brand: "Sharp",
      version: "v2.1.4",
      size: "45.2 MB",
      type: "Color Multifunction",
      downloadUrl: "/drivers/sharp-mx-3071-driver.exe",
      description: "Full feature driver for Sharp MX-3071 color multifunction printer"
    },
    {
      name: "Sharp MX-4071 Driver",
      model: "MX-4071", 
      brand: "Sharp",
      version: "v3.0.1",
      size: "52.8 MB",
      type: "Color Multifunction",
      downloadUrl: "/drivers/sharp-mx-4071-driver.exe",
      description: "Complete driver package for Sharp MX-4071 series"
    },
    {
      name: "Sharp MX-M315N Driver",
      model: "MX-M315N",
      brand: "Sharp",
      version: "v1.8.2",
      size: "38.5 MB", 
      type: "Monochrome Multifunction",
      downloadUrl: "/drivers/sharp-mx-m315n-driver.exe",
      description: "Driver for Sharp MX-M315N monochrome multifunction printer"
    },
    {
      name: "Ricoh MP C3004ex Driver",
      model: "MP C3004ex",
      brand: "Ricoh",
      version: "v4.2.1",
      size: "67.3 MB",
      type: "Color Multifunction",
      downloadUrl: "/drivers/ricoh-mp-c3004ex-driver.exe",
      description: "Advanced driver for Ricoh MP C3004ex color multifunction"
    },
    {
      name: "Ricoh MP C5504ex Driver",
      model: "MP C5504ex",
      brand: "Ricoh", 
      version: "v4.5.0",
      size: "78.9 MB",
      type: "Color Production",
      downloadUrl: "/drivers/ricoh-mp-c5504ex-driver.exe",
      description: "Production printer driver for Ricoh MP C5504ex"
    },
    {
      name: "Ricoh MP 3554 Driver",
      model: "MP 3554",
      brand: "Ricoh",
      version: "v3.1.7",
      size: "41.2 MB",
      type: "Monochrome Multifunction", 
      downloadUrl: "/drivers/ricoh-mp-3554-driver.exe",
      description: "Driver package for Ricoh MP 3554 monochrome printer"
    },
    {
      name: "Kyocera ECOSYS MA4500ifx Driver",
      model: "ECOSYS MA4500ifx",
      brand: "Kyocera",
      version: "v2.8.3",
      size: "55.7 MB",
      type: "Color Multifunction",
      downloadUrl: "/drivers/kyocera-ecosys-ma4500ifx-driver.exe", 
      description: "Eco-friendly driver for Kyocera ECOSYS MA4500ifx"
    },
    {
      name: "Kyocera ECOSYS P3260dn Driver",
      model: "ECOSYS P3260dn",
      brand: "Kyocera",
      version: "v1.9.5",
      size: "28.4 MB",
      type: "Monochrome Printer",
      downloadUrl: "/drivers/kyocera-ecosys-p3260dn-driver.exe",
      description: "High-speed monochrome printer driver"
    },
    {
      name: "Kyocera ECOSYS M3860idn Driver", 
      model: "ECOSYS M3860idn",
      brand: "Kyocera",
      version: "v2.3.1",
      size: "49.6 MB",
      type: "Monochrome Multifunction",
      downloadUrl: "/drivers/kyocera-ecosys-m3860idn-driver.exe",
      description: "Professional driver for Kyocera ECOSYS M3860idn"
    }
  ];

  const handleDownload = (downloadUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredDrivers = drivers.filter(driver => 
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Download drivers and software for your printer models
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search by model, brand, or printer type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Search for drivers by typing your printer model (e.g., "MX-3071", "MP C3004ex", "ECOSYS")
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-corporate-gray mb-2">Available Drivers</h2>
            <p className="text-muted-foreground">
              {filteredDrivers.length} driver{filteredDrivers.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDrivers.map((driver, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{driver.model}</CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {driver.brand}
                        </Badge>
                        <Badge variant={driver.type.includes("Color") ? "default" : "secondary"} className="text-xs">
                          {driver.type}
                        </Badge>
                      </div>
                    </div>
                    <HardDrive className="w-8 h-8 text-primary opacity-70" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{driver.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Version:</span>
                      <div className="text-muted-foreground">{driver.version}</div>
                    </div>
                    <div>
                      <span className="font-medium">Size:</span>
                      <div className="text-muted-foreground">{driver.size}</div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => handleDownload(driver.downloadUrl, `${driver.model}-driver.exe`)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Driver
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDrivers.length === 0 && (
            <div className="text-center py-12">
              <File className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-corporate-gray mb-2">No drivers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or check the model number
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Downloads;