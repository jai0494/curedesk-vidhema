import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

interface SpecialityBanner {
  heading: string;
}

const SpecialityBanner: React.FC<SpecialityBanner> = ({ heading }) =>  {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="ed-2-cta overflow-hidden bg-blue-600 pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]">
      <div className="md:mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
        <div className="md:flex md:flex-col gap-y-[15px] items-center justify-between pb-20 pt-20">
          {/* Text Section */}
          <div className="max-w-[600px] md:max-w-full shrink-0 relative text-center">
            <h1 className="md:text-4xl/tight text-3xl text-white tracking-normal leading-normal text-slate-900 font-bold font-nunito mb-4 mt-6">
            {heading}
            </h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto hover:bg-blue-600" onClick={handleOpen}>
              Book Appointment
            </button>
          </div>

        
        </div>
      </div>
      <ModalComponent open={open} handleClose={handleClose} title="Book an Appointment" />
    </section>
  );
};

export default SpecialityBanner;
