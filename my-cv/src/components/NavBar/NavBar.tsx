import { useState } from "react";
import "./NavBar.scss";

import menu from "../../assets/options.png";
import gmail from "../../assets/gmail-icon.svg";
import github from "../../assets/github-icon.svg";
import linkedIn from "../../assets/linkedin-icon.svg";
import Menu from "../Menu/Menu";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function copy() {
    navigator.clipboard.writeText("santos.matias.a.97@gmail.com");
  }

  return (
    <span className="nav-container">
      <img
        src={menu}
        alt="A burger options menu"
        className="nav-options"
        onClick={toggleMenu}
      />
      <h3 className="nav-title">Matias Santos</h3>
      <div className="nav">
        <img
          src={gmail}
          alt="A Gmail icon"
          className="nav-icons"
          onClick={copy}
        />
        <a
          href="https://github.com/Matias-Santos/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={github} alt="A GitHub icon" className="nav-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/mat%C3%ADas-andr%C3%A9s-s-3383a8196/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedIn} alt="A LinkedIn icon" className="nav-icons" />
        </a>
      </div>
      {isMenuOpen ? <Menu /> : null}
    </span>
  );
}
export default NavBar;
