import Nav from "../components/Nav";
// Animation
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  pageAnimation,
  projectPhotoAnim,
  fade,
  lineAnim,
} from "../animation";
import { projects } from "../projects";

export default function Projects() {
  return (
    <>
        <Nav />
      <motion.div
        className="project-container description"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        //   style={{background:"#ffffff"}}
      >
      
      {projects.map((project) => {
          const { id, name, img, url, about, alt } = project;
          return (
            <div className="project-card" key={id}>
              <motion.h1 variants={fade}  className="main-heading project-title">
                {name}
                    <p className="project-description">{about}</p>
              </motion.h1>
              <motion.div variants={lineAnim} className="line"></motion.div>
              <div className="img-hide">
                <Link to={{pathname:url}} target="_blank">
                  <motion.img
                    variants={projectPhotoAnim}
                    className="project-img"
                    src={img}
                    alt={alt}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

