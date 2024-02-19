import React, { useEffect } from "react";
import "../../App.css";
import "./Shome.css";
import { Button } from "./Button";
import bg1 from "../../images/homeg.jpg";
import bg2 from "../../images/home3.jpg";
import bg3 from "../../images/home9.jpg";
import bg4 from "../../images/home8.jpg";
import bg5 from "../../images/home4.jpg";
import bg6 from "../../images/homeid.jpg";
import bg7 from "../../images/home11.jpg";
import Swiper from "swiper";
import "swiper/css";
import Navbar from "./Snav";
import $ from "jquery";
import { NavLink } from "react-router-dom";

const Shome = () => {
  useEffect(() => {
    // Initialize Swiper
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });

    $(".slider-img").on("click", function() {
      $(".slider-img").removeClass("active");
      $(this).addClass("active");
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="slide">
        <div className="content">
          {/* <h3>Welcome</h3>  */}
          <h3>
            Unleash the power of teamwork as you connect, collaborate, and
            create. Scale your dreams into reality with our collaborative
            platform .<br />
          </h3>
          <button className='btn_h'><NavLink to="/slogin">Know More</NavLink></button>
        </div>
        <section className="slider-container">
          <div className="slider-images">
            <div className="slider-img">
              <img src={bg1} alt="1" />
              <h1>Need </h1>
              <div className="details">
                {/* <h2></h2> */}
                <p>
                  Need a job, this is the right place to scale your impact and
                  teamwork.
                </p>
              </div>
            </div>

            <div className="slider-img">
              <img src={bg3} alt="2" />
              <h1>Scale</h1>
              <div className="details">
                {/* <h2></h2> */}
                <p>
                  Scale your projects and dreams with the power of collaboration
                </p>
              </div>
            </div>
            <div className="slider-img active">
              <img src={bg6} alt="3" />
              <h1>Create</h1>
              <div className="details">
                {/* <h2></h2> */}
                <p>Connect, collaborate, and create new ideas.</p>
              </div>
            </div>
            <div className="slider-img ">
              <img src={bg2} alt="4" />
              <h1>Collab</h1>
              <div className="details">
                {/* <h2></h2> */}
                <p>Unleash the power of collaboration.</p>
              </div>
            </div>
            <div className="slider-img">
              <img src={bg4} alt="5" />
              <h1>Connect</h1>
              <div className="details">
                <h2></h2>
                <p>
                  Connect with like-minded individuals for collaborative
                  success.
                </p>
              </div>
            </div>
            <div className="slider-img">
              <img src={bg5} alt="6" />
              <h1>Team Work</h1>
              <div className="details">
                {/* <h2></h2> */}
                <p>Teamwork is the key to success.</p>
              </div>
            </div>
            <div className="slider-img">
              <img src={bg7} alt="7" />
              <h1>Chance</h1>
              <div className="details">
                {/* <h2></h2> */}
                <p>Explore a world of opportunities.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shome;
