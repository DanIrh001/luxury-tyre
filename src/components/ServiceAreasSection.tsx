import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Yaba",
  "Lekki",
  "Ikoyi",
  "Ikeja",
  "Ilupeju",
  "Magodo",
  "Ajah",
  "Victoria Island",
  "Surulere",
  "Gbagada",
  "Maryland",
  "Ogudu",
];

const ServiceAreasSection = () => {
  return (
    <section id="areas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Delivering Across{" "}
              <span className="text-gradient-gold">All Lagos</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're on the Mainland or Island, we've got you covered. Our delivery network spans all major areas in Lagos.
            </p>
            
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl mb-6">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Find a Tyre Dealer Near You</p>
                <p className="text-sm text-muted-foreground">Best tyre prices in Lagos • Original tyres only</p>
              </div>
            </div>
          </div>

          {/* Right - Areas Grid */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {areas.map((area) => (
                <div 
                  key={area}
                  className="flex items-center gap-2 p-3 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Not listed?</strong> Don't worry — we deliver to any location in Lagos. Call or WhatsApp to confirm your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
