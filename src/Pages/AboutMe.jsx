import React from "react";
import AboutSections from "../components/AboutSections";
import Nav from "../components/Nav";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ContactMe from "../components/ContactMe";
import { ScrollTop } from "../components/ScrollTop";
import Introduction from "../components/Introduction";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export default function AboutMe() {
  return (
    <>
      <ScrollTop />
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      tabIndex="0"
    >
      <Nav />
      <AboutSections />
      <Introduction />
      <SkillsSection />
      <EducationSection />
      <ContactMe />
    </motion.div>
    </>
  );
}
