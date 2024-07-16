import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { experiences } from "../CvDb";
import "./ExperiencesBody.scss";

function ExperiencesBody({ title }: { title: string }) {
  return (
    <section id="Experience" className="experiences-section">
      <h2 className="title">{title}</h2>
      <div className="experiences-container">
        {experiences.map(({ title, date, description }) => (
          <ExperienceCard
            key={title}
            title={title}
            date={date}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperiencesBody;
