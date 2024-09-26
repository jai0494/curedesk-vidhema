import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {headingData} from '../json/dropdownData'
const ABHA: React.FC = () => {
  const { heading } = headingData.ABHA.specialityBanner;
  const {heading1} = headingData.ABHA.specialityBanner1;
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality index={1} />
        <FeaturesCD />
        <StatisticsSection />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default ABHA;