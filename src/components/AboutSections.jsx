import React from "react";
// Animation
import { motion} from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { titleAnim, fade, photoAnim} from "../animation";
import Wave from "./Wave";

export default function AboutSections() {
  return (
    <>
      <div className=" about description row">
        <div className="title col-lg-6">
          <motion.h2  variants={titleAnim} initial="hidden" animate="show">
            Hey,<br/>I'm Pooja Sakshi Ram
          </motion.h2>

          <motion.p className='content' variants={titleAnim} initial="hidden" animate="show">
            I like to build things for web and solving problems.
          </motion.p>

          <motion.button className='hero-btn content' variants={fade}>

          <HashLink hidefocus="hidefocus" to="/#intro">About me</HashLink>
          </motion.button>
        </div>
        <div className="image col-lg-6">
          <motion.img 
            variants={photoAnim}
            // className="img-fluid"
            src="./img/newhero.svg"
            alt="illustration"
          />
        </div>
          <Wave/>
      </div>
    </>
  );
}
