import React from "react";
import body from "../img/image 28.png";
import {useNavigate} from 'react-router-dom';

function WholeBody(){
    const navigate=useNavigate();

    const head = () => {
       
        const part = { part: "head" };
    
        navigate('/head', { state: part});
      };
  
      //팔
      const arm = () => {
          
          const part = { part: "arm" };
      
          navigate('/arm', { state: part });
        };
  
      //몸통
        const body = () => {
          const part = { part: "body" };
  
          navigate('/body', { state: part });
        };
  
        //다리
        const leg= () => {
         
          const part = { part: "leg" };
      
          navigate('/leg', { state: part});
        };
    return(
       <div>
        {/* 마지막에 이미지로 구현할 것 */}
        <h1>큰 몸통 사진 넣는 페이지</h1>
            <button onClick={head}>머리</button>
           <button onClick={arm}>팔</button>
           <button onClick={body}>몸통</button>
           <button onClick={leg}>다리</button>
       </div>
    )
}

export default WholeBody;