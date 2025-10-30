import React from "react";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import SkillSingle from "./SkillSingle";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const Skillall = () => {
  const skills = [
    {
      skill: "AWS",
      icon: FaAws,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
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
      skill:"Express.js",
      icon:SiExpress
    },
    {
      skill: "Docker",
      icon: FaDocker,
    }
  ];
  return (
    <div className="flex justify-center items-center max-w-[1200px] mx-auto mt-10">
      {skills.map((skill, index) => {
        return (
          <motion.div
            key={index}
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
