import "./ExperienceCard.scss";
function ExperienceCard({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div className="experience-card-container">
      <h3 className="card-title">{title}</h3>
      <p className="card-date">{date}</p>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default ExperienceCard;
