import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.jpg";
import "../../App.css";

const Snav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} className='logo' alt="logo" ></img></a>
      <div className="d-flex flex-column p-0 pt-0 pb-0">
          <h5 className="mb-0"><span className="ntitle">CoLabConnect</span></h5>
          <p className="mb-0"><span className="nsubtitle">Communicate. Collaborate. Create</span></p>
        </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/search">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/smessages">Opportunities</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/Search" role="button" data-bs-toggle="dropdown" aria-expanded="false">Search</a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/interests">Interests</NavLink></li>
            <li><NavLink className="dropdown-item" to="/createSearch">Opportunities</NavLink></li>
            <li><a className="dropdown-divider"></a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/ssignup">Apply</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/messaa">Messages</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/slogin">Login/Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/slogout">Logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Snav;