import "./NavBar.scss";

import chevron from "../../assets/chevron-right-icon.svg";
function NavBar() {
  return (
    <span className="nav-container">
      <h2 className="nav-brand-name">Kolicode</h2>
      <div className="nav-buttons">
        <h3 className="nav-button">Home</h3>
        <h3 className="nav-button">Experience</h3>
        <h3 className="nav-button">Projects</h3>
        <h3 className="nav-button">Contact</h3>
        <div className="language-div">
          <h3 className="nav-button">English</h3>
          <img
            src={chevron}
            alt="A right side chevron"
            className="nav-chevron"
          />
        </div>
      </div>
    </span>
  );
}

export default NavBar;
