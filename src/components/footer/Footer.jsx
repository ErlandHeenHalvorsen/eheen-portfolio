// src/components/footer/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-6">
    <div className="flex justify-center gap-8 text-2xl">
      <a
        href="https://github.com/ErlandHeenHalvorsen"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="" />
      </a>
      <a
        href="https://www.linkedin.com/in/erland-heen-halvorsen-b72595310/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.facebook.com/erland.heen.9"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookMessenger />
      </a>
    </div>
  </footer>
);

export default Footer;
