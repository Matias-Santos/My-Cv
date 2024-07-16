import { useState } from "react";
import "./NavBar.scss";
import menu from "../../assets/options.png";
import Menu from "../Menu/Menu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      <h3 className="logo">Kolicode</h3>
      <img
        src={menu}
        alt="A burger options menu"
        className="nav-menu-icon"
        onClick={toggleMenu}
      />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

export default NavBar;
