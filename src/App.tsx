import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home'; // Ensure you have these components created
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';
import Footer from './component/Footer';
import Services from './pages/Services';
import Speciality from './pages/Speciality';
import ABHA from './pages/ABHA';
import PMJAY from './pages/PMJAY';
import ScrollToTop from './component/ScrollToTop';
import EMRSoftware from './pages/EMRSoftware';
import EHRSoftware from './pages/EHRSoftware';
import EHRSoftwareIndia from './pages/EHRSoftwareIndia';
import Gynecologist from './pages/Gynecologist';
import Pulmonologist from './pages/Pulmonologist';
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-16"> {/* Adds padding to prevent content from being hidden behind the navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/hospital-information-management-system" element={<Services />} />
          <Route path="/services/EMRSoftware" element={<EMRSoftware />} />
          <Route path="/services/EHRSoftware" element={<EHRSoftware />} />
          <Route path="/speciality/gastroenterologists" element={<Speciality />} />
          <Route path="/speciality/Gynecologist" element={<Gynecologist />} />
          <Route path="/speciality/pulmonologist" element={<Pulmonologist />} />
          <Route path="/ABHA" element={<ABHA />} />
          <Route path="/PMJAY" element={<PMJAY />} />
          <Route path="/EHRSoftwareIndia" element={<EHRSoftwareIndia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
