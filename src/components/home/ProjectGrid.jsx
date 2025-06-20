import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    path: "/JsFrameworks",
    title: "JS Frameworks",
    thumbnail: "",
    description: "Exploring JavaScript frameworks in depth.",
  },
  {
    path: "/ProjectExam2",
    title: "Project Exam 2",
    thumbnail: "",
    description:
      "Final exam project showcasing API usage, React Routing and modern development tools.",
  },
  {
    path: "/SemesterProject2",
    title: "Semester Project 2",
    thumbnail: "",
    description:
      "A comprehensive semester project focusing on modern web development practices.",
  },
];

function ProjectGrid() {
  return (
    <>
      <h2 className="home-title">Latest Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.path} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectGrid;
