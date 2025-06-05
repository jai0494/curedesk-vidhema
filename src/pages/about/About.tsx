import { headingData } from "../../json/dropdownData";

import FAQsSection from "../../components/FAQsSection";
import SpecialityBanner from "../../components/SpecialityBanner";
import FeaturesSectionSpeciality from "../../components/FeaturesSectionSpeciality";
import StatisticsSection from "../../components/StatisticsSection";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import TrustedByCompanies from "../../components/TrustedByCompanies";

export const About = (): JSX.Element => {
  const { heading } = headingData.About.specialityBanner;
  const {heading1} = headingData.About.specialityBanner1;
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality index={3} />
        <StatisticsSection />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}
