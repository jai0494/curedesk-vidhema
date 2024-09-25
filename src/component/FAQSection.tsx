import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment through our website by filling out the appointment form."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards, and insurance plans."
    },
  ];

  const toggleAnswer = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <a
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center cursor-pointer text-blue-500 hover:text-blue-600"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <svg
                  className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                </svg>
              </a>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
