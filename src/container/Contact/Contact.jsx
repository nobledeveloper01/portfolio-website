import { React, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Contact.scss";

function Contact() {

   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} />
               <a href="mailto:nobleconcepts22@gmail.com" className="p-text">
                  Email
               </a>
            </div>
            
            <div className="app__footer-card">
            
               <img src={images.twitter} />
               <a href="https://twitter.com/MarvellousJosh2" className="p-text">
               Twitter
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} />
               <a
                  href="www.linkedin.com/in/marvellous-bamisaye-b7858524a"
                  className="p-text"
               >
                  Linkedln
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} />
               <a href="https://github.com/nobledeveloper01" className="p-text">
                 GitHub
               </a>
            </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "app__whitebg"
);
