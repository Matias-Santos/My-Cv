import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Title/Title";

// import profilePic from "../src/assets/profile-pic.png";
import ExperiencesBody from "./components/ExperiencesBody/ExperiencesBody";
import TechStackBody from "./components/TechStackBody/TechStackBody";
import { technologies, learning, aboutDescription } from "./components/CvDb";
import About from "./components/About/About";
import ProjectsBody from "./components/ProjectsBody/ProjectsBody";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <main className="main-container">
      <NavBar />
      <Title
        title="Full Stack Developer"
        subtitle="Creating solutions since 2021 focused in user accesibility "
      />
      <div className="body-container">
        <About title="About" description={aboutDescription} />
        <ExperiencesBody title="Experience" />
        <ProjectsBody title="Projects" />
        <TechStackBody title="Tech Stack" technologies={technologies} />
        <TechStackBody title="Learning" technologies={learning} />
        <Footer></Footer>
      </div>
    </main>
  );
}

export default App;
