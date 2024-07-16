import "./About.scss";
function About({ title, description }: { title: string; description: string }) {
  return (
    <section id="About" className="about-container">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </section>
  );
}

export default About;
