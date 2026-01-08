import { Shield, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Original Tyres Only",
    description: "No fakes. No compromises. Every tyre is verified for quality and authenticity.",
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    description: "Same-day delivery across Lagos Mainland & Island. Your tyres, at your doorstep.",
  },
  {
    icon: Award,
    title: "Trusted & Tested",
    description: "Dozens of real 5-star reviews from satisfied customers across Lagos.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-gradient-gold">JOHN TYRES</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            When it comes to tyres in Lagos, we set the gold standard for quality, service, and trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100+", label: "Happy Customers" },
            { value: "5★", label: "Google Rating" },
            { value: "Same Day", label: "Delivery" },
            { value: "10+", label: "Brands Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
