import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import ServiceMain from "../component/ServiceMain";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {headingData, headingDataServices} from '../json/dropdownData'

const EHRSoftware: React.FC = () => {
  const {heading1} = headingData.EHRSoftware.specialityBanner1;

  const { headingS, subheadingS } = headingDataServices.EHRSoftware.specialityBanner1;

    return (
      <div className='px-4'>

        <ServiceMain heading={headingS} subheading={subheadingS} /><ServicesSectionPoint heading={heading1} /><FeaturesCD/><TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
  export default EHRSoftware;