import { clients } from '../json/dropdownData';


const TrustedByCompanies = () => {
  return (
    <section className="py-5 bg-gray-50 mt-10 pb-10">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4 font-nunito">
            Trusted by Leading Companies
          </h3>
        </div>

        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px] mt-8">
          {clients.map((logo, index) => (
            <div key={index} className="mx-auto py-4">
              <img src={logo.src} className="h-10" alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByCompanies;
