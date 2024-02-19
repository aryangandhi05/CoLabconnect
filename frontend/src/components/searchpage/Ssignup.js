import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Ssignup.css";
import { Button } from "./Button";
import logo from "../../images/logo_fly.png";
import Navbar from "./Snav";
import Footer from "../mainpage/footer";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from 'moment';

const Ssignup = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        var response = await axios.get(`/api/v1/groupDetails/${id}`);
        console.log("jobs responser", response.data.jobDetails);
        setJobDetails(response.data.jobDetails);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [id]);
  const {
    Topic,
    Name,
    Workplace,
    StartDate,
    Duration,
    Stipend,
    Aboutcompany,
    Aboutpost,
    Skill1,
    Skill2,
    Skill3,
    Perk1,
    Perk2,
    Numberofopenings,
    Certification1,
    Certification2,
  } = jobDetails;
  

  const dateString = {StartDate};
const formattedDate = moment(dateString).format('YYYY/MM/DD');
  return (
    <>
      <Navbar />
      <div className="topic">
        <div className="text_t">{Topic && Topic}</div>
      </div>
      <div className="container_t">
        <div className="main">
          <div className="post_m">
            <div className="logo">
              <img src={logo} alt="image"></img>
            </div>

            <div className="post">
              <h3 className="post_r"></h3>
              <span className="role">{Topic && Topic}</span>
              <div className="icon"></div>
              {/* <i class= '' className="zmdi zmdi-city material-icons-name "></i> */}
              <h4 className="comp">{Name && Name}</h4>
              <i className="zmdi zmdi-pin-drop material-icons-name "></i>
              <span className="loc">{Workplace && Workplace}</span>
            </div>
          </div>

          <div className="details">
            <div className="other_d">
              <div className="startD_c">
                <div className="startD">
                  <i className="zmdi zmdi-time material-icons-name "></i>
                  <span className="startHead">Start Date</span>
                </div>
                <div className="start_d">
                  <div className="start_date">{formattedDate && formattedDate}</div>
                </div>
              </div>
              <div className="startD_c">
                <div className="startD">
                  <i className="zmdi zmdi-calendar-alt material-icons-name "></i>
                  <span className="startHead">Duration</span>
                </div>
                <div className="start_d">
                  <div className="start_date">{Duration && Duration}</div>
                </div>
              </div>
            </div>

            <div className="other_d">
              <div className="startD_c">
                <div className="startD">
                  <i className="zmdi zmdi-money-box material-icons-name "></i>
                  <span className="startHead">Stipend</span>
                </div>
                <div className="start_d">
                  <div className="start_date">{Stipend && Stipend}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_content">
          <div className="about">About Company</div>
          <div className="compC">{Aboutcompany && Aboutcompany}</div>
          <div className="about">About Post</div>
          <div className="compC">{Aboutpost && Aboutpost}</div>
          <div className="about">Required Skill(s)</div>
          <div className="skillC">
            <div className="skilltab">{Skill1 && Skill1}</div>
            <div className="skilltab">{Skill2 && Skill2}</div>
            <div className="skilltab">{Skill3 && Skill3}</div>
          </div>

          <div className="about">Perks</div>
          <div className="skillC">
            <div className="skilltab">{Perk1 && Perk1}</div>
            <div className="skilltab">{Perk2 && Perk2}</div>
          </div>
          <div className="about">Number of Openings</div>
          <div className="compC">{Numberofopenings && Numberofopenings}</div>
          <div className="about">Certification(s) Required</div>
          <div className="skillC">
            <div className="skilltab">{Certification1 && Certification1}</div>
            <div className="skilltab">{Certification2 && Certification2}</div>
            <div className="skilltab">Node</div>
          </div>
        </div>
        <button className="btn_k">
          <NavLink to="/sapply">Apply Now</NavLink>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Ssignup;
