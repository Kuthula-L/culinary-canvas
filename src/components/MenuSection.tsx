import { useState } from 'react';
import dishStarter from '@/assets/dish-starter.jpg';
import dishPasta from '@/assets/dish-pasta.jpg';
import dishSalmon from '@/assets/dish-salmon.jpg';
import dishDessert from '@/assets/dish-dessert.jpg';
import dishCocktail from '@/assets/dish-cocktail.jpg';
import heroFood from '@/assets/hero-food.jpg';

const categories = ['All', 'Starters', 'Main Courses', 'Desserts', 'Drinks'];

const menuItems = [
  {
    name: 'Tomato Bruschetta',
    description: 'Fresh tomatoes, basil, garlic on toasted bread',
    price: '$14',
    category: 'Starters',
    image: dishStarter,
  },
  {
    name: 'Beef Carpaccio',
    description: 'Thinly sliced beef with arugula and parmesan',
    price: '$18',
    category: 'Starters',
    image: heroFood,
  },
  {
    name: 'Truffle Pasta',
    description: 'Handmade fettuccine with black truffle cream',
    price: '$38',
    category: 'Main Courses',
    image: dishPasta,
  },
  {
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with lemon butter sauce',
    price: '$45',
    category: 'Main Courses',
    image: dishSalmon,
  },
  {
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with vanilla ice cream',
    price: '$18',
    category: 'Desserts',
    image: dishDessert,
  },
  {
    name: 'Crème Brûlée',
    description: 'Classic French dessert with caramelized sugar',
    price: '$15',
    category: 'Desserts',
    image: dishDessert,
  },
  {
    name: 'Golden Sunset',
    description: 'Our signature cocktail with aged whiskey',
    price: '$16',
    category: 'Drinks',
    image: dishCocktail,
  },
  {
    name: 'Espresso Martini',
    description: 'Coffee-infused vodka with premium espresso',
    price: '$14',
    category: 'Drinks',
    image: dishCocktail,
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4 block">
            Discover
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6">
            Our <span className="text-primary italic">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, crafted with passion
            and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="group flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover-lift"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-medium text-foreground truncate">
                    {item.name}
                  </h3>
                  <span className="text-primary font-semibold flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
                <span className="text-xs text-primary/70 uppercase tracking-wider mt-2 block">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
