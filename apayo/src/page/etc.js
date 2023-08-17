//머리 상세 페이지

import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
//import "../../css/part/head.css";
import logo from "../img/logo.png";
import order from "../img/order/order_2.png";

import junsin from "../img/etc/junsin.png";
import allergy from "../img/etc/allergy.png";
import cold from "../img/etc/cold.png";
import covid from "../img/etc/covid.png";
import fever from "../img/etc/fever.png";
import mental from "../img/etc/mental.png";



function Extra(){
    const navigate = useNavigate();


    const Eye = () => {
      // 데이터를 객체로 만들기
      const detail_part = { detail_part: "감기",detail_eng:"cold" };
  
      // intensity 페이지로 이동하면서 데이터를 전달
      navigate('/etc_kind', { state: detail_part });
    };

    //내상
    const Nose = () => {
        
      const detail_part = { detail_part: "기침",detail_eng:"fever" };
  
      navigate('/etc_kind', { state: detail_part });
      };

    
    const Mouth = () => {
      const detail_part = { detail_part: "코로나",detail_eng:"covid" };
  
     
      navigate('/etc_kind', { state: detail_part });
      };

      
      const Ear = () => {
       
        const detail_part = { detail_part: "정신이상",detail_eng:"mental" };
  
     
      navigate('/etc_kind', { state: detail_part });
      };

      const Head_detail= () => {
        
        const detail_part = { detail_part: "알레르기",detail_eng:"allergy" };
  
     
        navigate('/etc_kind', { state: detail_part });
      };


      const Neck = () => {
        
        const detail_part = { detail_part: "전신통증",detail_eng:"junsin" };
  
     
        navigate('/etc_kind', { state: detail_part });
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
            <img src={cold}/>
            <p>감기</p>
            <p>Cold</p>
            </button>
          <button onClick={Nose}  id="nose_btn" className="btn">
          <img src={fever}/>
            <p>기침</p>
            <p>Fever</p>
          </button>
          <button onClick={Mouth} id="mouth_btn" className="btn">
          <img src={covid}/>
            <p>코로나19</p>
            <p>COVID-19</p>
          </button>
        </div>
        
        <div id="line2">
          <button onClick={Ear} id="ear_btn" className="btn">
          <img src={mental}/>
            <p>정신 이상</p>
            <p>Mental disorder</p>
          </button>
          <button onClick={Head_detail} id="head_detail_btn" className="btn">
          <img src={allergy}/>
            <p>알레르기</p>
            <p>Allergy</p>
          </button>
          <button onClick={Neck} id="neck_btn" className="btn">
          <img src={junsin}/>
            <p>전신통증</p>
            <p>Pantalgia</p>
          </button>
        </div>
        

        </div>
       

   
    )
    
}

export default Extra;