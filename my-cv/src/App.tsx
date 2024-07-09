import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Title/Title";

import profilePic from "../src/assets/profile-pic.png";
import ExperiencesBody from "./components/ExperiencesBody/ExperiencesBody";
import TechStackBody from "./components/TechStackBody/TechStackBody";
import { technologies, learning, aboutDescription } from "./components/CvDb";
import About from "./components/About/About";
import ProjectsBody from "./components/PojectsBody/ProjectsBody";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <main className="main-container">
      <NavBar />
      <img
        src={profilePic}
        alt="My personal profile picture"
        className="profile-pic"
      />
      <Title title="Full Stack Developer" name="Matias Santos" />
      <div className="body-container">
        <div className="left-column">
          <About title="About" description={aboutDescription} />
          <TechStackBody title="Tech Stack" technologies={technologies} />
          <TechStackBody title="Learning" technologies={learning} />
          <Contact title="Contact" />
        </div>
        <div className="right-column">
          <ExperiencesBody title="Experiences" />

          <ProjectsBody title="Projects" />
        </div>
      </div>
    </main>
  );
}

export default App;
