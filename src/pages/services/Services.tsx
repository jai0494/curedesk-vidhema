import { JSX } from "react";

import { contentDataFeatures, headingData, headingDataServices } from "../../json/dropdownData";
import ServiceMain from "../../components/ServiceMain";
import FeaturesCD from "../../components/FeaturesCD";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import FAQsSection from "../../components/FAQsSection";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";

export const Services = (): JSX.Element => {
  const {heading1} = headingData.HMIS.specialityBanner1;
  const { headingS, subheadingS } = headingDataServices.HIS.specialityBanner1;
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'HIS');
  if (!sectionDataFeatures) {
    return <p>Content not found.</p>;
  }  
  return (
      <div className='px-4 md:px-0'>

          <ServiceMain heading={headingS} subheading={subheadingS} /><ServicesSectionPoint heading={heading1} />
          <FeaturesCD
            heading={sectionDataFeatures.heading}
            description={sectionDataFeatures.description}
            featuresData={sectionDataFeatures.features}
          />
          <TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
