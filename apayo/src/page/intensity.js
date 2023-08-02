//pain_1

import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

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
        <div>
           
            <div>
                <button onClick={pain1}>찌르는</button>
                <button onClick={pain2}>욱신욱신</button>
                <button onClick={pain3}>묵직한</button>
                <button onClick={pain4}>화끈거리는</button>
                <button onClick={pain5}>부어오른</button>
                <button onClick={pain6}>간지러움</button>


            </div>
        


        </div>


    )
   
   
}

export default Intensity;