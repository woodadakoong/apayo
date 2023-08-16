import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";
import "../../css/part/arm.css";


import arae from "../../img/part/arm/arae.png"
import elbow from "../../img/part/arm/elbow.png"
import hand from "../../img/part/arm/hand.png"
import shoulder from "../../img/part/arm/shoulder.png"
import wipal from "../../img/part/arm/wipal.png"
import wrist from "../../img/part/arm/wrist.png"


function Arm(){
    const navigate = useNavigate();

    //어깨
    const Shoulder = () => {
      
      const detail_part = { detail_part: "어깨",detail_eng:"shoulder" };
  
      
      navigate('/hand_kind', { state: detail_part });
    };

    //윗팔
    const Arm_top = () => {
        
      const detail_part = { detail_part: "윗팔",detail_eng:"wipal" };
  
      navigate('/hand_kind', { state: detail_part });
      };

    //팔꿈치
    const Elbow = () => {
      const detail_part = { detail_part: "팔꿈치",detail_eng:"elbow" };
  
     
      navigate('/hand_kind', { state: detail_part });
      };

      //아랫팔
      const Arm_botom = () => {
       
        const detail_part = { detail_part: "아랫팔",detail_eng:"arae" };
  
     
      navigate('/hand_kind', { state: detail_part });
      };


      //손목
      const Wrist= () => {
        
        const detail_part = { detail_part: "손목" ,detail_eng:"wrist"};
  
     
        navigate('/hand_kind', { state: detail_part });
      };


      const  Hand= () => {
        
        const detail_part = { detail_part: "손",detail_eng:"hand" };
  
     
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
        <button onClick={Shoulder} id="shoulder_btn"className="btn">
        <img src={shoulder}/>
            <p>어깨</p>
            <p>Shoulder</p>
        </button>

        <button onClick={Arm_top} id="arm_top_btn" className="btn">
        <img src={wipal}/>
            <p>윗팔</p>
            <p>Brachium</p>
        </button>
        <button onClick={Elbow} id="elbow_btn" className="btn">
        <img src={elbow}/>
            <p>팔꿈치</p>
            <p>elbow</p>
        </button>
        
        </div>

        <div id="line2">
        <button onClick={Arm_botom} id="arm_bottom_btn" className="btn"> 
        <img src={arae}/>
            <p>아랫팔</p>
            <p>antebrachium</p></button>
        <button onClick={Wrist} id="wrist_btn" className="btn">
        <img src={wrist}/>
            <p>손목</p>
            <p>wrist</p>
        </button>
        <button onClick={Hand} id="hand_btn" className="btn">
        <img src={hand}/>
            <p>손</p>
            <p>hand</p>
        </button>
        </div>
        

        </div>
    )
}

export default Arm;