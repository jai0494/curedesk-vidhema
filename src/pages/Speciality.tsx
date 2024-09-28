import FAQsSection from "../component/FAQsSection";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ImageWithDescription from "../component/ImageWithDescription";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {contentData, headingData} from '../json/dropdownData'
const Speciality: React.FC = () => {
  const { heading } = headingData.Gastroenterologists.specialityBanner;
  const {heading1} = headingData.Gastroenterologists.specialityBanner1;

  const sectionData = contentData.sections.find(section => section.id === 'Gastroenterologists');
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
        <FeaturesSectionSpeciality index={0} />
        
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default Speciality;