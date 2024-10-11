import React, { useEffect, useState } from 'react';
import { featuresSp } from './../json/dropdownData'; // Import JSON data

// Define the type for your features data
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesData {
  title: string;
  description: string;
  image: string;
  learnMoreLink: string;
  features: FeatureItem[];
}

interface FeaturesSectionProps {
  index: number; // New prop to select the feature set from the JSON
}

const FeaturesSectionSpeciality: React.FC<FeaturesSectionProps> = ({ index }) => {
  const [features, setFeatures] = useState<FeaturesData | null>(null); // Use the defined type

  useEffect(() => {
    // Load features data from JSON
    if (featuresSp[index]) {
      setFeatures(featuresSp[index]);
    }
  }, [index]);

  if (!features) {
    return null; // Render nothing if features are not available
  }

  return (
    <section id="features" className="py-20 active bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          <div className="flex items-center">
            {/* Use the image from the selected feature set */}
            <img src={features.image} className="md:h-auto rounded-xl mx-auto" alt="feature section" />
          </div>

          <div className="lg:ms-5 md:ms-8">
            <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950 text-blue-600 font-nunito">
              {features.description} {/* Use the selected description */}
            </span>
            <h2 className="text-3xl md:text-4xl/tight font-bold text-black mt-4 font-nunito">
              {features.title} {/* Use the selected title */}
            </h2>
            {/* <a
              href={features.learnMoreLink}
              className="font-nunito inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
            >
              Learn More
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
                className="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </a> */}
            <hr className="border-gray-200 my-6" />

            {features.features.map((feature, index) => (
              <div className="flex items-start gap-5 mt-8" key={index}>
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
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
                      className={`lucide lucide-${feature.icon} text-base text-blue-600`}
                    >
                      {feature.icon === "check" && <path d="M20 6 9 17l-5-5" />}
                      {feature.icon === "layers-2" && (
                        <>
                          <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" />
                          <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" />
                        </>
                      )}
                      {feature.icon === "lock" && (
                        <>
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold font-nunito text-gray-900">{feature.title}</h4>
                  <p className="text-base font-normal text-gray-500 mt-2 font-nunito">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionSpeciality;
