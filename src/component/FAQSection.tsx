import { useState } from 'react';

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
    {
      question: "Why should I choose your curedesk management software over others",
      answer: "Curedesk management software is designed specifically to meet the needs of healthcare professionals. It offers an intuitive user interface, seamless patient management, appointment scheduling, and billing features. Unlike generic solutions, our software is tailored for clinics, providing features like electronic medical records (EMR), treatment plans, and integration with diagnostic tools, which ensures an efficient workflow."
    },
    {
      question: "How does your Curedesk improve clinic operations?",
      answer: "Curedesk streamlines every aspect of clinic operations—from patient registration to billing—by automating repetitive tasks. Appointment scheduling, patient follow-ups, and reminders are automated, reducing manual effort and errors. In addition, the software provides real-time reporting and analytics, helping you make data-driven decisions to optimize clinic performance."
    },
  ];

  const toggleAnswer = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto md:px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <a
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center cursor-pointer text-blue-500 hover:text-blue-600"
              >
                <h3 className="text-xl font-bold font-nunito">{faq.question}</h3>
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
                <p className="mt-2 text-gray-600 font-nunito">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
