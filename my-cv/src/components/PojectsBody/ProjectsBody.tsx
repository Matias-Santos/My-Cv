import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../CvDb";
import "./ProjectsBody.scss";

function ProjectsBody({ title }: { title: string }) {
  return (
    <div className="projects-container">
      <h2>{title}</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, image }) => (
          <ProjectCard title={title} description={description} image={image} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsBody;
