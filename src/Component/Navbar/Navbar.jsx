import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

import AS from "../Assets/Asset.svg";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-nameDiv">
        <div className="navbar-img">
          <img className="navbar-logo" src={AS} alt="logo" />
        </div>
        <p className="navbar-title">COSMIC CONNECT</p>
      </div>


{/* <div></div> */}
<div className="navbar-otherDiv">

<Link to=""  className="navbar-link">Cart</Link>
<Link to="" className="navbar-link">Chechout</Link>
<Link to="" className="navbar-link">My Account</Link>
<Link to="" className="navbar-link">Numerology Calculator</Link>
<Link to="" className="navbar-link">Shop</Link>
<div className="navbar-menudiv"></div>

</div>

    </div>
  );
}

export default Navbar;
