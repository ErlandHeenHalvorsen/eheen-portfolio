import React from "react";
import ProfilePicture from "../../assets/ProfilePicture2.jpg";

function AboutSection() {
  return (
    <section className="flex flex-wrap align-center gap-[2rem] m-auto p-[2rem] font-system text-[#222] ">
      <div className="flex items-center w-full gap-3">
        <img
          src={ProfilePicture}
          alt="Erland"
          className="w-[160px] h-[160px] rounded-full object-cover shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        />
        <h1 className="text-[2.2rem] font-bold text-left">Hi, I'm Erland</h1>
      </div>
      <div className="w-min-[250px] flex-1">
        <p className="text-[1.1rem] leading-1.7 text-[#444]">
          I'm a web-developer from Bergen, passionate about creating modern,
          responsive websites and learning new tech. I also enjoy music, working
          out, and exploring nature. This portfolio showcases some of my recent
          projects.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
