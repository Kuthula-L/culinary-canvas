import chefImage from '@/assets/chef.jpg';
import { Award, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '50K+', label: 'Happy Guests' },
  { icon: Clock, value: '7', label: 'Days a Week' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={chefImage}
                alt="Our head chef"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow max-w-[200px]">
              <span className="font-heading text-4xl font-bold">25+</span>
              <p className="text-sm mt-1 opacity-90">Award Winning Recipes</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-up">
              Our Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6 animate-fade-up delay-100">
              A Legacy of{' '}
              <span className="text-primary italic">Culinary Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-6 animate-fade-up delay-200">
              Founded in 2008, Cuisine Wave has been at the forefront of
              innovative gastronomy. Our philosophy is simple: source the finest
              ingredients, honor traditional techniques, and create memorable
              experiences for every guest.
            </p>
            <p className="text-muted-foreground mb-10 animate-fade-up delay-300">
              Under the guidance of Executive Chef Marcus Laurent, our kitchen
              team transforms seasonal produce into extraordinary dishes that
              celebrate both local flavors and global influences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-up delay-400">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="font-heading text-2xl font-bold text-foreground block">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
