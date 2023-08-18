//지도 보여주는 화면
import React from 'react';
import { useLocation } from 'react-router-dom';
import {useEffect,useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
//import "../css/map.css";

const kakao=window;

const Map=({keyword}) => {
  const navigate = useNavigate();
  var customOverlay;
  const [previousCustomOverlay, setPreviousCustomOverlay] = useState(null); 
  const [currentAddress, setCurrentAddress] = useState('');
  const [keywordData, setData] = useState([]); // data 변수를 상태로 관리
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
          image: new window.kakao.maps.MarkerImage(
            "/asset/markerStar.png",
            new window.kakao.maps.Size(24, 35),
            { offset: new window.kakao.maps.Point(12, 35) }
        ),
        });
        
        const content = '<div style="display: flex; justify-content: center; align-items: center; padding: 5px; font-size: 12px; text-align: center;background-color:white; border-radius:8px; ">현위치</div>';
        
        var positionOverlay = new window.kakao.maps.CustomOverlay({
          position: currentPosition ,
          content: content  ,
          yAnchor: 2.5 // 약간 위쪽에 위치
      });
        //정보창에 content 보여주기
        // infowindow.setContent(content);
        // infowindow.open(map, marker);
        positionOverlay.setMap(map);

        //지도 중심좌표를 접속위치로 변경
        map.setCenter(currentPosition);
       
        console.log("현재위치:",currentAddress);
        const combinedKeyword = currentAddress+" "+ keyword;
       
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
      
     
    }else{
      console.log("위치정보를 못받아옴");
    }
   
    //키워드로 장소찾기
    function searchPlaces(keyword,map){
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
      
      function goToHospital(placeId) {
        navigate(`https://place.map.kakao.com/${placeId}`); // useNavigate 사용
      }
    
      const content = `
    <div class="custom" style="background-color: white; padding: 10px; border: 1px solid #ccc; border-radius:8px; display:flex; flex-direction: column; align-items: center;">
      <div style="font-size:12px;">${place.place_name}</div>
      <button onclick="window.location.href='https://place.map.kakao.com/${place.id}';" style="background-color: white; border: none;">
      <img src="/asset/go_btn.png">
      </button>
    </div>`;
    
      var marker = new window.kakao.maps.Marker({
          map: map,
          position: new window. kakao.maps.LatLng(place.y, place.x) 
      });
     
      //마커 클릭하면
      window.kakao.maps.event.addListener(marker, 'click', function() {
        if (customOverlay) {
          customOverlay.setMap(null);
        
        }
        customOverlay = new window.kakao.maps.CustomOverlay({
          position: new window. kakao.maps.LatLng(place.y, place.x) ,
          content: content   
      });
      customOverlay.setMap(map);
        
    //     infowindow.setContent(content);
    // infowindow.open(map, marker);
         
      });
      marker.setMap(map);
  }

  }, [currentAddress,keyword]);



  return (

 <div id="map" style={{ width: "100%", height: '50%', top:"15%"}}></div>
    
 

    
    

  )
};

export default Map;