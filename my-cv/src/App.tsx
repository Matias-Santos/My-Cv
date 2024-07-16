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
    <main id="Home" className="main-container">
      <NavBar />
      <Title
        title="Full Stack Developer"
        firstPhrase="Creating solutions"
        secondPhrase="Focused in user accesibility "
      />
      <About title="About" description={aboutDescription} />
      <TechStackBody
        technologiesTitle="Tech Stack"
        technologies={technologies}
        learningTitle="Learning"
        learning={learning}
      />
      <ExperiencesBody title="Experience" />
      <ProjectsBody title="Projects" />
      <Footer></Footer>
    </main>
  );
}

export default App;
