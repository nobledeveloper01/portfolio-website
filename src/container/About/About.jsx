import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
function About() {
   const abouts = [
      {
         title: "Product Designer",
         description:
            "Experienced in designing seamless and intuitive user experiences. Proficient in employing various design tools and methodologies to create captivating interfaces, ensuring user needs are met effectively. Familiar with integrating designs into products to deliver compelling and user-centric experiences.",
         imageUrl: images.about01,
      },
      {
         title: "Frontend Developer",
         description:
            "Proficient in crafting responsive and high-performance user interfaces using modern frontend technologies. Skilled in JavaScript, HTML, and CSS, with expertise in frameworks like React and Vue.js. Dedicated to optimizing website performance and ensuring seamless user interactions.",
         imageUrl: images.about02,
      },
      
      {
         title: "Open Source Enthusiast",
         description:
            "A passionate advocate for open-source software, actively contributing to various projects. Committed to fostering collaboration and innovation within the open-source community. Engaged in leveraging, improving, and advocating for accessible and inclusive technology solutions.",
         imageUrl: images.about04,
      },
   ];
   return (
      <>
         <h2 className="head-text">
            About
            <span> Me!</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={about.imageUrl} alt={about.title}></img>
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(About, "app__about"),
   "about",
   "app__whitebg"
);
