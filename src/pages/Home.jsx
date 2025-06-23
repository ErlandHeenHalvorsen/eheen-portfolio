import React from "react";
import AboutSection from "../components/home/AboutSection";
import TechStack from "../components/home/TechStack";
import ProjectGrid from "../components/home/ProjectGrid";
import "../index.css";

function Home() {
  return (
    <div className="max-w-[1100px] mx-auto p-8 font-sans text-[#222]">
      <AboutSection />
      <TechStack />
      <ProjectGrid />
    </div>
  );
}

export default Home;
