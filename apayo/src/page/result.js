import React from 'react';
import { useLocation } from 'react-router-dom';
import {useEffect,useState} from "react";
import axios from 'axios';

const Result=() => {
  const location = useLocation();
  const intensityData = location.state; // Intensity 페이지에서 받은 데이터

  const [serverResponse, setServerResponse] = useState(null);
  console.log(intensityData);
  useEffect(() => {
    // 서버로 데이터 전송
    sendDataToServer(intensityData);
  }, [intensityData]);

  const sendDataToServer = async (data) => {
    const prompt =`부위는 ${data.detail_part}이고 고통정도는 ${data.pain}이야. 병원 추천해줘.`;
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
        <p>서버에서 받은 데이터: {JSON.stringify(serverResponse)}</p>
      </div>
    ) : (
      <p>데이터 로딩 중...</p>
    )}
  </div>
  );
};

export default Result;