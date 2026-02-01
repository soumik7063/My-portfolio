import { FaDocker ,FaJs, FaAws , FaGitAlt ,FaReact ,FaNodeJs} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill ,RiNextjsFill , RiGeminiFill} from "react-icons/ri";
import { SiExpress ,SiTypescript , SiClerk ,SiLangchain} from "react-icons/si";
import LogoLoop from "../../common/LogoLoop";
const techLogos = [
  {
    node: <FaReact className="text-cyan-400" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <RiNextjsFill className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-blue-500" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <FaJs className="text-yellow-400" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiLangchain className="text-white" />,
    title: "LangChain",
    href: "https://nextjs.org",
  },
  {
    node: <RiTailwindCssFill className="text-cyan-400" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <FaNodeJs className="text-green-500" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress className="text-gray-300" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <DiMongodb className="text-green-600" />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <FaDocker className="text-blue-500" />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <FaGitAlt className="text-orange-500" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <FaAws className="text-orange-400" />,
    title: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    node: <RiGeminiFill className="text-purple-400" />,
    title: "Google Gemini",
    href: "https://deepmind.google/technologies/gemini/",
  },
  {
    node: <SiClerk className="text-indigo-400" />,
    title: "Clerk Auth",
    href: "https://clerk.com",
  },
];

const Skillall = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={60}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
      />
    </div>
    </div>
  );
};

export default Skillall;
