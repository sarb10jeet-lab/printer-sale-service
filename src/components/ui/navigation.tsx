import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Download } from "lucide-react";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },      
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },

    // { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  
  const productCategories = {
    byType: {
      mono: [
        { name: "All Monochrome Printers", href: "/products?type=mono" },
        { name: "Sharp Monochrome Printers", href: "/products?brand=sharp&type=mono" },
        { name: "Ricoh Monochrome Printers", href: "/products?brand=ricoh&type=mono" },
        { name: "Kyocera Monochrome Printers", href: "/products?brand=kyocera&type=mono" }
      ],
      color: [
        { name: "All Color Printers", href: "/products?type=color" },
        { name: "Sharp Color Printers", href: "/products?brand=sharp&type=color" },
        { name: "Ricoh Color Printers", href: "/products?brand=ricoh&type=color" },
        { name: "Kyocera Color Printers", href: "/products?brand=kyocera&type=color" }
      ]
     
    },
    // byBrand: [
    //   { name: "Sharp Products", href: "/products?brand=sharp" },
    //   { name: "Ricoh Products", href: "/products?brand=ricoh" },
    //   { name: "Kyocera Products", href: "/products?brand=kyocera" },
    //   { name: "Fujifilm Products", href: "/products?brand=fujifilm" },
    // ]
  };

  const drivers = [
    { name: "Sharp Printer Drivers", downloadUrl: "https://global.sharp/restricted/print/select.html?view=2" },
    { name: "Ricoh Printer Drivers", downloadUrl: "https://share.google/cScBt05FlNZ1u68rc" },
    { name: "Kyocera Printer Drivers", downloadUrl: "https://share.google/3JqG0pQJNezMnqVOr" },
    { name: "Canon Printer Drivers", downloadUrl: "https://in.canon/en/support/download" },
    { name: "hp Printer Drivers", downloadUrl: "https://support.hp.com/in-en/drivers/printers" },
    { name: "fujifilm Printer Drivers", downloadUrl: "https://support-fb.fujifilm.com/setupSupport.do" },

    // { name: "Universal Print Drivers", downloadUrl: "/drivers/universal-drivers.zip" }
  ];

  const handleDriverDownload = (downloadUrl: string, driverName: string) => {
    // Check if it's an external URL (starts with http/https)
    if (downloadUrl.startsWith('http')) {
      // Open external links in a new tab
      window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Handle local downloads
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = driverName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const isActiveLink = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    return href !== "/" && location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-background shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/logo.jpeg" 
              alt="Total Office Solution Logo" 
              className=" w-14"
            />
            <div className="text-xl font-bold text-corporate-gray">
              Total Office Solution
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveLink("/")
                  ? "text-primary border-b-2 border-primary"
                  : "text-corporate-gray hover:text-primary"
              }`}
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <DropdownMenu open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                <DropdownMenuTrigger asChild>
                  <div className="gap-1 flex items-center cursor-pointer text-corporate-gray hover:text-primary transition-all duration-200 ease-in-out">
                    <span>Products</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ease-in-out ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-background shadow-lg z-50 transition-all duration-200 ease-in-out">
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="w-full">All Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-medium text-sm">By Type</DropdownMenuItem>
                  <DropdownMenuItem className="font-medium text-xs pl-4 text-muted-foreground">Monochrome Printers</DropdownMenuItem>
                  {productCategories.byType.mono.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="w-full pl-8 text-sm">{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-medium text-xs pl-4 text-muted-foreground">Color Printers</DropdownMenuItem>
                  {productCategories.byType.color.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="w-full pl-8 text-sm">{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                
                  {/* <DropdownMenuItem className="font-medium text-sm">By Brand</DropdownMenuItem>
                  {productCategories.byBrand.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="w-full pl-4">{item.name}</Link>
                    </DropdownMenuItem>
                  ))} */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Other navigation items */}
            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveLink(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-corporate-gray hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Downloads Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-corporate-gray hover:text-primary">
                  <Download className="w-4 h-4" />
                  Downloads
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background shadow-lg z-50">
                {/* <DropdownMenuItem asChild>
                  <Link to="/downloads" className="w-full">All Downloads</Link>
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-medium text-sm">Quick Downloads</DropdownMenuItem>
                {drivers.map((driver) => (
                  <DropdownMenuItem 
                    key={driver.name} 
                    onClick={() => handleDriverDownload(driver.downloadUrl, driver.name)}
                    className="cursor-pointer pl-4"
                  >
                    {driver.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors ml-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-corporate-gray hover:text-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "text-primary bg-secondary"
                      : "text-corporate-gray hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActiveLink("/products")
                    ? "text-primary bg-secondary"
                    : "text-corporate-gray hover:text-primary hover:bg-secondary"
                }`}
              >
                Products
              </Link>
              <Link
                to="/downloads"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActiveLink("/downloads")
                    ? "text-primary bg-secondary"
                    : "text-corporate-gray hover:text-primary hover:bg-secondary"
                }`}
              >
                Downloads
              </Link>
              <div className="px-3 py-2">
                <a 
                  href="tel:+919417901505"
                  className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
