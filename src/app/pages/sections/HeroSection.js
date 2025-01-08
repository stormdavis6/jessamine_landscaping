"use client";

import { useState, useEffect } from "react";
import Button from "../../components/Button";
import { toast } from "react-toastify";

export default function HeroSection({ navbarHeight, onOpenModal }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleCallNowClick = () => {
        const phoneNumber = "tel:+18643598470";
        if (!navigator.userAgent.match(/(iPhone|Android|webOS|BlackBerry|Windows Phone)/i)) {
            toast.error("This device cannot make phone calls. Please call 864-359-8470 on a mobile device.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            window.location.href = phoneNumber;
        }
    };

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

    return (
        <section
            id="hero"
            className="relative bg-[#191919] text-white pt-4 md:pt-8"
            style={{
                minHeight: `calc(100vh - ${navbarHeight}px)`, // Ensure the hero section covers at least the full viewport height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Keep image at the bottom
            }}
        >
            {/* Wrapper for Main Content */}
            <div className="flex-1 flex items-center">
                {/* Main Content */}
                <div
                    className="max-w-[1920px] px-6 mx-auto flex flex-col md:flex-row md:items-center md:justify-between flex-1 relative z-10"
                >
                    <div className="flex flex-col max-w-sm md:max-w-lg lg:max-w-4xl md:mr-7 mb-7">
                        <h1 className="font-figtree font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-5 md:mb-10 text-left">
                            Shaping Outdoor Spaces That Inspire and Soothe
                        </h1>
                        <p className="font-figtree font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left">

                            Experience the beauty of a well-designed landscape that enhances your property’s curb appeal.
                            Our team of professionals is here to provide tailored solutions for all your landscaping needs.
                        </p>
                    </div>

                    <div
                        className="flex flex-col max-w-sm md:max-w-lg px-4 items-center mt-7 md:mt-0 gap-7 md:gap-9 md:justify-end"
                    >
                        <Button
                            text="Schedule a Consultation"
                            className="bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-36 min-h-20 px-6 py-6 rounded-2xl cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                            onClick={onOpenModal} // Use the prop to open the modal
                        />
                        <Button
                            text="Call Now 864.359.8470"
                            className="bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-36 min-h-20 px-6 py-6 rounded-2xl cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                            onClick={handleCallNowClick}
                        />
                    </div>
                </div>
            </div>

            {/* Divider Image */}
            <div
                className="relative flex justify-center items-center mt-8"
                style={{
                    zIndex: 0, // Image stays behind the content
                    maxWidth: "100%",
                    marginTop: "auto", // Ensures it stays at the bottom
                }}
            >
                <img
                    src="/images/dividers/heroDivider.png" // Single image for all screen sizes
                    alt="Divider"
                    className="w-full object-cover max-w-none"
                    style={{
                        objectFit: "cover",
                        objectPosition: isSmallScreen ? "center center" : "bottom", // Adjust position for zoom effect
                        aspectRatio: isSmallScreen ? "16/9" : undefined, // Optional: enforce aspect ratio on small screens
                    }}
                />
            </div>
        </section>
    );
}