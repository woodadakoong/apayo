import React from 'react';
import { useLocation } from 'react-router-dom';
import {useEffect,useState} from "react";
import axios from 'axios';
import Map from "./map"; //Map 컴포넌트 불러오기

const Result=() => {
  const location = useLocation();
  const intensityData = location.state; // Intensity 페이지에서 받은 데이터

  const [serverResponse, setServerResponse] = useState(null);
  useEffect(() => {
    // 서버로 데이터 전송
    sendDataToServer(intensityData);
  }, [intensityData]);

  const sendDataToServer = async (data) => {
    console.log(data);
    const prompt =`
    부위는 ${data.detail_part}이고 증상은 ${data.kind} ${data.pain}이야. 어느 병원에 가야 해? 
    대답할 수 있는 병원은 다음과 같아.
    { 치과, 외과, 내과, 정형외과, 산부인과, 비뇨기과, 이비인후과, 안과, 피부과}
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
    <div>
  
    <p>Result 페이지</p>
    {serverResponse ? (
      <div>
        <p>{JSON.stringify(serverResponse)}추천!!</p>
        {/* Map 컴포넌트에 serverResponse 데이터 전달 */}
        <Map keyword= {JSON.stringify(serverResponse)}/>
      </div>
    ) : (
      <p>데이터 로딩 중...</p>
    )}
  </div>
  );
};

export default Result;