import React from 'react';

const Achievements: React.FC = () => {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/IMG_3767%20(1).jpg?alt=media&token=73689cf6-9245-46a9-beea-d4dae5424a2d',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/IMG_20231028_090547.jpg?alt=media&token=2e8a286a-9566-4555-acda-f0f0524ba726',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/IMG_20231029_164552.jpg?alt=media&token=f8395a90-8fd4-4cc7-b768-499216b3a74a',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/IMG_20231029_125139.jpg?alt=media&token=719aa601-f4b4-4dc5-9621-2eeaa59ea91f',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/IMG_20231029_105134.jpg?alt=media&token=f6051832-8fc1-41b6-9907-e677a7864dee',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/IMG_20231028_120926.jpg?alt=media&token=2e809ffe-5605-4a50-847d-8ec437f53510',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/IMG_20231028_131546%20(1).jpg?alt=media&token=7a1298f5-e4a5-41f9-a9ea-7c9c41c327ff',
  
  ];
  const imagesAward = [
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/curedesk%20(1).webp?alt=media&token=ce9024d2-c86f-458d-8e09-d86bd30bf446',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/curedesk%20(2).webp?alt=media&token=d4f0938d-8118-4a19-a12a-afa44ac88a29',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/curedesk%20(3).webp?alt=media&token=8f4e0ad6-d4a4-47ba-b2ee-e218b3fa1ad7',
    'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/curedesk%20(4).webp?alt=media&token=be11f508-46b1-436c-b715-6bbe6b9a0042',
  
  ];

  return (
    <section className="py-8 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[40px]">
        <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl font-nunito font-bold  text-center">Our Achievements</h1>
        <p className='text-base font-normal text-gray-500 mt-2 font-nunito  mb-[30px] max-w-[80%] text-center m-auto'>Through our innovative Clinic Management System, we have achieved significant advancements in healthcare delivery. By optimizing patient care, enhancing data security, and improving clinical workflows, our system has empowered clinics to provide efficient, personalized care while reducing administrative challenges. </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-[40px]">
          <div className="grid gap-4">
            <div>
              <img src={images[0]} alt="image" className="w-full rounded-lg" />
            </div>
            <div>
              <img src={images[3]} alt="image" className="w-full rounded-lg" />
            </div>
            <div>
              <img src={images[4]} alt="image" className="w-full rounded-lg" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img src={images[1]} alt="image" className="w-full" />
            </div>
            
          </div>
          <div className="grid gap-4">
            <div>
              <img src={images[2]} alt="image" className="w-full rounded-lg" />
            </div>
            <div>
              <img src={images[5]} alt="image" className="w-full rounded-lg" />
            </div>
            <div>
              <img src={images[6]} alt="image" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
        

        <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-3xl font-nunito font-bold text-center mb-[30px]'>
          Winner of <span className='text-blue-500'>Excellence in</span> Healthcare Software Design
        </h2>
  
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-[40px]">
          {imagesAward.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg text-center">
              <img
                src={src}
                alt={`Achievement ${index + 1}`}
                className="w-full h-auto object-cover max-w-[150px] m-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
