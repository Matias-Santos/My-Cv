import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../CvDb";
import "./ProjectsBody.scss";
import Button from "../Button/Button";

function ProjectsBody({ title }: { title: string }) {
  return (
    <section id="Projects" className="projects-container">
      <Button title={title} />
      <div className="projects-grid">
        {projects.map(({ title, description }) => (
          <ProjectCard title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsBody;
