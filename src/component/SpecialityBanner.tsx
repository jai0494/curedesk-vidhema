import React from 'react';

interface SpecialityBanner {
  heading: string;
}

const SpecialityBanner: React.FC<SpecialityBanner> = ({ heading }) =>  {
  return (
    <section className="ed-2-cta overflow-hidden bg-blue-600 pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(/public/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]">
      <div className="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
        <div className="flex md:flex-col gap-y-[15px] items-center justify-between pb-20 pt-20">
          {/* Text Section */}
          <div className="max-w-[600px] md:max-w-full shrink-0 relative text-center">
            <h1 className="md:text-4xl/tight text-3xl text-white tracking-normal leading-normal text-slate-900 font-bold font-nunito mb-4 mt-6">
            {heading}
            </h1>
            <a
              href="/contact"
              className="font-nunito inline-block py-2 px-4 w-full text-base md:text-lg leading-4 text-blue-500 font-medium text-center bg-slate-50 hover:bg-coolGray-800 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50 rounded-md shadow-sm max-w-[300px]"
            >
              Book Appointment <span className="icon"><i className="fa-solid fa-arrow-right-long"></i></span>
            </a>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default SpecialityBanner;
