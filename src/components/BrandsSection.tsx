const brands = [
  { name: "Michelin", logo: "MICHELIN" },
  { name: "Dunlop", logo: "DUNLOP" },
  { name: "Bridgestone", logo: "BRIDGESTONE" },
  { name: "Goodyear", logo: "GOODYEAR" },
  { name: "Continental", logo: "CONTINENTAL" },
  { name: "Pirelli", logo: "PIRELLI" },
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted Tyre Brands We Stock
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors duration-300 tracking-wider"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
