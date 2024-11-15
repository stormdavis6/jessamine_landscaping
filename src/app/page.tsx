import Navbar from './components/Navbar';
import HeroSection from './pages/sections/HeroSection';
import VectorArtServicesSection from './pages/sections/VectorArtServicesSection';
import ServicesSection from './pages/sections/ServicesSection';
import OurStorySection from './pages/sections/OurStorySection';
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
          <OurStorySection />
          <FAQSection />
        </main>
        <Footer />
      </>
  );
}
