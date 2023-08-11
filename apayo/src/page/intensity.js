//pain_1
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import logo from "../img/logo.png";
import order from "../img/order/order_4.png";
import "../css/intensity.css";
import { useEffect, useState } from "react";

function Intensity(){
    //kind로부터 받아온 데이터 가져오기
    const location = useLocation();
    const dataFromKind = location.state;

   
    const navigate=useNavigate();
    const [userLocation, setUserLocation] = useState(null);

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const { latitude, longitude } = position.coords;
                setUserLocation({ latitude, longitude });
            });
        }
    }, []);

    const handlePainSelection = (painType) => {
        const data = {
            ...dataFromKind,
            pain: painType,
            latitude: userLocation.latitude,
            longitude: userLocation.longitude
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
                <button onClick={() => handlePainSelection("찌르는")} id="pain1_btn" className="btn">찌르는</button>
                <button onClick={() => handlePainSelection("욱신욱신")} id="pain2_btn" className="btn">욱신욱신</button>
                <button onClick={() => handlePainSelection("묵직한")} id="pain3_btn" className="btn">묵직한</button>
            </div>
            <div id="line2">
                <button onClick={() => handlePainSelection("화끈거리는")} id="pain4_btn" className="btn">화끈거리는</button>
                <button onClick={() => handlePainSelection("부어오른")} id="pain5_btn" className="btn">부어오른</button>
                <button onClick={() => handlePainSelection("간지러움")} id="pain6_btn" className="btn">간지러움</button>
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