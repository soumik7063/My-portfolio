import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill ,RiNextjsFill} from "react-icons/ri";
import { SiExpress ,SiTypescript} from "react-icons/si";
import { FaDocker , FaAws , FaGitAlt ,FaReact ,FaNodeJs} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const skills = [
  {
    skill: "AWS",
    icon: <FaAws className="text-orange-400"/>,
  },
  {
    skill: "TailwindCSS",
    icon: <RiTailwindCssFill className="text-cyan-400"/>,
  },
  {
    skill: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    skill: "NodeJS",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    skill: "React",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    skill: "MongoDB",
    icon: <DiMongodb className="text-green-600" />,
  },
  {
    skill: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
  },
  {
    skill: "NextJS",
    icon: <RiNextjsFill className="text-white" />,
  },
  {
    skill: "Docker",
    icon: <FaDocker className="text-blue-500" />,
  },
  {
    skill: "Express",
    icon: <SiExpress className="text-gray-300" />,
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
              <div className="transition-all duration-500 text-6xl">
                {skill.icon}
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
