import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutMe.css';



const AboutMe = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="my-tools-container">
            <h1 data-aos="fade-up" data-aos-duration="1500" >Nice to meet you </h1>
            <div className="my-tools-content">
            <div data-aos="fade-right" data-aos-delay="1000"
      data-aos-duration="1800" className="my-tools-image">
                     </div>


                   <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1800" className="about-me-description">
                      <h3>Hi! It is me, Albina. I am a front-end developer from Toronto, Canada. </h3>
                      <br></br>
                      <p>Creating is my passion, and my primary tool to express myself is <span>React JS</span> and
                       <span>CSS</span> . 
                       But I am not that bad at <span>HTML</span>,<span>NodeJS</span> ,<span>ExpressJS</span>   and <span>SQL</span> .</p>
                       <br></br>
                       <p> I think simplicity is the best, and I try to implement that in my work.  
                       </p>
                       <br></br>
                       <p>
                         I love art. Drawing is my method of meditation. 
                       </p>
                     </div>
                    
             

            </div>

            
            
            
        </div>
    )
};

export default AboutMe;