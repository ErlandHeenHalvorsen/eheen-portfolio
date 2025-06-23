import React from "react";
import { Link } from "react-router";

function ProjectCard({ id, title, thumbnail, description }) {
  return (
    <Link
      to={`/projects/${id}`}
      className="block bg-white rounded-[16px] overflow-hidden no-underline text-inherit shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.05)] transition-transform duration-200 ease-in-out"
    >
      <img
        src={thumbnail || "https://via.placeholder.com/300x180"}
        alt={title}
        className="w-full h-[180px] object-cover"
      />
      <div className="p-[1.25rem]">
        <h3 className="text-[1.3rem] font-semibold mb-2 text-left">{title}</h3>
        <p className="text-base text-[#555] leading-[1.5] text-left">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
