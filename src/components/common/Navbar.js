import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header>
        <article>
          <h1>
            <Link to="/">
              Youtube <span> Clone Project</span>
            </Link>
          </h1>

        </article>
        <ul> 
            <Link to="/about">
              <span> About</span>
            </Link>
        </ul>
      </header>
    )
}

export default Navbar;
