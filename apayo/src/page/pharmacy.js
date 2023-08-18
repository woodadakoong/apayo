//지도 보여주는 화면
import React from 'react';
import { useLocation } from 'react-router-dom';
import './pharmacy.css';
import { useEffect, useState, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";


const kakao=window;

const Pharmacy=() => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [keywordData, setData] = useState([]); // data 변수를 상태로 관리
  useEffect(() => {
    console.log("helloworld");
    const ps = new window.kakao.maps.services.Places();
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    //지도 띄우기
    const mapContainer = document.getElementById('map');
    const mapOption = {
      //초기위치 설정
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 5,
    };
   
    //지도 생성 및 객체 리턴
    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    // 위치 권한 허용
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        //위도,경도 좌표 생성
        const currentPosition = new window.kakao.maps.LatLng(lat, lon);
        
        //마커 생성
        const marker = new window.kakao.maps.Marker({
        map: map,
          position: currentPosition,
        });
        
        const content = '<div style="display: flex; justify-content: center; align-items: center; padding: 5px; font-size: 12px; text-align: center;">현위치</div>';
      
        infowindow.setContent(content);
        infowindow.open(map, marker);

        //지도 중심좌표를 접속위치로 변경
        map.setCenter(currentPosition);
        const combinedKeyword = currentAddress+" "+ "약국";
        searchPlaces(combinedKeyword, map); // 설정한 키워드로 검색
        

        //주소정보얻기
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.coord2RegionCode(lon, lat, function(result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            const address = result[0].address_name;
            setCurrentAddress(address);
          }
        });
      });
      
     
    }
    //키워드로 장소찾기
    function searchPlaces(keyword,map){
      console.log("합쳐진 키워드",keyword);
      ps.keywordSearch(keyword, function(data, status, pagination) {
        if (status === window.kakao.maps.services.Status.OK) {
           setData(data);
            const bounds = new window.kakao.maps.LatLngBounds();
            
            for (var i = 0; i < data.length; i++) {
                displayMarker(data[i], map);    
                bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
      
            }       

            // 아래 주석을 풀면 내 현위치가 아니라 키워드 검색을 통해 주어진 주소로 지도 중심이 바뀜. ex) 내가 서울에 있는데 부산의 병원이 키워드면 지도가 부산으로 옮겨짐
            // 현재 상태는 키워드 검색을 통해 띄운 마커와 관계없이 현위치를 중심으로 지도 보여줌
            // map.setBounds(bounds);
        } 
        }); 
    }
    

    function displayMarker(place, map) {

      var marker = new window.kakao.maps.Marker({
          map: map,
          position: new window. kakao.maps.LatLng(place.y, place.x) 
      });
  
      window.kakao.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
      });
  }
  }, [currentAddress]);
  
  
  console.log(keywordData);


  

  // bottom sheet 

  const [open, setOpen] = useState(false);
  const bottomSheetRef = useRef();

  useEffect(() => {
    setOpen(false);
  }, []);

  function openBottomsheet() {
    setOpen(true);
  }

  function onDismiss() {
    setOpen(false);
  }

  const [buttonColors, setButtonColors] = useState({
    runny_nose: '',
    cold: '',
    headache: '',
    covid_19: '',
    cough:'',
    wound:'',
    allergy:'',
    bruise:'',
    burn:'',
    indigestion:'',
    bowel_movement:'',
    eye_drops:'',
    toothache:'',
    muscle_pain:'',
    insect:''
  });

    // Updated button color change function
    const Blue_change = (buttonId) => {
      setButtonColors((prevColors) => {
        const newColors = { ...prevColors };
        if (newColors[buttonId] === '') {
          newColors[buttonId] = 'blue'; // Set button color to blue
        } else {
          newColors[buttonId] = ''; // Reset button color
        }
        return newColors;
      });
    };




return (
  <>
  <div className="main">
  <img className='img_Apayo_logo' src="/img/APAYO (1).png"></img>
  <div id="map-container">
    <div id="map" style={
      { display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
       flexDirection: 'column',
        padding: '1vh',
         height: '90vh',
          width: '55vh', 
          position: 'relative', 
          zIndex: '0' }}></div>
  </div>
  <a onClick={openBottomsheet} className="image-container">
    {/* <img className="img1" alt="Union" src="/img/Group 173.png" />
    <img className="img2" alt="Union" src="/img/Group 173.png" />
    <img className="img3" alt="Union" src="/img/Group 173.png" />
    <img className="img4" alt="Union" src="/img/Group 173.png" /> */}
    {/* 수정된 것 */}
      <button className='button_openBottomsheet'><img  alt="Union" src="/asset/fever.png" /></button>
    <button className='button_openBottomsheet'><img src="/asset/bruise.png" alt="Button Icon" /></button>
    <button className='button_openBottomsheet'><img src="/asset/indigestion.png" alt="Button Icon" /></button>
    <img className='button_openBottomsheet_plus' src="asset/Group 173.png"></img>
  </a>
</div>



    
    <div className="Appp">
      <BottomSheet
      open={open}
      onDismiss={onDismiss}
      ref={bottomSheetRef}
      defaultSnap={({ maxHeight }) => maxHeight / 2}
      snapPoints={({ minHeight, maxHeight }) => [
        minHeight + minHeight * 0.1,
        maxHeight - maxHeight / 10,
        maxHeight / 4,
        maxHeight * 0.6
      ]}>
        <div>
        <button
            onClick={() => Blue_change('runny_nose')}
            className={`pharmacy_btn ${buttonColors['runny_nose']}`}
          >
            <img src="/img/runny_nose.png" alt="Button Icon" />
            <p>콧물</p><p>runny_nose</p>
          </button>
          <button
            onClick={() => Blue_change('cold')}
            className={`pharmacy_btn ${buttonColors['cold']}`}
          >
            <img src="/img/cold.png" alt="Button Icon" />
            <p>감기</p><p>cold</p>
          </button>
          <button
            onClick={() => Blue_change('headache')}
            className={`pharmacy_btn ${buttonColors['headache']}`}
          >
            <img src="/img/headache.png" alt="Button Icon" />
            <p>두통</p><p>headache</p>
          </button>
          <button
            onClick={() => Blue_change('covid_19')}
            className={`pharmacy_btn ${buttonColors['covid_19']}`}
          >
            <img src="/img/covid_19.png" alt="Button Icon" />
            <p>코로나19</p><p>covid_19</p>
          </button>
        <button
            onClick={() => Blue_change('cough')}
            className={`pharmacy_btn ${buttonColors['cough']}`}
          >
            <img src="/img/cough.png" alt="Button Icon" />
            <p>기침</p><p>cough</p>
          </button>
        <button
            onClick={() => Blue_change('wound')}
            className={`pharmacy_btn ${buttonColors['wound']}`}
          >
            <img src="/img/wound.png" alt="Button Icon" />
            <p>상처</p><p>wound</p>
          </button>
        <button
            onClick={() => Blue_change('allergy')}
            className={`pharmacy_btn ${buttonColors['allergy']}`}
          >
            <img src="/img/allergy.png" alt="Button Icon" />
            <p>알레르기</p><p>allergy</p>
          </button>
        <button
            onClick={() => Blue_change('bruise')}
            className={`pharmacy_btn ${buttonColors['bruise']}`}
          >
            <img src="/img/bruise.png" alt="Button Icon" />
            <p>타박상</p><p>bruise</p>
          </button>
        <button
            onClick={() => Blue_change('burn')}
            className={`pharmacy_btn ${buttonColors['burn']}`}
          >
            <img src="/img/burn.png" alt="Button Icon" />
            <p>화상</p><p>burn</p>
          </button>
        <button
            onClick={() => Blue_change('indigestion')}
            className={`pharmacy_btn ${buttonColors['indigestion']}`}
          >
            <img src="/img/indigestion.png" alt="Button Icon" />
            <p>소화</p><p>indigestion</p>
          </button>
        <button
            onClick={() => Blue_change('bowel_movement')}
            className={`pharmacy_btn ${buttonColors['bowel_movement']}`}
          >
            <img src="/img/bowel_movement.png" alt="Button Icon" />
            <p>배변</p><p>bwel_movement</p>
          </button>
        <button
            onClick={() => Blue_change('eye_drops')}
            className={`pharmacy_btn ${buttonColors['eye_drops']}`}
          >
            <img src="/img/eye_drops.png" alt="Button Icon" />
            <p>안약</p><p>eye_drops</p>
          </button>
        <button
            onClick={() => Blue_change('toothache')}
            className={`pharmacy_btn ${buttonColors['toothache']}`}
          >
            <img src="/img/toothache.png" alt="Button Icon" />
            <p>치통</p><p>toothache</p>
          </button>
        <button
            onClick={() => Blue_change('muscle_pain')}
            className={`pharmacy_btn ${buttonColors['muscle_pain']}`}
          >
            <img src="/img/muscle_pain.png" alt="Button Icon" />
            <p>근육통</p><p>muscle_pain</p>
          </button>
        <button
            onClick={() => Blue_change('insect')}
            className={`pharmacy_btn ${buttonColors['insect']}`}
          >
            <img src="/img/insect.png" alt="Button Icon" />
            <p>벌레</p><p>insect</p>
          </button>
        </div>
    </BottomSheet>
    </div>
  </>
);
};

export default Pharmacy;