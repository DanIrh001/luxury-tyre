import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mariam Ajibaye",
    text: "Awesome product and customer care by the beautiful lady she's got. I'm definitely patronizing this company same other time.",
    rating: 5,
  },
  {
    name: "Clement Adejobi",
    text: "Excellent alignment and their service was superb. Will refer them to my friends and family for their installers in car care.",
    rating: 5,
  },
  {
    name: "Patrick George",
    text: "I am happy with the service. Mr. Tunde did a wonderful job on my three cars, all thanks to carbon car care.",
    rating: 5,
  },
  {
    name: "Emmanuel Okon",
    text: "Original tyres delivered same day to my office in Lekki. Best tyre dealer in Lagos hands down!",
    rating: 5,
  },
  {
    name: "Chioma Nwankwo",
    text: "Tested and trusted! Got my Michelin tyres at an amazing price. Swift delivery and excellent customer service.",
    rating: 5,
  },
  {
    name: "David Adeleke",
    text: "Finally found a reliable tyre plug in Lagos. 100% original and they delivered to my house on the island.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Lagos drivers say about JOHN TYRES.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-muted-foreground mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
