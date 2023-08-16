import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";
import "../../css/part/body.css";

import back from "../../img/part/body/back.png"
import bang from "../../img/part/body/bang.png"
import chest from "../../img/part/body/chest.png"
import heart from "../../img/part/body/heart.png"
import jang from "../../img/part/body/jang.png"
import liver from "../../img/part/body/liver.png"
import low_bae from "../../img/part/body/low_bae.png"
import pae from "../../img/part/body/pae.png"
import stomach from "../../img/part/body/stomach.png"
import up_bae from "../../img/part/body/up_bae.png"


function Body(){
    const navigate = useNavigate();

    //가슴
    const Chest = () => {
      
      const detail_part = { detail_part: "가슴",detail_eng:"chest" };
  
      
      navigate('/body_kind', { state: detail_part });
    };

    //등
    const Back = () => {
        
      const detail_part = { detail_part: "등",detail_eng:"back" };
  
      navigate('/body_kind', { state: detail_part });
      };

    //윗배
    const Stomach_top = () => {
      const detail_part = { detail_part: "윗배",detail_eng:"up_bae" };
  
     
      navigate('/body_kind', { state: detail_part });
      };

      //아랫배
      const Stomach_bottom = () => {
       
        const detail_part = { detail_part: "아랫배",detail_eng:"low_bae" };
  
     
      navigate('/body_kind', { state: detail_part });
      };


      //간
      const Liver= () => {
        
        const detail_part = { detail_part: "간",detail_eng:"liver" };
  
     
        navigate('/body_kind', { state: detail_part });
      };

      //심장
      const  Heart= () => {
        
        const detail_part = { detail_part: "심장",detail_eng:"heart" };
  
     
        navigate('/body_kind', { state: detail_part });
      };

      //폐
      const  Lung= () => {
        
        const detail_part = { detail_part: "폐" ,detail_eng:"pae"};
  
     
        navigate('/body_kind', { state: detail_part });
      };

      //위
      const  Etc1= () => {
        
        const detail_part = { detail_part: "위",detail_eng:"stomach" };
  
     
        navigate('/body_kind', { state: detail_part });
      };

      //장
      const  Etc2= () => {
        
        const detail_part = { detail_part: "장",detail_eng:"jang" };
  
     
        navigate('/body_kind', { state: detail_part });
      };

      //방광
      const  Etc3= () => {
        
        const detail_part = { detail_part: "방광",detail_eng:"bang" };
  
     
        navigate('/body_kind', { state: detail_part });
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
        <button onClick={Chest} className="btn" id="chest_btn">
          <img src={chest}/>
          <p>가슴</p>
          <p>Chest</p>
        </button>

        <button onClick={Stomach_top} className="btn" id="s_top_btn">
        <img src={up_bae}/>
          <p>윗배</p>
          <p>up Abdomen</p>
        </button>
        <button onClick={Stomach_bottom} className="btn" id="s_b_btn">
        <img src={low_bae}/>
          <p>아랫배</p>
          <p>low Abdomen</p>
        </button>
        </div>
       <div id="line2">
       <button onClick={Back} className="btn" id="back_btn">
       <img src={back}/>
          <p>등/허리</p>
          <p>back/waist</p>
       </button>
      

       </div>
     
        <div id="line3">
        <button onClick={Liver} className="btn" id="liver_btn">
        <img src={liver}/>
          <p>간</p>
          <p>liver</p>
        </button>
        <button onClick={Heart} className="btn" id="heart_btn">
        <img src={heart}/>
          <p>심장</p>
          <p>heart</p>
        </button>
        <button onClick={Lung} className="btn" id="lung_btn">
        <img src={pae}/>
          <p>폐</p>
          <p>lung</p>
        </button>
        </div>
        <div id="line4">
        <button onClick={Etc1} className="btn" id="etc1_btn">
        <img src={stomach}/>
          <p>위</p>
          <p>stomach</p>
        </button>
        <button onClick={Etc2} className="btn" id="etc2_btn">
        <img src={jang}/>
          <p>장</p>
          <p>Intestines</p>
        </button>
        <button onClick={Etc3} className="btn" id="etc3_btn">
        <img src={bang}/>
          <p>방광/생식기</p>
          <p>bladder/genitals</p>
        </button>
        </div>
        


        </div>
    )
}

export default Body;