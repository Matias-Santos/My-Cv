import "./Menu.scss";
import { useEffect, useRef } from "react";

function Menu({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current?.classList.add("open");
    } else {
      menuRef.current?.classList.remove("open");
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu(); // Close the menu after scrolling
  };

  return (
    <section className="menu-section" ref={menuRef}>
      <ul className="menu-list">
        <li className="menu-item" onClick={() => scrollToSection("Home")}>
          Home
        </li>
        <li className="menu-item" onClick={() => scrollToSection("About")}>
          About
        </li>
        <li className="menu-item" onClick={() => scrollToSection("TechStack")}>
          Tech Stack
        </li>
        <li className="menu-item" onClick={() => scrollToSection("Experience")}>
          Experience
        </li>
        <li className="menu-item" onClick={() => scrollToSection("Projects")}>
          Projects
        </li>
      </ul>
    </section>
  );
}

export default Menu;
