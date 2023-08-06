//머리 상세 페이지

import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "../../css/part/head.css";
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";

function Head(){
    const navigate = useNavigate();


    const Eye = () => {
      // 데이터를 객체로 만들기
      const detail_part = { detail_part: "눈" };
  
      // intensity 페이지로 이동하면서 데이터를 전달
      navigate('/kind', { state: detail_part });
    };

    //내상
    const Nose = () => {
        
      const detail_part = { detail_part: "코" };
  
      navigate('/kind', { state: detail_part });
      };

    
    const Mouth = () => {
      const detail_part = { detail_part: "입" };
  
     
      navigate('/kind', { state: detail_part });
      };

      
      const Ear = () => {
       
        const detail_part = { detail_part: "귀" };
  
     
      navigate('/kind', { state: detail_part });
      };

      const Head_detail= () => {
        
        const detail_part = { detail_part: "머리" };
  
     
        navigate('/kind', { state: detail_part });
      };


      const Neck = () => {
        
        const detail_part = { detail_part: "목" };
  
     
        navigate('/kind', { state: detail_part });
      };


    return(
        <div className="head_main">
        <div id="part_navbar">

          <div id="head_logo">
          <img src={logo} id="head_logo_img" />
          </div>
          
          <div id="head_order">
          <img src={order} id="head_order_img"/>
          </div>
         


        </div>
        <div id="line1">
          <button onClick={Eye} id="eye_btn" className="btn">눈</button>
          <button onClick={Nose}  id="nose_btn" className="btn">코</button>
          <button onClick={Mouth} id="mouth_btn" className="btn">입</button>
        </div>
        
        <div id="line2">
          <button onClick={Ear} id="ear_btn" className="btn">귀</button>
          <button onClick={Head_detail} id="head_detail_btn" className="btn">머리</button>
          <button onClick={Neck} id="neck_btn" className="btn">목</button>
        </div>
        

        </div>
       

   
    )
    
}

export default Head;