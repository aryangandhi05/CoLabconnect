import React, { useState } from "react";
import "../../App.css";
import "./Smessages.css";
import Navbar from "./Snav";
import styled from "styled-components";
import FilterSection from "./Filtersection";
import Listview from "./Listview";
import Sort from "./Sort";
import Footer from "../mainpage/footer";

const Smessages = () => {
  const [jobs, setJobs] = useState([]);
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="container_h grid grid-filter-column">
          <div className="filter_s">
            <FilterSection jobs={jobs} setJobs={setJobs} />
          </div>

          <section className="product-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <Listview setJobs={setJobs} jobs={jobs}/>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Smessages;
