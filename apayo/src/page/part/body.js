import React from "react";
import {useNavigate} from 'react-router-dom';

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
        <div>
        <button onClick={Chest}>가슴</button>
        <button onClick={Back}>등</button>
        <button onClick={Stomach_top}>윗배</button>
        <button onClick={Stomach_bottom}>아랫배</button>
        <button onClick={Liver}>간</button>
        <button onClick={Heart}>심장</button>
        <button onClick={Lung}>폐</button>
        <button onClick={Etc1}>위</button>
        <button onClick={Etc2}>장</button>
        <button onClick={Etc3}>방광</button>


        </div>
    )
}

export default Body;