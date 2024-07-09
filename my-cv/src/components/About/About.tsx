import "./About.scss";
function About({ title, description }: { title: string; description: string }) {
  return (
    <div className="about-container">
      <h2>{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
}

export default About;
