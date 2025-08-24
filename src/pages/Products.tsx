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
          brochureUrl: "/brochures/sharp-bp-20c20z.pdf",
          imageUrl: "/assets/images/sharp-bp-20c20z.svg"
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
          brochureUrl: "/brochures/sharp-bp-20c25z.pdf",
          imageUrl: "/assets/images/sharp-bp-20c25z.svg"
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
          brochureUrl: "/brochures/sharp-bp-22c20z.pdf",
          imageUrl: "/assets/images/sharp-bp-22c20z.svg"
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
          brochureUrl: "/brochures/sharp-bp-20c25.pdf",
          imageUrl: "/assets/images/sharp-bp-20c25.svg"
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
          brochureUrl: "/brochures/sharp-bp-30c25.pdf",
          imageUrl: "/assets/images/sharp-bp-30c25.svg"
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
          brochureUrl: "/brochures/sharp-bp-50c25.pdf",
          imageUrl: "/assets/images/sharp-bp-50c25.svg"
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
          brochureUrl: "/brochures/sharp-bp-50c31.pdf",
          imageUrl: "/assets/images/sharp-bp-50c31.svg"
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
          brochureUrl: "/brochures/sharp-bp-50c35.pdf",
          imageUrl: "/assets/images/sharp-bp-50c35.svg"
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
          brochureUrl: "/brochures/sharp-bp-70c45.pdf",
          imageUrl: "/assets/images/sharp-bp-70c45.svg"
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
          brochureUrl: "/brochures/sharp-bp-70c55.pdf",
          imageUrl: "/assets/images/sharp-bp-70c55.svg"
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
          brochureUrl: "/brochures/sharp-bp-70c65.pdf",
          imageUrl: "/assets/images/sharp-bp-70c65.svg"
        }
      ],
      mono: [
        {
          name: "Sharp BP-20M22",
          speed: "22 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Compact Design", "Energy Efficient"],
          description: "Entry-level A3 monochrome multifunction printer designed for small offices and workgroups with basic printing needs",
          detailedSpecs: {
            resolution: "600 x 600 dpi",
            memory: "1 GB RAM",
            storage: "Built-in",
            connectivity: ["USB 2.0", "Ethernet", "Optional Wi-Fi"],
            paperSizes: ["A3", "A4", "A5", "Legal"],
            monthlyVolume: "50,000 pages",
            firstCopyOut: "6.4 sec",
            paperCapacity: "350 sheets (max 1850)",
            scannerSpeed: "37 ipm",
            dimensions: "599 × 608 × 643 mm",
            weight: "~34 kg"
          },
          brochureUrl: "/brochures/sharp-bp-20m22.pdf",
          imageUrl: "/assets/images/sharp-bp-20m22.svg"
        },
        {
          name: "Sharp BP-20M24",
          speed: "24 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Growing Team Ready", "Energy Efficient"],
          description: "Slightly faster print speed for growing teams with moderate printing needs and A3 capability",
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
          brochureUrl: "/brochures/sharp-bp-20m24.pdf",
          imageUrl: "/assets/images/sharp-bp-20m24.svg"
        },
        {
          name: "Sharp BP-20M28",
          speed: "28 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Energy Saving", "Enhanced Security"],
          description: "Versatile A3 monochrome MFP for mid-sized offices with heavy workloads and advanced features",
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
          brochureUrl: "/brochures/sharp-bp-20m28.pdf",
          imageUrl: "/assets/images/sharp-bp-20m28.svg"
        },
        {
          name: "Sharp BP-20M31",
          speed: "31 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enhanced Security", "High Performance"],
          description: "Fastest in the BP-20M series for businesses with higher document volumes and security requirements",
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
          brochureUrl: "/brochures/sharp-bp-20m31.pdf",
          imageUrl: "/assets/images/sharp-bp-20m31.svg"
        },
        {
          name: "Sharp BP-30M28",
          speed: "28 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enhanced Workflow", "Professional Grade"],
          description: "Professional A3 monochrome MFP designed for medium-sized offices with advanced workflow requirements",
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
          brochureUrl: "/brochures/sharp-bp-30m28.pdf",
          imageUrl: "/assets/images/sharp-bp-30m28.svg"
        },
        {
          name: "Sharp BP-30M31",
          speed: "31 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Advanced Security", "High Volume"],
          description: "High-performance A3 monochrome MFP for busy offices requiring speed and security",
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
          brochureUrl: "/brochures/sharp-bp-30m31.pdf",
          imageUrl: "/assets/images/sharp-bp-30m31.svg"
        },
        {
          name: "Sharp BP-30M35",
          speed: "35 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Ready", "Advanced Finishing"],
          description: "Production-grade A3 monochrome MFP for high-volume environments with finishing capabilities",
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
          brochureUrl: "/brochures/sharp-bp-30m35.pdf",
          imageUrl: "/assets/images/sharp-bp-30m35.svg"
        },
        {
          name: "Sharp BP-50M45",
          speed: "45 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enterprise Grade", "Advanced Workflow"],
          description: "Enterprise-level A3 monochrome MFP for large offices with complex workflow requirements",
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
          brochureUrl: "/brochures/sharp-bp-50m45.pdf",
          imageUrl: "/assets/images/sharp-bp-50m45.svg"
        },
        {
          name: "Sharp BP-50M55",
          speed: "55 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "High Performance", "Advanced Security"],
          description: "High-speed A3 monochrome MFP for demanding environments requiring fast output and security",
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
          brochureUrl: "/brochures/sharp-bp-50m55.pdf",
          imageUrl: "/assets/images/sharp-bp-50m55.svg"
        },
        {
          name: "Sharp BP-50M65",
          speed: "65 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Grade", "Advanced Finishing"],
          description: "Production-level A3 monochrome MFP for high-volume printing with advanced finishing options",
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
          brochureUrl: "/brochures/sharp-bp-50m65.pdf",
          imageUrl: "/assets/images/sharp-bp-50m65.svg"
        },
        {
          name: "Sharp BP-70M45",
          speed: "45 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Enterprise Grade", "Advanced Workflow"],
          description: "Enterprise A3 monochrome MFP for large organizations with complex document workflows",
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
          brochureUrl: "/brochures/sharp-bp-70m45.pdf",
          imageUrl: "/assets/images/sharp-bp-70m45.svg"
        },
        {
          name: "Sharp BP-70M55",
          speed: "55 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "High Performance", "Advanced Security"],
          description: "High-performance A3 monochrome MFP for enterprise environments requiring speed and reliability",
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
          brochureUrl: "/brochures/sharp-bp-70m55.pdf",
          imageUrl: "/assets/images/sharp-bp-70m55.svg"
        },
        {
          name: "Sharp BP-70M65",
          speed: "65 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Production Grade", "Advanced Finishing"],
          description: "Production A3 monochrome MFP for high-volume environments with professional finishing capabilities",
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
          brochureUrl: "/brochures/sharp-bp-70m65.pdf",
          imageUrl: "/assets/images/sharp-bp-70m65.svg"
        },
        {
          name: "Sharp BP-70M75",
          speed: "75 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Ultra High Performance", "Advanced Security"],
          description: "Ultra-high-speed A3 monochrome MFP for enterprise environments with demanding throughput requirements",
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
          imageUrl: "/assets/images/sharp-bp-70m75.svg"
        },
        {
          name: "Sharp BP-70M90",
          speed: "90 ppm",
          features: ["A3 Capable", "Duplex Printing", "100-sheet RSPF Scanner", "Network Ready", "Ultra High Performance", "Production Grade"],
          description: "Ultra-high-speed A3 monochrome MFP for production environments requiring maximum throughput and reliability",
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
          brochureUrl: "/brochures/sharp-bp-70m90.pdf",
          imageUrl: "/assets/images/sharp-bp-70m90.svg"
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
                    {selectedProduct.detailedSpecs?.firstCopyOut && (
                      <div className="flex justify-between">
                        <span className="font-medium">First Copy Out:</span>
                        <span>{selectedProduct.detailedSpecs.firstCopyOut}</span>
                      </div>
                    )}
                    {selectedProduct.detailedSpecs?.paperCapacity && (
                      <div className="flex justify-between">
                        <span className="font-medium">Paper Capacity:</span>
                        <span>{selectedProduct.detailedSpecs.paperCapacity}</span>
                      </div>
                    )}
                    {selectedProduct.detailedSpecs?.scannerSpeed && (
                      <div className="flex justify-between">
                        <span className="font-medium">Scanner Speed:</span>
                        <span>{selectedProduct.detailedSpecs.scannerSpeed}</span>
                      </div>
                    )}
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
                    {selectedProduct.detailedSpecs?.dimensions && (
                      <div>
                        <span className="font-medium block mb-1">Dimensions:</span>
                        <div className="text-muted-foreground">{selectedProduct.detailedSpecs.dimensions}</div>
                      </div>
                    )}
                    {selectedProduct.detailedSpecs?.weight && (
                      <div>
                        <span className="font-medium block mb-1">Weight:</span>
                        <div className="text-muted-foreground">{selectedProduct.detailedSpecs.weight}</div>
                      </div>
                    )}
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
      <div className="absolute top-4 right-4 z-10">
        <Badge 
          variant="outline" 
          className="capitalize bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 font-medium px-3 py-1"
        >
          {brand}
        </Badge>
      </div>

      {/* Type Badge */}
      <div className="absolute top-4 left-4 z-10">
        <Badge 
          variant={type === "Color" ? "default" : "secondary"}
          className="font-medium px-3 py-1 shadow-sm"
        >
          {type}
        </Badge>
      </div>

      {/* A3 Capability Badge */}
      {product.features.includes("A3 Capable") && (
        <div className="absolute top-16 left-4 z-10">
          <Badge 
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 font-medium px-3 py-1 shadow-sm"
          >
            A3 Capable
          </Badge>
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden">
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        
        {/* Fallback Placeholder */}
        <div className={`aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ${product.imageUrl ? 'hidden' : ''}`}>
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
        <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <span className="font-medium">Speed: {product.speed}</span>
            </div>
            {product.features.includes("A3 Capable") && (
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>A3: {product.speed.includes("22") ? "12 ppm" : product.speed.includes("24") ? "13 ppm" : product.speed.includes("28") ? "14 ppm" : product.speed.includes("31") ? "15 ppm" : "N/A"}</span>
              </div>
            )}
            {product.features.slice(0, 2).map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
            {product.features.length > 2 && (
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                +{product.features.length - 2} more
              </div>
            )}
          </div>
        </div>
        
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
            variant="ghost" 
            className="w-full h-7 text-xs gap-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 group/download" 
            onClick={onDownloadBrochure}
          >
            <FileText className="w-3 h-3 group-hover/download:scale-110 transition-transform duration-300" />
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