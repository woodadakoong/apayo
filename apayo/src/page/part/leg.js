import React from "react";
import {useNavigate} from 'react-router-dom';

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
        <div>
        <button onClick={Thigh}>허벅지</button>
        <button onClick={Hip}>엉덩이</button>
        <button onClick={Knee}>무릎</button>
        <button onClick={Calf}>종아리</button>
        <button onClick={Ankle}>발목</button>
        <button onClick={Foot}>발</button>

        </div>
    )
}

export default Leg;