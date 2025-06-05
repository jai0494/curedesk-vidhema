import { JSX } from "react";

import { headingData, contentData, contentDataFeatures } from "../../json/dropdownData";
import SpecialityBanner from "../../components/SpecialityBanner";
import FeaturesSectionSpeciality from "../../components/FeaturesSectionSpeciality";
import ImageWithDescription from "../../components/ImageWithDescription";
import FeaturesCD from "../../components/FeaturesCD";
import StatisticsSection from "../../components/StatisticsSection";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import FAQsSection from "../../components/FAQsSection";

export const ABHA = (): JSX.Element => {
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

