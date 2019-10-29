import React from 'react';

// components import
import Navbar from "../components/Navbar";
import MainCarousel from "../components/MainCarousel";
import Cameras from '../components/Cameras';
import OurTeam from '../components/OurTeam';
import Footer from '../components/Footer';


function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <MainCarousel />
      <Cameras />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default Homepage;
