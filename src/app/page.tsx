import Navbar from './components/Navbar';
import HeroSection from './pages/sections/HeroSection';
import VectorArtServicesSection from './pages/sections/VectorArtServicesSection';
import ServicesSection from './pages/sections/ServicesSection';
import AboutSection from './pages/sections/AboutSection';
import FAQSection from './pages/sections/FAQSection';
import Footer from './components/Footer';
import TransformYourSpaceSection from "@/app/pages/sections/TransformYourSpaceSection";

export default function Home() {
  return (
      <>
        <Navbar />
        <main>
          <HeroSection />
          <VectorArtServicesSection />
          <ServicesSection />
          <TransformYourSpaceSection />
          {/*<AboutSection />*/}
          {/*<FAQSection />*/}
        </main>
        <Footer />
      </>
  );
}
