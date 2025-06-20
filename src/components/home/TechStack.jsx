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
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiVite />, label: "Vite" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <VscGithubInverted />, label: "GitHub" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <FaFigma />, label: "Figma" },
];

function TechStack() {
  return (
    <div className="my-12 py-8 border-t border-b border-[#ddd]">
      <ul className="flex flex-wrap justify-center items-center gap-6 list-none p-0 m-0">
        {stackIcons.map(({ icon, label }, index) => (
          <li
            key={index}
            className="bg-[#f0f0f0] rounded-[12px] p-3 transition-all duration-300 ease-in-out flex items-center justify-center opacity-85"
          >
            <span
              className="tooltip [&>svg]:w-[30px] [&>svg]:h-[30px] [&>svg]:grayscale-[20%]"
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
