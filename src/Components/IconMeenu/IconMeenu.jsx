import react, {useState} from "react";
import { Link } from 'react-router-dom';

import DropdownMeenu from "../DropdownMeenu/DropdownMeenu";

import './IconMeenu.css';


const IconMeenu = () =>{
    const [status, setStatus] = useState('close');
    const [toggle, setToggle] = useState(false);
    
    return(
        <div>
             <div className="IconMeenuSpanContainer"
        role="button"
        onClick={() => {setStatus(status === 'open' ? 'close' : 'open'); setToggle(!toggle);}}
         >
            <div className="IconMeenuSpanContainer"
              role="button" >
              <span className={status} ></span>
              <span className={status} ></span>
              <span className={status} ></span>
              </div>
            

            { toggle ? <DropdownMeenu /> : null }
        </div>
            
         
        </div>
       
     
        
           
        
        
    );
   
};


export default IconMeenu;