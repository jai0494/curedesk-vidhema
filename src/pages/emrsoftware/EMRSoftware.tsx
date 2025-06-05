import { JSX } from "react";
import FAQsSection from "../../components/FAQsSection";
import FeaturesCD from "../../components/FeaturesCD";
import ImageWithDescription from "../../components/ImageWithDescription";
import ServiceMain from "../../components/ServiceMain";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import { contentData, contentDataFeatures, headingData, headingDataServices } from "../../json/dropdownData";


export const EMRSoftware = (): JSX.Element => {
  const {heading1} = headingData.EMRSoftware.specialityBanner1;
  const { headingS, subheadingS } = headingDataServices.EMRSoftware.specialityBanner1;
  const sectionData = contentData.sections.find(section => section.id === 'EMRSoftware');
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'EMRSoftware');
  if (!sectionData || !sectionDataFeatures) {
    return <p>Content not found.</p>;
  }
    return (
      <div className='px-4 md:px-0'>

        <ServiceMain heading={headingS} subheading={subheadingS} />
        <ImageWithDescription
          image={sectionData.image}
          heading={sectionData.heading}
          description={sectionData.description}
        />
        <ServicesSectionPoint heading={heading1} />
        <FeaturesCD
          heading={sectionDataFeatures.heading}
          description={sectionDataFeatures.description}
          featuresData={sectionDataFeatures.features}
        />
        <TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
