import React, { useState } from "react";
import image from "./pimages/regimages.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../../App.css";
import "./Login.css";
import Navbar from "./Navbar";
import Footer from "../mainpage/footer";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid registration ");
      //console.log("Invalid registration");
    } else {
      window.alert(
        "Registration successful! A verification email has been sent to your email address."
      );
      //console.log("Invalid registration");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="container">
          <div className="cover">
            <figure>
              <img src={image} alt="registration pic" />
            </figure>
          </div>
          <form method="POST" className="register-form" id="register-from">
            <div className="form-content" />
            <div className="signup-form">
              <div className="title">Signup</div>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="zmdi zmdi-account material-icons-name "></i>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="zmdi zmdi-email material-icons-name "></i>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="zmdi zmdi-phone-in-talk material-icons-name "></i>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Contact Number"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="zmdi zmdi-slideshow material-icons-name "></i>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Your Profession"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="zmdi zmdi-lock material-icons-name "></i>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your password"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="zmdi zmdi-lock material-icons-name "></i>
                  <input
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="button input-box">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Signup"
                    onClick={PostData}
                  />
                </div>
                <div className="text">
                  Already have an account?
                  <NavLink to="/login">
                    <a className="link">Login now</a>
                  </NavLink>{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
