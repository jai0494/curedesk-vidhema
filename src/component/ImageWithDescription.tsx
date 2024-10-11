import React from 'react';

interface ImageWithDescriptionProps {
  image: string;
  heading: string;
  description: string;
}

const ImageWithDescription: React.FC<ImageWithDescriptionProps> = ({
  image,
  heading,
  description,
}) => {
  return (
    <section className='bg-white'>
      <div className="flex flex-col items-center md:flex-row items-center p-8 max-w-7xl mx-auto relative gap-8">
      {/* Image on the Left */}
      {/* Heading and Description on the Right */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl/tight font-bold text-black mt-4 font-nunito">
          {heading}
        </h2>
        <div
          className="text-lg text-gray-600 space-y-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={heading}
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

      
    </div>
    </section>
  );
};

export default ImageWithDescription;
