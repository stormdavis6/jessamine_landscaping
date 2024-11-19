"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar({ setNavbarHeight }) {
    const navbarRef = useRef(null); // Create a ref to the navbar

    // Update the navbar height when the component mounts or resizes
    useEffect(() => {
        const updateNavbarHeight = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight); // Pass height to parent
            }
        };

        // Run on initial mount and on window resize
        updateNavbarHeight();
        window.addEventListener("resize", updateNavbarHeight);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("resize", updateNavbarHeight);
        };
    }, [setNavbarHeight]); // Re-run if the setter function changes

    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        if (typeof document !== "undefined") {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav ref={navbarRef} className="bg-[#191919] text-white py-4">
            <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6">
                {/* Logo Section */}
                <img src="/images/logo/logo.png" alt="Logo" className="w-48 sm:w-72 md:w-96 h-auto" />

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className={`flex-col md:flex md:flex-row md:items-center md:justify-between md:ml-10 gap-8 mt-4 md:mt-0 text-xl lg:text-2xl text-center font-semibold ${isOpen ? "flex" : "hidden"} md:flex`}>
                    <li>
                        <button onClick={() => scrollToSection("services")} className="hover:text-[rgb(252,194,0)]">Services</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("ourStory")} className="hover:text-[rgb(252,194,0)]">Our Story</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("faq")} className="hover:text-[rgb(252,194,0)]">FAQs</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
