import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import Schedule from "../component/Schedule";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {headingData} from '../json/dropdownData'

const EHRSoftwareUSA: React.FC = () => {
  const {heading1} = headingData.EHRSoftwareUSA.specialityBanner1;
    return (
      <div className='px-0'>

          <Schedule /><ServicesSectionPoint heading={heading1} /><FeaturesCD/><TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
  export default EHRSoftwareUSA;