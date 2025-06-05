const SectionWithImagesAndContent = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      {/* First div: Left image, right content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto md:text-center">
        <h2 className="font-display text-2xl tracking-tight text-slate-900 font-nunito font-bold sm:text-4xl md:max-w-[1000px] md:text-center">
          Revolutionize Healthcare with Our Software
        </h2>
        <p className='font-nunito text-slate-500 mb-10 mt-5'>Experience the future of healthcare with our cutting-edge software. Contact us for a free demo and discover.</p>
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/hmis.jpg?alt=media&token=ef0f4ef5-e605-4509-967e-38adc19b49c9"
          alt="Image 1"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 md:p-8 pt-8 text-left">
          <h2 className="text-2xl text-slate-900 font-bold mb-4 font-nunito">HIMS: A Game-Changer for Healthcare</h2>
          <p className="text-lg text-slate-600 font-nunito">
          A Hospital Information Management System (HIMS) is revolutionizing the way healthcare organizations operate. By digitizing and centralizing patient data, HIMS offers numerous benefits that improve efficiency, quality of care, and patient satisfaction.
          </p>
        </div>
      </div>

      {/* Second div: Left content, right image */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/crm.jpg?alt=media&token=e71f2555-a331-4baf-b378-b0f153525db7"
          alt="Image 2"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 md:p-8 pt-8 text-left">
          <h2 className="text-2xl text-slate-900 font-bold mb-4 font-nunito">Patient Relationship Management </h2>
          <p className="text-lg text-slate-600 font-nunito">
          Enhance patient engagement and satisfaction with a comprehensive healthcare solution. Our platform facilitates active and personalized interactions, ensuring a superior patient experience.
          </p>
        </div>
      </div>

      {/* Third div: Left image, right content */}
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/electroni-pre.jpg?alt=media&token=1d77e20c-b8c4-4b02-9aa6-9d4e2f37fe73"
          alt="Image 3"
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-1/2 md:p-8 pt-8 text-left">
          <h2 className="text-2xl text-slate-900 font-bold mb-4 font-nunito">Electronic Prescribing</h2>
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
