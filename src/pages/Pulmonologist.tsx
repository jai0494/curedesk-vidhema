import FAQsSection from "../component/FAQsSection";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ImageWithDescription from "../component/ImageWithDescription";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {contentData, headingData} from '../json/dropdownData'
const Pulmonologist: React.FC = () => {
  const { heading } = headingData.Pulmonologist.specialityBanner;
  const {heading1} = headingData.Pulmonologist.specialityBanner1;
  const sectionData = contentData.sections.find(section => section.id === 'Pulmonologist');
  if (!sectionData) {
    return <p>Content not found.</p>;
  }
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <ImageWithDescription
          image={sectionData.image}
          heading={sectionData.heading}
          description={sectionData.description}
        />
        <StatisticsSection />
        <FeaturesSectionSpeciality index={4} />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default Pulmonologist;