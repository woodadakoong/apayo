//내상,외상,골절,복합
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useLocation} from "react-router-dom";
import logo from "../img/logo.png";
import order from "../img/order/order_3.png";
import "../css/kind.css";
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
        <div className="main">
          <div id="part_navbar">
          <div id="head_logo">
          <img src={logo} id="head_logo_img" />
          </div>
          
          <div id="head_order">
          <img src={order} id="kind_order_img"/>
          </div>
          </div>
          <div id="kind_line_1">
            <button onClick={hurt1} className="kind_btn" id="hurt1_btn">외상</button>
            <button onClick={hurt2} className="kind_btn" id="hurt2_btn">내상</button>
          </div>
          <div id="kind_line_2">
            <button onClick={hurt3} className="kind_btn" id="hurt3_btn">뼈</button>
            <button onClick={hurt4} className="kind_btn" id="hurt4_btn">복합</button>
          </div>

          
          

        </div>
    )
   
   
}

export default Kind;