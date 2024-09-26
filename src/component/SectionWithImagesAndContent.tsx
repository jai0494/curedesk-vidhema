const SectionWithImagesAndContent = () => {
  return (
    <section className="bg-white py-16">
      {/* First div: Left image, right content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 font-nunito font-bold sm:text-4xl md:max-w-[1000px] text-center">
          Loved by businesses worldwide
        </h2>
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <img
          src="https://healthray.com/wp-content/uploads/2024/01/Healthray-Feature-hmis.webp"
          alt="Image 1"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 p-8 text-left">
          <h2 className="text-3xl text-slate-900 font-bold mb-4 font-nunito">Left Image, Right Content</h2>
          <p className="text-lg text-slate-600 font-nunito">
            This is the content that goes on the right side of the first section.
            You can add any text, description, or even other components here.
          </p>
        </div>
      </div>

      {/* Second div: Left content, right image */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
        <img
          src="https://healthray.com/wp-content/uploads/2024/01/Healthray-Feature-hmis.webp"
          alt="Image 2"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 p-8 text-left">
          <h2 className="text-3xl text-slate-900 font-bold mb-4 font-nunito">Left Content, Right Image</h2>
          <p className="text-lg text-slate-600 font-nunito">
            In this section, the content is on the left, and the image is on the
            right. It alternates with the first section for visual variety.
          </p>
        </div>
      </div>

      {/* Third div: Left image, right content */}
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src="https://healthray.com/wp-content/uploads/2024/01/Healthray-Feature-hmis.webp"
          alt="Image 3"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 p-8 text-left">
          <h2 className="text-3xl text-slate-900 font-bold mb-4 font-nunito">Left Image, Right Content</h2>
          <p className="text-lg text-slate-600 font-nunito">
            This section repeats the layout of the first one, with the image on
            the left and content on the right.
          </p>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default SectionWithImagesAndContent;
