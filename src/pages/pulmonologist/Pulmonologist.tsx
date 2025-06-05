import { JSX } from "react";
import { contentData, headingData } from "../../json/dropdownData";
import SpecialityBanner from "../../components/SpecialityBanner";
import ImageWithDescription from "../../components/ImageWithDescription";
import StatisticsSection from "../../components/StatisticsSection";
import FeaturesSectionSpeciality from "../../components/FeaturesSectionSpeciality";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import FAQsSection from "../../components/FAQsSection";


export const Pulmonologist = (): JSX.Element => {
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

