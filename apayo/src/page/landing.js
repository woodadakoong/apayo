import React, { useState, useEffect } from "react";
import hospital from "../img/hospital.png";
import pharmacy from "../img/pharmacy.png";
import call from "../img/call.png";
import logo from "../img/logo.png";
import "../css/landing.css";
import { Link } from "react-router-dom";

function Landing() {
  const [translations, setTranslations] = useState(null); // 번역된 텍스트를 저장할 상태

  useEffect(() => {
    const apiKey = "AIzaSyCMKU1qiPTrYSfBruiRCsvmw3XZdnU1EMo";
    const endpoint = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    // 번역 요청 보내기
    async function fetchTranslations() {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: ["Hospital", "Pharmacy", "Emergency call"], // 번역할 텍스트 추가
          target: navigator.language || "en", // 사용자의 기기 언어
        }),
      });
      const data = await response.json();

      // 번역된 텍스트를 상태에 저장
      const translatedTexts = data.data.translations.map(
        (item) => item.translatedText
      );
      setTranslations(translatedTexts);
    }

    fetchTranslations(); // 번역된 텍스트 가져오기
  }, []);

  if (!translations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <div id="logo">
        <img src={logo} id="logo_img" alt="Logo" />
      </div>
      <Link to="/wholebody" id="hospital_box">
        <div className="wrapper">
          <img src={hospital} id="hospital_img" alt="Hospital" />
          <div>{translations[0]}</div>
        </div>
      </Link>
      <div id="extra_box">
        <Link to="/pharmacy" id="pharmacy_box">
          <div className="wrapper">
            <img src={pharmacy} className="img" alt="Pharmacy" />
            <div>{translations[1]}</div>
          </div>
        </Link>
        <Link to="/call" id="call_box">
          <div className="wrapper">
            <img src={call} className="img" alt="Call" />
            <div>{translations[2]}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
