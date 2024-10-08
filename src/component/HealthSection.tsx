// HealthSection.jsx
import { Link } from 'react-router-dom';
import Form from './Form';

const HealthSection = () => {
  return (
    <section
      data-section-id="2"
      data-share="custom-514833"
      data-category="headers-dark-mix"
      data-component-id="3bde255e_03_awz"
      data-custom-component-id="514833"
      className="relative bg-white overflow-hidden md:mt-[60px]"
    >
      <div
        className="md:py-5 md:py-0 md:pt-0 bg-coolGray-900"
        style={{
          backgroundImage: "url('flex-ui-assets/elements/pattern-dark2.svg')",
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 ">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 md:mb-16 mb-8 md:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl" data-config-id="text11">
                Award Winning Software
              </span>
              <h1 className="mb-6 font-nunito text-3xl md:text-5xl lg:text-6xl leading-tight text-slate-900 font-bold tracking-tight" data-config-id="text9">
                Your Health and Wellbeing, our Priority
              </h1>
              <p className="mb-8 font-nunito text-lg md:text-xl text-slate-400 font-medium" data-config-id="text10">
              Our system has streamlined healthcare operations, reduced costs, and eliminated paperwork.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="font-nunito inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="tel:+918302527500"
                    data-config-id="text24"
                  >
                    +91-8302527500
                  </a>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0">
                  <a
                    className="font-nunito inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-500 font-medium text-center bg-slate-50 hover:bg-coolGray-800 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                    data-config-id="text25"
                  >
                    <Link to="/contact">Book an appointment</Link>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mt-5">
            <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
