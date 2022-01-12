import React from "react";
import './About.scss'

 function About(){
    return(
        <div className="About">
            <h3 className="about-heading">About us</h3>
         <div className="about-content">
         <div className="about-sweets-img">
             <img src="/about.jpg"/>
             
         </div>
             <p className="about-para">Established in 1958, Pioneer of late Shri BachuBhai M.Sakriya and substantiate to highest standard
                 of quality, using Ethical sources practising in Food industry.
                 We now celebrating 60Plus years of experience in SWEETS and Namkeen industry. Happy to announce we are now
                 4th generation working, together with a motivated logistic team, ensuring that customers get prompt and top 
                 quality service every time.
                 Today we are privileged to connect with many of customers everyday. Our goal is to have customer service and 
                 satisfaction that is not just best but legendary!!
             </p>
         </div>
        </div>
    )
}
export default About