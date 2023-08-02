import React from "react";
import {useNavigate} from 'react-router-dom';

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
        <div>
        <button onClick={Shoulder}>어깨</button>
        <button onClick={Arm_top}>윗팔</button>
        <button onClick={Elbow}>팔꿈치</button>
        <button onClick={Arm_botom}>아랫팔</button>
        <button onClick={Wrist}>손목</button>
        <button onClick={Hand}>손</button>

        </div>
    )
}

export default Arm;