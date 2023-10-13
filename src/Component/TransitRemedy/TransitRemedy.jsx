import React from "react";
import "./TransitRemedy.css";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Ic from "../Assets/icon.svg";


function TransitRemedy() {
  return (
    <div className="trans-container">
      <div className="transit-box1">
        <img className="transit-box1-img" src={Ic} alt="" />
        <div className="transit-box1-div">
          <h3 className="transit-box1-h">Saturn In Aquaris</h3>
          <p className="transit-box1-p">
            Personalised Predictions and Remedies
          </p>
        </div>
        <Link className="transit-box1-btn" to="">
          {" "}
          <AiOutlineRight style={{ width: "40px", height: "95%" }} />
        </Link>
      </div>

         <div className="transit-box1">
        <img className="transit-box1-img" src={Ic} alt="" />
        <div className="transit-box1-div">
          <h3 className="transit-box1-h">Digital Astrology Calendar - 2023</h3>
          <p className="transit-box1-p">
           
          </p>
        </div>
        <Link className="transit-box1-btn" to="">
          {" "}
          <AiOutlineRight style={{ width: "40px", height: "95%" }} />
        </Link>
      </div>
         <div className="transit-box1">
        <img className="transit-box1-img" src={Ic} alt="" />
        <div className="transit-box1-div">
          <h3 className="transit-box1-h">2023 Important Days - Personalized Report</h3>
          <p className="transit-box1-p">
         
          </p>
        </div>
        <Link className="transit-box1-btn" to="">
          {" "}
          <AiOutlineRight style={{ width: "40px", height: "95%" }} />
        </Link>
      </div>
    </div>
  );
}

export default TransitRemedy;
