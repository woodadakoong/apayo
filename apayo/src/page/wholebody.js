import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../img/logo.png";
import order from "../img/order/order_1.png";
import "../css/wholebody.css";
import { Link } from "react-router-dom";
import head_img from "../img/body/head.png";
import left_img from "../img/body/left_hand.png";
import right_img from "../img/body/right_hand.png";
import center_img from "../img/body/center.png";
import leg_img from "../img/body/leg.png";

function WholeBody(){
    const navigate=useNavigate();

    const head = () => {
       
        const part = { part: "head" };
    
        navigate('/head', { state: part});
      };
  
      //팔
      const arm = () => {
          
          const part = { part: "arm" };
      
          navigate('/arm', { state: part });
        };
  
      //몸통
        const body = () => {
          const part = { part: "body" };
  
          navigate('/body', { state: part });
        };
  
        //다리
        const leg= () => {
         
          const part = { part: "leg" };
      
          navigate('/leg', { state: part});
        };
    return(
       <div className="main">
        <div id="part_navbar">

          <div id="head_logo">
            <img src={logo} id="head_logo_img" />
          </div>

           <div id="head_order">
         <img src={order} id="head_order_img"/>
        </div>

    </div>
            <div id="part1">
              <button onClick={head} className="wholebody_btn" >
                <img src={head_img}/>
              </button>
            </div>
            
            <div id="part2">
              <button onClick={arm} className="wholebody_btn" id="left_arm">
                <img src={left_img}/>
              </button>
              <button onClick={body} className="wholebody_btn">
                <img src={center_img}/>
              </button>
              <button onClick={arm} className="wholebody_btn" id="right_arm">
                <img src={right_img}/>
              </button>
            </div>
           
           <div id="part3">
              <button onClick={leg} className="wholebody_btn">
                <img src={leg_img}/>
              </button>
              <button onClick={leg} className="wholebody_btn">
                <img src={leg_img}/>
              </button>
           </div>
           
           <Link to="/extra" id="boxbox">
            <img src="/asset/eet.png"/>
              그 외의 증상
                
            </Link>
          
         
          

       </div>
     

    )
}

export default WholeBody;