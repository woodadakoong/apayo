//head_1 페이지
import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


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
        <div>
        <button onClick={Eye}>눈</button>
        <button onClick={Nose}>코</button>
        <button onClick={Mouth}>입</button>
        <button onClick={Ear}>귀</button>
        <button onClick={Head_detail}>머리</button>
        <button onClick={Neck}>목</button>

        </div>
       

   
    )
    
}

export default Head;