import React from "react";
import "./call.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Test_2() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.location.href = "http://naver.com"; // 유효한 외부 도메인으로 이동
  };

  const imageElement = (
    <a href="#" onClick={handleButtonClick}>
      <img className="union" alt="Union" src="/img/union-1.png" />
    </a>
  );

  return (
    <div className="App">
      <div className="emergency">
        <div className="div">
          <div className="text-wrapper">APAYO</div>
          <div className="overlap">
            <div className="emergency-call">
              응급전화<br />Emergency Call
            </div>
            <img className="image" alt="Image" src="/img/image-41.png" />
          </div>
          <div className="overlap-group">
            <div className="text-wrapper-2">119</div>
            <div className="group">
              <div className="overlap-group-2">
                <img className="vector" alt="Vector" src="/img/vector-417.png" />
                {imageElement}
              </div>
            </div>
          </div>
          <div className="union-wrapper">
          <a href='#' onClick={handleButtonClick}> {/* 버튼 클릭 시 페이지 이동을 위해 onClick 이벤트 추가 */}
              <img className="img" alt="Union" src="/img/union.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test_2;