import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment through our website by filling out the appointment form."
    },
    {
      question: "Is The Curedesk system suitable for small clinics as well as large hospitals?",
      answer: "Yes, our system is highly scalable and can be customized to meet the needs of small clinics, medium-sized practices, and large hospitals. It offers flexibility in managing patient load, clinic workflows, and administrative tasks regardless of the size of the healthcare facility."
    },
    {
      question: "Why should I choose The Curedesk management software over others",
      answer: "The Curedesk management software is designed specifically to meet the needs of healthcare professionals. It offers an intuitive user interface, seamless patient management, appointment scheduling, and billing features. Unlike generic solutions, our software is tailored for clinics, providing features like electronic medical records (EMR), treatment plans, and integration with diagnostic tools, which ensures an efficient workflow."
    },
    {
      question: "How secure is the data stored in our system?",
      answer: "In The Curedesk, Data security is a top priority. Our advanced encryption techniques, secure access protocols, regular backups, and compliance with healthcare regulations (like HIPAA) ensure that all patient information is kept confidential and protected from unauthorized access."
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
