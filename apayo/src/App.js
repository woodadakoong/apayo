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

import Pharmacy from './page/pharmacy';
import Call from "./page/call";

import Extra from "./page/etc";

import Eye_kind from "./page/kind/eye_kind";
import Nose_kind from "./page/kind/nose_kind";
import Mouth_kind from "./page/kind/mouse_kind";
import Ear_kind from "./page/kind/ear_kind";
import Head_kind from "./page/kind/head_kind";
import Body_kind from "./page/kind/body_kind";
import Hand_kind from "./page/kind/hand_kind";
import Neck_kind from "./page/kind/neck_kind";
import Etc_kind from "./page/kind/etc_kind";









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

    <Route path="/pharmacy" element={<Pharmacy/>} />
    <Route path="/call" element={<Call/>} />


    {/* 하.. */}
    <Route path="/eye_kind" element={<Eye_kind/>}/>
    <Route path="/nose_kind" element={<Nose_kind/>}/>
    <Route path="/mouse_kind" element={<Mouth_kind/>}/>
    <Route path="/ear_kind" element={<Ear_kind/>}/>
    <Route path="/head_kind" element={<Head_kind/>}/>
    <Route path="/body_kind" element={<Body_kind/>}/>
    <Route path="/hand_kind" element={<Hand_kind/>}/>
    <Route path="/neck_kind" element={<Neck_kind/>}/>
    <Route path="/etc_kind" element={<Etc_kind/>}/>









  <Route path="/extra" element={<Extra/>}/>
   </Routes>
   
  
  );
}

export default App;
