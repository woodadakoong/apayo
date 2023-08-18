import React from "react";
import "./call.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Link } from "react-router-dom";
function Test_2() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.location.href = "http://www.119.go.kr/Center119/registEn.do"; // 유효한 외부 도메인으로 이동
  };

  const imageElement = (
    <a onClick={handleButtonClick}>
      <img className="union" alt="Union" src="/asset/union-1.png" />
    </a>
  );

  return (
    <div className="App">
      <div className="emergency">
        <div className="div">
          {/* 이미지 소스 추가 */}
          <div className="text-wrapper"><img src='/asset/apayo.png'></img></div>
          <div className="overlap">
            {/* 추가 */}
          <a href='#' onClick={handleButtonClick}> {/* 버튼 클릭 시 페이지 이동을 위해 onClick 이벤트 추가 */}
            <img className="image" alt="Image" src="/asset/image-41.png" />
            </a>
            <div className="emergency-call">
              응급전화<br />Emergency Call
            </div>
          </div>
          {/* 추가 */}
          <div className="overlap-group">
            <div className="group">
              <div className="overlap-group-2">
                <img className="vector" alt="Vector" src="/asset/Group 190.png" />
                <div className="text-wrapper-2">119</div>
              </div>
            </div>
          </div>
          {/* 여기까지 */}
          <div className="union-wrapper">
            {/* 여기이상 */}
            <Link to="/">
            <img className="img" alt="Union" src="/asset/union-1.png" />
            </Link>
             
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test_2;