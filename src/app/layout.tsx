import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Jessamine Landscaping Services",
    description: "Proudly serving our community with premium landscaping solutions",
    icons: {
        icon: '/images/logo/logo_icon.ico'
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <title>Jessamine Landscaping Services</title>
        </head>
        <body
            style={{ fontFamily: "'Figtree', sans-serif" }} // Apply Figtree as the default font
        >
        {children}
        </body>
        </html>
    );
}