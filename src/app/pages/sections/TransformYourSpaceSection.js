"use client";

import Button from "../../components/Button";
import Image from "next/image";

export default function TransformYourSpaceSection() {

    const handleCallNowClick = () => {
        console.log('Call Now button clicked!');
    };

    return (
        <section id="transformYourSpace" className="bg-[#191919] text-white pt-6 md:pt-10">

            {/* Main Content */}
            <div className="max-w-[1920px] px-6 py-4 mx-6 flex flex-col items-center md:flex-row md:items-center md:justify-between border-4 border-[#FCC200] rounded-3xl">
                {/* Text Section */}
                <div className="flex flex-col max-w-sm md:max-w-lg lg:max-w-4xl">
                    <h1 className="font-figtree font-bold text-3xl lg:text-5xl xl:text-7xl mb-5 md:mb-7 text-left text-[rgb(252,194,0)]">
                        Transform Your Outdoor Space Today
                    </h1>
                    <p className="font-figtree font-normal text-lg lg:text-xl xl:text-2xl md:text-left mb-5 md:mb-7">
                        Contact us now for a free consultation and discover how we can enhance your landscape.
                    </p>

                    {/* Buttons Section */}
                    <div className="flex flex-row items-center mb-7 md:mb-0 gap-7 md:gap-9 md:justify-start">
                        <Button
                            text="Get Started"
                            className="bg-[#FCC200] text-[#191919] border-none min-w-32 min-h-15 p-4 md:p-6 cursor-pointer sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                            onClick={handleCallNowClick}
                        />
                        <Button
                            text="FAQ"
                            className="bg-[#191919] text-white border border-[#FCC200] min-w-32 min-h-15 p-4 md:p-6 cursor-pointer sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                            onClick={handleCallNowClick}
                        />
                    </div>

                </div>

                {/* Image */}
                    <Image
                        src={"/images/transformYourSpace/transformYourSpace.png"}
                        alt="Grass Strip"
                        width={1920}
                        height={400}
                        className="md:max-w-[40vw] object-cover ml-0 md:ml-12"
                    />
            </div>

        </section>
    );
}