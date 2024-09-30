interface ServicesSectionPoint {
  heading: string;
}
const ServicesSectionPoint : React.FC<ServicesSectionPoint> = ({ heading }) =>  {
  return (
    <div className="mx-auto max-w-7xl">
      <div className=" text-center">
        <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">Services</span>
        <h2 className="text-3xl md:text-4xl/tight font-bold text-black mt-4 font-nunito">{heading}</h2>
        <p className="text-base font-medium mt-4 text-slate-400">All-in-One Customer Service Platform</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 md:gap-y-12 lg:gap-y-24 md:pt-20 pt-12">
        {[
          
          {
            "title": "Dashboard",
            "description": "Our software intuitively demonstrates medical information in a comprehensive format, enabling quick retrieval of patient and hospital data for enhanced efficiency.",
            "icon": (
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
                className="lucide lucide-dashboard h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <line x1="12" x2="12" y1="2" y2="22" />
              </svg>
            )
          },
          {
            "title": "Individualized Template",
            "description": "We have created smart templates tailored to meet the specific needs of individual specialists, ensuring compliance with legal documentation requirements.",
            "icon": (
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
                className="lucide lucide-template h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <line x1="2" x2="22" y1="8" y2="8" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <line x1="2" x2="22" y1="16" y2="16" />
              </svg>
            )
          },
          {
            "title": "Patient Health Portal",
            "description": "Our software assimilates patient healthcare data, facilitating better diagnosis and promoting efficient medical treatment.",
            "icon": (
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
                className="lucide lucide-portal h-10 w-10 text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v10h10" />
              </svg>
            )
          },
          {
            "title": "Digital Prescription",
            "description": "Our software facilitates virtual prescriptions, maintaining accurate records and enabling quick access to medical information.",
            "icon": (
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
                className="lucide lucide-prescription h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <path d="M6 10h12" />
                <path d="M6 14h12" />
              </svg>
            )
          },
          {
            "title": "Real-Time Medical Reports",
            "description": "Our software enhances data quality by recording instantaneous medical information, thereby accelerating the treatment process.",
            "icon": (
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
                className="lucide lucide-report h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            )
          },
          {
            "title": "Cross-System Interoperability",
            "description": "Our software ensures seamless exchange of medical data among healthcare departments, providing the best electronic medical record capabilities.",
            "icon": (
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
                className="lucide lucide-interoperability h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "Cloud-Based EMR",
            "description": "We securely store all healthcare data in a unified server, enhancing coordination among medical experts.",
            "icon": (
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
                className="lucide lucide-cloud h-10 w-10 text-primary"
              >
                <path d="M3 12h18" />
                <path d="M12 3v18" />
              </svg>
            )
          },
          {
            "title": "Seamless Medication Integration",
            "description": "Our hospital software reconciles all healthcare medication information, ensuring updates are precise and comprehensive.",
            "icon": (
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
                className="lucide lucide-medication h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <line x1="10" y1="10" x2="14" y2="14" />
              </svg>
            )
          },
          {
            "title": "Secure Virtual Monitoring",
            "description": "Our software allows monitoring and tracking of medical records using any digital device, aiding in post-surgical care.",
            "icon": (
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
                className="lucide lucide-monitoring h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            )
          },
          {
            "title": "Digital Medical Access",
            "description": "Our software enables users to connect remotely with healthcare providers, assisting patients in maintaining routine medical activities.",
            "icon": (
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
                className="lucide lucide-access h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "Population Health Management",
            "description": "Our software interconnects with various tools to improve citizens’ health and nurture a healthier ecosystem.",
            "icon": (
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
                className="lucide lucide-population h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "Appointment Management",
            "description": "Our software manages all appointments within a single platform, eliminating traditional queue systems.",
            "icon": (
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
                className="lucide lucide-appointment h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            )
          },
          {
            "title": "Pharmacy Integration",
            "description": "Our software handles all pharmaceutical operations, from receiving prescriptions to medication billing, while also establishing a digital pharmacy at no cost.",
            "icon": (
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
                className="lucide lucide-pharmacy h-10 w-10 text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <path d="M6 10h12" />
                <path d="M6 14h12" />
              </svg>
            )
          },
          {
            "title": "Automated Operational Process",
            "description": "We reduce administrative burdens by smoothly conducting operational activities such as patient data recording and appointment management.",
            "icon": (
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
                className="lucide lucide-automation h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "Virtual Health Monitoring",
            "description": "Our software assists in tracking patient data to assess disease severity, allowing medical providers to suggest preventive measures effectively.",
            "icon": (
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
                className="lucide lucide-monitor h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "Laboratory Integration",
            "description": "Our software facilitates communication between patients and laboratory teams, enabling remote receipt of test results while adhering to standardized protocols.",
            "icon": (
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
                className="lucide lucide-laboratory h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "AI Chatbots",
            "description": "We simplify the patient inquiry process by incorporating AI chatbots, providing instant solutions to patient queries.",
            "icon": (
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
                className="lucide lucide-chat h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "E-Test Reports",
            "description": "Our software compiles individual patients' test reports and records them in a well-defined format, enabling virtual report delivery.",
            "icon": (
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
                className="lucide lucide-test h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "Radiology Picture Acquisition",
            "description": "Our hospital software is equipped to capture radiology images with high resolution, enhancing the quality of medical imaging.",
            "icon": (
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
                className="lucide lucide-radiology h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          },
          {
            "title": "Compiling Large Hospital Data",
            "description": "Our software collects extensive hospital data, organizing medical information into structured formats, and generating visual medical reports for better analysis.",
            "icon": (
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
                className="lucide lucide-data h-10 w-10 text-primary"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            )
          } // Add remaining sections with their corresponding title, description, and icon
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
