import "./About.scss";
function About({
  title,
  description,
}: {
  title: string;
  description: string[];
}) {
  return (
    <section id="About" className="about-container">
      <h2 className="title">{title}</h2>
      {description.length > 1 ? (
        <div>
          <p className="description">{description[0]}</p>
          <p className="description">{description[1]}</p>
        </div>
      ) : null}
    </section>
  );
}

export default About;
