import { Star } from 'lucide-react';
import dishPasta from '@/assets/dish-pasta.jpg';
import dishSalmon from '@/assets/dish-salmon.jpg';
import dishDessert from '@/assets/dish-dessert.jpg';

const featuredDishes = [
  {
    name: 'Truffle Pasta',
    description: 'Handmade pasta with black truffle and parmesan cream',
    price: '$38',
    image: dishPasta,
    rating: 4.9,
  },
  {
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with lemon butter and seasonal vegetables',
    price: '$45',
    image: dishSalmon,
    rating: 4.8,
  },
  {
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with vanilla ice cream and berry sauce',
    price: '$18',
    image: dishDessert,
    rating: 5.0,
  },
];

const FeaturedDishes = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-up">
            Our Specialties
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6 animate-fade-up delay-100">
            Featured <span className="text-primary italic">Dishes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
            Discover our chef's signature creations, carefully crafted to deliver
            an unforgettable dining experience.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.name}
              className="group bg-secondary rounded-2xl overflow-hidden hover-lift cursor-pointer"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-background/90 px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {dish.rating}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-semibold text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <a href="#menu" className="btn-outline-gold">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
