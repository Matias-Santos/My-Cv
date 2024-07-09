import "./ProjectCard.scss";

function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="project-item" key={title}>
      <h3>{title}</h3>
      <img className="project-image" src={image} alt={`${title} image`} />
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
