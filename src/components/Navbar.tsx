import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full h-fit flex justify-between items-center sm:px-32  px-2 py-8 z-10">
      <Link
        to={"/"}
        className="logo bg-black size-12 rounded flex justify-center items-center"
      >
        <span className="text-white font-semibold text-2xl">VG</span>
      </Link>
      <ul className="sm:flex gap-10 hidden">
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
