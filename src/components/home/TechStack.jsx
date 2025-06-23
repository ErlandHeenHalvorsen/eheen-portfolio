import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const stackIcons = [
  { icon: <FaHtml5 color="#E34F26" />, label: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" />, label: "CSS3" },
  { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript" },
  { icon: <FaReact color="#61DAFB" />, label: "React" },
  { icon: <SiVite color="#646CFF" />, label: "Vite" },
  { icon: <FaNodeJs color="#339933" />, label: "Node.js" },
  { icon: <VscGithubInverted color="#181717" />, label: "GitHub" },
  { icon: <SiTailwindcss color="#06B6D4" />, label: "Tailwind CSS" },
  { icon: <FaFigma color="#F24E1E" />, label: "Figma" },
];

function TechStack() {
  return (
    <div className=" mb-10 p-4  border-t border-b border-[#ddd]">
      <ul className="flex flex-wrap justify-center items-center gap-12 list-none p-0 m-0">
        {stackIcons.map(({ icon, label }, index) => (
          <li
            key={index}
            className=" rounded-[12px] p-3 transition-all duration-300 ease-in-out flex items-center justify-center "
          >
            <span
              className="tooltip [&>svg]:w-[35px] [&>svg]:h-[35px]"
              data-tooltip={label}
            >
              {icon}
            </span>
          </li>
        ))}
      </ul>
      <div className="stack-divider" />
    </div>
  );
}

export default TechStack;
