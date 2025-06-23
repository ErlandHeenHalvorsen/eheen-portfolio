import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

function ProjectGrid() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-left">Latest Projects</h2>
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectGrid;
