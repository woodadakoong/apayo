import React from "react";
import hospital from "./img/image 9.png";
import pharmacy from "./img/image 10.png";
import {Link} from 'react-router-dom';

function Landing(){
    return(
        <div>
            <div>
            <Link to="/wholebody">
                <img src={hospital}/>
            </Link>
           
            </div>

           <div>
           <Link to="/pharmacy.js">
                <img src={pharmacy}/>
            </Link>
           </div>
           
        </div>
    )
}

export default Landing;