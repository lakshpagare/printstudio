"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most orders are delivered within 5–7 business days depending on your location.",
  },
  {
    question: "Can I customize every product?",
    answer:
      "Yes, you can personalize T-Shirts, Hoodies, Mugs, Caps and many other products using our Design Studio.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We support UPI, Credit/Debit Cards, Net Banking and Cash on Delivery for selected locations.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be cancelled before they enter the printing process.",
  },
  {
    question: "Do you offer bulk orders?",
    answer:
      "Yes. We provide custom printing solutions for businesses, colleges, events and corporate gifting.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Find answers to the most common questions about
            PrintStudio and our services.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left font-semibold transition hover:bg-slate-50"
              >
                {faq.question}

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t bg-slate-50 px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}