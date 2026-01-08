import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Need New Tyres <span className="text-gradient-gold">Today?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Call or WhatsApp JOHN TYRES now for instant pricing and fast delivery anywhere in Lagos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:09015464002">
                <Phone className="w-5 h-5" />
                Call: 0901 546 4002
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="http://wa.me/09015464002" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Open 24 Hours · In-store Shopping · Pick-up · Delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
