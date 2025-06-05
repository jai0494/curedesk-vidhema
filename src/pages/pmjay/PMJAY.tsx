import { JSX } from "react";

import { contentData, contentDataFeatures, headingData } from "../../json/dropdownData";
import SpecialityBanner from "../../components/SpecialityBanner";
import FeaturesSectionSpeciality from "../../components/FeaturesSectionSpeciality";
import StatisticsSection from "../../components/StatisticsSection";
import ImageWithDescription from "../../components/ImageWithDescription";
import FeaturesCD from "../../components/FeaturesCD";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import FAQsSection from "../../components/FAQsSection";

export const PMJAY = (): JSX.Element => {
  const { heading } = headingData.PMJAY.specialityBanner;
  const {heading1} = headingData.PMJAY.specialityBanner1;
  const sectionData = contentData.sections.find(section => section.id === 'PMJAY');
  const sectionDatatwo = contentData.sections.find(section => section.id === 'PMJAY2');
  const sectionDataFeatures = contentDataFeatures.sections.find(section => section.id === 'PMJAY');
  if (!sectionData || !sectionDataFeatures || !sectionDatatwo) {
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
          featuresData={sectionDataFeatures.features}
        />
        <ImageWithDescription
          image={sectionDatatwo.image}
          heading={sectionDatatwo.heading}
          description={sectionDatatwo.description}
        />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

