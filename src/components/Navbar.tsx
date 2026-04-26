import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar px-4">
      <div className="d-flex gap-4">
        <Link className="nav-link text-light" to="/">About</Link>
        <Link className="nav-link text-light" to="/projects">Projects</Link>
        <Link className="nav-link text-light" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;