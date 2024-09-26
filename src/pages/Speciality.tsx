import FAQsSection from "../component/FAQsSection";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

const Speciality: React.FC = () => {
  return (
    <div>
        <SpecialityBanner />
        <FeaturesSectionSpeciality />
        <StatisticsSection />
        <ServicesSectionPoint />
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default Speciality;