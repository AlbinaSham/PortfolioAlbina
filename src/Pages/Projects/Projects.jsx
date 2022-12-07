import React from "react";

import './Projects.css';
import ProjectCard from "../../Components/ProjectCard/ProjectCard";




class Projects extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title:"E-commers", 
            Url: 'https://giphy.com/embed/gyfkKRDRYWS6VdLIac',
            id: 1,
            description: "An e-commerce shop page where you can see the collection, add an item to the cart and remove it from it, also can sign in with Google.",
            tools: "ReactJs, Redux, CSS, Firebase",
            linkWeb: "https://pensive-hypatia-19a23d.netlify.app/",
            linkGit:"https://github.com/AlbinaSham/ecommers-react" 
            
          },
          {
            title:"CHHC hospital landing page", 
            Url: "https://giphy.com/embed/AAo05NKGorBojEJX56" ,
            id: 4,
            description: "Landig page for CHHC hospital",
            tools: "ReactJs, CSS, ",
            linkWeb: "https://albinasham.github.io/landing-page-CHHC-hospital/",
            linkGit:"https://github.com/AlbinaSham/landing-page-CHHC-hospital" 
            
          },
          {
            title: 'Book app',
            Url: 'https://giphy.com/embed/LXPhzAw20iV97PTUBV',
            id: 2,
            description: "Allows a user to search for a book, add it to a wish list, and remove it from it.",
            tools: 'React js, CSS, Google API',
            linkWeb: "https://booklibrary2021.herokuapp.com/",
            linkGit: "https://github.com/AlbinaSham/BookLibrary"
          },
          {
            title: 'A register resume dropbox',
            Url: 'https://giphy.com/embed/4DLOHOsof2ceRYRcaC',
            id: 3,
            description: "A register resume dropbox where students can provide their information. A user can see all the information which was entered by all students. ",
            tools: "React, Node, Express, SQL",
            linkWeb: 'https://www.linkedin.com/in/asavinova/recent-activity/shares/',
            linkGit: "https://github.com/AlbinaSham/FormComplite"
          }

         
       
        ]
      };
    }

    
  
    render() {


        
        return(
          <div>
               <h1>My projects.</h1> 
            <div className="my-project-div">
              
               {
                    this.state.sections.map(section =>{
                      return(
                        <div  >
                        <ProjectCard key = {section.title} 
                           Url = {section.Url}
                           title = { section.title}
                           description = { section.description }
                           tools = {section.tools} 
                           linkWeb = { section.linkWeb }
                           linkGit = { section.linkGit }
                         />
                        </div>
                    
                      )
                    })
               }
             </div>
          </div>
         
        )
  
        } }


export default Projects;