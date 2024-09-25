import FAQsSection from "../component/FAQsSection";
import HealthSection from "../component/HealthSection";
import SecondaryFeatures from "../component/SecondaryFeatures";
import SectionWithImagesAndContent from "../component/SectionWithImagesAndContent";
import TestimonialFeatures from "../component/TestimonialFeatures";
import TextImageSection from "../component/TextImageSection";

const Home: React.FC = () => {
    return (
        <><HealthSection /><SecondaryFeatures /><TextImageSection /><TestimonialFeatures /><SectionWithImagesAndContent /><FAQsSection /></>
    );
  };
  export default Home;