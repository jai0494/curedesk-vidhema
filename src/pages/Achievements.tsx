import React from 'react';

const Achievements: React.FC = () => {
  const images = [
    '/img-1.jpg',
    '/img-2.jpg',
    '/img-3.jpg',
    '/img-4.jpg',
    '/img-5.jpg',
    '/img-6.jpg',
  
  ];

  return (
    <section className="py-8 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[40px]">
        <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl font-nunito font-bold  text-center">Our Achievements</h1>
        <p className='text-base font-normal text-gray-500 mt-2 font-nunito  mb-[30px] max-w-[80%] text-center m-auto'>Through our innovative Clinic Management System, we have achieved significant advancements in healthcare delivery. By optimizing patient care, enhancing data security, and improving clinical workflows, our system has empowered clinics to provide efficient, personalized care while reducing administrative challenges. </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-[40px]">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Achievement ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
