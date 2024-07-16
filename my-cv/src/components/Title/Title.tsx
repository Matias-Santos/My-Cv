import "./Title.scss";
function Title({
  title,
  firstPhrase,
  secondPhrase,
}: {
  title: string;
  firstPhrase: string;
  secondPhrase: string;
}) {
  return (
    <section className="title-container">
      <h2 className="name">Matias Santos</h2>
      <h1 className="title">{title}</h1>
      <h1 className="first-phrase">{firstPhrase}</h1>
      <h1 className="second-phrase">{secondPhrase}</h1>
    </section>
  );
}

export default Title;
