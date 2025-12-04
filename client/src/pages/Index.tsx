import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedDishes from '@/components/FeaturedDishes';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReservationSection from '@/components/ReservationSection';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedDishes />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <EventsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
