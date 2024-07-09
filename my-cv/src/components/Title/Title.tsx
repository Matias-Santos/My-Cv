import "./Title.scss";
function Title({ title, name }: { title: string; name: string }) {
  return (
    <section className="title-container">
      <h1 className="title">{title}</h1>
      <h1 className="title">{name}</h1>
    </section>
  );
}

export default Title;
