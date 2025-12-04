import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gourmet steak dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-primary font-medium text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up">
            Fine Dining Experience
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Where Every Dish{' '}
            <span className="text-primary italic">Tells a Story</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 animate-fade-up delay-200">
            Experience culinary artistry at its finest. Our award-winning chefs
            craft exceptional dishes using the freshest seasonal ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a href="#menu" className="btn-gold inline-flex items-center justify-center gap-2">
              Explore Menu
              <ArrowRight size={18} />
            </a>
            <a href="#reservation" className="btn-outline-gold inline-flex items-center justify-center">
              Book a Table
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
