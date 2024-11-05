"use client";

import { useState } from 'react';

export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem} onClick={() => setIsOpen(!isOpen)}>
            <h4>{question}</h4>
            {isOpen && <p>{answer}</p>}
        </div>
    );
}
