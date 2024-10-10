import "./style-navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__mobile">
        <div>
          <Link to="/">
            <img
              src="logoJob.svg"
              className="navbar__logo-mobile"
              alt="logo"
            ></img>
          </Link>
        </div>
        <div className="navbar__toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar__content ${isOpen ? "active" : ""}`}>
        <Link className="navbar__content-link" to="about" onClick={closeMenu}>
          About
        </Link>
        <Link className="navbar__content-link" to="404" onClick={closeMenu}>
          Financial Highlights
        </Link>
        <Link
          className="navbar__content-link navbar__content-link--img"
          to="/"
          onClick={closeMenu}
        >
          <img className="logo" src="logoJob.svg" alt="logo"></img>
        </Link>
        <div className="dropdown">
          <div className="dropdown__btn">
            <Link className="dropdown__toggle navbar__content-link">
              Letter to Shareowners
            </Link>
            <img src="arrow.svg" className="dropdown__arrow" alt="arrow"></img>
          </div>

          <ul className="dropdown__menu">
            <li>
              <Link to="404" onClick={closeMenu}>
                CEO's Letter
              </Link>
            </li>
            <li>
              <Link to="404" onClick={closeMenu}>
                CFO's Letter
              </Link>
            </li>
            <li>
              <Link to="404" onClick={closeMenu}>
                Board's Message
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar__content-link" to="404" onClick={closeMenu}>
          Downloads
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
