import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-tyres.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium Tyres" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-slide-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">100% Original Tyres Guaranteed</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Original Tyres.{" "}
            <span className="text-gradient-gold">Swift Delivery.</span>{" "}
            Trusted Across Lagos.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Buy 100% genuine tyres at the best prices — delivered fast to your home or office anywhere in Lagos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:09095060101">
                <Phone className="w-5 h-5" />
                Get Tyre Prices
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/2349095060101" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Rated by 100+ Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Fast Lagos Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">100% Original Only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
