//내상,외상,골절,복합
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useLocation} from "react-router-dom";

function Kind(){
    const navigate = useNavigate();
    const location=useLocation();
    const dataFromPart=location.state;

    const hurt1 = () => {
      // 데이터를 객체로 만들기
      const kind = { ...dataFromPart,kind: "외상" };
  
      // intensity 페이지로 이동하면서 데이터를 전달
      navigate('/intensity', { state: kind });
    };

    //내상
    const hurt2 = () => {
        
        const kind = { ...dataFromPart,kind: "내상" };
    
        navigate('/intensity', { state: kind });
      };

    //fracture
      const hurt3 = () => {
        const kind = { ...dataFromPart,kind: "뼈" };

        navigate('/intensity', { state: kind });
      };

      //복합
      const hurt4 = () => {
       
        const kind = { ...dataFromPart,kind: "복합" };
    
        navigate('/intensity', { state: kind });
      };
  
    return(
        <div>
           <button onClick={hurt1}>외상</button>
           <button onClick={hurt2}>내상</button>
           <button onClick={hurt3}>뼈</button>
           <button onClick={hurt4}>복합</button>

        </div>
    )
   
   
}

export default Kind;