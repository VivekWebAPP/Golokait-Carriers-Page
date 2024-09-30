import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Careers from './Components/Hero Element/Carrier';
import FeatureSection from './Components/Features/Features';
import CoreValues from './Components/Core Values/CoreValues';
import WorkingAndThriving from './Components/WorkingAndThriving/WorkingAndThriving';
import InclusiveEnvironment from './Components/Inclusive Environment/InclusiveEnvironment';
import CarrierOpportunities from './Components/Carrier Opportunities/CarrierOpportunities';
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import SuccessMessage from './Components/Registered Successfully/Registered';
import Footer from './Components/Footer/Footer';
import WelcomeSection from './Components/WelcomeSection/WelcomeSection';




function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/registered' && (
        <>
          <NavBar />
          <Careers />
          <FeatureSection />
          <CoreValues />
          <WorkingAndThriving />
          <InclusiveEnvironment />
          <CarrierOpportunities />
          <WelcomeSection />
          <Footer />
        </>
      )}
      <Routes>
        <Route path='/registered' element={<SuccessMessage />} />
      </Routes>
    </>
  );
}

export default App;
