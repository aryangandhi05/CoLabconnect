import React from "react";
import "./mabout.css";
import "./about2.css";
import Mnavbar from "./mnav";
import Mfooter from "./footer";
import about from "./mimages/abotus.jpg";
import aryan from "../../images/aryan.jpg";
import sam from "../../images/sam.jpg";
import mansi from "../../images/mansi.jpg";
import manya from "../../images/manya.jpg";

const Maboutus = () => {
  return (
    <>
      <Mnavbar />
      <div>
        <div className="desktop-1">
          <div className="who-we-are">WHO WE ARE</div>
          <div className="who-we-are-child" />

          <div className="colabconnect-is-your">
            <p>
              ColabConnect is your go-to hub for finding meaningful
              collaborations that align with your interests and capabilities.
              Our platform is designed to facilitate seamless connections
              between individuals and entities in need of skilled contributors.
            </p>
          </div>
          <div className="desktop-1-item" />
          <div className="our-mission">OUR MISSION</div>
          <div className="in-todays-educational">
            In today's educational landscape, students often face challenges in
            finding like-minded peers and collaborating on projects or
            activities aligned with their interests. We aim to develop a
            platform that facilitates seamless connectivity among students,
            enabling them to find and connect with peers who share similar
            interests and ambitions. CoLabConnect will provide a virtual space
            where students can collaborate on various projects, share knowledge,
            and leverage each other's strengths to achieve their goals. By
            bridging the gap between students with diverse backgrounds and
            expertise, our project seeks to foster a dynamic learning
            environment that nurtures creativity, innovation, and the
            cultivation of valuable skills
          </div>
          <img className="image-2-icon" alt="" src={about} />
        </div>

        <div className="desktop-2">
          <div className="meet-the-team">MEET THE TEAM</div>
          <div className="for-developers">{`For Developers, By Developers `}</div>
          <img className="aryan-1-icon" alt="" src={aryan} />
          <img className="mansi-1-icon" alt="" src={mansi} />
          <img className="sam-1-icon" alt="" src={sam} />
          <div className="desktop-2-item" />
          <div className="desktop-2-item" />
          <div className="aryan-gandhi">Aryan Gandhi</div>
          <div className="rectangle-div" />
          <div className="manya-garg">Manya Garg</div>
          <img className="manya-1-icon" alt="" src={manya} />
          <div className="desktop-2-child1" />
          <div className="mansi-bakshi">Mansi Bakshi</div>
          <div className="desktop-2-child2" />
          <div className="saumya-bansal">Saumya Bansal</div>
        </div>
      </div>
      <Mfooter />
    </>
  );
};

export default Maboutus;
