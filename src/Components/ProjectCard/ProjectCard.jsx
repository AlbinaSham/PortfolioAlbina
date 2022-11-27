import React from "react";


import { FaGithub } from "react-icons/fa";


import './Projectcard.css';
import Button from './../Button/Button';


const ProjectCard = ({Url, title, description, tools, linkGit, linkWeb}) =>{

   
    return(
        <div className="my-project-object">
            <div className="gif-container">
                  <iframe src= {Url} width="300" height="280" frameBorder="0" 
                     className="giphy-embed" allowFullScreen></iframe><p>
                  <a href={Url}></a></p>
            </div>
            <div className="decription-container">
                 <h3>{title}</h3>
                 <p>{description}</p>
                 <h4>{tools}</h4>
                 <div className="options">
                 
                     
                     
                     <Button className = "custom-button"
                     onClick={() => window.open(linkWeb)}
                        
                        >See more</Button>

    
                      <FaGithub className = "icon-hover" size = "3rem"
                      onClick={() => window.open(linkGit)} />

                 </div>
            </div>

            
           
                         
                       
        </div>
    )
}


export default ProjectCard;