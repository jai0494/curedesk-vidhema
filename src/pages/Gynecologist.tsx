import FAQsSection from "../component/FAQsSection";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {headingData} from '../json/dropdownData'
const Gynecologist: React.FC = () => {
  const { heading } = headingData.Gynecologist.specialityBanner;
  const {heading1} = headingData.Gynecologist.specialityBanner1;
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

export default Gynecologist;