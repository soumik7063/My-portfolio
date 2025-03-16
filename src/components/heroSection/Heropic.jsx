import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const Heropic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex h-full items-center justify-center"
    >
      <img
        className="max-h-[450px] w-auto"
        src="./images/profileimg2.png"
        alt="soumik ghatak"
      />
      <div className="absolute overflow-hidden -z-10 flex justify-center items-center animate-pulse">
        <TbCircleDashed className="min-h-[600px] h-[120%] md:h-[90%] w-auto text-cyan-600 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default Heropic;
