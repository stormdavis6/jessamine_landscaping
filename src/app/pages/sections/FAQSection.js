"use client";

import FAQItem from '../../components/FAQItem';
import { faqs } from '../../data/faqs';
import Button from "@/app/components/Button";

export default function FAQSection() {

    const handleCallNowClick = () => {
        console.log('Call Now button clicked!');
    };

    return (
        <section id="faq" className="bg-[#191919] text-white pt-4 md:pt-8">
            <div className="max-w-[1920px] px-6 py-10 mx-auto flex flex-col items-center gap-4">

                {/* FAQ Header */}
                <h1 className="font-figtree font-bold text-3xl lg:text-5xl mb-4 lg:mb-8 text-center text-[rgb(252,194,0)]">
                    FAQs
                </h1>
                <p className="font-figtree font-normal text-lg lg:text-xl xl:text-2xl text-center mb-2.5 md:mb-5 max-w-4xl">
                    Find answers to common questions about our landscaping services and how we can help you.
                </p>

                {/* FAQ Content Wrapper */}
                <div className="max-w-4xl w-full flex flex-col items-center">
                    {/* Gold Divider */}
                    <div className="border-b-2 border-[#FCC200] py-4 w-full"></div>

                    {/* FAQ Items */}
                    {faqs.map((faq) => (
                        <FAQItem key={faq.id} question={faq.question} answer={faq.answer}/>
                    ))}
                </div>

                {/* FAQ Bottom */}
                <h1 className="font-figtree font-bold text-2xl lg:text-4xl text-center mt-2.5">
                    Still have questions?
                </h1>
                <p className="font-figtree font-normal text-lg lg:text-xl xl:text-2xl text-center mb-2.5 md:mb-5 max-w-3xl">
                    We're here to help you with any inquiries.
                </p>
                <Button
                    text="Contact"
                    className="bg-[#191919] text-[#FCC200] border-4 border-[#FCC200] min-w-32 min-h-15 p-4 md:p-6 cursor-pointer sm:text-xl md:text-2xl lg:text-3xl font-bold font-figtree flex items-center justify-center"
                    onClick={handleCallNowClick}
                />
            </div>
        </section>
    );
}