import React, { useState } from "react";
// import "../../App.css";
import "./Slogin.css";
import login from "../../images/collab4.jpg";
import login1 from "../../images/regimages.png";
import Navbar from "./Snav";
import { Container } from "semantic-ui-react";
import Footer from "../mainpage/footer";
import axios from 'axios';

const Slogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work, setWork] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  
  const loginuser = async (e,email,password) => {
    
    e.preventDefault()
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            // You can add other headers as needed
          },
          // Other config options like timeout, auth, etc.
        };
        const response = await axios.post('/sauth/slogin',{email,password},config);
        console.log("login",response.data)
      } catch (error) {
        console.error('Error Login:', error);
      }
    };
    // handleLogin(email,password)
    const handleSignUp = async (e,signUpName,signUpEmail,phone,work,signUpPassword,cpassword)=>{
      e.preventDefault()
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await axios.post('sauth/ssignup',{name:signUpName,email:signUpEmail,phone,work,password:signUpPassword,cpassword},config);
        console.log("login",response.data)
      } catch (error) {
        console.error('Error Login:', error.response.data);
      }
    };
  

  return (
    <>
      <Navbar />
      <body className="body">
        {/* <img src={login1} alt=""/> */}
        <div className="container_m">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              {/* <img src={login1} alt=""/> */}
              <div className="text">
                <span className="text-1">
                  Alone we can do so little,
                  <br />
                  together we can do so much.
                </span>
                <span className="text-2">- Helen Keller</span>
              </div>
            </div>
            <div className="back">
              {/* <img className="backImg" src={login} alt=""/> */}
              <div className="text">
                <span className="text-3">
                  Complete miles of journey <br /> with one step
                </span>
                <span className="text-4">Let's get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">
                  <h2>Login</h2>
                </div>
                <form action="#">
                  <div className="input-boxes">
                    <div className="input-boxi">
                      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email" required />
                      <label for=""> Email </label>
                      <i className="zmdi zmdi-email material-icons-name "></i>
                    </div>

                    <div className="input-boxi">
                      <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="password" required />
                      <label for=""> Password </label>
                      <i className="zmdi zmdi-lock material-icons-name "></i>
                    </div>

                    <div className="text">
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="button input-boxi">
                      <input
                        type="submit"
                        name="signin"
                        id="signin"
                        className="form-submit"
                        value="Log in"
                        onClick={(e)=> loginuser(e,email,password)}
                      />
                    </div>

                    <div className="text sign-up-text">
                      Don't have an account? <label for="flip">Sigup now</label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="signup-form">
                <div className="title">Signup</div>
                <form action="#">
                  <div className="input-boxes">
                    <div className="input-boxi">
                      <i className="zmdi zmdi-account material-icons-name "></i>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                       value={signUpName}
                       onChange={(e)=> setSignUpName(e.target.value)}
                        required
                      />
                      <label for="">Name</label>
                    </div>

                    <div className="input-boxi">
                      <i className="zmdi zmdi-email material-icons-name "></i>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={signUpEmail}
                       onChange={(e)=> setSignUpEmail(e.target.value)}
                        required
                      />
                      <label for="">Email</label>
                    </div>

                    <div className="input-boxi">
                      <i className="zmdi zmdi-phone-in-talk material-icons-name "></i>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        value={phone}
                       onChange={(e)=> setPhone(e.target.value)}
                        required
                      />
                      <label for="">Phone Number</label>
                    </div>

                    <div className="input-boxi">
                      <i className="zmdi zmdi-slideshow material-icons-name "></i>
                      <input
                        type="text"
                        name="work"
                        id="work"
                        autoComplete="off"
                        value={work}
                       onChange={(e)=> setWork(e.target.value)}
                        required
                      />
                      <label for="">Profession</label>
                    </div>

                    <div className="input-boxi">
                      <i className="zmdi zmdi-lock material-icons-name "></i>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={signUpPassword}
                        onChange={(e)=> setSignUpPassword(e.target.value)}
                        required
                      />
                      <label for="">Password</label>
                    </div>

                    <div className="input-boxi">
                      <i className="zmdi zmdi-lock material-icons-name "></i>
                      <input
                        type="text"
                        name="cpassword"
                        id="cpassword"
                        autoComplete="off"
                        value={cpassword}
                       onChange={(e)=> setCpassword(e.target.value)}
                        required
                      />
                      <label for="">Confirm Password</label>
                    </div>

                    <div className="button input-boxi">
                      <input
                        type="submit"
                        name="signup"
                        id="signup"
                        className="form-submit"
                        value="Signup"
                        onClick={(e)=> handleSignUp(e,signUpName,signUpEmail,phone,work,signUpPassword,cpassword)}
                      />
                    </div>

                    <div className="text sign-up-text">
                      Already have an account?{" "}
                      <label for="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer/>
    </>
  );
};

export default Slogin;
