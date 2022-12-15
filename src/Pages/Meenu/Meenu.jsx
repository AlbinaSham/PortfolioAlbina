import react, { useState } from "react";
import { Link } from 'react-router-dom';


import DropdownMeenu from "../../Components/DropdownMeenu/DropdownMeenu";
import IconMeenu from "../../Components/IconMeenu/IconMeenu";

import './Meenu.css';


const Meenu = () =>{

    

    return(
        <div className="Meenu"> 
        
            <nav className="navigation">
            <Link className='option' to='/PortfolioAlbina'>
                  HOME
             </Link>
             <Link className='option' to='/projects'>
                  PROJECTS
             </Link>
             <Link className='option' to='/contactme'>
                  CONTACT ME
             </Link>
                
            </nav>
            <IconMeenu />
            </div>
        
        
        
          
           
        
        
    );
   
};


export default Meenu;
