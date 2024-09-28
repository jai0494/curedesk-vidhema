import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import Schedule from "../component/Schedule";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {contentDataFeatures, headingData} from '../json/dropdownData'

const EHRSoftwareIndia: React.FC = () => {
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
          />
          <TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
  export default EHRSoftwareIndia;