import { Link } from "react-router";
const NavBar = () => {
  return (
    <nav className="flex items-center">
      <Link
        to="/Contact"
        className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200 mr-6"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
