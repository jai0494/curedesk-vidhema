import FeaturesCD from "../component/FeaturesCD";
import ServiceMain from "../component/ServiceMain";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import TrustedByCompanies from "../component/TrustedByCompanies";

const Services: React.FC = () => {
    return (
      <><ServiceMain /><ServicesSectionPoint /><FeaturesCD/><TrustedByCompanies /></>
    );
  };
  
  export default Services;