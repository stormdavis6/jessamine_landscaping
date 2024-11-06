"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="bg-[#191919] text-white py-4">
            <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6">

                {/* Logo Section */}
                <button onClick={() => scrollToSection('hero')} className="focus:outline-none">
                    <Image
                        src="/images/logo.png"
                        alt="Jessamine Landscaping Logo"
                        width={400}
                        height={80}
                        priority
                        className="w-48 sm:w-72 md:w-96 h-auto"
                    />
                </button>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`flex-col md:flex md:flex-row md:items-center md:ml-36 gap-8 mt-4 md:mt-0 text-lg text-center font-semibold ${
                        isOpen ? 'flex' : 'hidden'
                    } md:flex`}
                    style={{ fontFamily: "'Figtree', sans-serif" }} // Apply Figtree font
                >
                    <li>
                        <a
                            href="#"
                            onClick={() => scrollToSection('vectorArtServices')}
                            className="hover:text-[rgb(252,194,0)]"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-[rgb(252,194,0)]">
                            Our Story
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-[rgb(252,194,0)]">
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-[rgb(252,194,0)]">
                            FAQs
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}