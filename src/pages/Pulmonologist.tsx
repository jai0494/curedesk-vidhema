import FAQsSection from "../component/FAQsSection";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {headingData} from '../json/dropdownData'
const Pulmonologist: React.FC = () => {
  const { heading } = headingData.Pulmonologist.specialityBanner;
  const {heading1} = headingData.Pulmonologist.specialityBanner1;
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality index={0} />
        <StatisticsSection />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default Pulmonologist;