import FAQsSection from "../component/FAQsSection";
import FeaturesCD from "../component/FeaturesCD";
import FeaturesSectionSpeciality from "../component/FeaturesSectionSpeciality";
import ImageWithDescription from "../component/ImageWithDescription";
import ServicesSectionPoint from "../component/ServicesSectionPoint";
import SpecialityBanner from "../component/SpecialityBanner";
import StatisticsSection from "../component/StatisticsSection";
import TrustedByCompanies from "../component/TrustedByCompanies";

import {headingData, contentData, contentDataFeatures} from '../json/dropdownData'
const ABHA: React.FC = () => {
  const { heading } = headingData.ABHA.specialityBanner;
  const {heading1} = headingData.ABHA.specialityBanner1;

  const sectionData = contentData.sections.find(section => section.id === 'ABHA');
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'ABHA');
 console.log("sectionDataFeatures ",sectionDataFeatures);
 
  const sectionDatatwo = contentData.sections.find(section => section.id === 'ABHA2');
  if (!sectionData || !sectionDataFeatures || !sectionDatatwo) {
    return <p>Content not found.</p>;
  }
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality index={1} />
        <ImageWithDescription
          image={sectionData.image}
          heading={sectionData.heading}
          description={sectionData.description}
        />
        <FeaturesCD
          heading={sectionDataFeatures.heading}
          description={sectionDataFeatures.description}
          featuresData={sectionDataFeatures.features}
        />
        <ImageWithDescription
          image={sectionDatatwo.image}
          heading={sectionDatatwo.heading}
          description={sectionDatatwo.description}
        />
        <StatisticsSection />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

export default ABHA;