import "./ProjectCard.scss";

function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="project-card-container">
      <h3 className="card-title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
}

export default ProjectCard;
