import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import ImageWithDescription from "../component/ImageWithDescription";
import ServiceMain from "../component/ServiceMain";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {contentData, contentDataFeatures, headingData, headingDataServices} from '../json/dropdownData'

const EMRSoftware: React.FC = () => {
  const {heading1} = headingData.EMRSoftware.specialityBanner1;
  const { headingS, subheadingS } = headingDataServices.EMRSoftware.specialityBanner1;
  const sectionData = contentData.sections.find(section => section.id === 'EMRSoftware');
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'EMRSoftware');
  if (!sectionData || !sectionDataFeatures) {
    return <p>Content not found.</p>;
  }
    return (
      <div className='px-4'>

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
  
export default EMRSoftware;