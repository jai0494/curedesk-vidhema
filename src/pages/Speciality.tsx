import FAQsSection from "../component/FAQsSection";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {headingData} from '../json/dropdownData'
const Speciality: React.FC = () => {
  const { heading } = headingData.Gastroenterologists.specialityBanner;
  const {heading1} = headingData.Gastroenterologists.specialityBanner1;
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality />
        <StatisticsSection />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default Speciality;