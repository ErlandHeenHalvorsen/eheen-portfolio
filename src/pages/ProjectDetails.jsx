import { useParams } from "react-router";
import { projects } from "../data/projects";
import { BiLinkExternal } from "react-icons/bi";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiNetlify,
  SiReactrouter,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-sky-500" title="React" />,
  Vite: <SiVite className="text-purple-500" title="Vite" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />,
  "React Router": (
    <SiReactrouter className="text-red-500" title="React Router" />
  ),
  Netlify: <SiNetlify className="text-green-500" title="Netlify" />,
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const fallbackSrc = (src) =>
    typeof src === "string" && src.trim() !== ""
      ? src
      : "https://picsum.photos/200";

  if (!project) {
    return <div className="p-8 text-red-500">Project not found.</div>;
  }

  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          "https://via.placeholder.com/600x400?text=Project+Screenshot+1",
          "https://via.placeholder.com/600x400?text=Project+Screenshot+2",
        ];

  return (
    <div className=" flex  flex-col max-w-5xl mx-auto my-8 font-sans ">
      {/* Hero */}
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-b-2xl shadow-md mb-8">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-lg text-gray-700 mb-8 whitespace-pre-line">
          {project.fullDescription}
        </p>
        <div className="flex flex-col space-y-12">
          {/* Links */}
          <section className="flex gap-6 ml-4 text-lg">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <BiLinkExternal className="text-xl" />
              Live Demo
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
          </section>

          {/* Tech stack */}
          <section className="">
            <h2 className="text-xl font-semibold mb-2">Technologies used</h2>
            <div className="flex flex-wrap gap-4 border-t-2 border-gray-300 pt-4 text-2xl">
              {project.techStack.map((tech, index) => (
                <span key={index} className="flex items-center gap-2">
                  {techIcons[tech] || (
                    <span className="text-base text-gray-500">{tech}</span>
                  )}
                </span>
              ))}
            </div>
          </section>
          {/* Learnings */}
          <section className="">
            <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 border-t-2 border-gray-300 pt-4">
              {project.learnings.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section className="">
            <h2 className="text-xl font-semibold mb-2">Challenges</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 border-t-2 border-gray-300 pt-4">
              {project.challenges.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Gallery */}
          <section className="">
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-2 border-gray-300 pt-4">
              {galleryImages.map((src, index) => (
                <img
                  key={index}
                  src={fallbackSrc(src)}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto rounded shadow"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
