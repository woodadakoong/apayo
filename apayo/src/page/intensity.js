//pain_1
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import logo from "../img/logo.png";
import order from "../img/order/order_4.png";
import "../css/intensity.css";
import { useEffect, useState } from "react";
import pain1 from "../img/pain/pain1.png";
import pain2 from "../img/pain/pain2.png";
import pain3 from "../img/pain/pain3.png";
import pain4 from "../img/pain/pain4.png";
import pain5 from "../img/pain/pain5.png";
import pain6 from "../img/pain/pain6.png";


function Intensity(){
    //kind로부터 받아온 데이터 가져오기
    const location = useLocation();
    const dataFromKind = location.state;

   
    const navigate=useNavigate();
    const [userLocation, setUserLocation] = useState(null);

    // useEffect(()=>{
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(function (position) {
    //             const { latitude, longitude } = position.coords;
    //             setUserLocation({ latitude, longitude });
    //         });
    //     }
    // }, []);

    const handlePainSelection = (painType,kind_eng) => {
        const data = {
            ...dataFromKind,
            pain: painType,
            // latitude: userLocation.latitude,
            // longitude: userLocation.longitude,
            kind_eng:kind_eng,
            
        };

        navigate('/result', { state: data });
    };

    return (
        <div className="main">
             <div id="part_navbar">

            <div id="head_logo">
            <Link to="/">
                <img src={logo} id="head_logo_img" />
            </Link>
   
        </div>

        <div id="head_order">
             <img src={order} id="head_order_img"/>
        </div>


        </div>


            <div id="line1">
                <button onClick={() => handlePainSelection("찌르는","pain1")} id="pain1_btn" className="btn" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={pain1} alt="찌르는 이미지" />
                    <p>찌르는</p>
                    <p>Sharp pain</p>
                    </button>

                <button onClick={() => handlePainSelection("욱신거리는","pain2")} id="pain2_btn" className="btn" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={pain2} />
                    <p>욱신거리는</p>
                    <p>Throbbing</p>
                    </button>
                <button onClick={() => handlePainSelection("묵직한","pain3")} id="pain3_btn" className="btn" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={pain3}/>
                    <p>묵직한</p>
                    <p>Dull pain</p>
                </button>
            </div>
            <div id="line2">
                <button onClick={() => handlePainSelection("화끈거리는","pain4")} id="pain4_btn" className="btn" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={pain4}/>
                    <p>화끈거리는</p>
                    <p>score</p>
                </button>

                <button onClick={() => handlePainSelection("부어오른","pain5")} id="pain5_btn" className="btn" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={pain5}/>
                    <p>부어오른</p>
                    <p>Chest</p>
                </button>

                <button onClick={() => handlePainSelection("간지러움","pain6")} id="pain6_btn" className="btn" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={pain6}/>
                    <p>간지러움</p>
                    <p>Itchy</p>
                </button>
            </div>
        </div>
    )
  
    // return(
    //     <div className="main">
    //        <div id="part_navbar">

    //        <div id="head_logo">
    //         <Link to="/">
    //         <img src={logo} id="head_logo_img" />
    //         </Link>
              
    //        </div>
          
    //       <div id="head_order">
    //             <img src={order} id="head_order_img"/>
    //       </div>


    //     </div>

           
    //         <div id="line1">
    //             <button onClick={pain1} id="pain1_btn" className="btn">찌르는</button>
    //             <button onClick={pain2} id="pain2_btn" className="btn">욱신욱신</button>
    //             <button onClick={pain3} id="pain3_btn" className="btn">묵직한</button>

    //         </div>
    //         <div id="line2">
    //             <button onClick={pain4} id="pain4_btn" className="btn">화끈거리는</button>
    //             <button onClick={pain5} id="pain5_btn" className="btn">부어오른</button>
    //             <button onClick={pain6} id="pain6_btn" className="btn">간지러움</button>
    //         </div>



    //     </div>


    // )
   
   
}

export default Intensity;