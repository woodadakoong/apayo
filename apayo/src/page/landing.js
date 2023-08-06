import React from "react";
import hospital from "../img/hospital.png";
import pharmacy from "../img/pharmacy.png";
import call from "../img/call.png";
import logo from "../img/logo.png";
import "../css/landing.css"
import {Link} from 'react-router-dom';

function Landing(){
    return(
        <div className="main">

            <div id="logo">
                <img src={logo} id="logo_img"/>
            </div>

            <div id="hospital_box">
                <Link to="/wholebody">
                <img src={hospital} id="hospital_img"/>
                <p>병원 Hospital</p>
                </Link>
           
            </div>

        <div id="extra_box">

            <div id="pharmacy_box">
                <Link to="/pharmacy.js">
                <img src={pharmacy} className="img"/>
                </Link>
            </div>

            <div>
            <div id="call_box">
                <Link to="/call.js">
                    <img src={call} className="img"/>
                </Link>
            </div>
            
           </div>
        </div>
           
           
        </div>
    )
}

export default Landing;