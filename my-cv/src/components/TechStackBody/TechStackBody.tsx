import { TechnologyT } from "../../types/Types.type";
import "./TechStackBody..scss";

function TechStackBody({
  technologiesTitle,
  technologies,
  learningTitle,
  learning,
}: {
  technologiesTitle: string;
  technologies: TechnologyT[];
  learningTitle: string;
  learning: TechnologyT[];
}) {
  return (
    <section id="TechStack" className="technologies-section">
      <div className="technologies-container">
        <div>
          <h2 className="title">{technologiesTitle}</h2>
          <div className="tech-grid">
            {technologies.map(({ name, icon }) => (
              <img
                key={name}
                src={icon}
                alt={`${name} icon`}
                className="tech-icon"
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="title">{learningTitle}</h2>
          <div className="tech-grid">
            {learning.map(({ name, icon }) => (
              <img
                key={name}
                src={icon}
                alt={`${name} icon`}
                className="tech-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackBody;
