import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import ServiceMain from "../component/ServiceMain";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";

const Services: React.FC = () => {
    return (
      <div className='px-4'>

          <ServiceMain /><ServicesSectionPoint /><FeaturesCD/><TrustedByCompanies /><FAQsSection />
      </div>
    );
  };
  
  export default Services;