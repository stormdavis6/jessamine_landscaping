"use client";

import ServiceCard from "../../components/ServiceCard";
import { services } from '../../data/services';

export default function VectorArtServicesSection() {
    return (
        <section id="services" className="bg-[#191919] text-white pt-4 md:pt-8">
            {/* Services Text */}
            <div
                className="max-w-[1920px] px-6 py-10 mx-auto flex flex-col md:items-center md:justify-between gap-4">

                <div className="flex flex-col max-w-screen-lg items-center">
                    <h1 className="font-figtree font-bold text-3xl lg:text-5xl mb-4 lg:mb-8 text-center text-[rgb(252,194,0)]">
                        Our Comprehensive Landscaping Services
                    </h1>
                    <p className="font-figtree font-bold text-2xl sm:text-3xl lg:text-5xl text-center mb-8">
                        Residential | Commercial
                    </p>
                </div>

                {/* Service Cards Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-7 w-full">
                    {services.map((service) => (
                        <ServiceCard key={service.id} description={service.description}
                                     image={service.image}/>
                    ))}
                </div>

            </div>

        </section>
    );
}