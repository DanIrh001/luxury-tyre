import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">JT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">JOHN TYRES</h3>
                <p className="text-xs text-muted-foreground">Premium Tyres Lagos</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Lagos' most trusted tyre dealer. We supply 100% original tyres from top global brands with swift delivery across Lagos Mainland and Island.
            </p>
            <div className="flex gap-4">
              <a href="http://wa.me/09015464002" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:09015464002" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Why Us</a></li>
              <li><a href="#areas" className="hover:text-primary transition-colors">Service Areas</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:09015464002" className="hover:text-primary transition-colors">0901 546 4002</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="http://wa.me/09015464002" className="hover:text-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>164 Herbert Macaulay Wy, off MRS fueling station, Yaba, Lagos</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 JOHN TYRES Nigeria. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">
            Trusted Tyre Dealer in Lagos
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;