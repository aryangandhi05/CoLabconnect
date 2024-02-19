import "./mservices.css";
import Mnavbar from "./mnav";
import services from "./mimages/services.jpg";
import Mfooter from "./footer";
import React from "react";

const Mservices = () => {
  return (
    <>
      <Mnavbar />
      <div className="desktop-1">
        <div className="frame">
          <div className="frame-child" />
          <div className="frame-item" />
          <div className="if-youre-interested-container">
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">
              If you're interested in joining a project or collaborating with
              others, you can use our search feature to find projects that match
              your skills and interests. Browse through a wide range of projects
              from companies, startups, colleges, and more. Connect with project
              owners and start collaborating on exciting initiatives.
            </p>
          </div>
          <b className="search-for-projects">Search for Projects</b>
          <div className="if-you-have-container">
            <p className="blank-line">
              <b>&nbsp;</b>
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">
              If you have a project in mind and you're looking for
              collaborators, you can use our platform to post your project
              requirements. Explain your project's details, and the skills
              you're looking for in potential collaborators. Posting a project
              is easy and can help you find the right team.
            </p>
          </div>
          <b className="post-a-project">Post a Project</b>
          <div className="frame-inner" />
          <b className="quizzez">Quizzez</b>
          <div className="our-quiz-feature">
            Our Quiz feature enables users to create and share quizzes
            effortlessly. Share unique quiz links with others, and as the owner,
            access detailed score reports for insights into participants'
            performance. Perfect for education, team activities, and
            entertainment.
          </div>
        </div>
        <div className="desktop-1-child" />
        <img className="service-icon" alt="" src={services} />
      </div>
      <Mfooter />
    </>
  );
};

export default Mservices;
