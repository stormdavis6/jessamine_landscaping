import Navbar from '../components/Navbar';
import HeroSection from '../pages/sections/HeroSection';
import VectorArtServicesSection from './sections/VectorArtServicesSection';
import OurStorySection from './sections/OurStorySection';
import FAQSection from '../pages/sections/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <VectorArtServicesSection />
                <OurStorySection />
                <FAQSection />
            </main>
            <Footer />
        </>
    );
}
