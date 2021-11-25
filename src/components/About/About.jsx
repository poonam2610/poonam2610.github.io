import React from "react";
import './About.scss'

 function About(){
    return(
        <div className="About">
            <h3 className="about-heading">About us</h3>
         <div className="about-content">
         <div className="about-sweets-img">
             <img src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"/>
             <img src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"/>
         </div>
             <p className="about-para">Established in 1958, Pioneer of late Shri BachuBhai M.Sakriya and substantiate to highest standard
                 of quality, using Ethical sources practising in Food industry.<br/>
                 We now celebrating 60Plus years of experience in SWEETS and Namkeen industry. Happy to announce we are now
                 4th generation working, together with a motivated logistic team, ensuring that customers get prompt and top 
                 quality service every time.<br/>
                 Today we are privileged to connect with many of customers everyday. Our goal is to have customer service and 
                 satisfaction that is not just best but legendary!!
             </p>
         </div>
        </div>
    )
}
export default About