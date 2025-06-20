import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="site-header">
      <h1 className="site-title">
        <Link to="/" className="site-title-link">
          Erland Heen Halvorsen
        </Link>
      </h1>
    </header>
  );
};

export default Header;
