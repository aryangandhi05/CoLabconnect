import React from "react";
import "./footer.css";
import logo from "../../images/logo.jpg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="footer-logo">
          <img src={logo} alt="CollabConnect Logo" />
          <h4 id="purple">CollabConnect</h4>
        </div>
        <div className="Footer-section">
          <NavLink className="nav-link" to="/">
            <h4>Home</h4>
          </NavLink>
        </div>
        <div className="Footer-section">
          <NavLink className="nav-link" to="/aboutus">
            <h4>About</h4>
          </NavLink>
        </div>
        <div className="Footer-section">
          <NavLink className="nav-link" to="/services">
            <h4>Services</h4>
          </NavLink>
        </div>
        <div className="Footer-section">
          <NavLink className="nav-link" to="/help">
            <h4>Help</h4>
          </NavLink>
          <p>
            <i className="fas fa-phone"></i> Phone: +91 9876543210 <br />
            <i className="fas fa-envelope"></i> Email: coLabConnect@gmail.com
          </p>
        </div>
      </div>
      <div className="Footer-content">
        <div className="Footer-section">
          <h4>Team</h4>
        </div>
        <div className="Footer-section">
          <h4>Terms and Conditions</h4>
        </div>
        <div className="Footer-section">
          <h4>Privacy Policy</h4>
        </div>
      </div>
      <div className="Subscribe-section">
        <h4>Sign up for updates</h4>
        <div className="subscribe-form">
          <input type="email" placeholder="E-mail" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
