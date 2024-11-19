'use client';

import { useState } from "react";
import Navbar from './components/Navbar';
import HeroSection from './pages/sections/HeroSection';
import VectorArtServicesSection from './pages/sections/VectorArtServicesSection';
import ServicesSection from './pages/sections/ServicesSection';
import OurStorySection from './pages/sections/OurStorySection';
import FAQSection from './pages/sections/FAQSection';
import Footer from './components/Footer';
import TransformYourSpaceSection from "@/app/pages/sections/TransformYourSpaceSection";
import ReviewsSection from "@/app/pages/sections/ReviewsSection";
import { ToastContainer } from "react-toastify";
import Modal from "@/app/components/Modal";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
    const [navbarHeight, setNavbarHeight] = useState(0); // State to track navbar height
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            {/* Toast Container */}
            <ToastContainer />

            {/* Navbar */}
            <Navbar setNavbarHeight={setNavbarHeight} />

            {/* Main Content */}
            <main>
                <HeroSection navbarHeight={navbarHeight} onOpenModal={handleOpenModal} />
                <VectorArtServicesSection />
                <ServicesSection />
                <TransformYourSpaceSection onOpenModal={handleOpenModal} />
                <OurStorySection />
                <FAQSection onOpenModal={handleOpenModal} />
            </main>

            {/* Footer */}
            <Footer />

            {/* Global Modal */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ContactForm />
            </Modal>
        </>
    );
}