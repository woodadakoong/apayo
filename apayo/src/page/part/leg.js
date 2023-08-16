import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";
import "../../css/part/leg.css";

import thigh from "../../img/part/leg/thigh.png";
import knee from "../../img/part/leg/knee.png";
import foot from "../../img/part/leg/foot.png";
import calf from "../../img/part/leg/calf.png";
import butt from "../../img/part/leg/butt.png";
import ankle from "../../img/part/leg/ankle.png";


function Leg(){
    const navigate = useNavigate();

    
    const Thigh = () => {
      
      const detail_part = { detail_part: "허벅지",detail_eng:"thigh" };
  
      
      navigate('/hand_kind', { state: detail_part });
    };

    
    const Hip= () => {
        
      const detail_part = { detail_part: "엉덩이",detail_eng:"butt" };
  
      navigate('/hand_kind', { state: detail_part });
      };

    
    const Knee = () => {
      const detail_part = { detail_part: "무릎",detail_eng:"knee" };
  
     
      navigate('/hand_kind', { state: detail_part });
      };

      
      const Calf = () => {
       
        const detail_part = { detail_part: "종아리",detail_eng:"calf" };
  
     
      navigate('/hand_kind', { state: detail_part });
      };


    
      const Ankle= () => {
        
        const detail_part = { detail_part: "발목",detail_eng:"ankle" };
  
     
        navigate('/hand_kind', { state: detail_part });
      };


      const  Foot= () => {
        
        const detail_part = { detail_part: "발",detail_eng:"foot" };
  
     
        navigate('/hand_kind', { state: detail_part });
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
          <button onClick={Thigh} id="thigh_btn" className="btn">
            <img src={thigh}/>
            <p>허벅지</p>
            <p>thigh</p>
          </button>
          <button onClick={Hip} id="hip_btn" className="btn">
          <img src={butt}/>
            <p>엉덩이</p>
            <p>butt</p>
          </button>
          <button onClick={Knee} id="knee_btn" className="btn">
          <img src={knee}/>
            <p>무릎</p>
            <p>knee</p>
          </button>
        </div>

        <div id="line2">
          <button onClick={Calf} id="calf_btn" className="btn">
          <img src={calf}/>
            <p>종아리</p>
            <p>calf</p>
          </button>
          <button onClick={Ankle} id="ankle_btn" className="btn">
          <img src={ankle}/>
            <p>발목</p>
            <p>ankle</p>
          </button>
          <button onClick={Foot} id="foot_btn" className="btn">
          <img src={foot}/>
            <p>발</p>
            <p>foot</p>
          </button>
        </div>

       
       

        </div>
    )
}

export default Leg;