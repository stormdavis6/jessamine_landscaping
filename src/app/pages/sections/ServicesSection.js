"use client";

import ServiceCard from '../../components/ServiceCard';
import { services } from '../../data/services';
import Button from "@/app/components/Button";

export default function ServicesSection() {

    const handleCallNowClick = () => {
        // Logic for handling the button click
        console.log('Call Now button clicked!');
    };

    return (
        <section id="services" className="bg-[#191919] text-white pt-8 md:pt-4">
            <div className="max-w-[1920px] px-6 mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Text and Buttons Section */}
                <div className="flex flex-col px-4 max-w-xl items-center mr-12">
                    <h1 className="font-figtree font-bold text-4xl lg:text-6xl mb-5 md:mb-10 text-left">
                        Shape Your Outdoor Space with Our Expert Services
                    </h1>
                    <p className="font-figtree font-normal text-xl lg:text-2xl md:text-left mb-8">
                        Our comprehensive landscaping services cater to all your outdoor needs. From lawn care to
                        irrigation design, we ensure your landscape thrives.
                    </p>

                    {/* Buttons Section for Desktop (Visible on md and up) */}
                    <div className="hidden md:flex gap-4 mt-4 md:mt-8">
                        <Button
                            text="Learn More"
                            className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-32 min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-bold font-figtree flex items-center justify-center"
                            onClick={handleCallNowClick}
                        />
                        <Button
                            text="Call Now"
                            className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-w-32 min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-bold font-figtree flex items-center justify-center"
                            onClick={handleCallNowClick}
                        />
                    </div>

                </div>



                {/* Service Cards Section */}
                <div className="grid grid-cols-2 gap-2 md:gap-7 w-full">
                    {services.map((service) => (
                        <ServiceCard key={service.id} title={service.title} description={service.description} image={service.image} />
                    ))}
                </div>

                {/* Buttons Section for Mobile (Visible below service cards on smaller screens) */}
                <div className="flex gap-4 mt-4 md:hidden">
                    <Button
                        text="Learn More"
                        className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-extrabold font-figtree flex items-center justify-center"
                        onClick={handleCallNowClick}
                    />
                    <Button
                        text="Call Now"
                        className="flex-1 bg-[#D2D5DA] text-[#191919] hover:bg-[rgb(252,194,0)] border-none min-h-10 px-2 py-4 rounded-2xl cursor-pointer text-lg md:text-xl font-extrabold font-figtree flex items-center justify-center"
                        onClick={handleCallNowClick}
                    />
                </div>

            </div>
        </section>
    );
}