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

            <Link to="/wholebody">
            <button id="hospital_box">
               <div className="wrapper">
                    <img src={hospital} id="hospital_img"/>
                    <div>병원 Hospital</div>
               </div>
                
               
           
            </button>
            </Link>

        <div id="extra_box">

        <Link to="/pharmacy.js">
            <button id="pharmacy_box">
                <div classNmae="wrapper">
                <img src={pharmacy} className="img"/>
                <div> 약국 pharmacy</div>
                </div>
                
                
            </button>
        </Link>

        <Link to="/call.js">
            <div>
            <button id="call_box">
               
                    <img src={call} className="img"/>
                
            </button>
            
           </div>
           </Link>
        </div>
           
           
        </div>
    )
}

export default Landing;