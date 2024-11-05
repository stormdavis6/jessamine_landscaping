import Navbar from './components/Navbar';
import HeroSection from './pages/sections/HeroSection';
import ServicesSection from './pages/sections/ServicesSection';
import AboutSection from './pages/sections/AboutSection';
import FAQSection from './pages/sections/FAQSection';
import Footer from './components/Footer';

export default function Home() {
  return (
      <>
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          {/*<AboutSection />*/}
          {/*<FAQSection />*/}
        </main>
        <Footer />
      </>
  );
}
