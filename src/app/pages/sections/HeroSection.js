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
            className="bg-[#191919] text-white flex flex-col justify-between pt-8 md:pt-24 flex-1"
            style={{ minHeight: isSmallScreen ? "calc(100vh - 75px)" : "calc(100vh - 80px)" }}  // Adjust for navbar height
        >
            {/* Main Content */}
            <div className="max-w-[1920px] px-6 flex flex-col md:flex-row md:items-center md:justify-between min-h-[60vh]">
                {/* Text Section */}
                <div className="flex flex-col flex-1 max-w-2xl md:justify-start">
                    <h1 className="font-figtree font-semibold text-4xl sm:text-5xl md:text-6xl mb-5 md:mb-10 text-left">
                        Shaping Outdoor Spaces That Inspire and Soothe
                    </h1>
                    <p className="font-figtree font-normal sm:text-lg md:text-xl md:text-left mb-7">
                        Experience the beauty of a well-maintained landscape that enhances your property's curb
                        appeal. Our team of professionals is here to provide tailored solutions for all your landscaping
                        needs.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col px-4 md:ml-8 xl:mr-16 xl:ml-16 items-center gap-7 md:gap-9 md:justify-start mb-7">
                    <Button
                        text="Schedule a Consultation"
                        className="bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-36 min-h-20 px-4 py-4 rounded-2xl cursor-pointer text-lg sm:text-xl md:text-2xl font-bold font-figtree flex items-center justify-center"
                        onClick={handleCallNowClick}
                    />
                    <Button
                        text="Call Now 864.359.8470"
                        className="bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-36 min-h-20 px-4 py-4 rounded-2xl cursor-pointer text-lg sm:text-xl md:text-2xl font-bold font-figtree flex items-center justify-center"
                        onClick={handleCallNowClick}
                    />
                </div>
            </div>

            {/* Bottom Image */}
            <div className="w-full">
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