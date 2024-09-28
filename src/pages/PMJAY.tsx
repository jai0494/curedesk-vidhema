import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ImageWithDescription from "../component/ImageWithDescription";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {contentData, contentDataFeatures, headingData} from '../json/dropdownData'
const PMJAY: React.FC = () => {
  const { heading } = headingData.PMJAY.specialityBanner;
  const {heading1} = headingData.PMJAY.specialityBanner1;
  const sectionData = contentData.sections.find(section => section.id === 'PMJAY');
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'PMJAY');
  if (!sectionData || !sectionDataFeatures) {
    return <p>Content not found.</p>;
  }
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality index={6} />
        <StatisticsSection />
        <ImageWithDescription
          image={sectionData.image}
          heading={sectionData.heading}
          description={sectionData.description}
        />
        <FeaturesCD
          heading={sectionDataFeatures.heading}
          description={sectionDataFeatures.description}
        />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default PMJAY;