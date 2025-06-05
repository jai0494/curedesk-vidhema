import { JSX } from "react";
import FAQsSection from "../../components/FAQsSection";
import HealthSection from "../../components/HealthSection";
import SecondaryFeatures from "../../components/SecondaryFeatures";
import SectionWithImagesAndContent from "../../components/SectionWithImagesAndContent";
import TestimonialFeatures from "../../components/TestimonialFeatures";
import TextImageSection from "../../components/TextImageSection";

export const Home = (): JSX.Element => {
    return (
        <><HealthSection /><SecondaryFeatures /><TextImageSection /><TestimonialFeatures /><SectionWithImagesAndContent /><FAQsSection /></>
    );
  };