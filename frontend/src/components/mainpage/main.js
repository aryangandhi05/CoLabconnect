import React from "react";
import { Routes, Route } from "react-router-dom"; // BrowserRouter as Router

import Mhome from "./mhome";
import Mservices from "./mservices";
import Mhelp from "./mhelp";
import Maboutus from "./maboutus";
// import Footer from './footer';

import "../../App.css";
import "../../MApp.css";
import PHome from "../postpage/Home";
import Shome from "../searchpage/Shome";
import QHome from "../quizpage/pages/QHome";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Mhome />} />
      <Route path="/services" element={<Mservices />} />
      <Route path="/aboutus" element={<Maboutus />} />
      <Route path="/help" element={<Mhelp />} />
      <Route path="/createhome" element={<PHome />} />
      <Route path="/quiz" element={<QHome />} />
      {/* <Route path='/search' element={<Shome />} /> */}
    </Routes>
  );
};

export default Main;
