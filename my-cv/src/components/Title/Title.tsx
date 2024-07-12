import "./Title.scss";
function Title({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="title-container">
      <h1 className="title">{title}</h1>
      <h1 className="subtitle">{subtitle}</h1>
    </section>
  );
}

export default Title;
