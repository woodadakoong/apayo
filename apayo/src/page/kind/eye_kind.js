//내상,외상,골절,복합
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useLocation} from "react-router-dom";
import logo from "../../img/logo.png";
import order from "../../img/order/order_3.png";

function Kind(){
    const navigate = useNavigate();
    const location=useLocation();
    const dataFromPart=location.state;

    const hurt1 = () => {
      // 데이터를 객체로 만들기
      const kind = { ...dataFromPart,kind: "외상",pain_eng:"pain_out_mini" };
  
      // intensity 페이지로 이동하면서 데이터를 전달
      navigate('/intensity', { state: kind });
    };

    //내상
    const hurt2 = () => {
        
        const kind = { ...dataFromPart,kind: "내상",pain_eng:"pain_in_mini" };
    
        navigate('/intensity', { state: kind });
      };

    //fracture
      const hurt3 = () => {
        const kind = { ...dataFromPart,kind: "뼈",pain_eng:"pain_gol_mini" };

        navigate('/intensity', { state: kind });
      };

      //복합
      const hurt4 = () => {
       
        const kind = { ...dataFromPart,kind: "복합",pain_eng:"pain_com_mini" };
    
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
            <button onClick={hurt1} className="kind_btn" id="hurt1_btn">
            <img src="/asset/eye_ex.png"/>
            <p>외상</p>
            <p>External injury</p>
            </button>
            <button onClick={hurt2} className="kind_btn" id="hurt2_btn">
            <img src="/asset/eye_in.png"/>
            <p>내상</p>
            <p>Internal injury</p>
            </button>
          </div>
          <div id="kind_line_2">
            <button onClick={hurt3} className="kind_btn" id="hurt3_btn">
            <img src="/asset/gol.png"/>
            <p>골절</p>
            <p>fracture</p>
            </button>
            <button onClick={hurt4} className="kind_btn" id="hurt4_btn">
            <img src="/asset/complex.png"/>
            <p>복합</p>
            <p>Complex</p>
            </button>
          </div>

          
          

        </div>
    )
   
   
}

export default Kind;