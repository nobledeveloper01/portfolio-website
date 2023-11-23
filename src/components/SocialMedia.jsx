import React from "react";
import { BsTwitter, BsDiscord, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/MarvellousJosh2">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://discord.com/nobledeveloper01">
               <BsDiscord />
            </a>
         </div>
         <div>
            <a href="www.linkedin.com/in/marvellous-bamisaye-b7858524a">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:nobleconcepts22@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
