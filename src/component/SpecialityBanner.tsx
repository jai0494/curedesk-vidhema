import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import Form from './Form';

interface SpecialityBanner {
  heading: string;
}

const SpecialityBanner: React.FC<SpecialityBanner> = ({ heading }) =>  {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="ed-2-cta overflow-hidden bg-blue-600 pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]">
      <div className="xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
        <div className="md:flex md:flex-col gap-y-[15px]  justify-between pb-20 pt-6">
          {/* Text Section */}
          <div className='flex flex-wrap xl:items-center  mx-auto max-w-7xl text-sm py-20 px-10 md:py-0 '>
          <div className="shrink-0 relative w-full md:w-1/2 px-4 mt-5 ">
            <h1 className="md:text-6xl/tight text-4xl text-dark tracking-normal leading-normal text-white font-bold font-nunito mb-4 mt-6 ">
            {heading}
            </h1>
            <button className="bg-blue-500 text-white text-base font-normal py-[11px] px-[18px] rounded hover:bg-blue-600" onClick={handleOpen}>
              Book Appointment
            </button>
          </div>

          <div className='w-full md:w-1/2 px-4 mt-5'>
          <Form />
          </div>
          </div>

        
        </div>
      </div>
      <ModalComponent open={open} handleClose={handleClose} title="Book an Appointment" />
    </section>
  );
};

export default SpecialityBanner;
