import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../../img/logo.png";
import order from "../../img/order/order_2.png";
import "../../css/part/body.css";
function Body(){
    const navigate = useNavigate();

    //가슴
    const Chest = () => {
      
      const detail_part = { detail_part: "가슴" };
  
      
      navigate('/kind', { state: detail_part });
    };

    //등
    const Back = () => {
        
      const detail_part = { detail_part: "등" };
  
      navigate('/kind', { state: detail_part });
      };

    //윗배
    const Stomach_top = () => {
      const detail_part = { detail_part: "윗배" };
  
     
      navigate('/kind', { state: detail_part });
      };

      //아랫배
      const Stomach_bottom = () => {
       
        const detail_part = { detail_part: "아랫배" };
  
     
      navigate('/kind', { state: detail_part });
      };


      //간
      const Liver= () => {
        
        const detail_part = { detail_part: "간" };
  
     
        navigate('/kind', { state: detail_part });
      };

      //심장
      const  Heart= () => {
        
        const detail_part = { detail_part: "심장" };
  
     
        navigate('/kind', { state: detail_part });
      };

      //폐
      const  Lung= () => {
        
        const detail_part = { detail_part: "폐" };
  
     
        navigate('/kind', { state: detail_part });
      };

      //위
      const  Etc1= () => {
        
        const detail_part = { detail_part: "위" };
  
     
        navigate('/kind', { state: detail_part });
      };

      //장
      const  Etc2= () => {
        
        const detail_part = { detail_part: "장" };
  
     
        navigate('/kind', { state: detail_part });
      };

      //방광
      const  Etc3= () => {
        
        const detail_part = { detail_part: "방광" };
  
     
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
        <button onClick={Chest} className="btn" id="chest_btn">가슴</button>
        <button onClick={Stomach_top} className="btn" id="s_top_btn">윗배</button>
        <button onClick={Stomach_bottom} className="btn" id="s_b_btn">아랫배</button>
        </div>
       <div id="line2">
       <button onClick={Back} className="btn" id="back_btn">등</button>
       </div>
       <hr style={{ margin: '10px 0', border: '1', borderTop: '1px solid #3498db' }} />
        <div id="line3">
        <button onClick={Liver} className="btn" id="liver_btn">간</button>
        <button onClick={Heart} className="btn" id="heart_btn">심장</button>
        <button onClick={Lung} className="btn" id="lung_btn">폐</button>
        </div>
        <div id="line4">
        <button onClick={Etc1} className="btn" id="etc1_btn">위</button>
        <button onClick={Etc2} className="btn" id="etc2_btn">장</button>
        <button onClick={Etc3} className="btn" id="etc3_btn">방광</button>
        </div>
        


        </div>
    )
}

export default Body;