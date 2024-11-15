"use client";

import VectorArtServiceCard from '../../components/VectorArtServiceCard';
import { vectorArtServices } from '../../data/vectorArtServices';
import Button from "@/app/components/Button";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function VectorArtServicesSection() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640); // Adjust this value as needed
        };

        handleResize(); // Check initial size
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLearnMoreClick = () => {
        // Check if running on the client side
        if (typeof document !== 'undefined') {
            const section = document.getElementById("services");
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="vectorArtServices" className="bg-[#191919] text-white pt-4 md:pt-8">
            <div
                className="max-w-[1920px] px-6 mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Text and Buttons Section */}
                <div className="flex flex-col max-w-sm sm:max-w-sm xl:max-w-xl items-center lg:mr-7">
                    <h1 className="font-figtree font-bold text-3xl lg:text-5xl xl:text-7xl mb-5 md:mb-10 text-left">
                        Shape Your Outdoor Space with Our Expert Services
                    </h1>
                    <p className="font-figtree font-normal text-lg lg:text-xl xl:text-2xl md:text-left mb-8">
                        Our comprehensive landscaping services cater to all your outdoor needs. From lawn care to
                        irrigation design, we ensure your landscape thrives.
                    </p>

                    {/* Buttons Section for Desktop (Visible on md and up) */}
                    <div className="hidden md:flex gap-4 mt-4 md:mt-8">
                        <Button
                            text="Learn More"
                            className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-48 min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-bold font-figtree flex items-center justify-center"
                            onClick={handleLearnMoreClick}
                        />
                        <Button
                            text="Call Now"
                            className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-48 min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-bold font-figtree flex items-center justify-center"
                            onClick={null}
                        />
                    </div>

                </div>

                {/* Vector Art Service Cards Section */}
                <div className="grid grid-cols-2 gap-2 md:gap-7 w-full">
                    {vectorArtServices.map((service) => (
                        <VectorArtServiceCard key={service.id} title={service.title} description={service.description}
                                              image={service.image}/>
                    ))}
                </div>

                {/* Buttons Section for Mobile (Visible below service cards on smaller screens) */}
                <div className="flex gap-4 mt-4 md:hidden">
                    <Button
                        text="Learn More"
                        className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-extrabold font-figtree flex items-center justify-center"
                        onClick={handleLearnMoreClick}
                    />
                    <Button
                        text="Call Now"
                        className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-extrabold font-figtree flex items-center justify-center"
                        onClick={null}
                    />
                </div>

            </div>

            {/* Vector Art Services Bottom Image */}
            <div className="w-full items-center mt-8">
                <Image
                    src={isSmallScreen ? "/images/dividers/servicesDividerCropped.png" : "/images/dividers/servicesDivider.png"}
                    alt="Bushes"
                    width={1920}
                    height={400}
                    className="w-full object-cover md:object-contain"
                />
            </div>
        </section>
);
}