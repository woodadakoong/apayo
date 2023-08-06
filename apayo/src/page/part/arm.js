import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";
import "../../css/part/arm.css";
function Arm(){
    const navigate = useNavigate();

    //어깨
    const Shoulder = () => {
      
      const detail_part = { detail_part: "어깨" };
  
      
      navigate('/kind', { state: detail_part });
    };

    //윗팔
    const Arm_top = () => {
        
      const detail_part = { detail_part: "윗팔" };
  
      navigate('/kind', { state: detail_part });
      };

    //팔꿈치
    const Elbow = () => {
      const detail_part = { detail_part: "팔꿈치" };
  
     
      navigate('/kind', { state: detail_part });
      };

      //아랫팔
      const Arm_botom = () => {
       
        const detail_part = { detail_part: "아랫팔" };
  
     
      navigate('/kind', { state: detail_part });
      };


      //손목
      const Wrist= () => {
        
        const detail_part = { detail_part: "손목" };
  
     
        navigate('/kind', { state: detail_part });
      };


      const  Hand= () => {
        
        const detail_part = { detail_part: "손" };
  
     
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
        <button onClick={Shoulder} id="shoulder_btn"className="btn">어깨</button>
        <button onClick={Arm_top} id="arm_top_btn" className="btn">윗팔</button>
        <button onClick={Elbow} id="elbow_btn" className="btn">팔꿈치</button>
        
        </div>

        <div id="line2">
        <button onClick={Arm_botom} id="arm_bottom_btn" className="btn">아랫팔</button>
        <button onClick={Wrist} id="wrist_btn" className="btn">손목</button>
        <button onClick={Hand} id="hand_btn" className="btn">손</button>
        </div>
        

        </div>
    )
}

export default Arm;