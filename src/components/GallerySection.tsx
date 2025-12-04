import interiorImage from '@/assets/restaurant-interior.jpg';
import dishPasta from '@/assets/dish-pasta.jpg';
import dishSalmon from '@/assets/dish-salmon.jpg';
import dishDessert from '@/assets/dish-dessert.jpg';
import dishStarter from '@/assets/dish-starter.jpg';
import dishCocktail from '@/assets/dish-cocktail.jpg';

const galleryImages = [
  { src: interiorImage, alt: 'Restaurant interior', span: 'col-span-2 row-span-2' },
  { src: dishPasta, alt: 'Truffle pasta', span: 'col-span-1' },
  { src: dishSalmon, alt: 'Grilled salmon', span: 'col-span-1' },
  { src: dishStarter, alt: 'Bruschetta appetizer', span: 'col-span-1' },
  { src: dishDessert, alt: 'Chocolate fondant', span: 'col-span-1' },
  { src: dishCocktail, alt: 'Signature cocktail', span: 'col-span-2' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4 block">
            Visual Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6">
            Our <span className="text-primary italic">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our world of culinary artistry and elegant ambiance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative group rounded-xl overflow-hidden cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-foreground font-heading text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
