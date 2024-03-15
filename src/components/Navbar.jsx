import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../assets/images/logo.png";

function Navbar() {
  //create state
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
 
  //manage the mobile navigation based on screen width, we use useEffect to track this change
  useEffect(() => {
    if (window.innerWidth >= 1150) {
      setShowMenu(true);
    }

    function handleWidth() {
      setShowMenu(false);
      if (window.innerWidth >= 1150) {
        setShowMenu(true);
      }
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  function handleLinkClick() {
    if (width <= 1149) {
      setShowMenu(!showMenu);
    }
  }

  return (
    <header className="header">
      <nav className="container" id="mainNav">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="logo" alt="logo image" />
        </Link>
        {showMenu ? (
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/about"
                  className="nav__link"
                  onClick={handleLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/projects"
                  className="nav__link"
                  onClick={handleLinkClick}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/skills"
                  className="nav__link"
                  onClick={handleLinkClick}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className="nav__link"
                  onClick={handleLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div
              className="nav__close"
              id="nav-close"
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoClose />
            </div>
          </div>
        ) : null}

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setShowMenu(!showMenu)}
        >
          {!showMenu ? <IoMenu /> : <IoClose />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
