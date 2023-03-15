import { Link } from "react-router-dom"
import "./Navbar.css";

function Navbar() {
    return (
      <header>
        <nav className="navbar">
          <div className="logo">
            <span>YouTube</span>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li> 
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
            </ul>
      </nav>
    </header>
  )
}

export default Navbar;
