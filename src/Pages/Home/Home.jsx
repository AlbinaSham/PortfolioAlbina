import react from "react";

import './Home.css';


import AboutMe from "../AboutMe/AboutMe";


const Home = () =>{
    return(
        <div>
           <div className="home">
           <div className="hi-smile">
           <h1>Hi, I am Albina.</h1>
        </div>
        
        <h2 className="description"> I am a web developer. </h2>
        
    </div>
    <AboutMe />
        </div>
        
    
    );
   
};


export default Home;