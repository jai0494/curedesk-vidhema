import FAQSection from './FAQSection';

const FAQsSection = () => {
  return (
    <section
      data-section-id="6"
      data-share="custom-514841"
      data-category="faqs-white-pattern"
      data-component-id="900595cb_03_awz"
      data-custom-component-id="514841"
      className="py-12 bg-white"
      style={{
        backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-20 md:mb-0">
            <div className="max-w-md">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium rounded-full shadow-sm">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl md:text-4xl/tight font-bold text-black mt-4 font-nunito">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium font-nunito">
                Our experts are specially trained to help people with chronic conditions like diabetes, obesity, heart disease, thyroid disease, osteoporosis, high blood pressure and more.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <FAQSection/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
