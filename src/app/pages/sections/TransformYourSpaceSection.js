"use client";

import Button from "../../components/Button";
import Image from "next/image";
import {useState} from "react";
import Modal from "@/app/components/Modal";
import ContactForm from "@/app/components/ContactForm";

export default function TransformYourSpaceSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const scrollToSection = (sectionId) => {
        // Check if running on the client side
        if (typeof document !== 'undefined') {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="transformYourSpace" className="bg-[#191919] text-white pt-4 md:pt-8 px-6">

            {/* Main Content */}
            <div
                className="max-w-[1920px] p-6 md:p-0 mx-auto flex flex-col items-center md:flex-row md:justify-between border-4 border-[#FCC200] rounded-[30px] overflow-hidden h-full">

                {/* Text Section */}
                <div className="md:p-6 flex flex-col max-w-sm md:max-w-lg lg:max-w-4xl">
                    <h1 className="font-figtree font-bold text-3xl lg:text-5xl xl:text-7xl mb-5 md:mb-7 text-left text-[rgb(252,194,0)]">
                        Transform Your Outdoor Space Today
                    </h1>
                    <p className="font-figtree font-normal text-lg lg:text-xl xl:text-2xl text-left mb-5 md:mb-7">
                        Contact us now for a free consultation and discover how we can enhance your landscape.
                    </p>

                    {/* Buttons Section */}
                    <div className="flex flex-row justify-center md:justify-start items-center mb-7 md:mb-0 gap-7 md:gap-9">
                        <Button
                            text="Get Started"
                            className="bg-[#FCC200] text-[#191919] border-none min-w-32 min-h-15 p-4 md:p-6 cursor-pointer sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                            onClick={handleOpenModal}  // Open contact modal when clicked
                        />
                        <Button
                            text="FAQ"
                            className="bg-[#191919] text-white border border-[#FCC200] min-w-32 min-h-15 p-4 md:p-6 cursor-pointer sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                            onClick={() => scrollToSection('faq')}
                        />
                    </div>
                </div>

                {/* Image */}
                <div className="self-center md:self-stretch md:max-h-[500px] max-w-sm md:max-w-lg lg:max-w-4xl">
                    <Image
                        src="/images/transformYourSpace/transformYourSpace.png"
                        alt="Grass Strip"
                        width={1920}
                        height={400}
                        className="h-auto md:h-full object-cover rounded-[30px] md:rounded-l-[30px] md:rounded-r-[26px]"
                    />
                </div>
            </div>

            {/* Additional Text Section */}
            <div
                className="max-w-[1920px] flex flex-col items-center md:items-start px-6 pt-6 mt-3 md:mt-12 md:p-0 mx-auto">
                <div className="max-w-sm md:max-w-lg lg:max-w-4xl">
                    <p className="font-figtree font-normal text-lg lg:text-xl xl:text-2xl text-center md:text-left mb-5 md:mb-7">
                        Our landscaping services are designed to enhance the beauty and functionality of your outdoor
                        spaces. From meticulous lawn care to expert irrigation design, we cover all aspects of
                        landscaping to meet your needs. Let us help you create a stunning landscape that you can enjoy
                        year-round.
                    </p>
                </div>
            </div>

            {/* Modal with Contact Form */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ContactForm />
            </Modal>

        </section>
    );
}