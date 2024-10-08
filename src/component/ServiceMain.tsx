import Form from "./Form";

interface ServiceMainProps {
  heading: string;
  subheading: string;
}

const ServiceMain: React.FC<ServiceMainProps> = ({ heading, subheading }) => {
  return (
    <section
      className="relative pt-32 md:pt-20 pb-32 md:pb-20 overflow-x-hidden from-slate-500/10 bg-[url(/bg-1.png)] bg-no-repeat bg-cover active"
      id="home"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
          <div className="text-sm py-20 px-10 md:py-0">
            <h1 className="md:text-6xl/tight text-4xl text-dark tracking-normal leading-normal text-slate-900 font-bold font-nunito mb-4 mt-6">
              {heading}
            </h1>
            <p className="text-base font-medium text-muted leading-7 mt-5 capitalize text-slate-400 font-medium font-nunito">
              {subheading}
            </p>
          </div>

          <div className="mt-4 pt-2 sm:mt-0 sm:pt-0 relative">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMain;
