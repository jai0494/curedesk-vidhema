import { JSX } from "react";

import { contentDataFeatures, headingData } from "../../json/dropdownData";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import FeaturesCD from "../../components/FeaturesCD";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import FAQsSection from "../../components/FAQsSection";
import Schedule from "../../components/Schedule";

export const EHRSoftwareIndia = (): JSX.Element => {
  const {heading1} = headingData.EHRSoftwareIndia.specialityBanner1;
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'EHRSoftwareIndia');
  if (!sectionDataFeatures) {
    return <p>Content not found.</p>;
  }
    return (
      <div className='px-0'>

          <Schedule /><ServicesSectionPoint heading={heading1} />
          <FeaturesCD
            heading={sectionDataFeatures.heading}
            description={sectionDataFeatures.description}
            featuresData={sectionDataFeatures.features}
          />
          <TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
