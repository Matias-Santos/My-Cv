import "./TechStack.scss";
import { technologies } from "../CvDb";

export function TechContainer({ title }: { title: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="tech-grid">
        {technologies.map(({ name, icon }) => (
          <div className="tech-item" key={name}>
            <img src={icon} alt={`${name} icon`} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
