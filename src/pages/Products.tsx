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

interface Product {
  name: string;
  speed: string;
  features: string[];
  description: string;
  detailedSpecs: {
    // Basic specifications (for backward compatibility)
    resolution: string;
    memory: string;
    storage: string;
    connectivity: string[];
    paperSizes: string[];
    monthlyVolume: string;
    firstCopyOut?: string;
    paperCapacity?: string;
    scannerSpeed?: string;
    dimensions?: string;
    weight?: string;
    
    // Extended detailed specifications (optional)
    type?: string;
    printSpeed?: {
      a4: string;
      a3?: string;
    };
    warmUpTime?: string;
    powerConsumption?: string;
    
    // Extended Paper Handling
    paperCapacityExtended?: {
      standard: string;
      maximum: string;
    };
    paperWeight?: {
      tray1: string;
      otherTrays?: string;
      bypass: string;
    };
    
    // Extended Copy Specifications
    copySpeed?: string;
    continuousCopy?: string;
    copyResolution?: string;
    zoomRange?: string;
    copyFunctions?: string[];
    
    // Extended Scanning Specifications
    documentFeeder?: string;
    scanResolution?: string;
    scanMethods?: string[];
    fileFormats?: string[];
    scanDestinations?: string[];
    
    // Extended Connectivity
    printLanguages?: string[];
    supportedOS?: string[];
    protocols?: string[];
    
    // Extended Additional Features
    controlPanel?: string;
    mobileSupport?: string[];
    securityFeatures?: string[];
    energyFeatures?: string[];
  };
  brochureUrl: string;
  imageUrl?: string;
}

interface ProductWithBrand extends Product {
  brand: string;
  type: string;
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductWithBrand | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [expandedBrands, setExpandedBrands] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const products = {
    sharp: {
      color: [
        {
          name: "Sharp BP-20C20Z",
          speed: "20 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Mobile Printing", "Energy Efficient", "Advanced Security"],
          description: "Entry-level A3 color multifunction printer, ideal for small offices that need vibrant color output at an affordable cost",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "4 GB RAM",
            storage: "128 GB SSD",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "60,000 pages",
            firstCopyOut: "8.6 sec (Color), 7.4 sec (B/W)",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm (Color/B&W)",
            dimensions: "608 × 630 × 834 mm",
            weight: "~55 kg"
          },
          brochureUrl: "/assets/pdfs/BP-22C20.pdf",
          imageUrl: "/assets/color/bp-20c20z.jpeg"
        },
        {
          name: "Sharp BP-20C25Z",
          speed: "25 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Mobile Printing", "Energy Efficient", "Advanced Security"],
          description: "Faster performance with 25 ppm print speed and high-quality color output for teams that want efficient workflows",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "4 GB RAM",
            storage: "128 GB SSD",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "80,000 pages",
            firstCopyOut: "7.6 sec (Color), 6.7 sec (B/W)",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm",
            dimensions: "608 × 630 × 834 mm",
            weight: "~55 kg"
          },
          brochureUrl: "/assets/pdfs/BP-22C20.pdf",
          imageUrl: "/assets/color/bp-20c25.jpeg"
        },
        {
          name: "Sharp BP-22C20Z",
          speed: "20 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Mobile Printing", "Energy Efficient", "Advanced Security"],
          description: "Compact A3 color multifunction printer with enhanced features for growing small offices",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "4 GB RAM",
            storage: "128 GB SSD",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "65,000 pages",
            firstCopyOut: "8.4 sec (Color), 7.2 sec (B/W)",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm (Color/B&W)",
            dimensions: "608 × 630 × 834 mm",
            weight: "~55 kg"
          },
          brochureUrl: "/assets/pdfs/BP-22c25.pdf",
          imageUrl: "/assets/color/bp-22c25.jpeg"
        },
        {
          name: "Sharp BP-20C25",
          speed: "25 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Energy Efficient"],
          description: "Standard A3 color multifunction printer for small to medium offices requiring reliable color output",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "4 GB RAM",
            storage: "128 GB SSD",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "75,000 pages",
            firstCopyOut: "7.8 sec (Color), 6.9 sec (B/W)",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm (Color/B&W)",
            dimensions: "608 × 630 × 834 mm",
            weight: "~55 kg"
          },
          brochureUrl: "/assets/pdfs/BP-22C25.pdf",
          imageUrl: "/assets/color/bp-20c25.jpeg"
        },
        {
          name: "Sharp BP-30C25",
          speed: "25 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enhanced Workflow", "Professional Grade"],
          description: "Professional A3 color multifunction printer designed for medium-sized offices with advanced workflow requirements",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "6 GB RAM",
            storage: "160 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid"],
            monthlyVolume: "90,000 pages",
            firstCopyOut: "7.2 sec (Color), 6.5 sec (B/W)",
            paperCapacity: "500 sheets (max 2100)",
            scannerSpeed: "45 ipm (Color/B&W)",
            dimensions: "620 × 650 × 680 mm",
            weight: "~48 kg"
          },
          brochureUrl: "/assets/pdfs/BP-30C25Z.pdf",
          imageUrl: "/assets/color/bp-30c25.jpeg"
        },
        {
          name: "Sharp BP-50C25",
          speed: "25 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enterprise Grade", "Advanced Workflow"],
          description: "Enterprise-level A3 color multifunction printer for large offices with complex workflow requirements",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2"],
            monthlyVolume: "120,000 pages",
            firstCopyOut: "6.8 sec (Color), 6.2 sec (B/W)",
            paperCapacity: "750 sheets (max 3100)",
            scannerSpeed: "55 ipm (Color/B&W)",
            dimensions: "650 × 680 × 720 mm",
            weight: "~58 kg"
          },
          brochureUrl: "/assets/pdfs/BP-50C31.pdf",
          imageUrl: "/assets/color/bp-50.jpeg"
        },
        {
          name: "Sharp BP-50C31",
          speed: "31 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "High Performance", "Advanced Security"],
          description: "High-performance A3 color multifunction printer for demanding environments requiring fast color output",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2"],
            monthlyVolume: "150,000 pages",
            firstCopyOut: "6.5 sec (Color), 5.9 sec (B/W)",
            paperCapacity: "750 sheets (max 3100)",
            scannerSpeed: "55 ipm (Color/B&W)",
            dimensions: "650 × 680 × 720 mm",
            weight: "~58 kg"
          },
          brochureUrl: "/assets/pdfs/BP-50C31.pdf",
          imageUrl: "/assets/color/bp-50.jpeg"
        },
        {
          name: "Sharp BP-50C35",
          speed: "35 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Ready", "Advanced Finishing"],
          description: "Production-grade A3 color multifunction printer for high-volume environments with finishing capabilities",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2"],
            monthlyVolume: "180,000 pages",
            firstCopyOut: "6.2 sec (Color), 5.6 sec (B/W)",
            paperCapacity: "750 sheets (max 3100)",
            scannerSpeed: "55 ipm (Color/B&W)",
            dimensions: "650 × 680 × 720 mm",
            weight: "~58 kg"
          },
          brochureUrl: "/assets/pdfs/BP-50C31.pdf",
          imageUrl: "/assets/color/bp-50.jpeg"
        },
        {
          name: "Sharp BP-70C45",
          speed: "45 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enterprise Grade", "Advanced Workflow"],
          description: "Enterprise A3 color multifunction printer for large organizations with complex document workflows",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "12 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "200,000 pages",
            firstCopyOut: "5.8 sec (Color), 5.3 sec (B/W)",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm (Color/B&W)",
            dimensions: "680 × 720 × 750 mm",
            weight: "~72 kg"
          },
          brochureUrl: "/assets/pdfs/BP-70C45.pdf",
          imageUrl: "/assets/color/bp-70.jpeg"
        },
        {
          name: "Sharp BP-70C55",
          speed: "55 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "High Performance", "Advanced Security"],
          description: "High-performance A3 color multifunction printer for enterprise environments requiring speed and reliability",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "12 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "250,000 pages",
            firstCopyOut: "5.5 sec (Color), 5.0 sec (B/W)",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm (Color/B&W)",
            dimensions: "680 × 720 × 750 mm",
            weight: "~72 kg"
          },
          brochureUrl: "/assets/pdfs/BP-70C45.pdf",
          imageUrl: "/assets/color/bp-70.jpeg"
        },
        {
          name: "Sharp BP-70C65",
          speed: "65 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Grade", "Advanced Finishing"],
          description: "Production A3 color multifunction printer for high-volume environments with professional finishing capabilities",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "12 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "300,000 pages",
            firstCopyOut: "5.2 sec (Color), 4.8 sec (B/W)",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm (Color/B&W)",
            dimensions: "680 × 720 × 750 mm",
            weight: "~72 kg"
          },
          brochureUrl: "/assets/pdfs/BP-70C65.pdf",
          imageUrl: "/assets/color/bp-70.jpeg"
        }
      ],
      mono: [
        {
          name: "Sharp BP-20M22",
          speed: "22 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Compact Design", "Energy Efficient"],
          description: "SHARP BP 20M22, 22 PPM Mono Multifunction Print Copy & Scan, Automatic Reverse Document Feeder, Color Mobile Scanning 37 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 1 tray + 100 sheet Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            // General Specifications
            type: "Desktop A3 B/W MFP",
            printSpeed: {
              a4: "22 ppm",
              a3: "12 ppm"
            },
            resolution: "600 × 600 dpi",
            memory: "1 GB (shared between copy and print)",
            storage: "Built-in",
            warmUpTime: "~25 seconds",
            powerConsumption: "Max 1.2 kW",
            
            // Paper Handling
            paperCapacityExtended: {
              standard: "350 sheets (250-sheet tray + 100-sheet bypass)",
              maximum: "1,850 sheets with optional trays"
            },
            paperSizes: ["A6", "A5", "A4", "Legal", "A3"],
            paperWeight: {
              tray1: "60–105 g/m²",
              otherTrays: "60–200 g/m²",
              bypass: "55–200 g/m²"
            },
            
            // Copy Specifications
            copySpeed: "22 ppm",
            firstCopyOut: "6.4 seconds",
            continuousCopy: "Up to 999 pages",
            copyResolution: "600 × 600 dpi",
            zoomRange: "25–400% (25–200% using RSPF) in 1% increments",
            copyFunctions: ["ID Card Copy", "2-in-1/4-in-1 copying", "Centering", "Auto paper selection", "Rotation sort"],
            
            // Scanning Specifications
            documentFeeder: "100-sheet RSPF (Reversing Single Pass Feeder)",
            scannerSpeed: "37 originals per minute (one-sided)",
            scanResolution: "100, 150, 200, 300, 400, 600 dpi (Push scan); Up to 600 dpi (Pull scan)",
            scanMethods: ["Push scan via control panel", "Pull scan via TWAIN-compliant apps"],
            fileFormats: ["TIFF", "PDF", "JPEG"],
            scanDestinations: ["Email", "Desktop", "FTP", "Network folder (SMB)", "USB drive"],
            
            // Connectivity
            connectivity: ["USB 2.0 (host, high-speed)", "Ethernet (10/100/1000Base-T)", "Optional Wireless LAN"],
            printLanguages: ["PCL 6 emulation", "Optional PostScript 3 emulation"],
            supportedOS: ["Windows 8.1, 10, 11", "Server 2012, 2012R2, 2016, 2019, 2022", "Mac OS 10.9 through 14"],
            protocols: ["TCP/IP", "LPR", "Raw TCP (port 9100)", "FTP print", "IPP", "SMB", "WSD"],
            
            // Physical Specifications
            dimensions: "599 × 608 × 643 mm",
            weight: "~34 kg",
            
            // Additional Features
            controlPanel: "5-line backlit LCD with red/green status LEDs",
            mobileSupport: ["AirPrint", "Google Cloud Print", "Sharpdesk Mobile"],
            securityFeatures: ["Intrusion detection", "Access control", "Data encryption", "Self-healing firmware", "SSL certificate validation", "Execution white list", "Up to 30 user authentications"],
            energyFeatures: ["ENERGY STAR compliant", "Network standby power only 0.5 W", "Auto Power Shut-off"],
            monthlyVolume: "50,000 pages"
          },
          brochureUrl: "/assets/pdfs/BP-20M31-20M28.pdf",
          imageUrl: "/assets/bp-20m22-24.jpeg"
        },
        {
          name: "Sharp BP-20M24",
          speed: "24 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Growing Team Ready", "Energy Efficient"],
          description: "SHARP BP 20M24, 24 PPM Mono Multifunction Print Copy & Scan, Automatic Reverse Document Feeder, Color Mobile Scanning 37 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 1 tray + 100 sheet Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            // General Specifications
            type: "Desktop A3 B/W MFP",
            printSpeed: {
              a4: "24 ppm",
              a3: "13 ppm"
            },
            resolution: "600 × 600 dpi",
            memory: "1 GB (shared between copy and print)",
            storage: "Built-in",
            warmUpTime: "~25 seconds",
            powerConsumption: "Max 1.2 kW",
            
            // Paper Handling
            paperCapacityExtended: {
              standard: "350 sheets (250-sheet tray + 100-sheet bypass)",
              maximum: "1,850 sheets with optional trays"
            },
            paperSizes: ["A6", "A5", "A4", "Legal", "A3"],
            paperWeight: {
              tray1: "60–105 g/m²",
              otherTrays: "60–200 g/m²",
              bypass: "55–200 g/m²"
            },
            
            // Copy Specifications
            copySpeed: "24 ppm",
            firstCopyOut: "6.2 seconds",
            continuousCopy: "Up to 999 pages",
            copyResolution: "600 × 600 dpi",
            zoomRange: "25–400% (25–200% using RSPF) in 1% increments",
            copyFunctions: ["ID Card Copy", "2-in-1/4-in-1 copying", "Centering", "Auto paper selection", "Rotation sort"],
            
            // Scanning Specifications
            documentFeeder: "100-sheet RSPF (Reversing Single Pass Feeder)",
            scannerSpeed: "37 originals per minute (one-sided)",
            scanResolution: "100, 150, 200, 300, 400, 600 dpi (Push scan); Up to 600 dpi (Pull scan)",
            scanMethods: ["Push scan via control panel", "Pull scan via TWAIN-compliant apps"],
            fileFormats: ["TIFF", "PDF", "JPEG"],
            scanDestinations: ["Email", "Desktop", "FTP", "Network folder (SMB)", "USB drive"],
            
            // Connectivity
            connectivity: ["USB 2.0 (host, high-speed)", "Ethernet (10/100/1000Base-T)", "Optional Wireless LAN"],
            printLanguages: ["PCL 6 emulation", "Optional PostScript 3 emulation"],
            supportedOS: ["Windows 8.1, 10, 11", "Server 2012, 2012R2, 2016, 2019, 2022", "Mac OS 10.9 through 14"],
            protocols: ["TCP/IP", "LPR", "Raw TCP (port 9100)", "FTP print", "IPP", "SMB", "WSD"],
            
            // Physical Specifications
            dimensions: "599 × 608 × 643 mm",
            weight: "~34 kg",
            
            // Additional Features
            controlPanel: "5-line backlit LCD with red/green status LEDs",
            mobileSupport: ["AirPrint", "Google Cloud Print", "Sharpdesk Mobile"],
            securityFeatures: ["Intrusion detection", "Access control", "Data encryption", "Self-healing firmware", "SSL certificate validation", "Execution white list", "Up to 30 user authentications"],
            energyFeatures: ["ENERGY STAR compliant", "Network standby power only 0.5 W", "Auto Power Shut-off"],
            monthlyVolume: "60,000 pages"
          },
          brochureUrl: "/assets/pdfs/BP-20M31-20M28.pdf",
          imageUrl: "/assets/bp-20m22-24.jpeg"
        },
        {
          name: "Sharp BP-20M24LT",
          speed: "24 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Compact Design", "Energy Efficient"],
          description: "SHARP BP 20M24LT, 24 PPM Mono Multifunction Print Copy & Scan, Platen Cover, Color Mobile Scanning 37 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 1 tray + 100 sheet Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "1 GB RAM",
            storage: "Built-in",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "60,000 pages",
            firstCopyOut: "6.2 sec",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm",
            dimensions: "599 × 608 × 643 mm",
            weight: "~34 kg"
          },
          brochureUrl: "/assets/pdfs/BP-20M31-20M28.pdf",
          imageUrl: "/assets/bp-20m22-24.jpeg"
        },
        {
          name: "Sharp BP-20M28",
          speed: "28 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Energy Saving", "Enhanced Security"],
          description: "SHARP BP 20M28, 28 PPM Mono Multifunction Print Copy & Scan, Automatic Reverse Document Feeder, Color Mobile Scanning 37 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 2 tray + 100 sheet Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "1 GB RAM",
            storage: "Built-in",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "80,000 pages",
            firstCopyOut: "5.9 sec",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm",
            dimensions: "599 × 608 × 643 mm",
            weight: "~34 kg"
          },
          brochureUrl: "/assets/pdfs/BP-20M31-20M28.pdf",
          imageUrl: "/assets/bp-20m31-28.jpeg"
        },
        {
          name: "Sharp BP-20M31",
          speed: "31 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enhanced Security", "High Performance"],
          description: "SHARP BP 20M31, 31 PPM Mono Multifunction Print Copy & Scan, Automatic Reverse Document Feeder, Color Mobile Scanning 37 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 2 tray + 100 sheet Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "1 GB RAM",
            storage: "Built-in",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "100,000 pages",
            firstCopyOut: "5.7 sec",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm",
            dimensions: "599 × 608 × 643 mm",
            weight: "~34 kg"
          },
          brochureUrl: "/assets/pdfs/BP-20M31-20M28.pdf",
          imageUrl: "/assets/bp-20m31-28.jpeg"
        },
        {
          name: "Sharp BP-20M28T",
          speed: "28 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Energy Saving", "Enhanced Security"],
          description: "SHARP BP 20M28, 28 PPM Mono Multifunction Print Copy & Scan, Automatic Reverse Document Feeder, Color Mobile Scanning 37 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 2 tray + 100 sheet Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "1 GB RAM",
            storage: "Built-in",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "80,000 pages",
            firstCopyOut: "5.9 sec",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm",
            dimensions: "599 × 608 × 643 mm",
            weight: "~34 kg"
          },
          brochureUrl: "/assets/pdfs/BP-20M31-20M28.pdf",
          imageUrl: "/assets/bp-20m31-28.jpeg"
        },
        {
          name: "Sharp BP-30M28",
          speed: "28 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enhanced Workflow", "Professional Grade"],
          description: "SHARP BP 30M28, 28 PPM Mono Multifunction Print Copy & Scan, 7 inch Touch panel, 4 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 60 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 2 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "2 GB RAM",
            storage: "160 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid"],
            monthlyVolume: "80,000 pages",
            firstCopyOut: "5.5 sec",
            paperCapacity: "500 sheets (max 2100)",
            scannerSpeed: "45 ipm",
            dimensions: "620 × 650 × 680 mm",
            weight: "~42 kg"
          },
          brochureUrl: "/assets/pdfs/BP-30M35.pdf",
          imageUrl: "/assets/bp-30m28.jpeg"
        },
        {
          name: "Sharp BP-30M31",
          speed: "31 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Advanced Security", "High Volume"],
          description: "SHARP BP 30M31, 31 PPM Mono Multifunction Print Copy & Scan, 7 inch Touch panel, 4 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 60 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 2 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "2 GB RAM",
            storage: "160 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid"],
            monthlyVolume: "100,000 pages",
            firstCopyOut: "5.3 sec",
            paperCapacity: "500 sheets (max 2100)",
            scannerSpeed: "45 ipm",
            dimensions: "620 × 650 × 680 mm",
            weight: "~42 kg"
          },
          brochureUrl: "/assets/pdfs/BP-30M35.pdf",
          imageUrl: "/assets/bp-30m31-35.jpeg"
        },
        {
          name: "Sharp BP-30M35",
          speed: "35 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Ready", "Advanced Finishing"],
          description: "SHARP BP 30M35, 35 PPM Mono Multifunction Print Copy & Scan, 7 inch Touch panel, 4 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 60 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 2 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "2 GB RAM",
            storage: "160 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid"],
            monthlyVolume: "120,000 pages",
            firstCopyOut: "5.1 sec",
            paperCapacity: "500 sheets (max 2100)",
            scannerSpeed: "45 ipm",
            dimensions: "620 × 650 × 680 mm",
            weight: "~42 kg"
          },
          brochureUrl: "/assets/pdfs/BP-30M35.pdf",
          imageUrl: "/assets/bp-30m31-35.jpeg"
        },
        {
          name: "Sharp BP-50M45",
          speed: "45 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enterprise Grade", "Advanced Workflow"],
          description: "SHARP BP 50M45, 45 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "4 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2"],
            monthlyVolume: "150,000 pages",
            firstCopyOut: "4.8 sec",
            paperCapacity: "750 sheets (max 3100)",
            scannerSpeed: "55 ipm",
            dimensions: "650 × 680 × 720 mm",
            weight: "~55 kg"
          },
          brochureUrl: "/assets/pdfs/BP-50M.pdf",
          imageUrl: "/assets/bp-50m45-55-65.jpeg"
        },
        {
          name: "Sharp BP-50M55",
          speed: "55 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "High Performance", "Advanced Security"],
          description: "SHARP BP 50M55, 55 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "4 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2"],
            monthlyVolume: "180,000 pages",
            firstCopyOut: "4.5 sec",
            paperCapacity: "750 sheets (max 3100)",
            scannerSpeed: "55 ipm",
            dimensions: "650 × 680 × 720 mm",
            weight: "~55 kg"
          },
          brochureUrl: "/assets/pdfs/BP-50M.pdf",
          imageUrl: "/assets/bp-50m45-55-65.jpeg"
        },
        {
          name: "Sharp BP-50M65",
          speed: "65 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Grade", "Advanced Finishing"],
          description: "SHARP BP 50M65, 65 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "4 GB RAM",
            storage: "320 GB HDD",
            connectivity: ["USB 2.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2"],
            monthlyVolume: "200,000 pages",
            firstCopyOut: "4.2 sec",
            paperCapacity: "750 sheets (max 3100)",
            scannerSpeed: "55 ipm",
            dimensions: "650 × 680 × 720 mm",
            weight: "~55 kg"
          },
          brochureUrl: "/assets/pdfs/BP-50M.pdf",
          imageUrl: "/assets/bp-50m45-55-65.jpeg"
        },
        {
          name: "Sharp BP-70M45",
          speed: "45 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enterprise Grade", "Advanced Workflow"],
          description: "SHARP BP 70M45, 45 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "200,000 pages",
            firstCopyOut: "4.0 sec",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm",
            dimensions: "680 × 720 × 750 mm",
            weight: "~68 kg"
          },
          brochureUrl: "/assets/pdfs/BP-70M45.pdf",
          imageUrl: "/assets/bp-70m45-55-65.jpeg"
        },
        {
          name: "Sharp BP-70M55",
          speed: "55 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "High Performance", "Advanced Security"],
          description: "SHARP BP 70M55, 55 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "250,000 pages",
            firstCopyOut: "3.8 sec",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm",
            dimensions: "680 × 720 × 750 mm",
            weight: "~68 kg"
          },
          brochureUrl: "/assets/pdfs/BP-70M45.pdf",
          imageUrl: "/assets/bp-70m45-55-65.jpeg"
        },
        {
          name: "Sharp BP-70M65",
          speed: "65 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Grade", "Advanced Finishing"],
          description: "SHARP BP 70M65, 65 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "300,000 pages",
            firstCopyOut: "3.5 sec",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm",
            dimensions: "680 × 720 × 750 mm",
            weight: "~68 kg"
          },
          brochureUrl: "/assets/pdfs/BP-70M65.pdf",
          imageUrl: "/assets/bp-70m45-55-65.jpeg"
        },
        {
          name: "Sharp BP-70M75",
          speed: "75 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Ultra High Performance", "Advanced Security"],
          description: "SHARP BP 70M75, 75 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "350,000 pages",
            firstCopyOut: "3.2 sec",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm",
            dimensions: "680 × 720 × 750 mm",
            weight: "~68 kg"
          },
          brochureUrl: "/brochures/sharp-bp-70m75.pdf",
          imageUrl: "/assets/bp-70m75.jpeg"
        },
        {
          name: "Sharp BP-70M90",
          speed: "90 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Ultra High Performance", "Production Grade"],
          description: "SHARP BP 70M90, 90 PPM Mono Multifunction Print Copy & Scan, 10.1 inch Touch panel, 5 GB RAM, 128 GB SSD Automatic Reverse Document Feeder, Color Mobile Scanning 80 IPM, Scan Directly to Your PC, USB, Duplexing (Save Your Paper), Rotate Sort (For Set Making), Standard 500 x 1 Tray + 100 Sheets Bypass, Auto Tray Selection, Auto Reduction & Enlargement, Mobile Printing (Print from your mobile Word, Excel, PDF, PPT & Picture), Toner Saver Mode, High Toner Yield.",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "8 GB RAM",
            storage: "500 GB HDD",
            connectivity: ["USB 3.0", "Ethernet", "Wi-Fi", "Mobile Printing", "Cloud Integration", "Bluetooth"],
            paperSizes: ["A3", "A4", "A5", "Legal", "Tabloid", "A2", "A1"],
            monthlyVolume: "400,000 pages",
            firstCopyOut: "3.0 sec",
            paperCapacity: "1000 sheets (max 4100)",
            scannerSpeed: "65 ipm",
            dimensions: "680 × 720 × 750 mm",
            weight: "~68 kg"
          },
          brochureUrl: "/assets/pdfs/BP-70M90.pdf",
          imageUrl: "/assets/bp-70m90.jpeg"
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
    // Open brochure in new tab
    window.open(brochureUrl, '_blank');
  };

  const openProductDetails = (product: Product, brand: string, type: string) => {
    setSelectedProduct({ ...product, brand, type });
    setIsDetailsOpen(true);
  };

  const toggleBrandExpanded = (brand: string) => {
    setExpandedBrands(prev => ({
      ...prev,
      [brand]: !prev[brand]
    }));
  };

  const renderProducts = (brand: keyof typeof products) => {
    const brandProducts = products[brand];
    const colorProducts = selectedCategory === "all" || selectedCategory === "color" ? brandProducts.color : [];
    const monoProducts = selectedCategory === "all" || selectedCategory === "mono" ? brandProducts.mono : [];
    const isExpanded = expandedBrands[brand] || false;
    
    const renderProductGrid = (products: Product[], type: string, brandKey: string) => {
      if (products.length === 0) return null;
      
      const displayProducts = isExpanded ? products : products.slice(0, 4);
      const hasMoreProducts = products.length > 4;
      
      return (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-1 h-8 rounded-full ${
              type === "Monochrome" 
                ? "bg-gradient-to-b from-gray-500 to-gray-700" 
                : "bg-gradient-to-b from-blue-500 to-indigo-500"
            }`}></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {type} Printers
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                brand={brandKey} 
                type={type} 
                onEnquire={() => navigate('/contact')}
                onDetails={() => openProductDetails(product, brandKey, type)}
                onDownloadBrochure={() => handleDownloadBrochure(product.brochureUrl, product.name)}
              />
            ))}
          </div>
          {hasMoreProducts && (
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                onClick={() => toggleBrandExpanded(brand)}
                className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300"
              >
                {isExpanded ? "Show Less" : `View All ${products.length} Products`}
              </Button>
            </div>
          )}
        </div>
      );
    };
    
    return (
      <div className="space-y-12">
        {renderProductGrid(monoProducts, "Monochrome", brand)}
        {renderProductGrid(colorProducts, "Color", brand)}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Premium Printer Solutions
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Products
          </h1>
          
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of printers from leading brands, designed to meet all your business needs
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm opacity-80">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              Sharp • Ricoh • Kyocera
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              Color & Monochrome
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              Professional Grade
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Filter Products</h2>
            <p className="text-gray-600 dark:text-gray-400">Choose your preferred printer type</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === "all" 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg" 
                  : "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
              }`}
            >
              All Products
            </Button>
            <Button 
              variant={selectedCategory === "color" ? "default" : "outline"}
              onClick={() => setSelectedCategory("color")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === "color" 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg" 
                  : "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
              }`}
            >
              Color Printers
            </Button>
            <Button 
              variant={selectedCategory === "mono" ? "default" : "outline"}
              onClick={() => setSelectedCategory("mono")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === "mono" 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg" 
                  : "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
              }`}
            >
              Monochrome Printers
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="sharp" className="w-full">
            {/* <TabsList className="grid w-full grid-cols-3 mb-12 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <TabsTrigger 
                value="sharp" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
              >
                Sharp
              </TabsTrigger>
              <TabsTrigger 
                value="ricoh" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
              >
                Ricoh
              </TabsTrigger>
              <TabsTrigger 
                value="kyocera" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
              >
                Kyocera
              </TabsTrigger>
            </TabsList> */}
            
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
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {selectedProduct?.name}
            </DialogTitle>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline" className="capitalize bg-blue-50 text-blue-700 border-blue-200">
                {selectedProduct?.brand}
              </Badge>
              <Badge variant={selectedProduct?.type === "Color" ? "default" : "secondary"}>
                {selectedProduct?.type}
              </Badge>
              {selectedProduct?.features.includes("A3 Capable") && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  A3 Capable
                </Badge>
              )}
            </div>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="space-y-8">
              {/* Product Overview */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Product Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 rounded-xl flex items-center justify-center overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                    {selectedProduct.imageUrl ? (
                      <img 
                        src={selectedProduct.imageUrl} 
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback Placeholder */}
                    <div className={`text-6xl font-bold text-muted-foreground capitalize ${selectedProduct.imageUrl ? 'hidden' : ''}`}>
                      {selectedProduct.brand}
                    </div>
                  </div>
                </div>
                
                {/* Product Description */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProduct.features?.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Specifications */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Detailed Specifications
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* General Specifications */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        General Specifications
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Type:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.type || "Multifunction Printer"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Print Speed (A4):</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.printSpeed?.a4 || selectedProduct.speed}</span>
                        </div>
                        {selectedProduct.detailedSpecs?.printSpeed?.a3 && (
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Print Speed (A3):</span>
                            <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs.printSpeed.a3}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Resolution:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.resolution}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Memory:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.memory}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Storage:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.storage}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Warm-up Time:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.warmUpTime || "~25 seconds"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Power Consumption:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.powerConsumption || "Max 1.2 kW"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Monthly Volume:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.monthlyVolume}</span>
                        </div>
                      </div>
                    </div>

                    {/* Paper Handling */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Paper Handling
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Standard Capacity:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.paperCapacityExtended?.standard || selectedProduct.detailedSpecs?.paperCapacity || "350 sheets"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Maximum Capacity:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.paperCapacityExtended?.maximum || "1,850 sheets"}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Paper Sizes:</span>
                          <div className="flex flex-wrap gap-1">
                            {selectedProduct.detailedSpecs?.paperSizes?.map((size: string, index: number) => (
                              <Badge key={index} variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {selectedProduct.detailedSpecs?.paperWeight && (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700 dark:text-gray-300">Tray 1 Weight:</span>
                              <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs.paperWeight.tray1}</span>
                            </div>
                            {selectedProduct.detailedSpecs.paperWeight.otherTrays && (
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-700 dark:text-gray-300">Other Trays:</span>
                                <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs.paperWeight.otherTrays}</span>
                              </div>
                            )}
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700 dark:text-gray-300">Bypass Tray:</span>
                              <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs.paperWeight.bypass}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Copy & Scan Specifications */}
                  <div className="space-y-6">
                    {/* Copy Specifications */}
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-100 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Copy Specifications
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Copy Speed:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.copySpeed || selectedProduct.speed}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">First Copy Out:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.firstCopyOut || "6.4 seconds"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Continuous Copy:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.continuousCopy || "Up to 999 pages"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Copy Resolution:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.copyResolution || "600 × 600 dpi"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Zoom Range:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.zoomRange || "25–400%"}</span>
                        </div>
                        {selectedProduct.detailedSpecs?.copyFunctions && (
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Copy Functions:</span>
                            <div className="space-y-1">
                              {selectedProduct.detailedSpecs.copyFunctions.map((func: string, index: number) => (
                                <div key={index} className="text-gray-600 dark:text-gray-400">• {func}</div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Scanning Specifications */}
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-orange-900 dark:text-orange-100 flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        Scanning Specifications
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Document Feeder:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.documentFeeder || "100-sheet RSPF"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Scanner Speed:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.scannerSpeed || "37 ipm"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Scan Resolution:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.scanResolution || "Up to 600 dpi"}</span>
                        </div>
                        {selectedProduct.detailedSpecs?.fileFormats && (
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">File Formats:</span>
                            <div className="flex flex-wrap gap-1">
                              {selectedProduct.detailedSpecs.fileFormats.map((format: string, index: number) => (
                                <Badge key={index} variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50">
                                  {format}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedProduct.detailedSpecs?.scanDestinations && (
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Scan Destinations:</span>
                            <div className="space-y-1">
                              {selectedProduct.detailedSpecs.scanDestinations.map((dest: string, index: number) => (
                                <div key={index} className="text-gray-600 dark:text-gray-400">• {dest}</div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Specifications */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Connectivity & Software */}
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      Connectivity & Software
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Connectivity:</span>
                        <div className="space-y-1">
                          {selectedProduct.detailedSpecs?.connectivity?.map((conn: string, index: number) => (
                            <div key={index} className="text-gray-600 dark:text-gray-400">• {conn}</div>
                          ))}
                        </div>
                      </div>
                      {selectedProduct.detailedSpecs?.printLanguages && (
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Print Languages:</span>
                          <div className="space-y-1">
                            {selectedProduct.detailedSpecs.printLanguages.map((lang: string, index: number) => (
                              <div key={index} className="text-gray-600 dark:text-gray-400">• {lang}</div>
                            ))}
                          </div>
                        </div>
                      )}
                      {selectedProduct.detailedSpecs?.supportedOS && (
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Supported OS:</span>
                          <div className="space-y-1">
                            {selectedProduct.detailedSpecs.supportedOS.map((os: string, index: number) => (
                              <div key={index} className="text-gray-600 dark:text-gray-400">• {os}</div>
                            ))}
                          </div>
                        </div>
                      )}
                      {selectedProduct.detailedSpecs?.mobileSupport && (
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Mobile Support:</span>
                          <div className="space-y-1">
                            {selectedProduct.detailedSpecs.mobileSupport.map((mobile: string, index: number) => (
                              <div key={index} className="text-gray-600 dark:text-gray-400">• {mobile}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Physical & Security */}
                  <div className="space-y-6">
                    {/* Physical Specifications */}
                    <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950 dark:to-slate-950 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        Physical Specifications
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Dimensions:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.dimensions}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">Weight:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs?.weight}</span>
                        </div>
                        {selectedProduct.detailedSpecs?.controlPanel && (
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Control Panel:</span>
                            <span className="text-gray-900 dark:text-white">{selectedProduct.detailedSpecs.controlPanel}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Security & Energy */}
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-100 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Security & Energy
                      </h4>
                      <div className="space-y-3 text-sm">
                        {selectedProduct.detailedSpecs?.securityFeatures && (
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Security Features:</span>
                            <div className="space-y-1">
                              {selectedProduct.detailedSpecs.securityFeatures.map((security: string, index: number) => (
                                <div key={index} className="text-gray-600 dark:text-gray-400">• {security}</div>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedProduct.detailedSpecs?.energyFeatures && (
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Energy Features:</span>
                            <div className="space-y-1">
                              {selectedProduct.detailedSpecs.energyFeatures.map((energy: string, index: number) => (
                                <div key={index} className="text-gray-600 dark:text-gray-400">• {energy}</div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button onClick={() => navigate('/contact')} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Enquire Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleDownloadBrochure(selectedProduct.brochureUrl, selectedProduct.name)}
                  className="flex-1 gap-2 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
                >
                  <Download className="w-4 h-4" />
                   Brochure
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
  product: Product, 
  brand: string, 
  type: string,
  onEnquire: () => void,
  onDetails: () => void,
  onDownloadBrochure: () => void
}) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Brand Badge */}
      {/* <div className="absolute top-4 right-4 z-10">
        <Badge 
          variant="outline" 
          className="capitalize bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 font-medium px-3 py-1"
        >
          {brand}
        </Badge>
      </div> */}

      {/* Type Badge */}
      {/* <div className="absolute top-4 left-4 z-10">
        <Badge 
          variant={type === "Color" ? "default" : "secondary"}
          className="font-medium px-3 py-1 shadow-sm"
        >
          {type}
        </Badge>
      </div> */}

      {/* A3 Capability Badge */}
      {/* {product.features.includes("A3 Capable") && (
        <div className="absolute top-16 left-4 z-10">
          <Badge 
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 font-medium px-3 py-1 shadow-sm"
          >
            A3 Capable
          </Badge>
        </div>
      )} */}

      {/* Product Image */}
      <div className="relative overflow-hidden">
        {product.imageUrl ? (
           <img 
  src={product.imageUrl} 
  alt={product.name}
  className="aspect-[4/3] w-full object-contain transition-transform duration-500"
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    target.nextElementSibling?.classList.remove('hidden');
  }}
/>
        ) : null}
        
        {/* Fallback Placeholder */}
         <div className={`aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 flex items-center justify-center transition-transform duration-500 ${product.imageUrl ? 'hidden' : ''}`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1 capitalize">
              {brand}
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {product.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 leading-relaxed">
          {product.description}
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Primary Actions Row */}
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 h-8 text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
              onClick={onEnquire}
            >
              Enquire
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 h-8 text-xs border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300" 
              onClick={onDetails}
            >
              Details
            </Button>
          </div>
          
          {/* Download Button */}
          <Button 
            size="sm" 
            className="flex-1 w-full h-8 text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
            onClick={onDownloadBrochure}
          >
            <FileText className="w-3 h-3 group-hover/brochure:scale-110 transition-transform duration-300" />
             Brochure
          </Button>
        </div>
      </CardContent>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </Card>
  );
};

export default Products;
