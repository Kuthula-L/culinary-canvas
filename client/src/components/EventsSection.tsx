import { Calendar, Percent, Utensils } from 'lucide-react';
import interiorImage from '@/assets/restaurant-interior.jpg';

const events = [
  {
    icon: Calendar,
    title: "Chef's Table Experience",
    date: 'Every Saturday',
    description:
      'An intimate dining experience with our executive chef. Limited to 8 guests per evening.',
    tag: 'Exclusive',
  },
  {
    icon: Percent,
    title: 'Wine & Dine Wednesday',
    date: 'Every Wednesday',
    description:
      'Enjoy 50% off selected wines when paired with any main course from our seasonal menu.',
    tag: 'Offer',
  },
  {
    icon: Utensils,
    title: 'Sunday Brunch',
    date: 'Every Sunday 10AM - 3PM',
    description:
      'Unlimited brunch buffet featuring live cooking stations and bottomless mimosas.',
    tag: 'Popular',
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={interiorImage}
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4 block">
            Special Occasions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6">
            Events & <span className="text-primary italic">Promotions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive events and special offers designed to make your
            dining experience even more memorable.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group bg-card/80 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover-lift"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {event.tag}
                </span>
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-primary text-sm mb-4">{event.date}</p>
              <p className="text-muted-foreground text-sm">{event.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#reservation" className="btn-gold">
            Book for an Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
