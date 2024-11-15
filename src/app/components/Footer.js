"use client";

import {useState} from "react";
import Modal from "@/app/components/Modal";
import ContactForm from "@/app/components/ContactForm";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <footer className="bg-[#191919] text-gray-400 py-6 px-4 text-center">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-2">
                <p className="font-figtree text-base md:text-lg">&copy; {new Date().getFullYear()} Jessamine Landscaping Services. All rights reserved.</p>
                <p className="font-figtree text-sm md:text-base">
                    Proudly serving our community with premium landscaping solutions.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-[rgb(252,194,0)] transition duration-300">Privacy Policy</a>
                    <a href="#" className="hover:text-[rgb(252,194,0)] transition duration-300">Terms of Service</a>
                    <a
                        href="#"
                        onClick={handleOpenModal}  // Open modal when clicked
                        className="hover:text-[rgb(252,194,0)] transition duration-300">Contact Us</a>
                </div>
            </div>

            {/* Modal with Contact Form */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ContactForm />
            </Modal>

        </footer>
    );
}
