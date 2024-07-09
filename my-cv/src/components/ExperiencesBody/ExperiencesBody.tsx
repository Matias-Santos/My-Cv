import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { experiences } from "../CvDb";
import "./ExperiencesBody.scss";

function ExperiencesBody({ title }: { title: string }) {
  return (
    <div className="experiences-container">
      <h2>{title}</h2>
      {experiences.map(({ title, date, description }) => (
        <ExperienceCard title={title} date={date} description={description} />
      ))}
    </div>
  );
}

export default ExperiencesBody;
