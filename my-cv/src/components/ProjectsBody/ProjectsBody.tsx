import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../CvDb";
import "./ProjectsBody.scss";

function ProjectsBody({ title }: { title: string }) {
  return (
    <section id="Projects" className="projects-section">
      <h2 className="title">{title}</h2>
      <div className="projects-container">
        {projects.map(({ title, description }) => (
          <ProjectCard title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsBody;
