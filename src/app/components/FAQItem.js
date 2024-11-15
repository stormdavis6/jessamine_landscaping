"use client";

import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="border-b-2 border-[#FCC200] py-4 w-full cursor-pointer transition-colors duration-300">

            <div className="flex justify-between items-center">
                <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-white">{question}</h4>
                <AiOutlineDown
                    className={`text-[#FCC200] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>

            {isOpen && (
                <p className="mt-2.5 text-white font-normal text-base lg:text-lg xl:text-xl">
                    {answer}
                </p>
            )}
        </div>
    );
}
