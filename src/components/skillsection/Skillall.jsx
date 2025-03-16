import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import SkillSingle from "./SkillSingle";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const Skillall = () => {
  const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3,
    },
    {
      skill: "JavaScript",
      icon: FaJs,
    },
    {
      skill: "NodeJS",
      icon: FaNodeJs,
    },
    {
      skill: "React",
      icon: FaReact,
    },
    {
      skill: "MongoDB",
      icon: DiMongodb,
    },
    {
      skill: "Git",
      icon: FaGitAlt,
    },
    {
      skill: "Framer",
      icon: FiFramer,
    },
  ];
  return (
    <div className="flex justify-center items-center max-w-[1200px] mx-auto mt-10">
      {skills.map((skill, index) => {
        return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SkillSingle skill={skill.skill} icon={<skill.icon />} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Skillall;
