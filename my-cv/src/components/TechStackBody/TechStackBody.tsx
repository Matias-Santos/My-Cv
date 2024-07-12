import { TechnologyT } from "../../types/Types.type";
import Button from "../Button/Button";
import "./TechStackBody..scss";

function TechStackBody({
  title,
  technologies,
}: {
  title: string;
  technologies: TechnologyT[];
}) {
  return (
    <section id="TechStack" className="tech-container">
      <Button title={title} />
      <div className="tech-grid">
        {technologies.map(({ name, icon }) => (
          <img src={icon} alt={`${name} icon`} className="tech-icon" />
        ))}
      </div>
    </section>
  );
}

export default TechStackBody;
