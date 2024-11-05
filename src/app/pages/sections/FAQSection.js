import FAQItem from '../../components/FAQItem';
import { faqs } from '../../data/faqs';

export default function FAQSection() {
    return (
        <section>
            <h2>FAQs</h2>
            <div>
                {faqs.map((faq) => (
                    <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
}
