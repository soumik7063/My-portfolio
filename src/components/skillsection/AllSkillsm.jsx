import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
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
const AllSkillsm = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2">
      {skills.map((skill, index) => {
        return (
          <motion.div
            variants={fadeIn(`${index & 1 ? "left" : "right"}`, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="flex items-center justify-center gap-3"
          >
            <div className="p-3">
              <div className="text-orange-400 transition-all duration-500 text-6xl hover:text-cyan-300">
                <skill.icon />
              </div>
              <p className="text-white text-center">{skill.skill}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsm;
