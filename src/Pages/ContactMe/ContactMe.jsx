import react, {useState} from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import FormInput from "../../Components/FormInput/FormInput";

import './ContactMe.css';
const defaultFormFields = {
    displayName: '',
    email: '',
    text:''

  };



const ContactMe = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, text} = formFields;
  
    console.log(formFields);
   

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };
    return(
        <div className="main-contact-me-container">
        <h1>Contact me.</h1>
             <div className="contact-me">
        
        <div className="contact-me-icons">
            <div className="icon-text">
               <p>If you ever want to grab a coffee/bubble tea (virtually) or just want a quick
                chat - you can find me on social media or you can send me a message here!</p>
            </div>
         
        <div className="icons">
             <FaLinkedinIn size = "2em" className="icon-hover"
              onClick={() => window.open("https://www.linkedin.com/in/asavinova/ ")}
             /> 
             <FaGithub className="icon-hover" size = "2em"
             onClick={() => window.open("https://github.com/AlbinaSham")} />
         </div>
                   
        </div>
        <form className="contact-me-form" action="https://formsubmit.co/savinovaar@gmail.com" method="POST">
        
        <FormInput 
              name = 'displayName'
              type = 'name'
              label = 'name'
              value = {displayName}
              onChange={handleChange}
              required />
               <FormInput 
              name = 'email'
              type = 'email'
              label = 'email'
              value = {email}
              onChange={handleChange}
              required />
        <textarea className="textArea"
        name = 'text'
        type = 'text'
        label = 'say hi'
        value = {text}
        onChange={handleChange}
        required
        ></textarea>
        <Button >Send</Button>
                 
            
            
        </form>
    </div>
    </div>

        
    );
   
};


export default ContactMe;