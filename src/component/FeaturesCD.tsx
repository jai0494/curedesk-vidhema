import { useState, useEffect } from 'react';
// import { features } from '../json/dropdownData';

interface FeaturesCDProps {
  heading: string;
  description: string;
  featuresData: {
    heading: string;
    shortDescription: string;
    longDescription: string;
    image: string;
  }[];
}

const FeaturesCD: React.FC<FeaturesCDProps> = ({
  heading,
  description,
  featuresData,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0); // Set first tab as active

  // Optional: If you want to ensure the description is set on mount
  useEffect(() => {
    setActiveTab(0); // Ensure the first tab is active on mount
  }, []);

  return (
    <section className="py-5 bg-white ">
     <div className='mt-10 pb-10 md:px-7 max-w-7xl mx-auto'>
     <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">Services</span>
          <h2 className="text-2xl md:text-4xl/tight font-bold text-black mt-4 font-nunito">{heading}</h2>
          <div
            className="text-lg text-gray-600 space-y-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="flex mt-8">
          {/* Vertical Tabs Section */}
          <div className="sm:w-1/4 bg-white p-4 border-r">
            {featuresData.map((feature, index) => (
              <div key={index} className="mb-2">
                <h2 className="text-base font-semibold">
                  <button
                    type="button"
                    onClick={() => setActiveTab(activeTab === index ? -1 : index)} // Toggle active tab
                    className={`font-nunito flex justify-between items-center px-0 py-2 w-full font-semibold text-lg text-start rounded-xl transition-colors duration-300
                    ${activeTab === index ? 'text-blue-600 bg-white font-bold' : 'bg-white text-slate-700 hover:bg-gray-100'}`}
                    aria-expanded={activeTab === index}
                  >
                    <span>{feature.heading}</span>
                    <svg
                      className={`size-4 transition-transform duration-300 ${activeTab === index ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h2>

                {/* Show short description only when the tab is clicked */}
                {activeTab === index && (
                  <p className="mt-2 text-sm text-gray-600 font-nunito">
                    {feature.shortDescription}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="sm:w-3/4 p-2 sm:p-6">
            {activeTab !== -1 && (
              <div>
                {/* Long description */}
                <div
                    className="text-lg text-gray-600 space-y-4"
                    dangerouslySetInnerHTML={{ __html: featuresData[activeTab].longDescription }}
                />
                
                {/* Image */}
                {featuresData[activeTab].image && featuresData[activeTab].image.trim() !== "" && (
                    <img
                        src={featuresData[activeTab].image}
                        alt={`Image for ${featuresData[activeTab].heading}`}
                        className="w-full h-auto rounded-md shadow-lg"
                    />
                    )}
              </div>
            )}
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default FeaturesCD;
