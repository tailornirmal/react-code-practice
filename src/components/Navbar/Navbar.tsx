import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lazyload">Lazy loading</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/react">React JS</Link>
        </li>
        <li>
          <Link to="/register">Registration</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
