import { Routes, Route } from 'react-router-dom'

import { About, Contact, Home, Services } from '../pages'
import { EMRSoftware } from '../pages/emrsoftware/EMRSoftware'
import { EHRSoftware } from '../pages/ehrsoftware/EHRSoftware'
import { Speciality } from '../pages/speciality/Speciality'
import { Gynecologist } from '../pages/gynecologist/Gynecologist'
import { Pulmonologist } from '../pages/pulmonologist/Pulmonologist'
import { ABHA } from '../pages/abha/ABHA'
import { PMJAY } from '../pages/pmjay/PMJAY'
import { EHRSoftwareIndia } from '../pages/ehrsoftwareIndia/EHRSoftwareIndia'
import { EHRSoftwareUSA } from '../pages/erhsoftwareUSA/EHRSoftwareUSA'
import { Achievements } from '../pages/achievements/Achievements'
import NotFound from '../pages/notfound/NotFound'

// import Error from '../components/Error'

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/hospital-information-management-system" element={<Services />} />
      {/* <Route path="*" element={<Error statusCode={404} />} /> */}
                <Route path="/services/EMRSoftware" element={<EMRSoftware />} />
          <Route path="/services/EHRSoftware" element={<EHRSoftware />} />
          <Route path="/speciality/gastroenterologists" element={<Speciality />} />
          <Route path="/speciality/Gynecologist" element={<Gynecologist />} />
          <Route path="/speciality/pulmonologist" element={<Pulmonologist />} />
          <Route path="/ABHA" element={<ABHA />} />
          <Route path="/PMJAY" element={<PMJAY />} />
          <Route path="/EHRSoftwareIndia" element={<EHRSoftwareIndia />} />
          <Route path="/EHRSoftwareUSA" element={<EHRSoftwareUSA />} />
          <Route path="/Achievements" element={<Achievements />} />
          {/* <Route path="/Achievments" element={<Achievments />} /> */}
          <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
