import React from 'react';
import Features from '../Features';
import Hero from '../Hero';
import Introducing from '../Introducing';
import Navbar from "../Navbar";
import QuickInfo from '../QuickInfo';
import Footer from '../../mainpage/footer';

const QHome = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <QuickInfo/>
      <Introducing/>
      <Footer/>
    </div>
  )
}

export default QHome