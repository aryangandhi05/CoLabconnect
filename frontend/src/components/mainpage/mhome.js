import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import image from "../../images/mainpage.jpg";
import { NavLink } from "react-router-dom";
import "../../MApp.css";
import Mnavbar from "./mnav";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLightbulb,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const Mhome = () => {
  return (
    <>
      <Mnavbar />
      <section className="home">
        <div className="row">
          <h2 className="homecontain" id="contain">
            Communicate.<br></br> Collaborate.
            <br></br>Create.
          </h2>
          <img src={image} alt="img" className="right-aligned-image" />

          <span>
            Where Expertise Meets Experience. A Platform for Project
            Partnership.
          </span>
          <div className="button">
            <button className="primary-btn1">
              <NavLink to="/services">GET STARTED</NavLink>
              <i className="fa fa-long-arrow-alt-right"></i>
            </button>

            <button class="primary-btn2">
              <NavLink to="/aboutus">KNOW MORE</NavLink>{" "}
              <i className="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div class="hLinks">
            <div class="hcontainer">
              <div class="hitem">
                <NavLink to="/createhome" className="white-link">
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="2x"
                    style={{ marginTop: "30%", marginLeft: "25%" }}
                  />
                  <br></br>Post Opportunity
                </NavLink>

                <NavLink to="/search" className="white-link">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="2x"
                    style={{ marginTop: "30%", marginLeft: "20%" }}
                  />
                  <br></br>Seek Opportunity
                </NavLink>

                <NavLink to="/quiz" className="white-link">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    size="2x"
                    style={{ marginTop: "30%", marginLeft: "20%" }}
                  />
                  <br></br>Quizzie
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mhome;
