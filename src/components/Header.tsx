import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/john-tyres-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="John Tyres Nigeria" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#areas" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Service Areas</a>
            <a href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Reviews</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="heroOutline" size="sm" asChild>
              <a href="tel:09015464002">
                <Phone className="w-4 h-4" />
                0901 546 4002
              </a>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a href="http://wa.me/09015464002" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <nav className="flex flex-col gap-4 mb-4">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Why Us</a>
              <a href="#areas" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Service Areas</a>
              <a href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Reviews</a>
            </nav>
            <div className="flex flex-col gap-2">
              <Button variant="heroOutline" size="sm" asChild className="w-full">
                <a href="tel:09015464002">
                  <Phone className="w-4 h-4" />
                  0901 546 4002
                </a>
              </Button>
              <Button variant="whatsapp" size="sm" asChild className="w-full">
                <a href="http://wa.me/09015464002" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
