import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import ServiceMain from "../component/ServiceMain";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";
import {headingData} from '../json/dropdownData'

const Services: React.FC = () => {
  const {heading1} = headingData.HMIS.specialityBanner1;
    return (
      <div className='px-4'>

          <ServiceMain /><ServicesSectionPoint heading={heading1} /><FeaturesCD/><TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
  export default Services;