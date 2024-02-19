import React, { useState, useContext } from "react";
import image from "./pimages/collab4.jpg";
import { NavLink, useNavigate } from "react-router-dom";
// import "../../App.css";
import Navbar from "./Navbar";
import "./Login.css";
import { UserContext } from "./post";
import Footer from "../mainpage/footer";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert(data.error || "Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");
      navigate("/home");
    }
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="container">
          <div className="cover">
            <figure>
              <img src={image} alt="registration pic" />
            </figure>
          </div>
          <form method="POST" className="register-form" id="register-from">
            <div className="form-content" />
            <div className="login-form">
              <div className="title">Login</div>
              <div className="input-boxes">
                <div className="input-box">
                  <div className="helo">
                    <i className="zmdi zmdi-email material-icons-name "></i>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your email"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    required
                  />
                </div>

                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                    onClick={loginUser}
                  />
                </div>
                <div className="text">
                  Don't have an account?
                  <NavLink to="/signup">
                    <a className="link">Signup now</a>
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

export default Login;
