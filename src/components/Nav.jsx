import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Nav() {
  const [displayLinks, setDisplayLinks] = useState(false)

  return (
    <nav
    className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container-fluid">
     <div>
      <img src={logo} className="logo" alt="logo image" />
     </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={()=> {
          setDisplayLinks(!displayLinks)
          console.log(displayLinks);
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div style={{display: displayLinks ? "unset" : "none"}}className="collapse navbar-collapse  justify-content-end" id="navbarNav">
        <ul className="navbar-nav  js-scroll-trigger">
          <li className="nav-item">
          <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Skills
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Nav