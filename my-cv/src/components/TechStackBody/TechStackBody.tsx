import { TechnologyT } from "../../types/Types.type";
import "./TechStackBody..scss";

function TechStackBody({
  title,
  technologies,
}: {
  title: string;
  technologies: TechnologyT[];
}) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="tech-grid">
        {technologies.map(({ name, icon }) => (
          <div className="tech-item" key={name}>
            <img src={icon} alt={`${name} icon`} className="tech-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackBody;
