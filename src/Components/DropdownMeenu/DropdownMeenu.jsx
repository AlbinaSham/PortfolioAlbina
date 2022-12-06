
    import react, {useState} from "react";
    import { Link } from 'react-router-dom';

import './DropdownMeenu.css';


const DropdownMeenu = () =>{
    
    
  
    return(
        <div>
         <div className="DropdownMeenu">
        <div className="links-dropdown">

           <Link className='link-dropdown' to='/PortfolioAlbina'>
                  HOME
             </Link>
             <Link className='link-dropdown' to='/projects'>
                  PROJECTS
             </Link>
             <Link className='link-dropdown' to='/contactme'>
                  CONTACT ME
             </Link>
        </div>
        </div>
       
        
        </div>
       
    );
   
};


export default DropdownMeenu;