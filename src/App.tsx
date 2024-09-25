import './App.css'
import Navbar from './component/Navbar'
import SecondaryFeatures from './component/SecondaryFeatures'
import TestimonialFeatures from './component/TestimonialFeatures'
import SectionWithImagesAndContent from './component/SectionWithImagesAndContent'
import FAQsSection from './component/FAQsSection'
import HealthSection from './component/HealthSection'

function App() {

  return (
    <>
      <div>
        <Navbar />
        
      </div>
      <HealthSection />
      <SecondaryFeatures />
      <TestimonialFeatures />
      <SectionWithImagesAndContent />
      <FAQsSection />
    </>
  )
}

export default App
