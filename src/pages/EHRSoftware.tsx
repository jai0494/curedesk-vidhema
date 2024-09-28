import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import ServiceMain from "../component/ServiceMain";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {contentDataFeatures, headingData, headingDataServices} from '../json/dropdownData'

const EHRSoftware: React.FC = () => {
  const {heading1} = headingData.EHRSoftware.specialityBanner1;
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'EHRSoftware');
  const { headingS, subheadingS } = headingDataServices.EHRSoftware.specialityBanner1;
  if (!sectionDataFeatures) {
    return <p>Content not found.</p>;
  } 
    return (
      <div className='px-0'>

        <ServiceMain heading={headingS} subheading={subheadingS} />
        <StatisticsSection />
        <ServicesSectionPoint heading={heading1} />
        <FeaturesCD
          heading={sectionDataFeatures.heading}
          description={sectionDataFeatures.description}
        />
        <TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
  export default EHRSoftware;