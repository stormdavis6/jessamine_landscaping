"use client"

import Button from '../../components/Button';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {

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

    const handleCallNowClick = () => {
        // Logic for handling the button click
        console.log('Call Now button clicked!');
    };

    return (
        <section id="hero" className="bg-[#191919] text-white flex flex-col items-center pt-8 md:pt-24"
                 style={{ minHeight: "calc(100vh - 110px)" }}  // Replace 80px with your actual navbar height
        >
            {/* Centered Content Wrapper */}
            <div
                className="flex-grow flex flex-col md:flex-row justify-center items-center max-w-[1920px] px-6 mx-auto gap-y-10 md:gap-y-0 md:gap-x-16">

                {/* Text Section */}
                <div className="flex flex-col flex-1 px-4 md:mr-32 max-w-2xl">
                    <h1 className="font-figtree font-semibold text-4xl md:text-6xl mb-5 md:mb-10 text-left">
                        Shaping Outdoor Spaces That Inspire and Soothe
                    </h1>
                    <p className="font-figtree font-normal text-md md:text-xl md:text-left mb-12">
                        Experience the beauty of a well-maintained landscape that enhances your property's curb
                        appeal. Our team of professionals is here to provide tailored solutions for all your landscaping
                        needs.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col flex-1 px-4 md:mr-16 items-center gap-7 md:gap-9">
                    <Button
                        text="Schedule a Consultation"
                        className={"bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-52 min-h-20 px-4 py-4 rounded-2xl cursor-pointer text-xl md:text-2xl font-bold font-figtree flex items-center justify-center"}
                        onClick={handleCallNowClick}
                    />
                    <Button
                        text="Call Now 864.359.8470"
                        className={"bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-52 min-h-20 px-4 py-4 rounded-2xl cursor-pointer text-xl md:text-2xl font-bold font-figtree flex items-center justify-center"}
                        onClick={handleCallNowClick}
                    />
                </div>
            </div>

            {/* Bottom Image */}
            <div className="w-full mt-4">
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
