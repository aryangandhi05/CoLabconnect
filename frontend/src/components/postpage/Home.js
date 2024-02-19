import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import image from "./pimages/wave.svg";
import "./home.css";
import lottie from "lottie-web";

const PHome = () => {
  const container = useRef(null);
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./homelottie2.json"),
    });

    // Define the text you want to animate
    const targetText =
      "Instantly broadcast your project aspirations and dive into a world of endless possibilities. Start collaborating today!";
    let currentCharIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentCharIndex <= targetText.length) {
        setText(targetText.slice(0, currentCharIndex));
        currentCharIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false); // Hide the cursor after typing
      }
    }, 30); // Adjust typing speed (milliseconds per character) as needed

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Navbar />
      <div className="homecontent">
        <div className="hometext">
          <p>
            {text}
            {showCursor && <span className="typing-cursor">|</span>}
          </p>
          <button className="homebutton">
            <NavLink to="/login">Get Started</NavLink>
          </button>
        </div>
      </div>
      <div className="contanierhomelottie" ref={container}></div>
      <div class="wave">
        <figure>
          <img src={image} alt="waves" />
        </figure>
      </div>
    </>
  );
};

export default PHome;
