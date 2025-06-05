import { JSX } from "react";

import { contentDataFeatures, headingData } from "../../json/dropdownData";
import Schedule from "../../components/Schedule";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import StatisticsSection from "../../components/StatisticsSection";
import FeaturesCD from "../../components/FeaturesCD";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import FAQsSection from "../../components/FAQsSection";

export const EHRSoftwareUSA = (): JSX.Element => {
  const {heading1} = headingData.EHRSoftwareUSA.specialityBanner1;
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'EHRSoftwareUSA');
  if (!sectionDataFeatures) {
    return <p>Content not found.</p>;
  }
    return (
      <div className='px-0'>

          <Schedule /><ServicesSectionPoint heading={heading1} />
          <StatisticsSection />
          <FeaturesCD
            heading={sectionDataFeatures.heading}
            description={sectionDataFeatures.description}
            featuresData={sectionDataFeatures.features}
          />
          <TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
