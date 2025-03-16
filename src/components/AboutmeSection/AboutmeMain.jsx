import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AboutmePic from "./AboutmePic";
import AboutmeText from "./AmoutmeText";
const AboutmeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row max-w-[1200px] gap-12  mt-[100px] items-center mx-auto justify-between px-4"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutmeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutmePic />
      </motion.div>
    </div>
  );
};

export default AboutmeMain;
