import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Form from './component/Form'
import SecondaryFeatures from './component/SecondaryFeatures'
import TestimonialFeatures from './component/TestimonialFeatures'
import SectionWithImagesAndContent from './component/SectionWithImagesAndContent'
import FAQsSection from './component/FAQsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        
      </div>
      <div className='relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0 bg-white mt-[60px]'>
        <div className='mx-auto max-w-7xl flex'>

          <div className='relative z-10 flex-col bg-white px-0 py-3 sm:justify-center md:px-0 flex-[0_0_45%]'>
            <Form />
          </div>
          <div className='flex-[0_0_55%]'>
            <img src='https://healthray.com/wp-content/uploads/2024/04/Key-Points-of-Healthray.webp' />
          </div>
        </div>
      </div>
      <SecondaryFeatures />
      <TestimonialFeatures />
      <SectionWithImagesAndContent />
      <FAQsSection />
    </>
  )
}

export default App
