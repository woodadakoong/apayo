//머리 상세 페이지

import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "../../css/part/head.css";
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";

import ear from "../../img/part/head/ear.png"
import eye from "../../img/part/head/eye.png"
import head from "../../img/part/head/head.png"
import mouth from "../../img/part/head/mouth.png"
import neck from "../../img/part/head/neck.png"
import nose from "../../img/part/head/nose.png"


function Head(){
    const navigate = useNavigate();


    const Eye = () => {
      // 데이터를 객체로 만들기
      const detail_part = { detail_part: "눈",detail_eng:"eye" };
  
      // intensity 페이지로 이동하면서 데이터를 전달
      navigate('/eye_kind', { state: detail_part });
    };

    //내상
    const Nose = () => {
        
      const detail_part = { detail_part: "코",detail_eng:"nose" };
  
      navigate('/nose_kind', { state: detail_part });
      };

    
    const Mouth = () => {
      const detail_part = { detail_part: "입",detail_eng:"mouth" };
  
     
      navigate('/mouse_kind', { state: detail_part });
      };

      
      const Ear = () => {
       
        const detail_part = { detail_part: "귀",detail_eng:"ear" };
  
     
      navigate('/ear_kind', { state: detail_part });
      };

      const Head_detail= () => {
        
        const detail_part = { detail_part: "머리",detail_eng:"head" };
  
     
        navigate('/head_kind', { state: detail_part });
      };


      const Neck = () => {
        
        const detail_part = { detail_part: "목",detail_eng:"neck" };
  
     
        navigate('/neck_kind', { state: detail_part });
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
          <button onClick={Eye} id="eye_btn" className="btn">
            <img src={eye}/>
            <p>눈</p>
            <p>Eye</p>
            </button>
          <button onClick={Nose}  id="nose_btn" className="btn">
          <img src={nose}/>
            <p>코</p>
            <p>Nose</p>
          </button>
          <button onClick={Mouth} id="mouth_btn" className="btn">
          <img src={mouth}/>
            <p>입</p>
            <p>Mouth</p>
          </button>
        </div>
        
        <div id="line2">
          <button onClick={Ear} id="ear_btn" className="btn">
          <img src={ear}/>
            <p>귀</p>
            <p>Ear</p>
          </button>
          <button onClick={Head_detail} id="head_detail_btn" className="btn">
          <img src={head}/>
            <p>머리</p>
            <p>Head</p>
          </button>
          <button onClick={Neck} id="neck_btn" className="btn">
          <img src={neck}/>
            <p>목</p>
            <p>Neck</p>
          </button>
        </div>
        

        </div>
       

   
    )
    
}

export default Head;