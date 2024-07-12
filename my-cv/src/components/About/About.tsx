import Button from "../Button/Button";
import "./About.scss";
function About({ title, description }: { title: string; description: string }) {
  return (
    <section id="About" className="about-container">
      <Button title={title} />
      <p className="description">{description}</p>
    </section>
  );
}

export default About;
