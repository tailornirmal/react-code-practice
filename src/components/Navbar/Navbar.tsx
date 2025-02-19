import { Link } from "react-router-dom";
import "./Navbar.css";

import { useTheme } from "../../React/Hooks/useContext";
import { useState } from "react";

const SubNavBar = (props) => {
  console.log("changes in props", props);
  return <div>This is sub nav bar rendered</div>;
};

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("/");
  const { toggleTheme, darkMode } = useTheme();
  return (
    <nav className="navbar">
      <div>
        <label>Toggle theme</label>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={darkMode}
          className="inputBox"
        />
      </div>
      <ul>
        <li>
          <Link to="/" onClick={() => setActiveTab("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/lazyload" onClick={() => setActiveTab("/azyload")}>
            Lazy loading
          </Link>
        </li>
        <li>
          <Link to="/form" onClick={() => setActiveTab("/form")}>
            Form
          </Link>
        </li>
        <li>
          <Link to="/react" onClick={() => setActiveTab("/react")}>
            React JS
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setActiveTab("/register")}>
            Registration
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setActiveTab("/login")}>
            Log In
          </Link>
        </li>
      </ul>
      <SubNavBar activeTab={activeTab} />
    </nav>
  );
};

export default Navbar;
