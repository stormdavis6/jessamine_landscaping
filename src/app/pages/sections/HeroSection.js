"use client";

import Button from '../../components/Button';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleCallNowClick = () => {
        console.log('Call Now button clicked!');
    };

    return (
        <section
            id="hero"
            className="bg-[#191919] text-white pt-4 md:pt-8 items-stretch"
            style={{ minHeight: isSmallScreen ? "calc(100vh - 75px)" : "calc(100vh - 80px)" }}  // Adjust for navbar height
        >
            {/* Main Content */}
            <div className="max-w-[1920px] px-6 mx-auto flex flex-col md:flex-row md:items-center md:justify-between min-h-[60vh] flex-1">
                {/* Text Section */}
                <div className="flex flex-col max-w-sm md:max-w-lg lg:max-w-4xl md:mr-7 mb-7">
                    <h1 className="font-figtree font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-5 md:mb-10 text-left">
                        Shaping Outdoor Spaces That Inspire and Soothe
                    </h1>
                    <p className="font-figtree font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left">
                        Experience the beauty of a well-maintained landscape that enhances your property's curb
                        appeal. Our team of professionals is here to provide tailored solutions for all your landscaping
                        needs.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col px-4 items-center mt-7 md:mt-0 gap-7 md:gap-9 md:justify-end">
                    <Button
                        text="Schedule a Consultation"
                        className="bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-36 min-h-20 px-6 py-6 rounded-2xl cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                        onClick={handleCallNowClick}
                    />
                    <Button
                        text="Call Now 864.359.8470"
                        className="bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-36 min-h-20 px-6 py-6 rounded-2xl cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                        onClick={handleCallNowClick}
                    />
                </div>
            </div>

            {/* Bottom Image */}
            <div className="w-full mt-7">
                <Image
                    src={isSmallScreen ? "/images/dividers/heroDividerCropped.png" : "/images/dividers/heroDivider.png"}
                    alt="Grass Strip"
                    width={1920}
                    height={400}
                    className="w-full object-cover object-[95%] md:object-contain"
                />
            </div>
        </section>
    );
}