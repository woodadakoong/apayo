//pain_1
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import logo from "../img/logo.png";
import order from "../img/order/order_2.png";
import "../css/intensity.css";
function Intensity(){
    //kind로부터 받아온 데이터 가져오기
    const location = useLocation();
    const dataFromKind = location.state;

   
    const navigate=useNavigate();

   const pain1=()=>{

    const data = { ...dataFromKind, pain:"찌르는" };
    
   navigate('/result',{state:data});

   }

   const pain2=()=>{
    const data={...dataFromKind,pain:"욱신욱신"};

    
   navigate('/result',{state:data});

   }

   const pain3=()=>{
    const data={...dataFromKind,pain:"묵직한"};

    
   navigate('/result',{state:data});

   }

   const pain4=()=>{
    const data={...dataFromKind,pain:"화끈거리는"};

    
   navigate('/result',{state:data});

   }

   const pain5=()=>{
    const data={...dataFromKind,pain:"부어오른"};

    
   navigate('/result',{state:data});

   }

   const pain6=()=>{
    const data={...dataFromKind,pain:"간지러움"};

    
   navigate('/result',{state:data});

   }
    return(
        <div className="head_main">
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
                <button onClick={pain1} id="pain1_btn" className="btn">찌르는</button>
                <button onClick={pain2} id="pain2_btn" className="btn">욱신욱신</button>
                <button onClick={pain3} id="pain3_btn" className="btn">묵직한</button>

            </div>
            <div id="line2">
                <button onClick={pain4} id="pain4_btn" className="btn">화끈거리는</button>
                <button onClick={pain5} id="pain5_btn" className="btn">부어오른</button>
                <button onClick={pain6} id="pain6_btn" className="btn">간지러움</button>
            </div>



        </div>


    )
   
   
}

export default Intensity;