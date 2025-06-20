import React from "react";
import { Link } from "react-router";

function ProjectCard({ path, title, thumbnail, description }) {
  return (
    <Link to={path} className="card">
      <img src={""} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
