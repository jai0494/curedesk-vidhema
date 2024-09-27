import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import Schedule from "../component/Schedule";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {headingData} from '../json/dropdownData'

const EHRSoftwareIndia: React.FC = () => {
  const {heading1} = headingData.EHRSoftwareIndia.specialityBanner1;
    return (
      <div className='px-0'>

          <Schedule /><ServicesSectionPoint heading={heading1} /><FeaturesCD/><TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
  export default EHRSoftwareIndia;