import "./Footer.scss";

import gmail from "../../assets/gmail-icon.svg";
import github from "../../assets/github-icon.svg";
import linkedIn from "../../assets/linkedin-icon.svg";

function Footer() {
  function copy() {
    navigator.clipboard.writeText("santos.matias.a.97@gmail.com");
  }

  return (
    <section id="Contact" className="footer-section">
      <div className="contact">
        <h3>Get to know me</h3>
        <div className="icons-container">
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
      </div>
      <div className="footer-info">
        <p>This website was made using React, SCSS and Vercel</p>
        <a
          href="https://github.com/Matias-Santos/My-Cv"
          target="_blank"
          rel="noopener noreferrer">
          Learn how
        </a>
        <p>Contact me at santos.matias.a.97@gmail.com</p>
      </div>
    </section>
  );
}

export default Footer;
