import React from "react";
import "./Menu.scss";

function Menu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="menu-section">
      <ul className="menu-list">
        <li className="menu-item" onClick={() => scrollToSection("Home")}>
          Home
        </li>
        <li className="menu-item" onClick={() => scrollToSection("About")}>
          About
        </li>
        <li className="menu-item" onClick={() => scrollToSection("Experience")}>
          Experience
        </li>
        <li className="menu-item" onClick={() => scrollToSection("Projects")}>
          Projects
        </li>
        <li className="menu-item" onClick={() => scrollToSection("TechStack")}>
          Tech Stack
        </li>
      </ul>
    </section>
  );
}

export default Menu;
