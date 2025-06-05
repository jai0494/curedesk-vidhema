import { JSX } from "react";

import { contentData, headingData } from "../../json/dropdownData";
import SpecialityBanner from "../../components/SpecialityBanner";
import FeaturesSectionSpeciality from "../../components/FeaturesSectionSpeciality";
import StatisticsSection from "../../components/StatisticsSection";
import ImageWithDescription from "../../components/ImageWithDescription";
import ServicesSectionPoint from "../../components/ServicesSectionPoint";
import TrustedByCompanies from "../../components/TrustedByCompanies";
import FAQsSection from "../../components/FAQsSection";

export const Gynecologist = (): JSX.Element => {
  const { heading } = headingData.Gynecologist.specialityBanner;
  const {heading1} = headingData.Gynecologist.specialityBanner1;
  const sectionData = contentData.sections.find(section => section.id === 'Gynaecologists');
  if (!sectionData) {
    return <p>Content not found.</p>;
  }
  return (
    <div>
        <SpecialityBanner heading={heading} />
        <FeaturesSectionSpeciality index={5} />
        <StatisticsSection />
        <ImageWithDescription
          image={sectionData.image}
          heading={sectionData.heading}
          description={sectionData.description}
        />
        <ServicesSectionPoint heading={heading1}/>
        <TrustedByCompanies /><FAQsSection />
    </div>
  );
}

