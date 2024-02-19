import React from "react";
import "./mabout.css";
import "./about2.css";
import Mnavbar from "./mnav";

import about from "../../images/abotus.jpg";
import aryan from "../../images/aryan.jpg";
import sam from "../../images/sam.jpg";
import mansi from "../../images/mansi.jpg";
import manya from "../../images/manya.jpg";

const Mab = () => {
  return (
    <>
      <Mnavbar />
      <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-left text-9xl text-black font-inder">
        <div className="absolute top-[128px] left-[171px] inline-block w-[202px] h-[27px]">
          WHO WE ARE
        </div>
        <div className="absolute top-[107px] left-[171px] bg-gold w-[61px] h-1.5" />
        <div className="absolute top-[113px] left-[729px] inline-block w-[619px] h-[326px]">
          ColabConnect is your go-to hub for finding meaningful collaborations
          that align with your interests and capabilities. Our platform is
          designed to facilitate seamless connections between individuals and
          entities in need of skilled contributors.
        </div>
        <div className="absolute top-[446px] left-[0px] bg-gainsboro w-[1396px] h-[578px]" />
        <div className="absolute top-[512px] left-[calc(50%_+_17px)]">
          OUR MISSION
        </div>
        <div className="absolute top-[611px] right-[103px] text-[20px] text-gray inline-block w-[600px] h-[248px]">
          In today's educational landscape, students often face challenges in
          finding like-minded peers and collaborating on projects or activities
          aligned with their interests. We aim to develop a platform that
          facilitates seamless connectivity among students, enabling them to
          find and connect with peers who share similar interests and ambitions.
          CoLabConnect will provide a virtual space where students can
          collaborate on various projects, share knowledge, and leverage each
          other's strengths to achieve their goals. By bridging the gap between
          students with diverse backgrounds and expertise, our project seeks to
          foster a dynamic learning environment that nurtures creativity,
          innovation, and the cultivation of valuable skills
        </div>
        <img
          className="absolute top-[316px] left-[67px] w-[579px] h-[422px] object-cover mix-blend-multiply"
          alt=""
          src={about}
        />
      </div>
      <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-left text-9xl text-black font-inknut-antiqua">
        <div className="absolute top-[69px] left-[calc(50%_-_107px)] font-inder">
          MEET THE TEAM
        </div>
        <div className="absolute top-[141px] left-[calc(50%_-_202px)] font-inder">{`For Developers , By Developers `}</div>
        <img
          className="absolute top-[324px] left-[48px] w-[243px] h-[301px] object-cover mix-blend-multiply"
          alt=""
          src={aryan}
        />
        <img
          className="absolute top-[324px] left-[756px] w-[255px] h-[301px] object-cover mix-blend-multiply"
          alt=""
          src={mansi}
        />
        <img
          className="absolute top-[324px] left-[1092px] w-[268px] h-[301px] object-cover mix-blend-multiply"
          alt=""
          src={sam}
        />
        <div className="absolute top-[625px] left-[48px] bg-gainsboro w-[241px] h-[85px]" />
        <div className="absolute top-[625px] left-[48px] bg-white w-[241px] h-[85px]" />
        <div className="absolute top-[625px] left-[48px] bg-white w-[241px] h-[85px]" />
        <div className="absolute top-[633px] left-[54px] font-extrabold">
          Aryan Gandhi
        </div>
        <div className="absolute top-[625px] left-[389px] bg-white w-[271px] h-[85px]" />
        <div className="absolute top-[628px] left-[433px] font-extrabold">
          Manya Garg
        </div>
        <img
          className="absolute top-[324px] left-[389px] w-[271px] h-[304px] object-cover"
          alt=""
          src={manya}
        />
        <div className="absolute top-[628px] left-[756px] bg-white w-[255px] h-[82px]" />
        <div className="absolute top-[628px] right-[404px] font-extrabold text-center">
          Mansi Bakshi
        </div>
        <div className="absolute top-[628px] left-[1092px] bg-white w-[268px] h-[82px]" />
        <div className="absolute top-[628px] left-[1095px] font-extrabold text-center inline-block w-[251px]">
          Saumya Bansal
        </div>
      </div>
    </>
  );
};

export default Mab;
