import React from "react";
import AboutSection from "../components/home/AboutSection";
import TechStack from "../components/home/TechStack";
import ProjectGrid from "../components/home/ProjectGrid";
import "../index.css";

function Home() {
  return (
    <div className="flex flex-col m-auto items-center justify-center min-h-screen">
      <AboutSection />
      <TechStack />
      <ProjectGrid />
    </div>
  );
}

export default Home;
