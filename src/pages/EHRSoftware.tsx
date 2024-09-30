import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import ImageWithDescription from "../component/ImageWithDescription";
import ServiceMain from "../component/ServiceMain";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {contentData, contentDataFeatures, headingData, headingDataServices} from '../json/dropdownData'

const EHRSoftware: React.FC = () => {
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
  
  export default EHRSoftware;