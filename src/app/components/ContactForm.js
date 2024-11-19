"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Toast CSS

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enable loading spinner
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Form submitted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                const errorData = await response.json();
                toast.error(`Failed to submit: ${errorData.message || "Unknown error"}`, {
                    position: "top-center",
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred. Please try again later.", {
                position: "top-center",
                autoClose: 5000,
            });
        } finally {
            // Disable loading spinner
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="bg-[#191919] p-6 rounded-3xl space-y-4 w-full max-w-4xl"
            >
                <h2 className="text-2xl lg:text-4xl font-bold text-white">Contact Us</h2>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 text-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(252,194,0)]"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 text-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(252,194,0)]"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 p-2 text-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(252,194,0)]"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-[rgb(252,194,0)] text-white font-bold text-lg lg:text-xl rounded-lg hover:bg-[rgb(232,166,0)] transition duration-300"
                    disabled={isSubmitting} // Disable button while submitting
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>

            {/* ToastContainer renders the toast notifications */}
            <ToastContainer />
        </>
    );
}