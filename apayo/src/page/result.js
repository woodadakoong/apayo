import React from 'react';
import { useLocation } from 'react-router-dom';
import {useEffect,useState} from "react";
import axios from 'axios';
import Map from "./map"; //Map 컴포넌트 불러오기
import "../css/result.css";
import logo from "../img/logo.png";
import order from "../img/order/order_5.png";
import { Link} from "react-router-dom";
const Result=() => {
 
  const location = useLocation();
  const intensityData = location.state; // Intensity 페이지에서 받은 데이터

  const [serverResponse, setServerResponse] = useState(null);
  useEffect(() => {
    // 서버로 데이터 전송
    sendDataToServer(intensityData);
  }, [intensityData]);

  const sendDataToServer = async (data) => {
  
    const prompt =`
    부위는 ${data.detail_part}이고 증상은 ${data.kind} ${data.pain}이야. 어느 병원에 가야 해? 
    대답할 수 있는 병원종류는 치과, 외과, 내과, 정형외과, 산부인과, 비뇨기과, 이비인후과, 안과, 피부과.
    대답의 형식은, '병원 종류' 만 정확히 단답형으로 말해줘.`;
;

    const url = `http://localhost:8080/bot/chat?prompt=${encodeURIComponent(prompt)}`;
    try {
      const response = await axios.get(url);
      setServerResponse(response.data); // 서버에서 받은 응답 설정
     
    } catch (error) {
      console.error('서버 요청 실패:', error);
    }

  
  };

  return (
    <div className="main">
  
    {serverResponse ? (
      <div id="tmp" style={{ width: "100%", height: '100%' }}> 
      <div id="part_navbar">
        <Link to="/">
        <div id="head_logo">
          <img src={logo} id="head_logo_img" />
          </div>
        </Link>
         
          
          <div id="head_order">
          <img src={order} id="kind_order_img"/>
      </div>
        </div>
       
        {/* Map 컴포넌트에 serverResponse 데이터 전달 */}
        <Map keyword= {JSON.stringify(serverResponse)}/>
        <div id="result_box">
          <div id="part_say">
             하단 자가진단서를 의사에게 보여주세요
            
            </div>
          <div id="click_box">
          <div className="part_box" id="box_part">
            <p className="text"> {intensityData.detail_part}</p>
            <img src={`/asset/${intensityData.detail_eng}.png` } />
           
         
          </div>
          <div className="part_box" id="box_kind">
            <p className="text">{intensityData.kind}</p>
            <img src={`/asset/${intensityData.pain_eng}.png` } />

          
          </div>
          <div className="part_box" id="box_pain">
            <p className="text">{intensityData.pain}</p>
            <img src={`/asset/${intensityData.kind_eng}.png` } />

          
          </div>
          </div>

          

          </div>
        
        
        

      </div>
    ) : (
      <p>증상 기반으로 주변 병원을 찾고 있습니다.
        Based on symptoms, we are looking for a nearby hospital.</p>
    )}
  </div> 
  );
};

export default Result;