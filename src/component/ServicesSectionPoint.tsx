interface ServicesSectionPoint {
  heading: string;
}
const ServicesSectionPoint : React.FC<ServicesSectionPoint> = ({ heading }) =>  {
  return (
    <div className="mx-auto max-w-7xl">
      <div className=" text-center">
        <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">Services</span>
        <h2 className="text-3xl md:text-4xl/tight font-bold text-black mt-4 font-nunito">{heading}</h2>
        <p className="text-base font-medium mt-4 text-slate-400">Ligula risus auctor tempus magna feugit lacinia.</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 md:gap-y-12 lg:gap-y-24 md:pt-20 pt-12">
        {[
          {
            title: 'Improved Efficiency',
            description: 'Gain a comprehensive understanding of your industry landscape.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-10 w-10 text-primary"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            ),
          },
          {
            title: 'Enhanced Patient Care',
            description: 'Evaluate the viability and potential of new products or services.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lightbulb h-10 w-10 text-primary"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            ),
          },
          {
            title: 'Accurate Billing',
            description: 'Benchmark your performance against competitors, identify strengths.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bar-chart-big h-10 w-10 text-primary"
              >
                <path d="M3 3v18h18" />
                <rect width="4" height="7" x="7" y="10" rx="1" />
                <rect width="4" height="12" x="15" y="5" rx="1" />
              </svg>
            ),
          },
          {
            title: 'Cost Savings',
            description: 'Anticipate market shifts and emerging trends to stay ahead of the curve.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-codepen h-10 w-10 text-primary"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" x2="12" y1="22" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
                <polyline points="2 15.5 12 8.5 22 15.5" />
                <line x1="12" x2="12" y1="2" y2="8.5" />
              </svg>
            ),
          },
          // Add remaining sections with their corresponding title, description, and icon
        ].map((service, index) => (
          <div className="text-center" key={index}>
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-[#eef3ff] text-blue-600 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                {service.icon}
              </div>
            </div>
            <h1 className="text-xl font-semibold pt-4 text-slate-700 font-nunito text-bold">{service.title}</h1>
            <p className="text-base text-gray-600 mt-2 font-nunito">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionPoint;
