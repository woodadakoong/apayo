//지도 보여주는 화면
import React from 'react';
import { useLocation } from 'react-router-dom';
import {useEffect,useState} from "react";
import axios from 'axios';
//import "../css/map.css";
const kakao=window;
const Map=({keyword}) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [keywordData, setData] = useState([]); // data 변수를 상태로 관리
  const [overlay, setOverlay] = useState(null); // Overlay 상태 추가
  useEffect(() => {
  
    const ps = new window.kakao.maps.services.Places();
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    //지도 띄우기
    const mapContainer = document.getElementById('map');
    const mapOption = {
      //초기위치 설정
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
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
        
        //정보창에 content 보여주기
        infowindow.setContent(content);
        infowindow.open(map, marker);

        //지도 중심좌표를 접속위치로 변경
        map.setCenter(currentPosition);
        const combinedKeyword = currentAddress+" "+ keyword;
        searchPlaces(combinedKeyword, map); // 설정한 키워드로 검색
        console.log("키워드:",keyword);

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
      const content = `
    <div class="custom" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <div style="font-size:12px;">${place.place_name}</div>
      <button onclick="window.location.href='https://place.map.kakao.com/${place.id}';">병원 가기</button>
    </div>`;
      var marker = new window.kakao.maps.Marker({
          map: map,
          position: new window. kakao.maps.LatLng(place.y, place.x) 
      });
      
      //마커 클릭하면
      window.kakao.maps.event.addListener(marker, 'click', function() {
        
        infowindow.setContent(content);
    infowindow.open(map, marker);
         
      });
  }
  }, [currentAddress,keyword]);


console.log(keywordData);

  return (

 <div id="map" style={{ width: "100%", height: '50%', top:"15%"}}></div>
    
 

    
    

  )
};

export default Map;