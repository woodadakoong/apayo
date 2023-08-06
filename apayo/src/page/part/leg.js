import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";
import "../../css/part/leg.css";

function Leg(){
    const navigate = useNavigate();

    
    const Thigh = () => {
      
      const detail_part = { detail_part: "허벅지" };
  
      
      navigate('/kind', { state: detail_part });
    };

    
    const Hip= () => {
        
      const detail_part = { detail_part: "엉덩이" };
  
      navigate('/kind', { state: detail_part });
      };

    
    const Knee = () => {
      const detail_part = { detail_part: "무릎" };
  
     
      navigate('/kind', { state: detail_part });
      };

      
      const Calf = () => {
       
        const detail_part = { detail_part: "종아리" };
  
     
      navigate('/kind', { state: detail_part });
      };


    
      const Ankle= () => {
        
        const detail_part = { detail_part: "발목" };
  
     
        navigate('/kind', { state: detail_part });
      };


      const  Foot= () => {
        
        const detail_part = { detail_part: "발" };
  
     
        navigate('/kind', { state: detail_part });
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

        <div id="line1">
          <button onClick={Thigh} id="thigh_btn" className="btn">허벅지</button>
          <button onClick={Hip} id="hip_btn" className="btn">엉덩이</button>
          <button onClick={Knee} id="knee_btn" className="btn">무릎</button>
        </div>

        <div id="line2">
          <button onClick={Calf} id="calf_btn" className="btn">종아리</button>
          <button onClick={Ankle} id="ankle_btn" className="btn">발목</button>
          <button onClick={Foot} id="foot_btn" className="btn">발</button>
        </div>

       
       

        </div>
    )
}

export default Leg;