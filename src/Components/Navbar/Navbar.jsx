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
            <img src="logoJob.svg" className="navbar__logo-mobile"></img>
          </Link>
        </div>
        <div className="navbar__toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar__content ${isOpen ? "active" : ""}`}>
        <a className="navbar__content-link" href="#" onClick={closeMenu}>
          2020 Annual Report
        </a>
        <a className="navbar__content-link" href="#" onClick={closeMenu}>
          Financial Highlights
        </a>
        <Link
          className="navbar__content-link navbar__content-link--img"
          to="/"
          onClick={closeMenu}
        >
          <img className="logo" src="logoJob.svg"></img>
        </Link>
        <div className="dropdown">
          <div className="dropdown__btn">
            <a className="dropdown__toggle navbar__content-link">
              Letter to Shareowners
            </a>
            <img src="arrow.svg" className="dropdown__arrow"></img>
          </div>

          <ul className="dropdown__menu">
            <li>
              <a href="#" onClick={closeMenu}>
                CEO's Letter
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                CFO's Letter
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Board's Message
              </a>
            </li>
          </ul>
        </div>
        <a className="navbar__content-link" href="#" onClick={closeMenu}>
          Downloads
        </a>
      </div>
    </div>
  );
}

export default Navbar;
