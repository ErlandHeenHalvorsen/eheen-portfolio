import React from "react";
import { Link } from "react-router";
import NavBar from "./HeaderNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[hsl(0,0%,98%)] border-b border-[rgba(0,0,0,0.1)] px-8 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <h1 className="text-[1.75rem] font-bold">
        <Link
          to="/"
          className="no-underline text-[hsl(218,51%,40%)] transition-colors duration-200 ease-in-out hover:text-[hsl(218,51%,17%)]"
        >
          Erland Heen Halvorsen
        </Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
