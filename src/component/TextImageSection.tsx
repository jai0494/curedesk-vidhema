const TextImageSection = () => {
  return (
    <section className="bg-[#fffaf9] flex flex-col items-center justify-center pt-8 pb-0 px-4 md:px-8">
      <h2 className="font-display text-3xl tracking-tight text-slate-900 font-nunito font-bold sm:text-4xl md:max-w-[1000px] md:text-center">
      Unlock The Full Spectrum Of Healthcare Management With Our All-In-One Solution

          </h2>
          <p className="mt-4 font-nunito text-lg tracking-tight text-slate-700">
            Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.
          </p>
      <img
        src="/All-in-one-solution-of-The Curedesk.jpg" // Replace with your image URL
        alt="Descriptive Alt Text"
        className="w-full max-w-[800px] rounded-lg"
      />
    </section>
  );
};

export default TextImageSection;
