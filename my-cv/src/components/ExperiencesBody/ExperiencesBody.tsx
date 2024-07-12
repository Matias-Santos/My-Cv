import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { experiences } from "../CvDb";
import "./ExperiencesBody.scss";
import Button from "../Button/Button";

function ExperiencesBody({ title }: { title: string }) {
  return (
    <section id="Experience" className="experiences-section">
      <Button title={title} />
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
