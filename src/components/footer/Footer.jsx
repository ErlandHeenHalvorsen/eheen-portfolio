// src/components/footer/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <div className="footer-icons">
        <a
          href="https://github.com/ErlandHeenHalvorsen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/erland-heen-halvorsen-b72595310/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/erland.heen.9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Meta Messenger"
        >
          <FaFacebookMessenger />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
