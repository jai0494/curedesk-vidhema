import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {headingData} from '../json/dropdownData'
const PMJAY: React.FC = () => {
  const { heading } = headingData.PMJAY.specialityBanner;
  const {heading1} = headingData.PMJAY.specialityBanner1;
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality index={2} />
        <FeaturesCD />
        <StatisticsSection />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default PMJAY;