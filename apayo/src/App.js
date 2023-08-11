import {Route,Routes,useNavigate,Link,Router} from 'react-router-dom';
import {useState} from "react";
import Landing from "./page/landing";
import WholeBody from './page/wholebody';

import Head from "./page/part/head";
import Arm from "./page/part/arm";
import Body from "./page/part/body";
import Leg from "./page/part/leg";


import Intensity from "./page/intensity";
import Kind from "./page/kind";

import Result from "./page/result";

import Map from "./page/map";
function App() {

  return (
   
    <Routes>
    
    {/* 랜딩페이지 */}
    <Route path="/" element={<Landing/>}/> 
    {/* wholeBody */}
    <Route path="/wholebody" element={<WholeBody />} />

    {/* 부위별 렌더링 */}
    <Route path="/head" element={<Head />} />
    <Route path="/arm" element={<Arm />} />
    <Route path="/body" element={<Body />} />
    <Route path="/leg" element={<Leg />} />


    {/*내상,외상  */}
    <Route path="/kind" element={<Kind />} />
    
    {/* 강도 */}
    <Route path="/intensity" element={<Intensity/>} />

    {/* 결과 */}
    <Route path="/result" element={<Result/>} />

    {/* 지도 렌더링 */}
    <Route path="/map" element={<Map/>} />


   </Routes>
   
  
  );
}

export default App;
