const SectionWithImagesAndContent = () => {
  return (
    <section className="bg-white py-16">
      {/* First div: Left image, right content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 font-nunito font-bold sm:text-4xl md:max-w-[1000px] text-center">
          Revolutionize Healthcare with Our Software
        </h2>
        <p className='font-nunito text-slate-500 mb-10 mt-5'>Our innovative ERP solution is designed to transform your healthcare practice. Streamline operations, improve patient care, and boost efficiency with a comprehensive platform that integrates financial management, patient records, inventory, and more. Experience the future of healthcare today.</p>
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <img
          src="/Healthray-Feature-hmis.webp"
          alt="Image 1"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 p-8 text-left">
          <h2 className="text-3xl text-slate-900 font-bold mb-4 font-nunito">HIMS: A Game-Changer for Healthcare</h2>
          <p className="text-lg text-slate-600 font-nunito">
          A Hospital Information Management System (HIMS) is revolutionizing the way healthcare organizations operate. By digitizing and centralizing patient data, HIMS offers numerous benefits that improve efficiency, quality of care, and patient satisfaction.
          </p>
        </div>
      </div>

      {/* Second div: Left content, right image */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
        <img
          src="/CRM.webp"
          alt="Image 2"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 p-8 text-left">
          <h2 className="text-3xl text-slate-900 font-bold mb-4 font-nunito">Patient Relationship Management (CRM)        </h2>
          <p className="text-lg text-slate-600 font-nunito">
          Enhance patient engagement and satisfaction with a comprehensive healthcare solution. Our platform facilitates active and personalized interactions, ensuring a superior patient experience.
          </p>
        </div>
      </div>

      {/* Third div: Left image, right content */}
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src="/electroni-pre.png"
          alt="Image 3"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 p-8 text-left">
          <h2 className="text-3xl text-slate-900 font-bold mb-4 font-nunito">Electronic Prescribing</h2>
          <p className="text-lg text-slate-600 font-nunito">
          Experience the future of patient management. Our solution offers personalized interactions, seamlessly integrated into your daily workflow, revolutionizing your healthcare practice.
          </p>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default SectionWithImagesAndContent;
