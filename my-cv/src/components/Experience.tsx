function Experience({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
}

export default Experience;
