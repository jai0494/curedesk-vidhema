import { JSX } from "react";
import FAQsSection from "../../components/FAQsSection";
import FeaturesCD from "../../components/FeaturesCD";
import ImageWithDescription from "../../components/ImageWithDescription";
import ServiceMain from "../../components/ServiceMain";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import StatisticsSection from "../../components/StatisticsSection";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import { contentData, contentDataFeatures, headingData, headingDataServices } from "../../json/dropdownData";


export const EHRSoftware = (): JSX.Element => {
  const {heading1} = headingData.EHRSoftware.specialityBanner1;
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'EHRSoftware');
  const { headingS, subheadingS } = headingDataServices.EHRSoftware.specialityBanner1;
  const sectionData = contentData.sections.find(section => section.id === 'EHRSoftware');
  if (!sectionData || !sectionDataFeatures) {
    return <p>Content not found.</p>;
  }
    return (
      <div className='px-0'>

        <ServiceMain heading={headingS} subheading={subheadingS} />
        <StatisticsSection />
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
  
